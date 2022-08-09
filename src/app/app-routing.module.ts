import { AuthGuard } from './auth.guard';
import { TvComponent } from './tv/tv.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'About', canActivate: [AuthGuard], component: AboutComponent },
  { path: 'Gallery', canActivate: [AuthGuard], component: GalleryComponent },
  { path: 'Movies', canActivate: [AuthGuard], component: MoviesComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'People', canActivate: [AuthGuard], component: PeopleComponent },
  { path: 'Tv', canActivate: [AuthGuard], component: TvComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
