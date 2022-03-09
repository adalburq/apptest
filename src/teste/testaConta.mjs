import { Conta } from "../model/Conta.mjs";
import { Cliente } from "../model/Cliente.mjs";

const cliente1 = new Cliente("Loop", 11122233309);
const cliente2 = new Cliente("Branca", 88822233309);

console.log(cliente1);
console.log(cliente2);

cliente1.nome = "Xpto";
console.log(cliente1.nome);

cliente1._nome = "abc";
console.log(cliente1.nome);

const abreconta1 = new Conta(100, cliente1, 1234);
const abreconta2 = new Conta(200, cliente2, 1234);
console.log("saldo1 : ", Conta.cofre);
abreconta1.sacar(20)
console.log("saldo2 : ", Conta.cofre);

abreconta1.transferir(30, abreconta2);
console.log(abreconta1);
console.log(abreconta2);
console.log("saldo3 : ", Conta.cofre);

console.log(abreconta1._saldo + abreconta2._saldo);
console.log("saldo4 : ",Conta.cofre);