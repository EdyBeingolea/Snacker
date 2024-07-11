import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'Home',
    loadComponent: () => import('./pagina-principal/Home/Home.component'),
    children: [
      {
        path: 'Proveedor',
        loadComponent: () =>
          import('./pagina-principal/Proveedor/Proveedor.component'),
      },
      {
        path: 'Compra',
        loadComponent: () =>
          import('./pagina-principal/Compra/Compra.component'),
      },
    ],
  },
  {
    path:'',
    redirectTo:'Home',
    pathMatch: 'full'
  }
];
