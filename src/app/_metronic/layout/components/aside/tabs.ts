import { environment } from 'src/environments/environment';

type Tab = {
  link:
      | 'endkunden'
      | 'versorger'
      | 'agent';
  icon: string;
  tooltip:
      | 'Endkunden'
      | 'Versorger'
      | 'Agent';
};

let tabs: Array<Tab> = []

tabs = [
  {
    link: 'endkunden',
    icon: './assets/media/icons/duotune/graphs/gra003.svg',
    tooltip: 'Endkunden',
  },

  // {
  //   link: 'versorger',
  //   icon: './assets/media/icons/duotune/general/gen048.svg',
  //   tooltip: 'Versorger',
  // },

  {
    link: 'agent',
    icon: './assets/media/icons/duotune/abstract/abs027.svg',
    tooltip: 'Agent',
  },
];


export { tabs, Tab };
