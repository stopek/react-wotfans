import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import { CLANS_URL, EXP_WN8_URL, MAIN_URL, MAPS_URL, SEARCH_URL, TANKS_URL } from "app/routes";

import { ReactComponent as TankIcon } from "assets/svg/tank-icon-2.svg";
import React from "react";
import { FormattedMessage } from "react-intl";

export const menuItems = [
  { translation: 'homepage', i: 1, icon: <HomeRoundedIcon />, route: MAIN_URL },
  { translation: 'clans.list', i: 2, icon: <PeopleAltRoundedIcon />, route: CLANS_URL },
  { translation: 'search.player', i: 3, icon: <SearchRoundedIcon />, route: SEARCH_URL },
  { translation: 'exp.wn8', i: 4, icon: <BarChartRoundedIcon />, route: EXP_WN8_URL },
  { translation: 'tanks.list', i: 5, icon: <TankIcon />, route: TANKS_URL },
  { translation: 'maps.list', i: 5, icon: <MapRoundedIcon />, route: MAPS_URL },
  { translation: 'fundraising', i: 6, icon: <AttachMoneyRoundedIcon />, href: 'https://paypal.me/pools/c/8Am8kdJ6bj' }
];

export const all_static_pages = [];

export const tiersList = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: 10, label: 10 },
];

export const nationList = [
  { value: 'ussr', label: <FormattedMessage id={`nation.ussr`} /> },
  { value: 'sweden', label: <FormattedMessage id={`nation.sweden`} /> },
  { value: 'uk', label: <FormattedMessage id={`nation.uk`} /> },
  { value: 'czech', label: <FormattedMessage id={`nation.czech`} /> },
  { value: 'italy', label: <FormattedMessage id={`nation.italy`} /> },
  { value: 'poland', label: <FormattedMessage id={`nation.poland`} /> },
  { value: 'usa', label: <FormattedMessage id={`nation.usa`} /> },
  { value: 'france', label: <FormattedMessage id={`nation.france`} /> },
  { value: 'japan', label: <FormattedMessage id={`nation.japan`} /> },
  { value: 'china', label: <FormattedMessage id={`nation.china`} /> },
  { value: 'merc', label: <FormattedMessage id={`nation.mercenaries`} /> },
  { value: 'germany', label: <FormattedMessage id={`nation.germany`} /> }
];

export const typeList = [
  { value: 'lightTank', label: <FormattedMessage id={`type.lightTank`} /> },
  { value: 'mediumTank', label: <FormattedMessage id={`type.mediumTank`} /> },
  { value: 'heavyTank', label: <FormattedMessage id={`type.heavyTank`} /> },
  { value: 'AT-SPG', label: <FormattedMessage id={`type.td`} /> },
  { value: 'SPG', label: <FormattedMessage id={`type.artillery`} /> },
];

export const premiumFilter = [
  { value: 'only_premium', label: <FormattedMessage id={`only.premium`} /> },
  { value: 'without_premium', label: <FormattedMessage id={`without.premium`} /> },
];


export const mapsRotations = {
  0: { name: 'Malinowka', video: 'maps/himmelsdorf' },                                            //poprawić końcowy strzał
  1: { name: 'Fredvang', video: 'maps/fredvang' },    //zrobione
  2: { name: 'Himmelsdorf', video: 'maps/himmelsdorf' }, //zrobione
  3: { name: 'El Haluf', video: 'maps/el_haluf' },    //zrobione
  4: { name: 'Cao Bang', video: 'maps/himmelsdorf' },                                             //brakuje jednej sceny
  5: { name: 'Urwisko', video: 'maps/urwisko' },     //zrobione
  6: { name: 'Winnice', video: 'maps/winnice' },     //zrobione
  7: { name: 'Mannheim', video: 'maps/manheim' },    //zrobione
  8: { name: 'Kowno', video: 'maps/urwisko' },
  9: { name: 'Autostrada', video: 'maps/himmelsdorf' },
  10: { name: 'Dezful', video: 'maps/himmelsdorf' },
  11: { name: 'Przełęcz', video: 'maps/himmelsdorf' },
  12: { name: 'Prochorowka', video: 'maps/fredvang' },
  13: { name: 'Fredvang', video: 'maps/fredvang' }, //---//zrobione
  14: { name: 'Kasserin', video: 'maps/himmelsdorf' },
  15: { name: 'Step', video: 'maps/himmelsdorf' },
  16: { name: 'Cao Bang', video: 'maps/himmelsdorf' }, //---
  17: { name: 'Zatoka Rybacka', video: 'maps/urwisko' },
  18: { name: 'Wybrzeże', video: 'maps/fredvang' },
  19: { name: 'Mannheim', video: 'maps/manheim' }, //---//zrobione
  20: { name: 'Koło Podbiegunowe', video: 'maps/winnice' },
  21: { name: 'Pilzno', video: 'maps/urwisko' },
  22: { name: 'Dezful', video: 'maps/himmelsdorf' }, //---
  23: { name: 'Piaszczysta rzeka', video: 'maps/el_haluf' }
};
