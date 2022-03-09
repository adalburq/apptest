export class Cliente {
    // this.nome = x;  this.cpf = y;  constructor (x,y)
   
    constructor (nome, cpf) 
    {
        this._nome = nome;
        this._cpf = cpf;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        console.log("metodo set nome");
        this._nome = nome+ "xpto";
    }

    get cpf() {
        return this._cpf;
    }
    

}