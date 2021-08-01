import { useAppDispatch, useAppSelector } from "app/hooks";
import { getLanguages } from "helpers/languages";
import React from "react";
import { withRouter } from "react-router";
import { changeLanguage, selectedLanguage } from "reducers/languageSlice";
import styled from "styled-components";
import { COLOR_DARK, COLOR_TEXT, COLOR_THEME } from "styles/colors";

const Languages = styled.div`
  position: absolute;
  bottom: 5px;
  display: flex;
  gap: 10px;
  width: 35px;
  flex-wrap: wrap;
  z-index: 1000;
  left: 10px;
`;

const Language = styled.div<{ current?: boolean }>`
  padding: 5px 15px;
  background: ${COLOR_DARK};
  font-size: 12px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLOR_TEXT};
  text-transform: uppercase;
  cursor: pointer;
  width: 100%;
  ${props => props?.current && `background: ${COLOR_THEME};`}
`;

function LanguagesBox() {
  const language = useAppSelector(selectedLanguage);
  const dispatch = useAppDispatch();

  const change = (language: string) => {
    document.documentElement.lang = language;
    dispatch(changeLanguage(language));
  }

  return (
    <Languages>
      {getLanguages().map((lang) => (
        <Language
          key={`language-${lang.value}`}
          current={language === lang.value}
          onClick={() => change(lang.value)}
        >{lang.value}</Language>
      ))}
    </Languages>
  );
}

export default withRouter(LanguagesBox);
