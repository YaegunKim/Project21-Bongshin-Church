export interface NavChild {
  label: string;
  path: string;
}

export interface NavItem {
  label: string;
  path: string;
  children: NavChild[];
}
