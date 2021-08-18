import { TankStatInterface } from "interfaces/TankStatInterface";

export interface PlayerTanksResponseInterface {
  response: {
    tanks: TankStatInterface[]
  }
}
