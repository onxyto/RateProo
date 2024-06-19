import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private httpClient = inject(HttpClient);

  registerUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Observable<any> {
    const user = { firstName, lastName, email, password };
    return this.httpClient.post(`${environment.api}/user/signup`, {
      ...user,
      role: 'USER',
    });
  }

  async loginUser(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async resetPassword(email: string) {
    return await sendPasswordResetEmail(this.auth, email);
  }

  async signOut() {
    return await this.auth.signOut();
  }

  async getProfile() {
    return await this.auth.currentUser;
  }
}
