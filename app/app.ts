import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {ContasPage} from './pages/contas/contas'


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  //Atributos que irão receber as páginas
  home: any;
  contas: any;
  rootPage: any;

  constructor(platform: Platform) {
    this.home = HomePage;
    this.contas = ContasPage;
    this.rootPage = this.home;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  //Método responsável por abrir página selecionada no menu
  openPage(opcao) {
    this.rootPage = opcao;
  };

}

ionicBootstrap(MyApp);
