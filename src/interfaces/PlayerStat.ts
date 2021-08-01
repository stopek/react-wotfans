import { TankInterface } from "interfaces/TankInterface";

export interface PlayerStat {
  battles: number,
  frags: number,
  shots: number,
  wins: number,
  hits: number,

  losses: number,
  survived_battles: number,
  no_damage_direct_hits_received: number,
  trees_cut: number,
  damage_dealt: number,
  xp: number,
  spotted: number,
  damage_assisted_radio: number,
  damage_assisted_track: number,
  direct_hits_received: number,
  max_damage: number,
  max_frags: number,
  max_xp: number,

  max_damage_tank?: TankInterface,
  max_frags_tank?: TankInterface,
  max_xp_tank?: TankInterface
}
