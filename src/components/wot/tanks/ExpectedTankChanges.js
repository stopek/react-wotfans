import { priceFormat } from "helpers/priceFormat";
import React from "react";
import { FormattedMessage } from "react-intl";
import { SimpleTable, TableTbody, TableTdSmall, TableThead } from "styles/GlobalStyled";
import styled from "styled-components";

const Content = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

export default function ExpectedTankChanges({ expected = [] }) {
  return (
    <Content>
      <SimpleTable>
        <TableThead>
          <tr>
            <TableTdSmall as={`th`}><FormattedMessage id={`version`} /></TableTdSmall>
            <TableTdSmall as={`th`}><FormattedMessage id={`exp.damage`} /></TableTdSmall>
            <TableTdSmall as={`th`}><FormattedMessage id={`exp.def`} /></TableTdSmall>
            <TableTdSmall as={`th`}><FormattedMessage id={`exp.frag`} /></TableTdSmall>
            <TableTdSmall as={`th`}><FormattedMessage id={`exp.spot`} /></TableTdSmall>
            <TableTdSmall as={`th`}><FormattedMessage id={`exp.win`} /></TableTdSmall>
          </tr>
        </TableThead>
        <TableTbody>
          {Object.values(expected).map((exp, exp_key) => {
            return (
              <tr key={`expected-${exp_key}`}>
                <TableTdSmall>{exp?.update_owner?.version}</TableTdSmall>
                {['damage', 'def', 'frag', 'spot', 'win'].map((key) => {
                  return (
                    <TableTdSmall key={`expected-${exp_key}-field-${key}`}>
                      {priceFormat(exp[key], ',', '', 4)}
                    </TableTdSmall>
                  );
                })}
              </tr>
            );
          })}
        </TableTbody>
      </SimpleTable>
    </Content>
  );
}
