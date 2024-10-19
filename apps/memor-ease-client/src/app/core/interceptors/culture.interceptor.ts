import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const cultureInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({
    headers: req.headers.set('culture', 'hu-HU'),
  });

  return next(clonedRequest);
};

export function loggingInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  return next(req);
}
