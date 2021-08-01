import { TankInterface } from "interfaces/TankInterface";

export interface StatBoxInterface {
  translation: string,
  value: any,
  button?: JSX.Element,
  tank?: TankInterface
}
