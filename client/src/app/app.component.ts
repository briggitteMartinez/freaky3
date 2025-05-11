import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';


  //providern vi la tillprecis gör det möjligt för oss att eterfråga HttpClient
  // detta kallas för dependency injection
  // HttpClient är en tjänst som gör det möjligt att göra HTTP-förfrågningar
  constructor(private http: HttpClient) {
    // Vi gör anrop till API:et precis som vi gjorde med fetch i React men använder "http" istället

    console.log('AppComponent initialized');
    // Vi gör en GET-förfrågan till /api/products och prenumererar på svaret(hämtar produkterna)
    // och loggar dem i konsolen
    this.http.get('/api/products').subscribe((products) => {
      console.log('Products:', products);
    });
  }
  ngOnInit() {
    console.log('AppComponent ngOnInit called');
  }
}
