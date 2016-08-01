import { Component } from '@angular/core';
import {ViewController, NavParams} from 'ionic-angular';

/*
  Generated class for the ModalContasPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal-contas/modal-contas.html',
})
export class ModalContasPage {
  view: any;
  conta: any;

  constructor(view: ViewController, params: NavParams) {
    this.view = view;
    //Pega parametro ou envia descrição em branco caso nulo
    this.conta = params.get("parametro") || {descricao: ""};
  }

  cancel() {
    //Fecha view
    this.view.dismiss();
  }

  salvar() {
    //fecha modal e envia parametro
    this.view.dismiss(this.conta);
  }

}
