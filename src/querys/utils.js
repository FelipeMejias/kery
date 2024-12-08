export function determinarCondicao(obj,inicio,sinal,final){
    if(sinal=='>'){
        return obj[inicio]>final
    }else if(sinal=='>='){
        return obj[inicio]>=final
    }else if(sinal=='='){
        return obj[inicio]==final
    }else if(sinal=='<'){
        return obj[inicio]<final
    }else if(sinal=='<='){
        return obj[inicio]<=final
    }
}
export function checarInvalidadeColuna(referencia,campo,q){
    if(campo[1]==1){
        const nomeTabela=campo[0].replace('id','').toLowerCase()+'s'
        const estadoTabela=referencia[nomeTabela].estado
        for(let item of estadoTabela){
            if(item.id==q[campo[0]]){
                return false
            }
        }
        return `O ID atribuído a ${campo[0]} não existe na tabela ${nomeTabela.toUpperCase()}`
    }
    if(campo[1]==3 && parseInt(q[campo[0]])%1!==0){
        return `A coluna ${campo[0].toUpperCase()} deve ser um número`
    }else{
        return false
    }
}
export function separarFiltro(condicao){
    let inicio=''
    let sinal=''
    let final=''
    let pp=true
    for(let letra of condicao){
        if(letra==' ')continue
        if(pp){
            if(letra!='='&&letra!='>'&&letra!='<'){
                inicio+=letra
            }else{
                pp=false
                sinal+=letra
            }
        }else if(sinal.length==1&&sinal!='='&&letra=='='){
            sinal+=letra
        }else{
            if(letra=='='||letra=='<'||letra=='>'){
                sinal+=letra
            }else{
                final+=letra
            }
        }
    }
    return {inicio,sinal,final}
}