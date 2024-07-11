import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-proveedor',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './Proveedor.component.html',
    styleUrl: './Proveedor.component.css',
})
export default class ProveedorComponent { }
