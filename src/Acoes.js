import { alteracao } from "./querys/alteracao";
import { busca } from "./querys/busca";
import { criacao } from "./querys/criacao";
import { delecao } from "./querys/deletar";


export function criacaoInicial(tabela,items,referencia){
    const lista=[]
    const {campos}=referencia[tabela]
    let id=0
    for(let item of items){
        const objeto={}
        for(let k=0;k<campos.length;k++){
            objeto[campos[k][0]]=item[k]
        }
        id++
        lista.push({...objeto,id})
    }
    return lista
}
export function querySelect(context,q){
    const {choseQ}=context
    if(choseQ==1){
        return busca(context,q)
    }else if(choseQ==2){
        return criacao(context,q)
    }else if(choseQ==3){
        return alteracao(context,q)
    }else{
        return delecao(context,q)
    }
}
