import { MessageTypes } from "helpers/flashHelper";

export interface FlashMessageInterface {
  id?: string,
  message: string,
  type: MessageTypes,
  seconds_time?: number,
  no_clear?: boolean
}
