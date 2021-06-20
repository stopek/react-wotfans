import {
  ACCOUNT_URL,
  CLAN_URL,
  CLANS_URL,
  EXP_WN8_URL,
  LOGIN_URL,
  MAIN_URL, MAPS_URL,
  PLAYER_URL,
  SEARCH_URL,
  TANK_URL,
  TANKS_URL
} from "app/routes";
import AccountContainer from "containers/AccountContainer";
import ClanContainer from "containers/ClanContainer";
import ClansContainer from "containers/ClansContainer";
import ExpWn8Container from "containers/ExpWn8Container";
import IndexContainer from "containers/IndexContainer";
import LoginContainer from "containers/LoginContainer";
import MapsContainer from "containers/MapsContainer";
import PlayerContainer from "containers/PlayerContainer";
import SearchPlayerContainer from "containers/SearchPlayerContainer";
import TankContainer from "containers/TankContainer";
import TanksContainer from "containers/TanksContainer";

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
    Component: ClanContainer,
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
    Component: PlayerContainer,
    params: {
      seo: {
        title: 'seo.player.profile',
      }
    }
  },
  {
    header: "exp.wn8",
    route: EXP_WN8_URL,
    Component: ExpWn8Container,
    params: {
      seo: {
        title: 'seo.exp.wn8',
      }
    }
  },
  {
    header: "tanks.list",
    route: TANKS_URL,
    Component: TanksContainer,
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
    Component: MapsContainer,
    params: {
      seo: {
        title: 'seo.maps',
      }
    }
  },
];

export default routing;
