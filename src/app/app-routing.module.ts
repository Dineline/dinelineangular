import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleDataComponent } from './google-data/google-data.component';
import { RestaurentGroupComponent } from './restaurent-group/restaurent-group.component';
import { LocationGroupComponent } from './location-group/location-group.component';
import { DaniComponent } from './dani/dani.component';
import { BlastsComponent } from './blasts/blasts.component';

const routes: Routes = [
  { path :'' ,component: RestaurentGroupComponent},
  { path :'google_data/:loc_id' ,component: GoogleDataComponent},
  { path :'restaurent_group/:loc_id' ,component: RestaurentGroupComponent},
  { path :'Location/:loc_id' ,component: LocationGroupComponent},
  { path :'blasts/:loc_id/:id' ,component: BlastsComponent},
  { path :'dani/:loc_id' ,component: DaniComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents= [
  GoogleDataComponent,RestaurentGroupComponent,LocationGroupComponent,DaniComponent,BlastsComponent
]
