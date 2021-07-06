import { default_languages } from "helpers/languages";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage, selectedLanguage } from "reducers/languageSlice";
import styled from "styled-components";
import { COLOR_DARK, COLOR_THEME } from "styles/colors";

const Languages = styled.div`
  position: absolute;
  bottom: 5px;
  display: flex;
  gap: 10px;
  width: 50px;
  flex-wrap: wrap;
  z-index: 2000;
  left: 10px;
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

export default function LanguagesBox() {
  const language = useSelector(selectedLanguage);
  const dispatch = useDispatch();

  return (
    <Languages>
      {Object.values(default_languages).map((lang) => (
        <Language
          key={`language-${lang.value}`}
          current={language === lang.value}
          onClick={() => dispatch(changeLanguage(lang.value))}
        >{lang.value}</Language>
      ))}
    </Languages>
  );
}
