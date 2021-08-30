import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private authService: AuthService) { }

	// Metodo interceptor utilizado para tratar e gerenciar requisições HTTP antes de enviadas ao servidor
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

		const token = this.authService.getToken();
		const isApiUrl = request.url.startsWith(environment.apiUrl);

		//Verifico se a requisição parte da URL base da API
		//Podendo verificar se usuario estaria logado ou se existe um token
		if(token && isApiUrl){
			request = request.clone({
				setHeaders: {
					Authorization: "Bearer " + token
				}
			});
		}

		return next.handle(request);
	}
}
