//Storage é o método para ter acesso ao storage local
//Sqlsorage é para diferenciar o acesso local do acesso sqlite
//Para adicionar o plugin: cordova plugin add cordova-sqlite-storage
import {Storage, SqlStorage} from 'ionic-angular';

export class DAOContas {

  list: any[];

  constructor() {
    //Para ter acesso ao Sqlstorage
    let storage = new Storage(SqlStorage);

    storage.query("CREATE TABLE IF NOT EXISTS contas(id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT)").then((data) => {
      console.log("CRIOU A TABELA");
    }, (error) => {
      console.log("Ocorreu um erro ao criar a tabela " + JSON.stringify(error.err));
    });
  }

  getList(successCallback) {
    let storage = new Storage(SqlStorage);
    //Busca tudo de contas
    storage.query("SELECT * FROM contas").then((data) => {
      let lista: any[] = [];
      //Percorre a lista
      for (var i = 0; i < data.res.rows.length; i++) {
        let item: any = {};
        //Cria o objeto
        item.id = data.res.rows.item(i).id;
        item.descricao = data.res.rows.item(i).descricao;
        //Adiciona o objeto a lista de contas
        lista.push(item);
        //callback por ser assincrono
        successCallback(lista);
      }

    },(error) => {
      console.log("Ocorreu um erro: " + JSON.stringify(error.err));
    });
  }

  insert(conta, successCallback) {
    let storage = new Storage(SqlStorage);

    storage.query("INSERT INTO contas(descricao) VALUES(?)", [conta.descricao]).then((data) => {
      //Pegando o último id
      conta.id = data.res.insertId;
      //Por javascript ser assincrono, fazer esperar um callback para retornar para tela anterior
      successCallback(conta);
      console.log("GRAVOU");
    }, (error) => {
      console.log("Ocorreu um erro: " + JSON.stringify(error.err));
    });

  }

  edit(conta, successCallback) {
    let storage = new Storage(SqlStorage);

    storage.query("UPDATE contas SET descricao = ? WHERE id = ?", [conta.descricao, conta.id]).then( (data) => {
      successCallback(conta);
    }, (error) => {
      console.log("Ocorreu um erro: " + JSON.stringify(error.err));
    });
  }

  delete(conta, successCallback) {
    let storage = new Storage(SqlStorage);

    storage.query("DELETE FROM contas WHERE id = ?", [conta.id]).then( (data) => {
      successCallback(conta);
    }, (error) => {
      console.log("Ocorreu um erro: " + JSON.stringify(error.err));
    });
    
  }

}
