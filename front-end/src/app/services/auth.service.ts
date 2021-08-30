import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UsuarioLogin } from '../models/usuario-login';
import { environment } from 'src/environments/environment';


const API_URL = environment.apiUrl;

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private usuarioLogado: boolean = false;
	public btnLogoutEmitter = new EventEmitter<boolean>();

	constructor(
		private router: Router,
		private http: HttpClient
	) {

	}

	// Metodo login recebe dois parametros Email e Senha  e retorna um Token no qual sera gravado em LocalStorage
	// e retorna para rota "/" que sera redirecionada para /Home
	login(email: string, password: string) {

		return this.http.post(`${environment.apiUrl}/login`, { email, password })
			.pipe(map(res => {
				// Salvando dados token localStorage
				window.localStorage.setItem('access_token', JSON.stringify(res));
				this.usuarioLogado = true;
				// Emitindo um evento para que o botão de logout apareçe
				this.btnLogoutEmitter.emit(true);
				// Retornando para rota "/"
				this.router.navigate(['/']);
			}));
	}

	//Metodo utilizando para recuperar o token para que o mesmo seja inserido em requisições futuras ao servidor
	getToken() {
		return localStorage.getItem('access_token');
	}

	// Verifica se usuário esta logado através de um token existente e retorna um boolean 
	get isLoggedIn(): boolean {
		console.log("Metodo usuario logado");
		let authToken = localStorage.getItem('access_token');
		return (authToken !== null) ? true : false;
	}

	// Efetua o logout do usuário removendo o token do localstorage do navegador
	logout() {
		let removeToken = localStorage.removeItem('access_token');
		if (removeToken == null) {
			this.router.navigate(['/login']);
		}
	}

}
