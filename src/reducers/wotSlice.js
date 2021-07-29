import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AuthWot } from "api/actions/auth_wot";
import { Wot } from "api/actions/wot";
import { logOutUser } from "helpers/user";

const initialState = {
  loading: false,
  error: false,
  not_found: false,
  crash: false,
  unauthorized: false,

  search_player: {},
  search_players: {},
  search_clan: {},
  clans_list: [],
  players_list: [],
  maps_list: [],
  map_generator: [],
  user_tanks_achievements: [],
  exp_wn8_list: [],
  moe_list: [],
  tanks: [],
  search_tank: {},

  get_user: {},
  user_tanks: {},

  games: [],
  game: {}
};

const ignoring = [
  'wot/get_user/fulfilled',
  'wot/get_user/pending',
  'wot/get_user/rejected'
];

function isPendingAction(action: AnyAction) {
  if (ignoring.includes(action?.type)) return false;
  return action.type.endsWith('pending');
}

function isUnauthorizedAction(action: AnyAction) {
  return action.type.endsWith('rejected') && action?.payload?.status === 401;
}

function isRejectedErrorAction(action: AnyAction) {
  if (ignoring.includes(action?.type)) return false;
  return action.type.endsWith('rejected') && false === [404, 500].includes(action?.payload?.status);
}

function isRejectedNotFoundAction(action: AnyAction) {
  return action.type.endsWith('rejected') && action?.payload?.status === 404;
}

function isCrashedAction(action: AnyAction) {
  if (ignoring.includes(action?.type)) return false;
  return action.type.endsWith('rejected') && action?.payload?.status === 500;
}

function isFulfilledAction(action: AnyAction) {
  if (ignoring.includes(action?.type)) return false;
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
export const loadMaps = handleRejectValues('wot/load_maps', Wot.load_maps);
export const loadMapGenerator = handleRejectValues('wot/map_generator', Wot.map_generator);
export const searchClan = handleRejectValues('wot/search_clan', Wot.search_clan);
export const searchTank = handleRejectValues('wot/search_tank', Wot.search_tank);
export const userTanksAchievements = handleRejectValues('wot/user_tanks_achievements', Wot.user_tanks_achievements);
export const clansList = handleRejectValues('wot/clans_list', Wot.clans);
export const expWn8List = handleRejectValues('wot/wn8', Wot.exp_wn8);
export const moeList = handleRejectValues('wot/moe', Wot.moe);
export const loadTanks = handleRejectValues('wot/tanks', Wot.tanks);
export const getUser = handleRejectValues('wot/get_user', AuthWot.get_user);
export const fetchUserTanks = handleRejectValues('wot/user_tanks', AuthWot.user_tanks);

export const wotSlice = createSlice({
  name: "wot",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearSearchPlayer: (state) => {
      state.search_player = {};
    },
    clearSearchPlayers: (state) => {
      state.search_players = {};
    },
    clearPlayerTanks: (state) => {
      state.user_tanks = {};
    },
    setGameParam: (state, action) => {
      state.game = Object.assign({}, state.game, action.payload);
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.get_user = action.payload;
      })

      /********************************************************
       */
      .addCase(loadMaps.pending, (state) => {
        state.maps_list = [];
      })
      .addCase(loadMaps.fulfilled, (state, action) => {
        state.maps_list = action.payload;
      })

      .addCase(loadMapGenerator.pending, (state) => {
        state.map_generator = [];
      })
      .addCase(loadMapGenerator.fulfilled, (state, action) => {
        state.map_generator = action.payload;
      })

      .addCase(searchTank.pending, (state) => {
        state.search_tank = {};
      })
      .addCase(searchTank.fulfilled, (state, action) => {
        state.search_tank = action.payload;
      })

      .addCase(fetchUserTanks.pending, (state) => {
        state.user_tanks = {};
      })
      .addCase(fetchUserTanks.fulfilled, (state, action) => {
        state.user_tanks = action.payload;
      })

      .addCase(loadTanks.pending, (state) => {
        state.tanks = [];
      })
      .addCase(loadTanks.fulfilled, (state, action) => {
        state.tanks = action.payload;
      })

      .addCase(searchPlayer.pending, (state) => {
        state.search_players = {};
        state.user_tanks = {};
      })
      .addCase(searchPlayer.fulfilled, (state, action) => {
        state.search_players = action.payload;
      })

      .addCase(expWn8List.pending, (state) => {
        state.exp_wn8_list = [];
      })
      .addCase(expWn8List.fulfilled, (state, action) => {
        state.exp_wn8_list = action.payload;
      })

      .addCase(moeList.pending, (state) => {
        state.moe_list = [];
      })
      .addCase(moeList.fulfilled, (state, action) => {
        state.moe_list = action.payload;
      })

      .addCase(searchPlayerById.pending, (state, action) => {

        state.search_player = {};
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

      .addCase(userTanksAchievements.pending, (state) => {
        state.user_tanks_achievements = {};
      })
      .addCase(userTanksAchievements.fulfilled, (state, action) => {
        state.user_tanks_achievements = action.payload;
      })

      .addCase(clansList.fulfilled, (state, action) => {
        state.clans_list = action.payload;
      })

      .addMatcher(
        isRejectedErrorAction,
        (state) => {
          state.error = true;
          state.loading = false;
          state.not_found = false;
          state.crash = false;
          state.unauthorized = false;
        }
      )
      .addMatcher(
        isPendingAction,
        (state) => {
          state.loading = true;
          state.not_found = false;
          state.error = false;
          state.crash = false;
          state.unauthorized = false;
        }
      )
      .addMatcher(
        isFulfilledAction,
        (state) => {
          state.loading = false;
          state.not_found = false;
          state.error = false;
          state.crash = false;
          state.unauthorized = false;
        }
      )
      .addMatcher(
        isUnauthorizedAction,
        (state) => {
          state.loading = false;
          state.not_found = false;
          state.error = false;
          state.crash = false;
          state.unauthorized = true;

          logOutUser();
        }
      )
      .addMatcher(
        isRejectedNotFoundAction,
        (state) => {
          state.loading = false;
          state.not_found = true;
          state.error = false;
          state.crash = false;
          state.unauthorized = false;
        }
      ).addMatcher(
      isCrashedAction,
      (state) => {
        state.loading = false;
        state.not_found = false;
        state.error = false;
        state.crash = true;
        state.unauthorized = false;
      }
    )
    ;
  },
});

export const { setError, clearSearchPlayer, clearSearchPlayers, clearPlayerTanks, setGameParam } = wotSlice.actions;

export const selectSearchPlayer = (state) => state.wot.search_player;
export const selectSearchPlayers = (state) => state.wot.search_players;
export const selectSearchClan = (state) => state.wot.search_clan;
export const selectSearchTank = (state) => state.wot.search_tank;
export const selectUserTanks = (state) => state.wot.user_tanks;
export const selectUserTanksAchievements = (state) => state.wot.user_tanks_achievements;
export const selectClansList = (state) => state.wot.clans_list;
export const selectTanks = (state) => state.wot.tanks;
export const selectUser = (state) => state.wot.get_user;
export const selectLoadMaps = (state) => state.wot.maps_list;
export const selectMapGenerator = (state) => state.wot.map_generator;
export const selectExpWn8List = (state) => state.wot.exp_wn8_list;
export const selectMoeList = (state) => state.wot.moe_list;
export const selectGameItem = (state) => state.wot.game || {};

export const selectLoading = (state) => state.wot.loading;
export const selectError = (state) => state.wot.error;
export const selectNotFound = (state) => state.wot.not_found;
export const selectCrash = (state) => state.wot.crash;
export const selectUnauthorized = (state) => state.wot.unauthorized;

export default wotSlice.reducer;
