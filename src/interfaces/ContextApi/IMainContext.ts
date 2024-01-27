export interface IMainContext {
  navName: string;
  theme: string;
  setNavName: (navName: string) => void;
  setTheme: (theme: string) => void;
}
