import { ClanInterface } from "interfaces/ClanInterface";
import { PlayerHistoryListInterface } from "interfaces/PlayerHistoryListInterface";
import { PlayerStat } from "interfaces/PlayerStat";
import { TankStatInterface } from "interfaces/TankStatInterface";
import { WN8Interface } from "interfaces/WN8Interface";

export interface PlayerInterface extends WN8Interface {
  id: number,
  name: string,
  clan?: ClanInterface,
  last_battle_time?: string,
  global_rating?: number,
  player_joined_at?: string,
  player_updated_at?: string,
  role?: string,
  is_inactive?: boolean,
  users?: [],
  wn7: number,
  efficiency: number,
  player_created_at: string,
  stats: PlayerStat[],
  tanksStats: TankStatInterface[],
  is_locked?: boolean,
  updated_at?: string,
  playerStatsHistories: PlayerHistoryListInterface
}
