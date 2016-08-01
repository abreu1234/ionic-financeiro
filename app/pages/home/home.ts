import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
	nome: string;

	constructor(private navCtrl: NavController) {
		this.nome = 'Nome teste';
	}

	getNome() {
		return "BLA: "+this.nome;
	}
}
