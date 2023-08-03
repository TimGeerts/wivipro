import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AuthService,
  HorizontalCardComponent,
} from '@wivipro/modules/shared/ui';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { FirebaseError } from 'firebase/app';

@Component({
  selector: 'wivipro-admin-login',
  standalone: true,
  imports: [CommonModule, HorizontalCardComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  login(): void {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    this.authService
      .signIn(username, password)
      .pipe(take(1))
      .subscribe({
        next: (_) => {
          this.form.reset();
          this.router.navigate(['/']);
        },
        error: (e: FirebaseError) => {
          // TODO handle errorcodes
          console.log(e);
        },
      });
  }
}
