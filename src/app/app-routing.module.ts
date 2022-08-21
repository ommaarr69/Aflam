import { AuthGuard } from './auth.guard';
import { TvComponent } from './pages/tv/tv.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PeopleComponent } from './pages/people/people.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: 'Home', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'About', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  { path: 'Gallery', canActivate: [AuthGuard], component: GalleryComponent },
  {
    path: 'Movies', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule)
  },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  {
    path: 'People', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/people/people.module').then(m => m.PeopleModule)
  },
  {
    path: 'Tv', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/tv/tv.module').then(m => m.TvModule)
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
