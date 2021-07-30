import type { MapInterface } from "interfaces/MapInterface";

export interface MapGeneratorResponseInterface {
  response: {
    date: string,
    maps: Array<{
      map: MapInterface
    }>
  }
}
