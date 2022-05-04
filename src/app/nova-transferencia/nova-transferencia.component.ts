import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService){ }

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe( result => {
      console.log(result);
      this.limparCampos();
    }, error => console.log(error));
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }


  ngOnInit(): void {
  }

}
