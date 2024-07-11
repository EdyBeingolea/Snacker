import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './Home.component.html',
    styleUrl: './Home.component.css',
})
export default class HomeComponent { }
