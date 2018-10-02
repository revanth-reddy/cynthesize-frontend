import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyMaterialModule } from './material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddIdeaComponent } from './components/idea/add-idea/add-idea.component';
import { IdeaService } from './services/idea.service';
import { CRYPT_CONFIG_PROVIDER, CryptConfigProvider, EncryptionServiceModule } from 'angular-encryption-service';
import { IdeaPageComponent } from './components/idea/idea-page/idea-page.component';
import { IdeaCardComponent } from './components/idea/idea-card/idea-card.component';
import { IdeaModalComponent } from './components/idea/idea-modal/idea-modal.component';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'idea/add-idea',
    component: AddIdeaComponent
  },
  {
    path: 'idea/ideas',
    component: IdeaPageComponent
  }
];

const AppCryptConfigProvider: CryptConfigProvider = {
  getSalt(): Promise<string> {
    // TODO: implement providing a salt, which should be unique per user and
    // base64-encoded.
    return Promise.resolve('saltsalt');
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AddIdeaComponent,
    IdeaPageComponent,
    IdeaCardComponent,
    IdeaModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    EncryptionServiceModule.forRoot(),
  ],
  providers: [AuthService, IdeaService, {provide: CRYPT_CONFIG_PROVIDER, useValue: AppCryptConfigProvider}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
