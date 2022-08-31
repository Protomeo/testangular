import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcolatrice',
  templateUrl: './calcolatrice.component.html',
  styleUrls: ['./calcolatrice.component.css']
})
export class CalcolatriceComponent implements OnInit {
  input:string = "";
  risultato:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  pulisciTutto(){
    this.input = "";
    this.risultato = "";
  }
  
  cancella(){
    if (this.input !="" ) 
      this.input=this.input.slice(0, this.input.length-1)
  }

  calcolo(){
    var expr = this.input;
    expr=eval(expr);
    this.risultato=expr;
  }

  getCalcolo() {
    this.calcolo();
    this.input = this.risultato;
    if (this.input=="0") 
      this.input="";
  }

  inputNum(num:string){
    if( (num=="0" || num==".")  && this.input == "")
      return;

    if(num == "." && this.input.charAt(this.input.length-1)==".")
      return;

      this.input+=num;
      this.calcolo();
  }

  inputOperatore(operatore:string){
    if(this.input == "") return;

    var ultimoChar = this.input[this.input.length - 1];
    if ( (ultimoChar =='/' || ultimoChar == '*' || ultimoChar == '-' || ultimoChar == '+') && this.input.charAt(this.input.length-1)==ultimoChar  )
      return;
    
    this.input = this.input + operatore;
  }


}
