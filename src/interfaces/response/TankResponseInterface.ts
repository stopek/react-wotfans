import { TankInterface } from "interfaces/TankInterface";

export interface TankResponseInterface {
  response: {
    tank: TankInterface,
    wn8?: number
  }
}
