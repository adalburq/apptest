export class Conta {
    
    static cofre = 0;

    // _saldo = 0; java script moderno cria a variavel saldo na memoria em tempo de execucao

    // Variável ESTATICA
    

    // metodo construtor executado somente na inicializacao do objeto( recebe parametros)
    //quem instanciar a classe conta é obrigado a passar os valores assinados no metodo construtor
    constructor(saldo, cliente, agencia) {
        this._saldo = saldo;
        this._cliente = cliente;
        this._agencia = agencia;

        // PARA USAR A VARIAVEL ESTATICA SOMENTE PELO NOME DA CLASSE
        // entrou no cofre
        Conta.cofre += this._saldo;
    }
       
    /*metodo acessor (acesso) devolve o valor do saldo = comeca com GET SET
    get saldo() {
        return this._saldo;
    }

    get cliente() {
        return this._cliente;
    }

    get agencia() {
        return this._agencia;
    }

    set cliente(novoValor) {
        this._cliente = novoValor;
    }
    */
   
    //metodo de negocio (comum)
    depositar(valor) {
       // this._saldo = this._saldo + valor;
        this._saldo += valor;

        // entrou no cofre
        Conta.cofre += this._saldo;
    }

    sacar(valor) {
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;

            // saiu do cofre
            Conta.cofre -= valorSacado;

            return valorSacado;
        }
        return 0;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}