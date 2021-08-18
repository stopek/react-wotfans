import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import EmojiSymbolsRoundedIcon from '@material-ui/icons/EmojiSymbolsRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import RecentActorsRoundedIcon from '@material-ui/icons/RecentActorsRounded';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import VpnLockRoundedIcon from '@material-ui/icons/VpnLockRounded';
import { requestToApi } from "api/actions";
import { AuthWot } from "api/actions/auth_wot";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { ACCOUNT_URL, CLAN_URL, GAMES_URL, LOGIN_URL, PLAYER_URL, SESSIONS_URL, WN8_CALCULATOR_URL } from "app/routes";
import ProgressCircular from "components/ui/progress/ProgressCircular";
import fillRoute from "helpers/fillRoute";
import { setErrorMessage, setSuccessMessage } from "helpers/flashHelper";
import { isLogged, logOutUser } from "helpers/user";
import { MenuItemInterface } from "interfaces/MenuItemInterface";
import React, { useState } from 'react';
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import { selectUser } from "reducers/wotSlice";
import styled from "styled-components";
import { COLOR_DARK_2, COLOR_SECOND, COLOR_TEXT, RADIUS } from "styles/colors";

const StyledMenuItem = withStyles(() => ({
  root: {
    '& svg': { fill: COLOR_TEXT },
    '&:hover': {
      backgroundColor: COLOR_SECOND,
      color: COLOR_TEXT,
    },
  },
}))(MenuItem);

const Content = styled.div`
  background: ${COLOR_DARK_2};
  right: 5px;
  z-index: 1000;
  padding: 0 5px;
  display: flex;
  border-radius: ${RADIUS};
  line-height: 1;
  gap: 15px;
  position: absolute;
  top: 5px;

  svg {
    width: 35px !important;
    height: 35px !important;
  }
`;

const OpenMenuIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 10px;

  svg {
    fill: ${COLOR_TEXT};
    width: 40px;
    height: 40px;
  }
`;

const NickName = styled.div`
  color: gray;
  line-height: 1;
  font-size: 16px;
`;

export default function LoggedUserMenu() {
  const history = useHistory();
  const user = useAppSelector(selectUser);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useAppDispatch();

  const handleClick = (event: React.ChangeEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = (event: React.ChangeEvent<any>) => {
    event.preventDefault();

    requestToApi(AuthWot.logout, {}, () => {
      logOutUser();

      dispatch(setSuccessMessage(
        'logout.success',
        true
      ));

      history.push(LOGIN_URL);
    }, (error) => {
      dispatch(setErrorMessage(error?.errors));
    });
  }

  const user_data = user?.response?.player;
  const user_name = user_data?.name;
  const user_id = user_data?.id;

  let menuItems: Array<MenuItemInterface> = [
    {
      i: 1,
      translation: 'menu.your.account',
      icon: <AssignmentIndRoundedIcon fontSize="small" />,
      route: ACCOUNT_URL
    },
    {
      i: 2,
      translation: 'menu.your.profile',
      icon: <RecentActorsRoundedIcon fontSize="small" />,
      route: fillRoute(PLAYER_URL, { account_id: user_id, name: user_name })
    },
    {
      i: 3,
      translation: 'menu.games',
      icon: <SportsEsportsRoundedIcon fontSize="small" />,
      route: GAMES_URL
    },
    {
      i: 4,
      translation: 'menu.wn8.calculator',
      icon: <EmojiSymbolsRoundedIcon fontSize="small" />,
      route: WN8_CALCULATOR_URL
    },
    {
      i: 5,
      translation: 'menu.your.clan',
      icon: <SupervisorAccountRoundedIcon fontSize="small" />,
      route: fillRoute(CLAN_URL, { tag: user_data?.clan?.tag }),
      disable: !user_data?.clan?.tag
    },
    {
      i: 6,
      translation: 'login.sessions',
      icon: <HistoryRoundedIcon fontSize="small" />,
      route: SESSIONS_URL
    },
  ].filter((item) => !item?.disable);

  if (!user?.response) {
    menuItems = [];
  }

  const loading = isLogged() && !Object.keys(user?.response || {})?.length;
  const loggedAndLoaded = isLogged() && Object.keys(user?.response || {})?.length > 0;

  return (
    <Content>
      {loading && (
        <OpenMenuIcon onClick={() => history.push(LOGIN_URL)}>
          <ProgressCircular />
        </OpenMenuIcon>
      )}

      {loggedAndLoaded ? (
        <>
          <OpenMenuIcon onClick={handleClick}>
            {!!user_name && <NickName>{user_name}</NickName>}
            <AccountCircleRoundedIcon />
          </OpenMenuIcon>
          <Menu
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItems.map((menu) => (
              <StyledMenuItem
                onClick={(event) => {
                  event.preventDefault();
                  history.push(typeof menu?.route === 'string' ? menu.route : '');
                }}
                key={`menu-item-${menu.i}`}
              >
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>

                <ListItemText primary={
                  <FormattedMessage id={menu.translation} />
                } />
              </StyledMenuItem>
            ))}

            <StyledMenuItem onClick={logOut}>
              <ListItemIcon>
                <ExitToAppRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={<FormattedMessage id={`menu.logout`} />} />
            </StyledMenuItem>
          </Menu>
        </>
      ) : (!loading && (
          <OpenMenuIcon onClick={() => history.push(LOGIN_URL)}>
            <VpnLockRoundedIcon />
          </OpenMenuIcon>
        )
      )}
    </Content>
  );
}
