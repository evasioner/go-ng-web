import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { TestPageComponent } from './test-page/test-page.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    TestPageComponent,
  ],
})
export class PagesModule {
}
