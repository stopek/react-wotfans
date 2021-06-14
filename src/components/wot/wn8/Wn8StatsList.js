import StatsList from "components/wot/StatsList";
import { priceFormat } from "helpers/priceFormat";
import React from "react";

export default function Wn8StatsList({ wn8 = 0 }) {
  return (
    <StatsList list={[
      { title: 'WN8', value: priceFormat(wn8, ',', '') }
    ]} />
  );
}