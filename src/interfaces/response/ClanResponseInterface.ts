import { ClanInterface } from "interfaces/ClanInterface";

export interface ClanResponseInterface {
  response: {
    clan: ClanInterface,
    statistics: object
  }
}
