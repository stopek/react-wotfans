import { MoeInterface } from "interfaces/MoeInterface";

export interface TankMoeInterface extends MoeInterface {
  update_owner: {
    version: string
  }
}
