import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.services';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
    standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
    private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly isLoggedIn = computed(() => this.authService.isLoggedIn());

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
