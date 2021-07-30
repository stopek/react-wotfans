import { ClanInterface } from "interfaces/ClanInterface";
import { PlayerInterface } from "interfaces/PlayerInterface";

export interface LoggedUserResponseInterface {
  response: {
    clan: ClanInterface,
    player: PlayerInterface,
    recently: object[],
    roles: [],
    session_id: number,
    statistics: object
  }
}
