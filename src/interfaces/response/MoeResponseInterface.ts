import { MoeInterface } from "interfaces/MoeInterface";
import { UpdateInterface } from "interfaces/UpdateInterface";

export interface MoeResponseInterface {
  response: {
    tanks: MoeInterface[],
    update: UpdateInterface
  }
}
