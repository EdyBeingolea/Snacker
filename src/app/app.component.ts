import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HomeComponent from "./pagina-principal/Home/Home.component";
import ProveedorComponent from "./pagina-principal/Proveedor/Proveedor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ProveedorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Snacker';
}
