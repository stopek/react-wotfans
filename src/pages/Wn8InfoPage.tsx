import { Grid } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { WN8_CALCULATOR_TANK_URL, WN8_CALCULATOR_URL } from "app/routes";
import FullPreloader from "components/core/FullPreloader";
import ButtonInput from "components/ui/input/ButtonInput";
import SimpleText from "components/wot/SimpleText";
import Tank from "components/wot/tanks/Tank";
import TanksListAndFilters from "components/wot/tanks/TanksListAndFilters";
import Wn8Bar from "components/wot/wn8/Wn8Bar";
import fillRoute from "helpers/fillRoute";
import mainScroll from "helpers/mainScroll";
import { numberResult } from "helpers/priceFormat";
import { sortByWN8 } from "helpers/user";
import { TankStatInterface } from "interfaces/TankStatInterface";
import { Wn8DetailsInterface } from "interfaces/Wn8DetailsInterface";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useHistory, useParams } from "react-router";
import { fetchUserTanks, selectUserTanks } from "reducers/wotSlice";
import styled from "styled-components";
import {
  COLOR_DARK,
  COLOR_DARK_2,
  COLOR_GREEN,
  COLOR_RED,
  COLOR_SECOND,
  COLOR_THEME,
  COLOR_VIOLET,
  RADIUS
} from "styles/colors";

const Content = styled.div`
  margin: 25px 0;
  overflow-x: auto;
`;

const Table = styled.table`
  border-spacing: 1px;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  line-height: 1.4;
  vertical-align: center;
  white-space: nowrap;

  tr:first-child td:first-child {
    border-top-left-radius: ${RADIUS};
  }

  tr:first-child td:last-child {
    border-top-right-radius: ${RADIUS};
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: ${RADIUS};
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: ${RADIUS};
  }

  td {
    padding: 5px 15px;
    background: ${COLOR_DARK_2};
    border: 1px solid ${COLOR_DARK};

    &:first-child {
      border-left: 0;
    }

    span {
      display: block;
      white-space: nowrap;
    }
  }

  tr:first-child td {
    border-top: 0;
  }
`;

const Variable = styled.code`
  font-weight: 700;
  color: ${COLOR_THEME};
`;

const Variable2 = styled(Variable)`
  color: ${COLOR_SECOND};
  display: inline-block;
`;

const Value = styled.small`
  display: inline-block;
`;

const Variable3 = styled(Variable2)`
  color: ${COLOR_RED};
`;

const Variable4 = styled(Variable2)`
  color: ${COLOR_GREEN};
`;

const Variable5 = styled(Variable2)`
  color: ${COLOR_VIOLET};
`;

export default function Wn8InfoPage() {
  const { tank_id } = useParams();

  const dispatch = useAppDispatch();
  const history = useHistory();
  const tanks = useAppSelector(selectUserTanks);

  const current_stat = tanks?.response?.tanks?.find((tank) => tank?.tank?.id === parseInt(tank_id));
  const current_expected = current_stat?.tank?.current_expected;
  const current_wn = current_stat?.wn8 as Wn8DetailsInterface;
  const wn_props = current_wn.properties;

  const expected_table = ['damage', 'def', 'frag', 'spot', 'win'];
  const stats_table: Array<keyof TankStatInterface> = ['damage_assisted_track', 'damage_dealt', 'spotted', 'frags', 'capture_points', 'wins'];

  useEffect(() => dispatch<any>(fetchUserTanks()), []);

  const choiceTank = (stat: TankStatInterface) => {
    mainScroll();
    history.push(fillRoute(WN8_CALCULATOR_TANK_URL, { tank_id: stat?.tank?.id }));
  }

  const clearTank = () => {
    history.push(WN8_CALCULATOR_URL);
  }

  return (
    <Grid container spacing={2}>
      <Grid item md={12} xs={12}>
        <FullPreloader force={!tanks?.response} />
        {current_stat && (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ButtonInput label={`back`} onClick={clearTank} />
              </Grid>
              <Grid item lg={2} xs={12}>
                <Tank
                  tank={current_stat?.tank}
                  stats={{ wn8: current_wn.wn }}
                  statistics={current_stat}
                  no_stats
                />
                <Table>
                  <tbody>
                  <tr>
                    <td><Variable4>battles</Variable4></td>
                    <td>=</td>
                    <td>{current_stat?.battles}</td>
                  </tr>
                  </tbody>
                </Table>
              </Grid>

              <Grid item lg={5} xs={12}>
                <Table>
                  <tbody>
                  {stats_table.map((stat_column) => (
                    <tr key={`user-tank-stat-${stat_column}`}>
                      <td>
                        <Variable4>
                          {stat_column}
                        </Variable4>
                      </td>
                      <td>=</td>
                      <td>{numberResult(current_stat[stat_column], 0)}</td>
                    </tr>
                  ))}
                  </tbody>
                </Table>
              </Grid>
              <Grid item lg={5} xs={12}>
                <FormattedMessage id={`current.expected.for`} /> <strong>{current_stat?.tank?.name}</strong>
                <Table>
                  <tbody>
                  {expected_table.map((expected_column) => (
                    <tr key={`expected-${expected_column}`}>
                      <td>
                        <Variable3>
                          {expected_column}Expected
                        </Variable3>
                      </td>
                      <td>=</td>
                      <td>{numberResult(current_expected[expected_column])}</td>
                    </tr>
                  ))}
                  </tbody>
                </Table>
              </Grid>
            </Grid>

            <Content>
              <Table>
                <tbody>
                {[
                  ['rDamage', 'avgDamage', 'avgDamage', 'damageExpected', 'damage', ['damage_assisted_track', 'damage_dealt']],
                  ['rSpot', 'avgSpot', 'avgSpot', 'spotExpected', 'spot', 'spotted'],
                  ['rFrag', 'avgFrag', 'avgFrag', 'fragExpected', 'frag', 'frags'],
                  ['rDef', 'avgDef', 'avgDef', 'defExpected', 'def', 'capture_points'],
                  ['rWin', 'avgWin', 'avgWin', 'winExpected', 'win', 'wins'],
                ].map((v) => (
                  <>
                    <tr key={`v-first-${v[0]}`}>
                      <td><Variable5>{v[1]}</Variable5></td>
                      <td>=</td>
                      <td>
                        {Array.isArray(v[5]) ? (
                          <span>
                              {v[5].map((w, key) => (
                                <>
                                  {key > 0 && `+`}<Variable4>{w}</Variable4>
                                </>
                              ))}
                            </span>
                        ) : (
                          <span>
                              <Variable4>{v[5]}</Variable4>
                            </span>
                        )}

                        {Array.isArray(v[5]) ? (
                          <span>
                              {v[5].map((w, key) => (
                                <Value>
                                  {key > 0 && `+`}{numberResult(current_stat[w])}
                                </Value>
                              ))}
                            </span>
                        ) : (
                          <span>
                              <Value>{numberResult(current_stat[v[5]])}</Value>
                            </span>
                        )}
                      </td>
                      <td>/</td>
                      <td>
                        <span>
                          <Variable4>tank_battles</Variable4>
                        </span>
                        <Value>
                          {current_stat?.battles}
                        </Value>
                      </td>
                      <td>=</td>
                      <td>
                        {numberResult(wn_props[v[2]])}
                      </td>
                    </tr>
                    <tr key={`v-second-${v[0]}`}>
                      <td><Variable>{v[0]}</Variable></td>
                      <td>=</td>
                      <td>
                        <span>
                          <Variable5>{v[1]}</Variable5>
                        </span>
                        <span>
                          <Value>{numberResult(wn_props[v[2]])}</Value>
                        </span>
                      </td>
                      <td>/</td>
                      <td>
                        <span>
                          <Variable3>{v[3]}</Variable3>
                        </span>
                        <Value>
                          {numberResult(current_expected[v[4]])}
                        </Value>
                      </td>
                      <td>=</td>
                      <td>
                        {numberResult(wn_props[v[0]])}
                      </td>
                    </tr>
                    <tr key={`v-break-${v[0]}`}>
                      <td colSpan={7} />
                    </tr>
                  </>
                ))}
                </tbody>
              </Table>
            </Content>

            <Content>
              <Table>
                <tbody>
                <tr>
                  <td><Variable>rWinC</Variable></td>
                  <td>=</td>
                  <td>MAX(0, (<Variable>rWin</Variable> - 0.71) / (1 - 0.71))</td>
                  <td>=</td>
                  <td>MAX(0, (<Variable>{wn_props.rWin}</Variable> - 0.71) / (1 - 0.71))</td>
                  <td>=</td>
                  <td>{wn_props?.rWinC}</td>
                </tr>
                <tr>
                  <td><Variable>rDamageC</Variable></td>
                  <td>=</td>
                  <td>MAX(0, (<Variable>rDamage</Variable> - 0.22) / (1 - 0.22))</td>
                  <td>=</td>
                  <td>MAX(0, (<Variable>{wn_props?.rDamage}</Variable> - 0.22) / (1 - 0.22))</td>
                  <td>=</td>
                  <td>{wn_props?.rDamageC}</td>
                </tr>
                <tr>
                  <td><Variable>rFragC</Variable></td>
                  <td>=</td>
                  <td>MAX(0, MIN(<Variable>rDamageC</Variable> + 0.2, (<Variable>rFrag</Variable> - 0.12) / (1 - 0.12)))
                  </td>
                  <td>=</td>
                  <td>MAX(0, MIN(<Variable>{wn_props?.rDamageC}</Variable> + 0.2,
                    (<Variable>{wn_props?.rFrag}</Variable> - 0.12) / (1 - 0.12)))
                  </td>
                  <td>=</td>
                  <td>{wn_props?.rFragC}</td>
                </tr>
                <tr>
                  <td><Variable>rSpotC</Variable></td>
                  <td>=</td>
                  <td>MAX(0, MIN(<Variable>rDamageC</Variable> + 0.1, (<Variable>rSpot</Variable> - 0.38) / (1 - 0.38)))
                  </td>
                  <td>=</td>
                  <td>MAX(0, MIN(<Variable>{wn_props?.rDamageC}</Variable> + 0.1,
                    (<Variable>{wn_props?.rSpot}</Variable> - 0.38) / (1 - 0.38)))
                  </td>
                  <td>=</td>
                  <td>{wn_props?.rFragC}</td>
                </tr>
                <tr>
                  <td><Variable>rDefC</Variable></td>
                  <td>=</td>
                  <td>MAX(0, MIN(<Variable>rDamageC</Variable> + 0.1, (<Variable>rDef</Variable> - 0.10) / (1 - 0.10)))
                  </td>
                  <td>=</td>
                  <td>MAX(0, MIN(<Variable>{wn_props?.rDamageC}</Variable> + 0.1,
                    (<Variable>{wn_props?.rDef}</Variable> - 0.10) / (1 - 0.10)))
                  </td>
                  <td>=</td>
                  <td>{wn_props?.rDefC}</td>
                </tr>
                <tr>
                  <td><Variable>WN8</Variable></td>
                  <td>=</td>
                  <td>
                    980 * <Variable>rDamageC</Variable> + <br />
                    210 * <Variable>rDamageC</Variable> * <Variable>rFragC</Variable> + <br />
                    155 * <Variable>rFragC</Variable> * <Variable>rSpotC</Variable> + <br />
                    75 * <Variable>rDefC</Variable> * <Variable>rFragC</Variable> + <br />
                    145 * MIN(1.8, <Variable>rWinC</Variable>)
                  </td>
                  <td>=</td>
                  <td>
                    980 * <Variable>{wn_props?.rDamageC}</Variable> + <br />
                    210 * <Variable>{wn_props?.rDamageC}</Variable> * <Variable>{wn_props?.rFragC}</Variable> + <br />
                    155 * <Variable>{wn_props?.rFragC}</Variable> * <Variable>{wn_props?.rSpotC}</Variable> + <br />
                    75 * <Variable>{wn_props?.rDefC}</Variable> * <Variable>{wn_props?.rFragC}</Variable> + <br />
                    145 * MIN(1.8, <Variable>{wn_props?.rWinC}</Variable>)
                  </td>
                  <td>=</td>
                  <td>
                    <Wn8Bar value={current_stat?.wn8?.wn} />
                  </td>
                </tr>
                </tbody>
              </Table>
            </Content>
            <SimpleText full>
              <p>
                MIN() - <FormattedMessage id={`min.explain`} />: MIN(2,1) = 1 <br />
                MAX() - <FormattedMessage id={`max.explain`} />: MAX(2,1) = 2
              </p>
            </SimpleText>
          </>
        )}

        {tanks?.response && !current_stat && (
          <TanksListAndFilters
            tanks_stats={sortByWN8(tanks?.response?.tanks)}
            custom={{ name: true, tier: true, nation: true, type: true, premium: true }}
            card_props={{
              no_stats: true,
              onChoiceTank: (tank) => choiceTank(tank)
            }}
          />
        )}
      </Grid>
    </Grid>
  );
}
