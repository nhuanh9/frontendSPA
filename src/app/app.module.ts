import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './Components/Blocks/menu/menu.component';
import {UsersComponent} from './Components/Blocks/login/users.component';
import {HeaderComponent} from './Components/Blocks/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListHouseComponent} from './Components/Pages/house/list-house/list-house.component';
import {RegisterComponent} from './Components/Pages/users/register/register.component';
import {CarouselComponent} from './Components/Blocks/carousel/carousel.component';
import {FooterComponent} from './Components/Blocks/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {DetailHouseComponent} from './Components/Pages/house/detail-house/detail-house.component';
import {CreateHouseComponent} from './Components/Pages/house/create-house/create-house.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { LoginComponent } from './Components/Pages/users/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    HeaderComponent,
    ListHouseComponent,
    RegisterComponent,
    CarouselComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
