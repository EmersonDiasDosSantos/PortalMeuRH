import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private chaveUsuarios = 'usuarios';

  salvarUsuario(usuario: any) {
    const usuarios = this.obterUsuarios();
    usuarios.push(usuario);
    localStorage.setItem(this.chaveUsuarios, JSON.stringify(usuarios));
  }

  obterUsuarios(): any[] {
    return JSON.parse(localStorage.getItem(this.chaveUsuarios) || '[]');
  }
}
