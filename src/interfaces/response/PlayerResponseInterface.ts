import { PlayerInterface } from "interfaces/PlayerInterface";
import { UserStatistics } from "interfaces/UserStatistics";

export interface PlayerResponseInterface {
  response: {
    player: PlayerInterface,
    statistics: UserStatistics
  }
}
