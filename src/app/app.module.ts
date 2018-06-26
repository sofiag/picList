import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import {PhotosService} from './photos.service';
import { PhotosDetailComponent } from './photos-list/photos-detail/photos-detail.component';
import {AppMaterialModule} from "./app-material-module";


@NgModule({
  declarations: [
    AppComponent,
    PhotosListComponent,
    PhotosDetailComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
