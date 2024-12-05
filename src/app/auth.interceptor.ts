import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Logic to modify the request
    const authToken = localStorage.getItem('authToken');  // Example: Retrieve the token

    if (authToken) {
      // Clone the request and add the Authorization header with the token
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        },
      });
      return next.handle(clonedRequest);
    }

    return next.handle(req);
  }
}
