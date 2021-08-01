import { ClanInterface } from "interfaces/ClanInterface";
import { PlayerInterface } from "interfaces/PlayerInterface";
import { TankStatInterface } from "interfaces/TankStatInterface";
import { UserStatistics } from "interfaces/UserStatistics";

export interface LoggedUserResponseInterface {
  response: {
    clan: ClanInterface,
    player: PlayerInterface,
    recently: TankStatInterface[],
    roles: [],
    session_id: number,
    statistics: UserStatistics
  }
}
