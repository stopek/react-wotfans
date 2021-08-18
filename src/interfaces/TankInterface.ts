import { ExpectedInterface } from "interfaces/ExpectedInterface";
import { MaxOnTankInterface } from "interfaces/MaxOnTankInterface";
import { TankExpectedInterface } from "interfaces/TankExpectedInterface";
import { TankMoeInterface } from "interfaces/TankMoeInterface";

export interface TankInterface {
  id: number,
  image: string,
  name: string,
  nation: string,
  tier: number,
  type: string,
  is_premium: boolean,
  description: string,
  price_credit: number,
  price_gold: number,
  prices_xp: number,
  short_name: string,
  tag: string,
  expTanks: TankExpectedInterface[],
  moeTanks: TankMoeInterface[],
  max_frags_stats: MaxOnTankInterface[],
  max_xp_stats: MaxOnTankInterface[],
  max_damage_stats: MaxOnTankInterface[],

  current_expected: ExpectedInterface,
}
