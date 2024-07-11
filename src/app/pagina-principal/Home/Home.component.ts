import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterOutlet
],
    templateUrl: './Home.component.html',
    styleUrl: './Home.component.css',
})
export default class HomeComponent { }
