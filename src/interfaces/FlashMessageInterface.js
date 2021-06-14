export interface FlashMessageInterface {
  id: string,
  message: string,
  type: string,
  seconds_time?: number,
  no_clear?: boolean
}