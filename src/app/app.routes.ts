import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    loadComponent: () => import('./pagina-principal/Home/Home.component'),
  },
  {
    path: 'Proveedor',
    loadComponent: () =>
      import('./pagina-principal/Proveedor/Proveedor.component'),
  },
  {
    path: 'Compra',
    loadComponent: () => import('./pagina-principal/Compra/Compra.component'),
  },
  {
    path: 'new',
    loadComponent: () =>
      import(
        './Formularios/Formulario-Proveedor/Formulario-Proveedor.component'
      ),
  },
];
