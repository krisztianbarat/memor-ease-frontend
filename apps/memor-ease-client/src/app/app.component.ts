import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './cores/components/main/main.component';

@Component({
  standalone: true,
  imports: [RouterModule, MainComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent { }
