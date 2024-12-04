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