import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  operador: string;
  
    qualOperacao(operador: string){
      this.operador=operador;
      console.log(this.operador);
    }
  
    ngOnInit() {
      this.operador='soma';
    }
    
}
