import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import { CLANS_URL, CONTACT_URL, EXP_WN8_URL, MAIN_URL, MAPS_URL, MOE_URL, SEARCH_URL, TANKS_URL } from "app/routes";
import { ReactComponent as TankIcon } from "assets/svg/tank-icon-2.svg";
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import React from "react";
import {
  WN8_ABOVE_AVERAGE,
  WN8_AVERAGE,
  WN8_BAD,
  WN8_BELOW_AVERAGE,
  WN8_GOOD,
  WN8_GREAT,
  WN8_SUPER_UNICUM,
  WN8_UNICUM,
  WN8_VERY_BAD,
  WN8_VERY_GOOD
} from "styles/colors";

export const menuItems = [
  { translation: 'homepage', i: 1, icon: <HomeRoundedIcon />, route: MAIN_URL },
  { translation: 'clans.list', i: 2, icon: <PeopleAltRoundedIcon />, route: CLANS_URL },
  { translation: 'search.player', i: 3, icon: <SearchRoundedIcon />, route: SEARCH_URL },
  { translation: 'exp.wn8', i: 4, icon: <TuneRoundedIcon />, route: EXP_WN8_URL },
  { translation: 'moe', i: 5, icon: <StarOutlineRoundedIcon />, route: MOE_URL },
  { translation: 'tanks.list', i: 6, icon: <TankIcon />, route: TANKS_URL },
  { translation: 'maps.list', i: 7, icon: <MapRoundedIcon />, route: MAPS_URL },
  { translation: 'contact', i: 8, icon: <MailRoundedIcon />, route: CONTACT_URL },
  { translation: 'fundraising', i: 9, icon: <AttachMoneyRoundedIcon />, href: 'https://paypal.me/pools/c/8Am8kdJ6bj' }
];

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
  { value: 'ussr', translation: 'nation.ussr' },
  { value: 'sweden', translation: 'nation.sweden' },
  { value: 'uk', translation: 'nation.uk' },
  { value: 'czech', translation: 'nation.czech' },
  { value: 'italy', translation: 'nation.italy' },
  { value: 'poland', translation: 'nation.poland' },
  { value: 'usa', translation: 'nation.usa' },
  { value: 'france', translation: 'nation.france' },
  { value: 'japan', translation: 'nation.japan' },
  { value: 'china', translation: 'nation.china' },
  { value: 'merc', translation: 'nation.mercenaries' },
  { value: 'germany', translation: 'nation.germany' }
];

export const typeList = [
  { value: 'lightTank', translation: 'type.lightTank' },
  { value: 'mediumTank', translation: 'type.mediumTank' },
  { value: 'heavyTank', translation: 'type.heavyTank' },
  { value: 'AT-SPG', translation: 'type.td' },
  { value: 'SPG', translation: 'type.artillery' },
];

export const premiumFilter = [
  { value: 'only_premium', translation: 'only.premium' },
  { value: 'without_premium', translation: 'without.premium' },
];

export const wn8Ranges = [
  { value: 0, background: WN8_VERY_BAD, translation: 'wn8.very.bad' },
  { value: 300, background: WN8_BAD, translation: 'wn8.bad' },
  { value: 450, background: WN8_BELOW_AVERAGE, translation: 'wn8.below.average' },
  { value: 650, background: WN8_AVERAGE, translation: 'wn8.average' },
  { value: 900, background: WN8_ABOVE_AVERAGE, translation: 'wn8.above.average' },
  { value: 1200, background: WN8_GOOD, translation: 'wn8.good' },
  { value: 1600, background: WN8_VERY_GOOD, translation: 'wn8.very.good' },
  { value: 2000, background: WN8_GREAT, translation: 'wn8.great' },
  { value: 2450, background: WN8_UNICUM, translation: 'wn8.unicum' },
  { value: 2900, background: WN8_SUPER_UNICUM, translation: 'wn8.super.unicum' },
];

export const wn7Ranges = [
  { value: 0, background: WN8_VERY_BAD, translation: 'wn8.very.bad' },
  { value: 500, background: WN8_BAD, translation: 'wn8.bad' },
  { value: 700, background: WN8_BELOW_AVERAGE, translation: 'wn8.below.average' },
  { value: 900, background: WN8_AVERAGE, translation: 'wn8.average' },
  { value: 1100, background: WN8_GOOD, translation: 'wn8.good' },
  { value: 1350, background: WN8_VERY_GOOD, translation: 'wn8.very.good' },
  { value: 1550, background: WN8_GREAT, translation: 'wn8.great' },
  { value: 1850, background: WN8_UNICUM, translation: 'wn8.unicum' },
  { value: 2050, background: WN8_SUPER_UNICUM, translation: 'wn8.super.unicum' },
];

export const efficiencyRanges = [
  { value: 0, background: WN8_BAD, translation: 'wn8.bad' },
  { value: 630, background: WN8_BELOW_AVERAGE, translation: 'wn8.below.average' },
  { value: 860, background: WN8_AVERAGE, translation: 'wn8.average' },
  { value: 1140, background: WN8_GOOD, translation: 'wn8.good' },
  { value: 1460, background: WN8_GREAT, translation: 'wn8.great' },
  { value: 1735, background: WN8_UNICUM, translation: 'wn8.unicum' }
];

export const nivoTheme = {
  textColor: "#ffffff",
  fontSize: 11,
  tooltip: {
    container: {
      position: 'absolute',
      padding: 0,
      borderRadius: 0,
      width: 200
    }
  },
  axis: {
    domain: {
      line: {
        stroke: 'transparent',
        strokeWidth: 1
      }
    },
    ticks: {
      line: {
        stroke: "#777777",
        strokeWidth: 1
      }
    }
  },
  crosshair: {
    line: {
      stroke: '#ffffff',
      strokeWidth: 1,
      strokeOpacity: 1,
    },
  },
  grid: {
    line: {
      stroke: "#ffffff",
      strokeWidth: 1
    }
  }
}

export const pie_data = [
  {
    "id": "WN8",
    "data": [
      {
        "x": '2021-01-01',
        "y": 100.503
      },
      {
        "x": '2021-01-02',
        "y": 200.504
      },
      {
        "x": '2021-01-03',
        "y": 150.702
      },
      {
        "x": '2021-01-04',
        "y": 250.701
      },
      {
        "x": '2021-01-05',
        "y": 300.554
      },
    ]
  },
  {
    "id": "WN7",
    "data": [
      {
        "x": '2021-01-01',
        "y": 300.232
      },
      {
        "x": '2021-01-02',
        "y": 323.232
      },
      {
        "x": '2021-01-03',
        "y": 290.232
      },
      {
        "x": '2021-01-04',
        "y": 266.232
      },
      {
        "x": '2021-01-05',
        "y": 300.932
      },
    ]
  },
  {
    "id": "EFFI",
    "data": [
      {
        "x": '2021-01-01',
        "y": 1200.212
      },
      {
        "x": '2021-01-02',
        "y": 1500.332
      },
      {
        "x": '2021-01-03',
        "y": 1660.323
      },
      {
        "x": '2021-01-04',
        "y": 1643.888
      },
      {
        "x": '2021-01-05',
        "y": 1400.221
      },
    ]
  },
];

export const gamesTypes = [
  { translation: 'game.type.league', value: 1 }
];
