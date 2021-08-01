export interface TabItemInterface {
  translation: string,
  value: number,
  handleClick: () => (route: string) => any,
}
