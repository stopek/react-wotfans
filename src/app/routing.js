import loadable from "@loadable/component";
import {
  ACCOUNT_URL,
  CLAN_URL,
  CLANS_URL,
  CONTACT_URL,
  EXP_WN8_URL,
  LOGIN_URL,
  MAIN_URL,
  MAPS_URL,
  PLAYER_URL,
  SEARCH_URL,
  SESSIONS_URL,
  TANK_URL,
  TANKS_URL,
  UPGRADE_URL
} from "app/routes";
import React from "react";

const load = (component) => {
  return loadable(() => import(`containers/${component}`));
}

const routing = [
  {
    header: "homepage",
    route: MAIN_URL,
    Component: load('IndexContainer'),
    params: {
      seo: {
        title: 'seo.homepage',
        description: 'seo.homepage.description',
      }
    }
  },
  {
    header: "login.view",
    route: LOGIN_URL,
    Component: load('auth/LoginContainer'),
    params: {
      seo: {
        title: 'seo.login.view',
        description: 'seo.login.view.description',
      }
    }
  },
  {
    route: UPGRADE_URL,
    Component: load('system/UpgradeContainer'),
  },
  {
    authorized: true,
    route: SESSIONS_URL,
    Component: load('account/SessionsContainer')
  },
  {
    route: CONTACT_URL,
    Component: load('ContactContainer'),
    params: {
      seo: {
        title: 'seo.contact',
        description: 'seo.contact.description',
      }
    }
  },
  // {
  //   header: "upload",
  //   route: UPLOAD_URL,
  //   Component: UploadContainer,
  // },
  {
    header: "clans.list",
    route: CLANS_URL,
    Component: load('clan/ClansListContainer'),
    params: {
      seo: {
        title: 'seo.clans.list',
        description: 'seo.clans.list.description',
      }
    }
  },
  {
    header: "clan.profile",
    route: CLAN_URL,
    Component: load('clan/ClanProfileContainer'),
    params: {
      seo: {
        title: 'seo.clan.profile',
        description: 'seo.clan.profile.description',
      }
    }
  },
  {
    header: "tank.profile",
    route: TANK_URL,
    Component: load('tank/TankContainer'),
    params: {
      seo: {
        title: 'seo.tank.profile',
        description: 'seo.tank.profile.description',
      }
    }
  },
  {
    header: "search.player",
    route: SEARCH_URL,
    Component: load('player/SearchPlayerContainer'),
    params: {
      seo: {
        title: 'seo.search.player',
        description: 'seo.search.player.description',
      }
    }
  },
  {
    header: "player.profile",
    route: PLAYER_URL,
    Component: load('player/PlayerProfileContainer'),
    params: {
      seo: {
        title: 'seo.player.profile',
        description: 'seo.player.profile.description',
      }
    }
  },
  {
    header: "exp.wn8",
    route: EXP_WN8_URL,
    Component: load('tank/ExpMoeContainer'),
    params: {
      seo: {
        title: 'seo.exp.wn8',
        description: 'seo.exp.wn8.description',
      }
    }
  },
  {
    header: "tanks.list",
    route: TANKS_URL,
    Component: load('tank/TanksListContainer'),
    params: {
      seo: {
        title: 'seo.tanks.list',
        description: 'seo.tanks.list.description',
      }
    }
  },
  {
    authorized: true,
    header: "menu.your.account",
    route: ACCOUNT_URL,
    Component: load('account/AccountContainer'),
    params: {
      seo: {
        title: 'seo.your.account',
        description: 'seo.your.account.description',
      }
    }
  },
  {
    header: "maps.list",
    route: MAPS_URL,
    Component: load('map/MapsListContainer'),
    params: {
      seo: {
        title: 'seo.maps',
        description: 'seo.maps.description',
      }
    }
  },
];

export default routing;
