import loadable from "@loadable/component";
import {
  ACCOUNT_URL,
  CLAN_URL,
  CLANS_URL,
  EXP_WN8_URL,
  LOGIN_URL,
  MAIN_URL,
  MAP_ROTATOR_URL,
  MAPS_URL,
  PLAYER_URL,
  SEARCH_URL,
  TANK_URL,
  TANKS_URL,
  UPGRADE_URL
} from "app/routes";

const load = (component) => {
  return loadable(() => import(`containers/${component}`));
}

const routing = [
  {
    header: "homepage",
    route: MAIN_URL,
    Component: load('IndexContainer'),
    params: {
      seo: {
        title: 'seo.homepage',
      }
    }
  },
  {
    route: UPGRADE_URL,
    Component: load('system/UpgradeContainer'),
  },
  // {
  //   header: "upload",
  //   route: UPLOAD_URL,
  //   Component: UploadContainer,
  // },
  {
    header: "clans.list",
    route: CLANS_URL,
    Component: load('clan/ClansListContainer'),
    params: {
      seo: {
        title: 'seo.clans.list',
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
      }
    }
  },
  {
    header: "exp.wn8",
    route: EXP_WN8_URL,
    Component: load('tank/ExpMoeContainer'),
    params: {
      seo: {
        title: 'seo.exp.wn8',
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
      }
    }
  },
  {
    header: "menu.your.account",
    route: ACCOUNT_URL,
    Component: load('account/AccountContainer'),
    params: {
      seo: {
        title: 'seo.your.account',
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
      }
    }
  },
  {
    header: "map.rotator",
    route: MAP_ROTATOR_URL,
    Component: load('map/MapRotatorContainer'),
    params: {
      seo: {
        title: 'seo.map.rotator',
      }
    }
  },
];

export default routing;
