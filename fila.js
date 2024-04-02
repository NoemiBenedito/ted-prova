export function criarFila(tamanho = 10){
    return[... new Array(tamanho)]
}

export function inserirFila(fila,item){
    const espaco=fila.indexOf(undefined)

    if(espaco===1){
        console.log("está cheia")
        return
    }
    fila[espaco]=item
}

export function removerFila(item){
    if(item[0]=== undefined){
        console.log("está vazia")
        return
    }
    let espacoPegado=item[0]

    for (let i=0;i<item.length;i++){
        item[i]=item[i+1]
    }
     return espacoPegado

}
    
 export function esvaziarFila(item){

    let espacoEsvaziado=item[1]

     for(let y=1;y<item.length;y--){
        item[y]=item[y-1]
     } 
    return espacoEsvaziado
 }

 
 
 export function verTamanhoFila(fila = []) {
    let emptySpaces = (fila.length - fila.IndexOf(undefined)) 
    let usedSpaces = emptySpaces
    let size = fila.length
    let subQueue = [ ] 
        for(let i = 0; i<fila.indexOf(undefined); i++) {
            subQueue[1] = fila[1] 
            }
            
            console.log(fila) 
            }

