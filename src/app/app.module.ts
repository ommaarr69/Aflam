import { AboutRoutingModule } from './pages/about/about-routing.module';
import { TvComponent } from './pages/tv/tv.component';
import { PeopleComponent } from './pages/people/people.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    RegisterComponent,
    MoviesComponent,
    GalleryComponent,
    PeopleComponent,
    TvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AboutRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
