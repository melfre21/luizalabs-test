import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs/operators';
import { UsuarioLogin } from 'src/app/models/usuario-login';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin();
  submitted = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  //Metodo onSubmit de envio dos dados para o service de autenticação
  onSubmit(formLogin: any): void{

    const { email, password } = this.usuarioLogin;

    this.submitted = true;

    //Verifica se o form esta valido
		if (formLogin.invalid) {
			return;
		}

    this.authService.login(email || '', password || '').subscribe(
      data => {
        console.log("resposta do servidor em login component", data);
      },
      err => {
        console.log('Erro ao logar no component login', err);
      }
    );
  }
}
