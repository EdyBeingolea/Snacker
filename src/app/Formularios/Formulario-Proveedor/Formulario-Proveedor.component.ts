import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-formulario-proveedor',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule
    ],
    templateUrl: './Formulario-Proveedor.component.html',
    styleUrl: './Formulario-Proveedor.component.css',
})
export default class FormularioProveedorComponent { }
