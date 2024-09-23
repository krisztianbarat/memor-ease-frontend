import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './cores/components/main/main.component';
import { FooterComponent } from './cores/components/footer/footer.component';
import { HeaderComponent } from './cores/components/header/header.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, MainComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent { }
