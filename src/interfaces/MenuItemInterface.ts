export interface MenuItemInterface {
  translation: string,
  i: number,
  icon: JSX.Element,
  route?: string,
  active?: string[],
  href?: string,
  disable?: boolean
}
