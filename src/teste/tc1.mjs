
import { Cliente } from "../model/Cliente.mjs";
import { Conta } from "../model/Conta.mjs";

const cliente1 = new Cliente("Loop", 11122233309);
const cliente2 = new Cliente("Branca", 88822233309);

const conta1 = new Conta(10, cliente1, 1001);
const conta2 = new Conta(18, cliente2, 802);

// PARA USAR A VARIAVEL ESTATICA SOMENTE PELO NOME DA CLASSE
console.log('total no cofre após abertura das contas : ', Conta.cofre)

const saque1 = conta1.sacar(5);
const saque2 = conta2.sacar(8);
console.log(conta1.saldo)
console.log(conta2.saldo)
console.log('apos os saques ', Conta.cofre)

const deposito1 = conta1.depositar(9);
console.log(conta1.saldo)
console.log(conta2.saldo) // deescobri , ao mostrar o saldo ele soma o valor da variavel na estatica !!!
console.log('apos o deposito ', Conta.cofre)

console.log('total no cofre no final das transações bancárias : ', Conta.cofre)
