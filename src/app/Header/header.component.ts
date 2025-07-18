//convert this class to component => import component from core package
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class HeaderComponent {}