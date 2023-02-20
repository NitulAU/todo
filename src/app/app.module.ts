import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared/auth.guard';
import { LoginService } from './form/login.service';
import { CategoryComponent } from './category/category.component';
import { DateComponent } from './create/date/date.component';
import { BasicComponent } from './main/basic/basic.component';
import { SignoutComponent } from './main/signout/signout.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateComponent,
    ListComponent,
    FormComponent,
    MainComponent,
    CategoryComponent,
    DateComponent,
    BasicComponent,
    SignoutComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
