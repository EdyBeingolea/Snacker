import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Proveedor } from '../model/Proveedor.query';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private http = inject(HttpClient);

  list(){
    return this.http.get<Proveedor[]>(`https://reimagined-space-computing-machine-74g5v7gv567cx477-8085.app.github.dev/v1/Proveedor`)
  }

  get(id: number){
    return this.http.get<Proveedor>(`https://reimagined-space-computing-machine-74g5v7gv567cx477-8085.app.github.dev/v1/Proveedor/${id}`)
  }

  post(proveedor:Proveedor){
    return this.http.post<Proveedor>(`https://reimagined-space-computing-machine-74g5v7gv567cx477-8085.app.github.dev/v1/Proveedor`, proveedor)
  }

  update(id: number, proveedor: Proveedor) {
    return this.http.put<Proveedor>(`https://reimagined-space-computing-machine-74g5v7gv567cx477-8085.app.github.dev/v1/Proveedor/${id}`, proveedor);
  }

  delete(id: number, proveedor : Proveedor){
    return this.http.put<Proveedor>(`https://reimagined-space-computing-machine-74g5v7gv567cx477-8085.app.github.dev/v1/Proveedor/Eliminar/${id}`, proveedor)
  }

  restore(id: number, proveedor : Proveedor){
    return this.http.put<Proveedor>(`https://reimagined-space-computing-machine-74g5v7gv567cx477-8085.app.github.dev/v1/Proveedor/Restaurar/${id}`, proveedor)
  }

}
