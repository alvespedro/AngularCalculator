import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  @Input() operacao: string;
  
    param1: any = 0;
    param2: any = 0;
    result: number;
  
  
    calcularesultado( ){
      
      switch(this.operacao){
        case "soma": 
          this.result =(parseFloat(this.param1) + parseFloat(this.param2));
        break;
  
        case "sub":
          this.result =(parseFloat(this.param1) - parseFloat(this.param2));
        break;
  
        case "mul":
          this.result =(parseFloat(this.param1) * parseFloat(this.param2));
        break;
  
        case "div":
          if( this.param2 == 0){
            alert("Divisor igual a zero, escolha outro valor.");
          }else{
            this.result =(parseFloat(this.param1) / parseFloat(this.param2));
            
          }
        break;
      }
    }
  constructor() { }

  ngOnInit() {
  }

}
