require('dotenv').config();
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'dotenv/config';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
