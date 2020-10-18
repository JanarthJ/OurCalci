import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThridComponent } from './thrid/thrid.component';
import { FourComponent } from './four/four.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FiveComponent } from './five/five.component';
import {MatMenuModule} from '@angular/material/menu';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';
import { EightComponent } from './eight/eight.component';
import {MatRippleModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [
  {path:'Standard_Calci' ,component:OneComponent}, 
  {path:'Scientific_calci', component: TwoComponent},
  {path: 'Area_calci',component:ThridComponent},
  {path:'BMI_calci',component:FourComponent},  
  {path:'prime',component:SevenComponent},
  {path:'about',component:EightComponent},
  {path:'Interest',component:FiveComponent},
  {path:'Compound_interest',component:SixComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThridComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    EightComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),MatMenuModule,
    AppRoutingModule,MatButtonModule,MatSidenavModule,MatListModule,
    BrowserAnimationsModule,MatToolbarModule,MatIconModule,CommonModule,
    MatTabsModule,MatRippleModule,MatTableModule,MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,MatListModule,
    MatIconModule,
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

  
export class MaterialModule {}