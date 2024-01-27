export interface IMainContext {
  navName: string;
  theme: string;
  menu: boolean;
  setNavName: (navName: string) => void;
  setTheme: (theme: string) => void;
  setMenu: (menu: boolean) => void;
}
