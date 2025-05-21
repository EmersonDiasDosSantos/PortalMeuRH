import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmacao: ['', Validators.required],
      termos: [false, Validators.requiredTrue]
    }, { validators: this.senhasIguais });
  }

  senhasIguais(group: FormGroup) {
    const senha = group.get('senha')?.value;
    const confirmacao = group.get('confirmacao')?.value;
    return senha === confirmacao ? null : { senhasDiferentes: true };
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const dados = {
        nome: this.cadastroForm.value.nome,
        email: this.cadastroForm.value.email,
        senha: this.cadastroForm.value.senha,
      };

      localStorage.setItem('usuario', JSON.stringify(dados));

       this.router.navigate(['/dashboard']);

    } else {
      this.cadastroForm.markAllAsTouched();
    }
  }

  get nome() {
    return this.cadastroForm.get('nome')!;
  }

  get email() {
    return this.cadastroForm.get('email')!;
  }

  get senha() {
    return this.cadastroForm.get('senha')!;
  }

  get confirmacao() {
    return this.cadastroForm.get('confirmacao')!;
  }

  get termos() {
    return this.cadastroForm.get('termos')!;
  }

}
