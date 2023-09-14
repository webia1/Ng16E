import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

interface HotModule {
  accept: () => void;
  dispose: (callback: () => void) => void;
}
declare let module: { hot: HotModule };
const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (module['hot']) {
  module['hot'].accept();
  module['hot'].dispose(() => {
    /**
     * Possible Szenarios:
     * - Deleting Intervals/Timeouts
     * - Removal of some eventlisteners
     * - Closing of WebSockets,..
     */
  });
  bootstrap().then((mod) => {
    console.log ('MOD is loaded!', mod);
  });
} else {
  bootstrap().catch((err) => console.error(err));
}