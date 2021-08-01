import { ExpectedInterface } from "interfaces/ExpectedInterface";
import { TankInterface } from "interfaces/TankInterface";

export interface ExpectedListInterface extends ExpectedInterface {
  tank: TankInterface,
}
