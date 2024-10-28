import { environment } from 'src/environments/environment';

type Tab = {
  link:
      | 'menu'
      | 'subscription'
      | 'tasks'
      | 'notifications'
      | 'authors';
  icon: string;
  tooltip:
      | 'Menu'
      | 'Subscription'
      | 'Tasks'
      | 'Notifications'
      | 'Authors';
};

let tabs: Array<Tab> = []
if (environment.featureFlipper.metronicMenu) {
  tabs = [
    {
      link: 'menu',
      icon: './assets/media/icons/duotune/finance/fin006.svg',
      tooltip: 'Menu',
    },
    {
      link: 'tasks',
      icon: './assets/media/icons/duotune/general/gen048.svg',
      tooltip: 'Tasks',
    },
    {
      link: 'notifications',
      icon: './assets/media/icons/duotune/abstract/abs027.svg',
      tooltip: 'Notifications',
    },
    {
      link: 'authors',
      icon: './assets/media/icons/duotune/files/fil005.svg',
      tooltip: 'Authors',
    },
  ];
} else {
  tabs = [
    {
      link: 'menu',
      icon: './assets/media/icons/duotune/finance/fin006.svg',
      tooltip: 'Menu',
    },
    {
      link: 'tasks',
      icon: './assets/media/icons/duotune/finance/fin006.svg',
      tooltip: 'Menu',
    },
    {
      link: 'notifications',
      icon: './assets/media/icons/duotune/abstract/abs027.svg',
      tooltip: 'Notifications',
    },
  ];
}

export { tabs, Tab };
