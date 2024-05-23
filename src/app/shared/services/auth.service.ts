import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);

  async registerUser(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
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
