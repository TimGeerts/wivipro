import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalCardComponent } from '@wivipro/modules/shared/ui';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'wivipro-admin-login',
  standalone: true,
  imports: [CommonModule, HorizontalCardComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  returnUrl!: string;
  form: FormGroup = this.fb.group({
    username: ['tim.geerts1@gmail.com', Validators.required],
    password: ['Linneke1', Validators.required],
  });

  constructor(
    // private authService: AuthService,
    private fb: FormBuilder
  ) {}

  login(): void {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;

    console.log(username, password);
    // this.authService
    //   .signIn(username, password)
    //   .pipe(take(1))
    //   .subscribe({
    //     next: (_) => {
    //       this.form.reset();
    //       this.router.navigate([returnUrl]);
    //     },
    //     error: (e: FirebaseError) => {
    //       // TODO handle errorcodes
    //       console.log(e);
    //     },
    //   });
  }
}
