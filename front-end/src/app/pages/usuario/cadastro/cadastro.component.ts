import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CepService } from './../../../services/cep.service';

import Swal from 'sweetalert2'

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.html',
	styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

	formCadastro!: FormGroup;

	submitted = false;

	constructor(
		private formBuild: FormBuilder,
		private cepService: CepService,
		private usuarioService: UsuarioService,
		private route: ActivatedRoute,
		private router: Router,
	) { }

	ngOnInit(): void {
		this.createFormCadastroUsuario();
	}

	// Instancia o controles do formulario para ser utilizado na view para validações
	get f() { return this.formCadastro.controls; }

	// Metodo responsavel por criar form cadastro e suas validações utilizando o construtor formBuild
	createFormCadastroUsuario() {
		this.formCadastro = this.formBuild.group({
			name: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			cpf: ['', Validators.required],
			telefone: ['', Validators.required],
			password: ['', Validators.required],
			cep: ['', Validators.required],
			logradouro: ['', Validators.required],
			numero: ['', Validators.required],
			bairro: ['', Validators.required],
			cidade: ['', Validators.required],
			uf: ['', Validators.required]
		});
	}

	// Submete os dados do cadastro de usuário para o service de criação se increvendo e aguardando resposta do servidor
	// logo em seguida caso de ok(200, 201..), redireciona para para de login
	onSubmit() {
		this.submitted = true;

		//Verifica se o form esta valido
		if (this.formCadastro.invalid) {
			return;
		}

		//Envia para serviço de usuario os dados do formulário
		this.usuarioService.create(this.formCadastro.value)
			.pipe(first())
			.subscribe((response: any) => {
				this.successAlert();
			}, (error) => {
				console.log(error);
			});
	}

	// Metodo para resetar form, limpando todos os campos
	resetForm() {
		this.formCadastro.reset();
	}

	// Metodo utilizado para enviar os dados ao serviço de busca CEP, na API open source VIACEP
	buscaCep() {
		// const cep = this.formCadastro.get('cep').value;
		// if (cep != null && cep !== '') {
		// 	this.cepService.getCEP(cep)
		// 		.subscribe(dados => {
		// 			this.populaDadosForm(dados)
		// 		});
		// }
	}

	// Metodo para popular dos dados de endereço vindo da api VIACEP
	populaDadosForm(dados: any) {
		this.formCadastro.patchValue({
			logradouro: dados.logradouro,
			complemento: dados.complemento,
			bairro: dados.bairro,
			cidade: dados.localidade,
			uf: dados.uf
		});
	}

	// Metodo seria utilizado para enviar EMAIL vindo do formulario para verificar se ja existe algum cadastro com esse dado
	buscaEmail() {
		//Implementar metodo para verificar se email ja existe
	}

	// Metodo seria utilizado para enviar CPF vindo do formulario para verificar se ja existe algum cadastro com esse dado
	buscaCPF() {
		//Implementar metodo para verificar se CPF ja existe
	}

	successAlert() {
		let timerInterval
		Swal.fire({
			icon: 'success',
			title: 'Cadastro realizado com sucesso!',
			html: 'Aguarde, em instantes você será redirecionado para pagina de login',
			timer: 3000,
			timerProgressBar: true,
			allowEscapeKey:true,
			allowOutsideClick: false,
		}).then((result) => {
			if (result.dismiss === Swal.DismissReason.timer) {
				this.router.navigate(['/login']);
			}
		})
	}



}
