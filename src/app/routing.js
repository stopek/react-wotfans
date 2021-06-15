import {
  ACCOUNT_URL,
  CLAN_URL,
  CLANS_URL,
  EXP_WN8_URL,
  LOGIN_URL,
  MAIN_URL,
  PLAYER_URL,
  SEARCH_URL,
  TANKS_URL
} from "app/routes";
import AccountContainer from "containers/AccountContainer";
import ClanContainer from "containers/ClanContainer";
import ClansContainer from "containers/ClansContainer";
import ExpWn8Container from "containers/ExpWn8Container";
import IndexContainer from "containers/IndexContainer";
import LoginContainer from "containers/LoginContainer";
import PlayerContainer from "containers/PlayerContainer";
import SearchPlayerContainer from "containers/SearchPlayerContainer";
import TanksContainer from "containers/TanksContainer";

const routing = [
  {
    header: "Strona główna",
    route: MAIN_URL,
    Component: IndexContainer,
    params: {
      seo: {
        title: 'WOT Console - API Testing',
      }
    }
  },
  {
    header: "Lista klanów",
    route: CLANS_URL,
    Component: ClansContainer,
  },
  {
    header: "Szczegóły klanu",
    route: CLAN_URL,
    Component: ClanContainer
  },
  {
    header: "Szukaj gracza",
    route: SEARCH_URL,
    Component: SearchPlayerContainer
  },
  {
    header: "Karta gracza",
    route: PLAYER_URL,
    Component: PlayerContainer
  },
  {
    header: "Exp WN8",
    route: EXP_WN8_URL,
    Component: ExpWn8Container
  },
  {
    header: "Tanks list",
    route: TANKS_URL,
    Component: TanksContainer
  },
  {
    header: "Login",
    route: LOGIN_URL,
    Component: LoginContainer
  },
  {
    header: "Account",
    route: ACCOUNT_URL,
    Component: AccountContainer
  },
];

export default routing;
