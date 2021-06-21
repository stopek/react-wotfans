import Error from "components/core/Error";
import FullPreloader from "components/core/FullPreloader";
import Footer from "components/Footer";
import LoggedUserMenu from "components/wot/navigation/LoggedUserMenu";
import Menu from "components/wot/navigation/Menu";
import { default_languages } from "helpers/languages";
import Base from "overlays/Base";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage, selectedLanguage } from "reducers/languageSlice";
import { selectError, selectNotFound } from "reducers/wotSlice";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";
import { COLOR_DARK, COLOR_THEME } from "styles/colors";

const Content = styled(Base)`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 55px 10px 15px 60px;
  overflow-x: hidden;

  @media ${breakpoint.md} {
    padding: 55px 10px 15px 75px;
  }
  ${props => props?.full && `overflow: hidden; background: ${COLOR_DARK};`}
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const Languages = styled.div`
  position: absolute;
  bottom: 5px;
  display: flex;
  gap: 10px;
  width: 50px;
  flex-wrap: wrap;
  z-index: 2000;
  left: 5px;

  @media ${breakpoint.md} {
    left: 13px;
  }
`;

const Language = styled.div`
  padding: 5px 15px;
  background: ${COLOR_DARK};
  font-size: 12px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  width: 100%;
  ${props => props?.current && `background: ${COLOR_THEME};`}
`;

export default function WotOverlay(
  {
    breadcrumbs = [],
    title = '',
    children,
    ...props
  }
) {
  const isError = useSelector(selectError);
  const isNotFound = useSelector(selectNotFound);
  const language = useSelector(selectedLanguage);
  const dispatch = useDispatch();

  return (
    <Content {...props}>
      <Menu />

      <LoggedUserMenu />

      <Container>
        <FullPreloader />
        {isError && (
          <Error message={<FormattedMessage id={`loading.error`} />} />
        )}

        {isNotFound && (
          <Error message={<FormattedMessage id={`loading.not.found`} />} />
        )}

        {children}
        <Footer />
      </Container>

      <Languages>
        {Object.values(default_languages).map((lang) => (
          <Language
            current={language === lang.value}
            onClick={() => dispatch(changeLanguage(lang.value))}
          >{lang.value}</Language>
        ))}
      </Languages>
    </Content>
  );
};