import { Component, inject, OnInit } from '@angular/core';
import { ProveedorService } from '../../services/proveedor.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-proveedor',
    standalone: true,
    imports: [
        RouterModule
    ],
    templateUrl: './Proveedor.component.html',
    styleUrl: './Proveedor.component.css',
})
export default class ProveedorComponent implements OnInit{
    
    private proveedorservice = inject(ProveedorService); 

    proveedor: any[] = [];
    ngOnInit(): void {
        this.proveedorservice.list()
        .subscribe((proveedor:any) => {
            this.proveedor = proveedor;
        });
    }

}
