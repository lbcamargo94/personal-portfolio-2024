/* eslint-disable no-unused-vars */
export interface IMainContext {
  theme: string;
  menu: boolean;
  setTheme: (theme: string) => void;
  setMenu: (menu: boolean) => void;
}
