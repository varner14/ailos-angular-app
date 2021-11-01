import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [MainLayoutComponent, SidebarComponent, NavbarComponent],
  exports: [MainLayoutComponent, SidebarComponent],
  imports: [
    MatSidenavModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
  ],
})
export class CoreModule {}
