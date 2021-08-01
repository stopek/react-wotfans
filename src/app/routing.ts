import {
  ACCOUNT_URL,
  CLAN_URL,
  CLANS_URL,
  CONTACT_URL,
  EXP_WN8_URL,
  GAMES_FORM,
  GAMES_URL,
  LOGIN_URL,
  MAIN_URL,
  MAPS_URL,
  MOE_URL,
  PLAYER_URL,
  SEARCH_URL,
  SESSIONS_URL,
  TANK_URL,
  TANKS_URL,
  UPGRADE_URL,
  WN8_CALCULATOR_TANK_URL,
  WN8_CALCULATOR_URL
} from "app/routes";
import AsyncLoader from "components/AsyncLoader";
import Loadable, { OptionsWithoutRender } from 'react-loadable';

interface IProps {}

const load = (component: string) => {
  const loadableOptions: OptionsWithoutRender<IProps> = {
    loader: () => import(`containers/${component}`),
    loading: AsyncLoader,
  };

  return Loadable(loadableOptions);
}

const routing = [
  {
    header: "homepage",
    route: MAIN_URL,
    Component: load('IndexContainer'),
    params: {
      seo: {
        title: 'seo.homepage',
        description: 'seo.homepage.description',
      }
    }
  },
  {
    header: "login.view",
    route: LOGIN_URL,
    Component: load('auth/LoginContainer'),
    params: {
      seo: {
        title: 'seo.login.view',
        description: 'seo.login.view.description',
      }
    }
  },
  {
    route: UPGRADE_URL,
    Component: load('system/UpgradeContainer'),
  },
  {
    authorized: true,
    route: SESSIONS_URL,
    Component: load('account/SessionsContainer')
  },
  {
    authorized: true,
    route: GAMES_URL,
    Component: load('account/games/GamesContainer')
  },
  {
    authorized: true,
    route: GAMES_FORM,
    Component: load('account/games/GamesFormContainer')
  },
  {
    authorized: true,
    route: [WN8_CALCULATOR_URL, WN8_CALCULATOR_TANK_URL],
    Component: load('account/WN8CalculatorContainer'),
    params: {
      seo: {
        title: 'seo.wn8.calculator',
        description: 'seo.wn8.calculator.description',
      }
    }
  },
  {
    route: CONTACT_URL,
    Component: load('ContactContainer'),
    params: {
      seo: {
        title: 'seo.contact',
        description: 'seo.contact.description',
      }
    }
  },
  // {
  //   header: "UploadContainer.tsx",
  //   route: UPLOAD_URL,
  //   Component: UploadContainer.tsx,
  // },
  {
    header: "clans.list",
    route: CLANS_URL,
    Component: load('clan/ClansListContainer'),
    params: {
      seo: {
        title: 'seo.clans.list',
        description: 'seo.clans.list.description',
      }
    }
  },
  {
    header: "clan.profile",
    route: CLAN_URL,
    Component: load('clan/ClanProfileContainer'),
    params: {
      seo: {
        title: 'seo.clan.profile',
        description: 'seo.clan.profile.description',
      }
    }
  },
  {
    header: "tank.profile",
    route: TANK_URL,
    Component: load('tank/TankContainer'),
    params: {
      seo: {
        title: 'seo.tank.profile',
        description: 'seo.tank.profile.description',
      }
    }
  },
  {
    header: "search.player",
    route: SEARCH_URL,
    Component: load('player/SearchPlayerContainer'),
    params: {
      seo: {
        title: 'seo.search.player',
        description: 'seo.search.player.description',
      }
    }
  },
  {
    header: "player.profile",
    route: PLAYER_URL,
    Component: load('player/PlayerProfileContainer'),
    params: {
      seo: {
        title: 'seo.player.profile',
        description: 'seo.player.profile.description',
      }
    }
  },
  {
    header: "exp.wn8",
    route: EXP_WN8_URL,
    Component: load('tank/ExpectedContainer'),
    params: {
      seo: {
        title: 'seo.exp.wn8',
        description: 'seo.exp.wn8.description',
      }
    }
  },
  {
    header: "moe",
    route: MOE_URL,
    Component: load('tank/MoeContainer'),
    params: {
      seo: {
        title: 'seo.moe',
        description: 'seo.moe.description',
      }
    }
  },
  {
    header: "tanks.list",
    route: TANKS_URL,
    Component: load('tank/TanksListContainer'),
    params: {
      seo: {
        title: 'seo.tanks.list',
        description: 'seo.tanks.list.description',
      }
    }
  },
  {
    authorized: true,
    header: "menu.your.account",
    route: ACCOUNT_URL,
    Component: load('account/AccountContainer'),
    params: {
      seo: {
        title: 'seo.your.account',
        description: 'seo.your.account.description',
      }
    }
  },
  {
    header: "maps.list",
    route: MAPS_URL,
    Component: load('map/MapsListContainer'),
    params: {
      seo: {
        title: 'seo.maps',
        description: 'seo.maps.description',
      }
    }
  },
];

export default routing;
