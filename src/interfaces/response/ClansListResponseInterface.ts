import { ClanInterface } from "interfaces/ClanInterface";
import { PaginationInterface } from "interfaces/PaginationInterface";

export interface ClansListResponseInterface {
  response: {
    data: ClanInterface[],
    pagination: PaginationInterface
  }
}
