import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './screens/login/login.component';
import { SignupComponent } from './screens/signup/signup.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [CommonModule],
})
export class AuthenticationModule {}
