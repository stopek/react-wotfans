import { ClanInterface } from "interfaces/ClanInterface";
import { PaginationResponseInterface } from "interfaces/PaginationResponseInterface";

export interface ClansListResponseInterface {
  response: {
    data: ClanInterface[],
    pagination: PaginationResponseInterface
  }
}
