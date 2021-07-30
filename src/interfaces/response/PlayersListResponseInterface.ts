import { PaginationInterface } from "interfaces/PaginationInterface";
import { PlayerInterface } from "interfaces/PlayerInterface";

export interface PlayersListResponseInterface {
  response: {
    data: PlayerInterface[],
    pagination: PaginationInterface,
    statistics: {
      efficiency: [],
      wn7: [],
      wn8: []
    }
  }
}
