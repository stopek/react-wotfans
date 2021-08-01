import { ExpectedInterface } from "interfaces/ExpectedInterface";

export interface TankExpectedInterface extends ExpectedInterface {
  update_owner: {
    version: string
  }
}
