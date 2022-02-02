import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MasterLayoutRoutingModule } from './master-layout-routing.module';
import { MasterLayoutScreen } from './screens/master-layout/master-layout.screen';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MasterEventsLinkerService } from './services/master-events-linker.service';

@NgModule({
  declarations: [MasterLayoutScreen, NavBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MasterLayoutRoutingModule,
  ],
  providers: [MasterEventsLinkerService],
})
export class MasterLayoutModule {}
