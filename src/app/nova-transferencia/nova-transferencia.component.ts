import { Component } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

  valor: number;
  destino: number;

  transferir(){
     console.log('solicitado nova transferência')
     console.log('valor', this.valor)
     console.log('destino', this.valor)
  }
}
