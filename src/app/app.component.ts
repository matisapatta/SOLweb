import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombreSala: string = 'nombre default';
  nombreCrearSala: string;
  sala: any = {};

  constructor(private http: HttpClient) {}

  guardarSala() {
    this.http.get('/api/sala/' + this.nombreSala).subscribe((sala) => {
      if (sala.err) alert('algo no anduvo bien');
      this.sala = sala;
    })
  }

  crearSala() {
    this.http.post('/api/sala/' + this.nombreCrearSala, {}).subscribe((response) => {
      debugger;
      alert(response);
    });
  }
}
