import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'Home', loadComponent:()=> import('./pagina-principal/Home/Home.component') },
  { path: 'Proveedor', loadComponent:()=> import('./pagina-principal/Proveedor/Proveedor.component') },
  { path: 'Compra', loadComponent:()=> import('./pagina-principal/Compra/Compra.component') },
  { path: 'Formulario', loadComponent:()=> import('./Formularios/Formulario-Proveedor/Formulario-Proveedor.component') },
  { path: 'Formulario/:id/edit', loadComponent:()=> import('./Formularios/Formulario-Proveedor/Formulario-Proveedor.component')} ,
];
