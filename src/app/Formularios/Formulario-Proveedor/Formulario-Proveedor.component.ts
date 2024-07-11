import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProveedorService } from '../../services/proveedor.service';
import { Proveedor } from '../../model/Proveedor.query';

@Component({
  selector: 'app-formulario-proveedor',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './Formulario-Proveedor.component.html',
  styleUrls: ['./Formulario-Proveedor.component.css'],
})
export default class FormularioProveedorComponent implements OnInit {
  private fb = inject(FormBuilder);
  private proveedorService = inject(ProveedorService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  form?: FormGroup;
  proveedor?: Proveedor;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.proveedorService.get(parseInt(id)).subscribe((proveedor) => {
        this.proveedor = proveedor;
        this.form = this.fb.group({
          nombre: [proveedor.nombre, [Validators.required]],
          apellido: [proveedor.apellido, [Validators.required]],
          direccion: [proveedor.direccion, [Validators.required]],
          celular: [proveedor.celular, [Validators.required]],
          email: [proveedor.email, [Validators.required]],
          documento: [proveedor.documento, [Validators.required]],
          documentoN: [proveedor.documentoN, [Validators.required]],
        });
      });
    } else {
      this.form = this.fb.group({
        nombre: ['', [Validators.required]],
        apellido: ['', [Validators.required]],
        direccion: ['', [Validators.required]],
        celular: ['', [Validators.required]],
        email: ['', [Validators.required]],
        documento: ['', [Validators.required]],
        documentoN: ['', [Validators.required]],
      });
    }
  }

  save() {
    const proveedorFrom = this.form!.value;
    if (this.proveedor) {
      this.proveedorService
        .update(this.proveedor.id, proveedorFrom)
        .subscribe(() => {
          this.router.navigate(['/Proveedor']);
          alert('Proveedor Editado');
        });
    } else {
      this.proveedorService.post(proveedorFrom).subscribe(() => {
        this.router.navigate(['/Proveedor']);
        alert('Proveedor Registrado');
      });
    }
  }
}
