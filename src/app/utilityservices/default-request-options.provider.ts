import {Injectable} from '@angular/core';
import {isUndefined} from "util";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class DefaultRequestOptions implements HttpInterceptor {

    intercept(options: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(options.url && options.url.startsWith("https://maps.googleapis.com/")){
            return next.handle(options);
        }
        if(options.url && options.url.includes("iwant-cdn-service")){
            return next.handle(options);
        }

        if(options.url && options.url.includes("elerning-service")){
            return next.handle(options);
        }
        if(options.url && options.url.includes("data-publisher-service")){
            return next.handle(options);
        }

        if(options.url && options.url.includes("subscriptionpackage")){
            return next.handle(options);
        }

        if(options.url && options.url.includes("videocontent-service")){
            return next.handle(options);
        }
        if(options.url && options.url.includes("player-service")){
            return next.handle(options);
        }
        if(options.url && options.url.includes("data-publisher-service")){
            return next.handle(options);
        }

        if (options && options.headers) {
            if(options.headers.get('Content-Type') !== null){
                return next.handle(options);
            }
            if(options.headers.get('Content-Type') === ''){
                options.headers.set('Content-Type', 'application/json');
            }
            if(!isUndefined(localStorage.getItem('token')) && localStorage.getItem('token') !== null){
                options.headers.set('Authorization', `Bearer ` + localStorage.getItem('token'));
                const clone = options.clone({ setHeaders: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
                return next.handle(clone);
            }

        } else {
            if(!isUndefined(localStorage.getItem('token')) && localStorage.getItem('token') !== null){
                options.headers.set('Authorization', `Bearer ` + localStorage.getItem('token'));
                const clone = options.clone({ setHeaders: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
                return next.handle(clone);
            }
        }

        return next.handle(options);
    }
}
