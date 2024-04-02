import { criarFila,inserirFila,removerFila,esvaziarFila,verTamanhoFila } from './fila.js'

const minhaFila=criarFila(3)
console.log(minhaFila)

inserirFila(minhaFila,"abacaxi")
console.log("fila",minhaFila)

removerFila(minhaFila)
console.log(minhaFila)

removerFila(minhaFila)

esvaziarFila(minhaFila)

verTamanhoFila(minhaFila)