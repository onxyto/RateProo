import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Retrieve the ID token from storage or authentication service (replace with your logic)
    const idToken = localStorage.getItem('firebase_id_token');

    if (idToken) {
      const authReq = request.clone({
        setHeaders: { Authorization: `Bearer ${idToken}` },
      });
      return next.handle(authReq);
    } else {
      // Handle the case where there's no ID token (e.g., not logged in)
      return next.handle(request);
    }
  }
}
