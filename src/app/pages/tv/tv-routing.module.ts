import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvComponent } from './tv.component';

const routes: Routes = [
  { path: '', redirectTo: 'tv', pathMatch: 'full' },
  { path: 'tv', component: TvComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvRoutingModule { }
