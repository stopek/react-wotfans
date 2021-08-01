import { PaginationResponseInterface } from "interfaces/PaginationResponseInterface";
import { PlayerInterface } from "interfaces/PlayerInterface";

export interface PlayersListResponseInterface {
  response: {
    data: PlayerInterface[],
    pagination: PaginationResponseInterface,
    statistics: {
      efficiency: [],
      wn7: [],
      wn8: []
    }
  }
}
