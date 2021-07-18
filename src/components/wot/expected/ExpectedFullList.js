import { Hidden } from "@material-ui/core";
import ExpectedSmallCard from "components/wot/expected/ExpectedSmallCard";
import TankProfileButton from "components/wot/tanks/TankProfileButton";
import { numberResult } from "helpers/priceFormat";
import { getTranslationByTankType } from "helpers/tanks";
import { getTranslationByNation } from "helpers/user";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { FitTableTd, SimpleTable, TableTbody, TableThead, TableTr } from "styles/GlobalStyled";

const List = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  margin: 15px 0;
  max-width: 100%;
  overflow-x: auto;
`;

const TankImage = styled.img`
  max-width: 50px;
  transition: transform .2s ease-in-out;

  &:hover {
    transform: scale(3);
  }
`;


export default function ExpectedFullList({ exp_wn8 = [] }) {
  exp_wn8 = Object.values(exp_wn8);
  if (!exp_wn8?.length) {
    return null;
  }

  return (
    <List>
      <SimpleTable>
        <Hidden smDown>
          <TableThead>
            <TableTr>
              <FitTableTd><FormattedMessage id={`tank.name`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`image`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`nation`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`tier`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`tank.type`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`exp.damage`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`exp.def`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`exp.frag`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`exp.spot`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`exp.win`} /></FitTableTd>
              <FitTableTd><FormattedMessage id={`see.profile`} /></FitTableTd>
            </TableTr>
          </TableThead>
        </Hidden>

        <TableTbody>
          {exp_wn8.map((tank, key) => (
            <TableTr key={`tank-${key}`}>
              <Hidden mdUp>
                <ExpectedSmallCard item={tank} as={`td`} />
              </Hidden>

              <Hidden smDown>
                <FitTableTd>{tank.tank.name}</FitTableTd>
                <FitTableTd>
                  <TankImage src={tank.tank.image} />
                </FitTableTd>
                <FitTableTd>
                  <FormattedMessage id={getTranslationByNation(tank.tank.nation)} />
                </FitTableTd>
                <FitTableTd>{tank.tank.tier}</FitTableTd>
                <FitTableTd>
                  <FormattedMessage id={getTranslationByTankType(tank.tank.type)} />
                </FitTableTd>
                <FitTableTd title={tank?.damage}>{numberResult(tank?.damage)}</FitTableTd>
                <FitTableTd title={tank?.def}>{numberResult(tank?.def)}</FitTableTd>
                <FitTableTd title={tank?.frag}>{numberResult(tank?.frag)}</FitTableTd>
                <FitTableTd title={tank?.spot}>{numberResult(tank?.spot)}</FitTableTd>
                <FitTableTd title={tank?.win}>{numberResult(tank?.win)}</FitTableTd>
                <FitTableTd>
                  <TankProfileButton tank_id={tank?.tank?.id} />
                </FitTableTd>
              </Hidden>
            </TableTr>
          ))}
        </TableTbody>
      </SimpleTable>
    </List>
  );
}
