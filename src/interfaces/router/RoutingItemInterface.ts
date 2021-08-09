import { RouterComponentProps } from "interfaces/router/RouterComponentProps";
import { ComponentType } from "react";
import { LoadableComponent } from 'react-loadable';

export interface RoutingItemInterface extends Array<{
  header?: string,
  route: string | string[],
  Component: ComponentType<RouterComponentProps> & LoadableComponent,
  params?: RouterComponentProps,
  authorized?: boolean,
}> {

}
