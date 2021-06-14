import { MAIN_URL } from "app/routes";
import ic_home from "assets/icons/ic_home.png"
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { COLOR_GRAY_2, COLOR_GREY_DARK, COLOR_GREY_DARK_3, COLOR_THEME } from "styles/colors";

const Breadcrumbs = styled.ol`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const BreadcrumbsItem = styled.li`
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  color: ${COLOR_GREY_DARK_3};
  white-space: nowrap;

  ${props => (!props.active && props?.hover) ? "cursor: pointer;" : "color: " + COLOR_GRAY_2 + ";"}
  ${props => props?.hover && `&:hover {
    color: ${COLOR_THEME};
  }`}
  
  &:not(:last-child):after {
    content: ">";
    width: 5px;
    display: inline-flex;
    margin: 0 5px;
    color: ${COLOR_GREY_DARK};
  }
`;

const HomeIcon = styled.img`
  margin-right: 10px;
`;

const Bar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 25px;
  flex-wrap: wrap;
`;

function BreadcrumbComponent({ with_home = true, children, list }) {
  const history = useHistory();

  const elements = Object.values(list).map(({ active, title, route = null }, key) => {
    return (
      <BreadcrumbsItem key={key} active={active} hover={!!route} onClick={() => route ? history.push(route) : null}>
        {title}
      </BreadcrumbsItem>
    );
  });

  return (
    <Bar>
      <Breadcrumbs>
        {with_home ? (
          <BreadcrumbsItem
            active={false}
            hover={true}
            onClick={() => history.push(MAIN_URL)}
          >
            <HomeIcon src={ic_home} alt="" />
            Projekt gadżet
          </BreadcrumbsItem>
        ) : (
          ""
        )}
        {elements}
      </Breadcrumbs>
      {children}
    </Bar>
  );
}

export default BreadcrumbComponent;
