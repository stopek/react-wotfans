import { PaginationResponseInterface } from "interfaces/PaginationResponseInterface";
import { TankInterface } from "interfaces/TankInterface";

export interface TanksResponseInterface {
  response: {
    data: TankInterface[],
    pagination: PaginationResponseInterface
  }
}
