import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken();
    if (authToken) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`, 
        },
      });

      const headers = new HttpHeaders({
        Authorization: authToken,
      });

      const headersClone = req.clone({headers})

      return next.handle(headersClone).pipe(
        catchError((err:any) =>{
            console.log(err)
            if([401,403].indexOf(err.status)!==1){
              this.router.navigate(['/login'])
            }
            const error = err.error.message||err.statusText;
            return throwError(err);
        })
      );
    }

    return next.handle(req);
  }
}
export { AuthService };

