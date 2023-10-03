import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PlacementsComponent } from './placements/placements.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PlacementSummaryComponent } from './placement-summary/placement-summary.component';
import { PlacementPolicyComponent } from './placement-policy/placement-policy.component';
import { CompaniesVisitComponent } from './companies-visit/companies-visit.component';
import { WhyJecjComponent } from './why-jecj/why-jecj.component';
import { WhyGecjComponent } from './why-gecj/why-gecj.component';
import { FacultyComponent } from './faculty/faculty.component';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { FaqdialogComponent } from './faqdialog/faqdialog.component';
import {MatDialogModule} from '@angular/material/dialog';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutusComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'placements',component:PlacementsComponent},
  {path:'placementSummary',component:PlacementSummaryComponent},
  {path:'placementPolicy',component:PlacementPolicyComponent},
  {path:'companiesVisit',component:CompaniesVisitComponent},
  {path:'whyGecj',component:WhyGecjComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'companies-visit',component:CompaniesVisitComponent},
  {path:'faqs',component:FaqsComponent},
  {path:'contactus',component:ContactusComponent},
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    PlacementsComponent,
    GalleryComponent,
    FaqsComponent,
    ContactusComponent,
    PlacementSummaryComponent,
    PlacementPolicyComponent,
    CompaniesVisitComponent,
    WhyJecjComponent,
    WhyGecjComponent,
    FacultyComponent,
    FaqdialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatTreeModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
