import CardDetailsDialog from "components/ui/dialog/CardDetailsDialog";
import TankCard from "components/wot/tanks/TankCard";
import { TankInterface } from "interfaces/TankInterface";
import { TankStatInterface } from "interfaces/TankStatInterface";
import { TankStatsSettingsInterface } from "interfaces/TankStatsSettingsInterface";
import React from "react";

type TankModalStatsType = {
  tank: TankInterface,
  statistics?: TankStatInterface,
  stats?: TankStatsSettingsInterface,
  open: boolean,
  setOpen: (open: boolean) => void
}

const TankModalStats: React.FC<TankModalStatsType> = (
  {
    tank,
    statistics,
    stats,
    setOpen,
    open
  }: TankModalStatsType
) => {
  return (
    <CardDetailsDialog open={open} handleClose={() => setOpen(false)}>
      <TankCard
        tank={tank}
        statistics={statistics}
        stats={stats}
      />
    </CardDetailsDialog>
  );
}

export default TankModalStats;
