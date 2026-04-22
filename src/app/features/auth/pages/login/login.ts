import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.services';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
    private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  employeeId = '';
  password = '';
  isSubmitting = false;
  errorMessage = '';

  submit(): void {
    this.isSubmitting = true;
    this.errorMessage = '';

    this.authService.login(this.employeeId, this.password).subscribe((success) => {
      this.isSubmitting = false;

      if (!success) {
        this.errorMessage =
          'Invalid Employee ID or password. Please try again.';
        return;
      }

      this.router.navigateByUrl('/download-form');
    });
  }
}
