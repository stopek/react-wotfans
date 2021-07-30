import { PlayerInterface } from "interfaces/PlayerInterface";

export interface PlayerResponseInterface {
  response: {
    player: PlayerInterface,
    statistics: object
  }
}
