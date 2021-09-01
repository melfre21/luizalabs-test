import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { CepService } from './../../../services/cep.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formCadastroCliente!: FormGroup;

	submitted = false;
  constructor(
    private formBuild: FormBuilder,
		private cepService: CepService,
		private route: ActivatedRoute,
		private router: Router,
  ) { }

  ngOnInit(): void {
    this.createFormCadastroUsuario();
  }

  // Instancia o controles do formulario para ser utilizado na view para validações
	get f() { return this.formCadastroCliente.controls; }

  // Metodo responsavel por criar form cadastro e suas validações utilizando o construtor formBuild
	createFormCadastroUsuario() {
		this.formCadastroCliente = this.formBuild.group({
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
		if (this.formCadastroCliente.invalid) {
			return;
		}

		//Envia para serviço de usuario os dados do formulário
		// this.usuarioService.create(this.formCadastroCliente.value)
		// 	.pipe(first())
		// 	.subscribe((response: any) => {
		// 		this.successAlert();
		// 	}, (error) => {
		// 		console.log(error);
		// 	});
	}

	// Metodo para resetar form, limpando todos os campos
	resetForm() {
		this.formCadastroCliente.reset();
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

}
