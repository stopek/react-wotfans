import { ClanInterface } from "interfaces/ClanInterface";

export interface PlayerInterface {
  id: number,
  name: string,
  clan?: ClanInterface,
  last_battle_time?: string,
  player_joined_at?: string,
  player_updated_at?: string,
  role?: string,
  users?: []
}
