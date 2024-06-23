import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
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

  /* refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('firebase_refresh_token'); // Replace with your storage mechanism

    if (!refreshToken) {
      throw new Error('No refresh token available'); // Handle case where no refresh token exists
    }

    const auth = getAuth(); // Get the Firebase Auth instance

    return from(signInWithRefreshToken(auth, refreshToken)).pipe(
      switchMap((userCredential) => {
        const newIdToken = userCredential.user?.refreshToken; // Update stored refresh token (optional)
        return of({ newIdToken }); // Return the new ID token or relevant data
      })
    );
  } */

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
