import { TableRowItemInterface } from "interfaces/TableRowItemInterface";

export interface TableRowInterface extends Array<TableRowItemInterface> {
  child?: Array<TableRowInterface>
}
