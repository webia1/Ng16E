import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'demos',
    loadChildren: () =>
      import('./routed/modules/demos/demos.module').then((m) => m.DemosModule),
  },
];
