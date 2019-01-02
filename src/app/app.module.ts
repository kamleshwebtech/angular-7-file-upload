import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { DataserviceService } from './dataservice.service';
import { MessageService } from './message.service';

import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';


@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
    {
      path: '',
      component: UploaderComponent
    }

	]),
  ],
  providers: [DataserviceService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
