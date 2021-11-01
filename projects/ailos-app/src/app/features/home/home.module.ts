import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HomeService } from '../../services/home.service';
import { HomeComponent } from './home.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [HomeComponent],

  imports: [
    HttpClientModule,
    CommonModule,
    HomeRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-bottom-center",
      preventDuplicates: true,
    }),
  ],
  providers: [HomeService],
})
export class HomeModule {}
