import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  nomeUsuario: string = '';

  ngOnInit() {
    const usuarioString = localStorage.getItem('usuario');

    if (usuarioString) {      
      const usuario = JSON.parse(usuarioString);
     this.nomeUsuario = usuario.nome;
    } else {
      console.log('Nenhum usuário encontrado no localStorage.');
    }
  }

}
