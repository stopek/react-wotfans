import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AuthWot } from "api/actions/auth_wot";
import { Wot } from "api/actions/wot";
import instance from "api/service";
import { removeToken } from "helpers/cookies";
import { logOutUser } from "helpers/user";

const initialState = {
  loading: false,
  error: false,
  not_found: false,

  search_player: {},
  search_clan: {},
  user_tanks: {},
  clans_list: [],
  players_list: [],
  user_tanks_achievements: [],
  exp_wn8_list: [],
  tanks: [],
  search_tank: {},

  get_user: {}
};

const ignoreChangingAction = [
  'wot/get_user/fulfilled',
  'wot/get_user/pending'
];

function isPendingAction(action: AnyAction) {
  if (ignoreChangingAction.includes(action?.type)) return false;

  return action.type.endsWith('pending');
}

function isUnauthorizedAction(action: AnyAction) {
  return action.type.endsWith('rejected') && action?.payload?.status === 401;
}

function isRejectedErrorAction(action: AnyAction) {
  return action.type.endsWith('rejected') && action?.payload?.status !== 404;
}

function isRejectedNotFoundAction(action: AnyAction) {
  return action.type.endsWith('rejected') && action?.payload?.status === 404;
}

function isFulfilledAction(action: AnyAction) {
  if (ignoreChangingAction.includes(action?.type)) return false;

  return action.type.endsWith('fulfilled');
}

export const handleRejectValues = (name, action) => createAsyncThunk(
  name,
  async (data, { rejectWithValue }) => {
    try {
      return await action(data);
    } catch (error) {
      const response = error.response;

      return rejectWithValue({
        status: response.status,
        statusText: response.statusText
      })
    }
  }
);

export const searchPlayer = handleRejectValues('wot/search_player', Wot.search_player);
export const searchPlayerById = handleRejectValues('wot/search_player_by_id', Wot.search_player_by_id);
export const loadPlayers = handleRejectValues('wot/load_players', Wot.load_players);
export const searchClan = handleRejectValues('wot/search_clan', Wot.search_clan);
export const searchTank = handleRejectValues('wot/search_tank', Wot.search_tank);
export const userTanks = handleRejectValues('wot/user_tanks', Wot.user_tanks);
export const userTanksAchievements = handleRejectValues('wot/user_tanks_achievements', Wot.user_tanks_achievements);
export const clansList = handleRejectValues('wot/clans_list', Wot.clans);
export const expWn8List = handleRejectValues('wot/wn8', Wot.exp_wn8);
export const loadTanks = handleRejectValues('wot/tanks', Wot.tanks);

export const getUser = handleRejectValues('wot/get_user', AuthWot.get_user);

export const wotSlice = createSlice({
  name: "wot",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearSearchPlayer: (state) => {
      state.search_player = {};
    }
  },

  extraReducers: builder => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.get_user = action.payload;
      })

      /********************************************************
       */
      .addCase(searchTank.pending, (state) => {
        state.search_tank = {};
      })
      .addCase(searchTank.fulfilled, (state, action) => {
        state.search_tank = action.payload;
      })

      .addCase(loadTanks.pending, (state) => {
        state.tanks = [];
      })
      .addCase(loadTanks.fulfilled, (state, action) => {
        state.tanks = action.payload;
      })

      .addCase(searchPlayer.pending, (state) => {
        state.search_player = {};
        state.user_tanks = {};
      })
      .addCase(searchPlayer.fulfilled, (state, action) => {
        state.search_player = action.payload;
      })

      .addCase(expWn8List.pending, (state) => {
        state.exp_wn8_list = [];
      })
      .addCase(expWn8List.fulfilled, (state, action) => {
        state.exp_wn8_list = action.payload;
      })

      .addCase(loadPlayers.pending, (state) => {
        state.players_list = [];
      })
      .addCase(loadPlayers.fulfilled, (state, action) => {
        state.players_list = action.payload;
      })

      .addCase(searchPlayerById.pending, (state) => {
        state.search_player = {};
        state.user_tanks = {};
      })
      .addCase(searchPlayerById.fulfilled, (state, action) => {
        state.search_player = action.payload;
      })

      .addCase(searchClan.pending, (state) => {
        state.search_clan = {};
        state.players_list = [];
      })
      .addCase(searchClan.fulfilled, (state, action) => {
        state.search_clan = action.payload;
      })

      .addCase(userTanks.pending, (state) => {
        state.user_tanks = {};
      })
      .addCase(userTanks.fulfilled, (state, action) => {
        state.user_tanks = action.payload;
      })

      .addCase(userTanksAchievements.pending, (state) => {
        state.user_tanks_achievements = {};
      })
      .addCase(userTanksAchievements.fulfilled, (state, action) => {
        state.user_tanks_achievements = action.payload;
      })

      .addCase(clansList.pending, (state) => {
        state.clans_list = {};
      })
      .addCase(clansList.fulfilled, (state, action) => {
        state.clans_list = action.payload;
      })

      .addMatcher(
        isRejectedErrorAction,
        (state, action) => {
          state.error = true;
          state.loading = false;
          state.not_found = false;
        }
      )
      .addMatcher(
        isPendingAction,
        (state, action) => {
          state.loading = true;
          state.not_found = false;
          state.error = false;
        }
      )
      .addMatcher(
        isFulfilledAction,
        (state, action) => {
          state.loading = false;
          state.not_found = false;
          state.error = false;
        }
      )
      .addMatcher(
        isRejectedNotFoundAction,
        (state, action) => {
          state.loading = false;
          state.not_found = true;
          state.error = false;
        }
      )
      .addMatcher(
        isUnauthorizedAction,
        (state, action) => {
          state.loading = false;
          state.not_found = false;
          state.error = false;

          logOutUser();
        }
      )
    ;
  },
});

export const { setError, clearSearchPlayer } = wotSlice.actions;

export const selectSearchPlayer = (state) => state.wot.search_player;
export const selectSearchClan = (state) => state.wot.search_clan;
export const selectSearchTank = (state) => state.wot.search_tank;
export const selectUserTanks = (state) => state.wot.user_tanks;
export const selectUserTanksAchievements = (state) => state.wot.user_tanks_achievements;
export const selectClansList = (state) => state.wot.clans_list;
export const selectTanks = (state) => state.wot.tanks;
export const selectUser = (state) => state.wot.get_user;
export const selectLoadPlayers = (state) => state.wot.players_list;
export const selectExpWn8List = (state) => state.wot.exp_wn8_list;
export const selectLoading = (state) => state.wot.loading;
export const selectError = (state) => state.wot.error;
export const selectNotFound = (state) => state.wot.not_found;

export default wotSlice.reducer;