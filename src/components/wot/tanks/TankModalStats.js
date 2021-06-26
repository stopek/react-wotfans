import CardDetailsDialog from "components/ui/dialog/CardDetailsDialog";
import TankCard from "components/wot/tanks/TankCard";
import React from "react";

export default function TankModalStats({ tank, statistics, stats, setOpen, open, card_props = {} }) {
  return (
    <CardDetailsDialog open={open} handleClose={() => setOpen(false)}>
      <TankCard
        tank={tank}
        statistics={statistics}
        stats={stats}
        {...card_props}
      />
    </CardDetailsDialog>
  );
}
