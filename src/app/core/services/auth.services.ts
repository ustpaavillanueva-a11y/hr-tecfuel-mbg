import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, catchError, map, of, tap } from 'rxjs';

export interface EmployeeRecord {
  id: number;
  employeeId: string;
  password: string;
  fullName: string;
  role: 'employee' | 'admin';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly apiUrl = 'http://localhost:3000';
  private readonly storageKey = 'hr-system-auth-user';

  private readonly currentUserState = signal<EmployeeRecord | null>(null);

  readonly currentUser = computed(() => this.currentUserState());
  readonly isLoggedIn = computed(() => !!this.currentUserState());

  constructor() {
    this.currentUserState.set(this.readStoredUser());
  }

  login(employeeId: string, password: string): Observable<boolean> {
    return this.http
      .get<EmployeeRecord[]>(
        `${this.apiUrl}/employees?employeeId=${encodeURIComponent(employeeId)}`
      )
      .pipe(
        map((users) => {
          const match = users.find((user) => user.password === password) ?? null;
          return match;
        }),
        tap((user) => {
          this.currentUserState.set(user);

          if (!this.isBrowser()) {
            return;
          }

          if (user) {
            localStorage.setItem(this.storageKey, JSON.stringify(user));
          } else {
            localStorage.removeItem(this.storageKey);
          }
        }),
        map((user) => !!user),
        catchError(() => of(false))
      );
  }

  logout(): void {
    this.currentUserState.set(null);

    if (this.isBrowser()) {
      localStorage.removeItem(this.storageKey);
    }
  }

  private readStoredUser(): EmployeeRecord | null {
    if (!this.isBrowser()) {
      return null;
    }

    const raw = localStorage.getItem(this.storageKey);

    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw) as EmployeeRecord;
    } catch {
      localStorage.removeItem(this.storageKey);
      return null;
    }
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
