import {Injectable, Injector} from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders
} from "@angular/common/http";

import { Observable} from "rxjs";

@Injectable()
export  class Http_interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const access_token = 'aWhvYWRvbjppaG9hZG9uQDEyM2VydGFAIQ==';
    const reqWithAuth = req.clone({
      setHeaders: {
        Authorization: `Basic ${access_token}`
      }
    })
    return next.handle(reqWithAuth);
  }
}
