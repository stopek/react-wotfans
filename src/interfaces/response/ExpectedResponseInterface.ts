import { ExpectedListInterface } from "interfaces/ExpectedListInterface";
import { UpdateInterface } from "interfaces/UpdateInterface";

export interface ExpectedResponseInterface {
  response: {
    tanks: ExpectedListInterface[],
    update: UpdateInterface
  }
}
