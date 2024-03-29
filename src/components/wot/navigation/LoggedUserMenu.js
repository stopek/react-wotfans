import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import RecentActorsRoundedIcon from '@material-ui/icons/RecentActorsRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import VpnLockRoundedIcon from '@material-ui/icons/VpnLockRounded';
import { requestToApi } from "api/actions";
import { AuthWot } from "api/actions/auth_wot";
import { ACCOUNT_URL, CLAN_URL, LOGIN_URL, PLAYER_URL, SESSIONS_URL, WN8_CALCULATOR_URL } from "app/routes";
import ProgressCircular from "components/ui/progress/ProgressCircular";
import fillRoute from "helpers/fillRoute";
import { setErrorMessage, setSuccessMessage } from "helpers/flashHelper";
import { isLogged, logOutUser } from "helpers/user";
import React, { useState } from 'react';
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUser } from "reducers/wotSlice";
import styled from "styled-components";
import { COLOR_DARK_2, COLOR_SECOND, COLOR_SECOND_DARKER, COLOR_TEXT, RADIUS } from "styles/colors";
import EmojiSymbolsRoundedIcon from '@material-ui/icons/EmojiSymbolsRounded';

const StyledMenu = withStyles({
  paper: {
    border: 0,
    borderRadius: 0,
    background: COLOR_SECOND_DARKER,
    color: 'white'
  },
})((props) => (
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
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
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
  const user = useSelector(selectUser);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = (event) => {
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

  const menuItems = user?.response ? [
    {
      translation: 'menu.your.account',
      icon: <AssignmentIndRoundedIcon fontSize="small" />,
      route: ACCOUNT_URL
    },
    {
      translation: 'menu.your.profile',
      icon: <RecentActorsRoundedIcon fontSize="small" />,
      route: fillRoute(PLAYER_URL, { account_id: user_id, name: user_name })
    },
    // {
    //   translation: 'menu.games',
    //   icon: <SportsEsportsRoundedIcon fontSize="small" />,
    //   route: GAMES_URL
    // },
    {
      translation: 'menu.wn8.calculator',
      icon: <EmojiSymbolsRoundedIcon fontSize="small" />,
      route: WN8_CALCULATOR_URL
    },
    !!user_data?.clan?.tag && {
      translation: 'menu.your.clan',
      icon: <SupervisorAccountRoundedIcon fontSize="small" />,
      route: fillRoute(CLAN_URL, { tag: user_data?.clan?.tag })
    },
    {
      translation: 'login.sessions',
      icon: <HistoryRoundedIcon fontSize="small" />,
      route: SESSIONS_URL
    },
  ] : [];

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

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItems.filter((item) => !!item).map((menu, key) => (
              <StyledMenuItem
                onClick={(event) => {
                  event.preventDefault();
                  history.push(menu.route);
                }}
                href={menu.route}
                key={`menu-item-${key}`}
                component={`a`}
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
          </StyledMenu>
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
