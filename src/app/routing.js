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
import AccountContainer from "containers/account/AccountContainer";
import ClanProfileContainer from "containers/clan/ClanProfileContainer";
import ClansContainer from "containers/clan/ClansListContainer";
import ExpMoeContainer from "containers/tank/ExpMoeContainer";
import IndexContainer from "containers/IndexContainer";
import LoginContainer from "containers/auth/LoginContainer";
import MapRotatorContainer from "containers/map/MapRotatorContainer";
import MapsListContainer from "containers/map/MapsListContainer";
import PlayerProfileContainer from "containers/player/PlayerProfileContainer";
import SearchPlayerContainer from "containers/player/SearchPlayerContainer";
import TankContainer from "containers/tank/TankContainer";
import TanksListContainer from "containers/tank/TanksListContainer";
import UpgradeContainer from "containers/system/UpgradeContainer";

const routing = [
  {
    header: "homepage",
    route: MAIN_URL,
    Component: IndexContainer,
    params: {
      seo: {
        title: 'seo.homepage',
      }
    }
  },
  {
    route: UPGRADE_URL,
    Component: UpgradeContainer,
  },
  // {
  //   header: "upload",
  //   route: UPLOAD_URL,
  //   Component: UploadContainer,
  // },
  {
    header: "clans.list",
    route: CLANS_URL,
    Component: ClansContainer,
    params: {
      seo: {
        title: 'seo.clans.list',
      }
    }
  },
  {
    header: "clan.profile",
    route: CLAN_URL,
    Component: ClanProfileContainer,
    params: {
      seo: {
        title: 'seo.clan.profile',
      }
    }
  },
  {
    header: "tank.profile",
    route: TANK_URL,
    Component: TankContainer,
    params: {
      seo: {
        title: 'seo.tank.profile',
      }
    }
  },
  {
    header: "search.player",
    route: SEARCH_URL,
    Component: SearchPlayerContainer,
    params: {
      seo: {
        title: 'seo.search.player',
      }
    }
  },
  {
    header: "player.profile",
    route: PLAYER_URL,
    Component: PlayerProfileContainer,
    params: {
      seo: {
        title: 'seo.player.profile',
      }
    }
  },
  {
    header: "exp.wn8",
    route: EXP_WN8_URL,
    Component: ExpMoeContainer,
    params: {
      seo: {
        title: 'seo.exp.wn8',
      }
    }
  },
  {
    header: "tanks.list",
    route: TANKS_URL,
    Component: TanksListContainer,
    params: {
      seo: {
        title: 'seo.tanks.list',
      }
    }
  },
  {
    header: "login.view",
    route: LOGIN_URL,
    Component: LoginContainer,
    params: {
      seo: {
        title: 'seo.login.view',
      }
    }
  },
  {
    header: "menu.your.account",
    route: ACCOUNT_URL,
    Component: AccountContainer,
    params: {
      seo: {
        title: 'seo.your.account',
      }
    }
  },
  {
    header: "maps.list",
    route: MAPS_URL,
    Component: MapsListContainer,
    params: {
      seo: {
        title: 'seo.maps',
      }
    }
  },
  {
    header: "map.rotator",
    route: MAP_ROTATOR_URL,
    Component: MapRotatorContainer,
    params: {
      seo: {
        title: 'seo.map.rotator',
      }
    }
  },
];

export default routing;
