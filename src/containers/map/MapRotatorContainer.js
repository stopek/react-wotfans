import { MAPS_URL } from "app/routes";
import React from 'react';
import { Redirect } from "react-router";

export default function MapRotatorContainer() {
  return <Redirect to={MAPS_URL} />
}
