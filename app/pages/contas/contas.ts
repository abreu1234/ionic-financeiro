import {Component} from '@angular/core';
import {NavController, Modal} from 'ionic-angular';
import {DAOContas} from '../../dao/dao-contas';
import {ModalContasPage} from '../modal-contas/modal-contas';

@Component({
  templateUrl: 'build/pages/contas/contas.html'
})
export class ContasPage {
  dao: DAOContas;
  listContas: any[];
  nav: any;

	constructor(private navCtrl: NavController) {
    this.dao = new DAOContas();
    this.nav = navCtrl;
    //Chamando método por callback
    this.dao.getList( (lista) => {
      this.listContas = lista;
    });
	}

  insert() {
    let modal = Modal.create(ModalContasPage);
    //Ao fechar a modal
    modal.onDismiss((data) => {
      this.dao.insert(data, (conta) => {
        this.listContas.push(conta);
      });
    });

    this.nav.present(modal);

  }

  edit(conta) {
    //Passando parametro para a modal
    let modal = Modal.create(ModalContasPage, {parametro: conta} );
    //Ao fechar a modal
    modal.onDismiss((data) => {
      this.dao.edit(data, (conta) => {

      });
    });
    //Abrindo modal
    this.nav.present(modal);

  }

  delete(conta) {
    this.dao.delete(conta, (conta) => {
      //Acha o indice da conta para remover
      let pos = this.listContas.indexOf(conta);
      //Remove uma conta
      this.listContas.splice(pos, 1);
    });
  }

}
