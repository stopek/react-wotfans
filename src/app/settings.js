import GamesRoundedIcon from '@material-ui/icons/GamesRounded';
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import { CLANS_URL, EXP_WN8_URL, MAIN_URL, SEARCH_URL, TANKS_URL } from "app/routes";
import MyLocationRoundedIcon from '@material-ui/icons/MyLocationRounded';

import React from "react";

export const menuItems = [
  { title: 'Strona główna', i: 1, icon: <HomeRoundedIcon />, route: MAIN_URL },
  { title: 'Lista klanów', i: 2, icon: <PeopleAltRoundedIcon />, route: CLANS_URL },
  { title: 'Szukaj gracza', i: 3, icon: <GamesRoundedIcon />, route: SEARCH_URL },
  { title: 'Exp WN8', i: 4, icon: <BarChartRoundedIcon />, route: EXP_WN8_URL },
  { title: 'Lista czołgów', i: 5, icon: <MyLocationRoundedIcon />, route: TANKS_URL }
]

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
  { value: 'ussr', label: 'USSR' },
  { value: 'sweden', label: 'Szwedzkie' },
  { value: 'uk', label: 'Brytyjskie' },
  { value: 'czech', label: 'Czeskie' },
  { value: 'italy', label: 'Włoskie' },
  { value: 'poland', label: 'Polskie' },
  { value: 'usa', label: 'USA' },
  { value: 'france', label: 'Francuskie' },
  { value: 'japan', label: 'Japońskie' },
  { value: 'china', label: 'Chińskie' },
  { value: 'merc', label: 'MERC' },
  { value: 'germany', label: 'Niemieckie' }
];

export const typeList = [
  { value: 'lightTank', label: 'Czołg lekki' },
  { value: 'mediumTank', label: 'Czołg średni' },
  { value: 'heavyTank', label: 'Czołg ciężki' },
  { value: 'AT-SPG', label: 'Niszczyciel czołgów' },
  { value: 'SPG', label: 'Artyleria' },
];

export const premiumFilter = [
  { value: 'only_premium', label: 'Tylko premium' },
  { value: 'without_premium', label: 'Wyklucz premium' },
];