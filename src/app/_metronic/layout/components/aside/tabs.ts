import { environment } from 'src/environments/environment';

type Tab = {
  link:
      | 'endkunden'
      | 'versorger'
      | 'admin';
  icon: string;
  tooltip:
      | 'Endkunden'
      | 'Versorger'
      | 'Admin';
};

let tabs: Array<Tab> = []

tabs = [
  {
    link: 'endkunden',
    icon: './assets/media/icons/duotune/graphs/gra003.svg',
    tooltip: 'Endkunden',
  },
  {
    link: 'versorger',
    icon: './assets/media/icons/duotune/general/gen048.svg',
    tooltip: 'Versorger',
  },
  {
    link: 'admin',
    icon: './assets/media/icons/duotune/abstract/abs027.svg',
    tooltip: 'Admin',
  },
];


export { tabs, Tab };
