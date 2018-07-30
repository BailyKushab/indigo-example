import { MenuService } from './menu.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndigoSidenavComponent } from './indigo-sidenav/indigo-sidenav.component';
import { IndigoHeaderComponent } from './indigo-header/indigo-header.component';
import { IndigoToolbarComponent } from './indigo-toolbar/indigo-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    IndigoSidenavComponent,
    IndigoHeaderComponent,
    IndigoToolbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
