import { MapMapListInterface } from "interfaces/MapMapListInterface";

export interface MapGeneratorResponseInterface {
  response: {
    date: string,
    maps: MapMapListInterface
  }
}
