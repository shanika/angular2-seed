import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import { AgmCoreModule } from 'angular2-google-maps/core';
import {Home} from "./home/home.component";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {SearchBar} from "./search-bar/search-bar.component";
import {Header} from "./header/header.component";
import {MapPanel} from "./map-panel/map-panel.component";

@NgModule({
  declarations: [AppComponent, Header, SearchBar, MapPanel, Home],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig),
                  AgmCoreModule.forRoot({apiKey: 'AIzaSyALYSPFzg_jpcc6xMgTAh3pr8wHxHzpmr0'})],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
