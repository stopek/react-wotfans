import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import FacebookIcon from '@material-ui/icons/Facebook';
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import {
  CLAN_URL,
  CLANS_URL,
  CONTACT_URL,
  EXP_WN8_URL,
  MAIN_URL,
  MAPS_URL,
  MOE_URL,
  PLAYER_URL,
  SEARCH_URL,
  TANK_URL,
  TANKS_URL
} from "app/routes";
import { ReactComponent as TankIcon } from "assets/svg/tank-icon-2.svg";
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
import { pl, ru } from 'date-fns/locale'
import en_translations from "translations/en.json";
import pl_translations from "translations/pl.json";
import ru_translation from "translations/ru.json";

export const default_rotator_limit = [1, 7];

export const application_languages = [
  { label: "EN", value: "en", date_locale: null, translations: en_translations },
  { label: "RU", value: "ru", date_locale: ru, translations: ru_translation },
  { label: "PL", value: "pl", date_locale: pl, translations: pl_translations },
];

export const menuItems = [
  { translation: 'homepage', i: 1, icon: <HomeRoundedIcon />, route: MAIN_URL, active: [MAIN_URL] },
  { translation: 'clans.list', i: 2, icon: <PeopleAltRoundedIcon />, route: CLANS_URL, active: [CLAN_URL, CLANS_URL] },
  {
    translation: 'search.player',
    i: 3,
    icon: <SearchRoundedIcon />,
    route: SEARCH_URL,
    active: [SEARCH_URL, PLAYER_URL]
  },
  { translation: 'exp.wn8', i: 4, icon: <TuneRoundedIcon />, route: EXP_WN8_URL, active: [EXP_WN8_URL] },
  { translation: 'moe', i: 5, icon: <StarOutlineRoundedIcon />, route: MOE_URL, active: [MOE_URL] },
  { translation: 'tanks.list', i: 6, icon: <TankIcon />, route: TANKS_URL, active: [TANKS_URL, TANK_URL] },
  { translation: 'maps.list', i: 7, icon: <MapRoundedIcon />, route: MAPS_URL, active: [MAPS_URL] }
];

export const footerMenuItems = [
  { translation: 'contact', i: 1, icon: <MailRoundedIcon />, route: CONTACT_URL },
  { translation: 'fundraising', i: 2, icon: <AttachMoneyRoundedIcon />, href: 'https://paypal.me/pools/c/8Am8kdJ6bj' },
  { translation: 'facebook', i: 3, icon: <FacebookIcon />, href: 'https://fb.me/wotfansonline' }
]

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

export const gamesTypes = [
  { translation: 'game.type.league', value: 1 }
];
