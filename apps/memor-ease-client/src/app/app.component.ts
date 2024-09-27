import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './core/components/content/content.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    ContentComponent,
    DashboardComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
