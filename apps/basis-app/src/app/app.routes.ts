import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'demos',
    loadChildren: () =>
      import('./routed/demos/demos.module').then((m) => m.DemosModule),
  },
];
