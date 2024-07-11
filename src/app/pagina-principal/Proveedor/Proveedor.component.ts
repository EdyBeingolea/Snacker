import { Component, inject, OnInit } from '@angular/core';
import { ProveedorService } from '../../services/proveedor.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Proveedor } from '../../model/Proveedor.query';

@Component({
  selector: 'app-proveedor',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLink],
  templateUrl: './Proveedor.component.html',
  styleUrl: './Proveedor.component.css',
})
export default class ProveedorComponent implements OnInit {
  private proveedorservice = inject(ProveedorService);
  private router = inject(Router);
  proveedors?: Proveedor;

  proveedor: Proveedor[] = [];
  ngOnInit(): void {
    this.proveedorservice.list().subscribe((proveedor) => {
      this.proveedor = proveedor;
    });
  }

  eliminar() {
    this.proveedorservice.delete(this.proveedors?.id).subscribe(() => {
      this.router.navigate(['/Proveedor']);
      alert('Proveedor Editado');
    });
  }
}
