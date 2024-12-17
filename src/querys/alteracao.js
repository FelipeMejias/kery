import { checarInvalidadeColuna, determinarCondicao, separarFiltro, transf } from "../Acoes"

export function alteracao(context,q){
    const {referencia}=context
    const nomeTransf=transf(q.tabela)
    const {campos,estado,setar}=referencia[nomeTransf]
    if(q.filtrar){
        const {inicio,sinal,final}=separarFiltro(q.filtrar)
        if(!Object.keys(estado[0]).includes(inicio))return {erro:'A coluna do FILTRO não existe na tabela'}
        if(sinal!='>'&&sinal!='>='&&sinal!='='&&sinal!='<'&&sinal!='<=')return {erro:'O sinal de condição do FILTRO está errado'}
        let mudadas=0
        const lista=estado.map(obj=>{
            const objeto=obj
            let alterou=false
            if(determinarCondicao(obj,inicio,sinal,final))
                for(let campo of campos){
                if(q[campo[0]]&&objeto[campo[0]]!=q[campo[0]]){
                    for(let campo of campos){
                        if(!q[campo[0]])continue
                        const erro=checarInvalidadeColuna(referencia,campo,q)
                        if(!erro){
                            alterou=true
                            objeto[campo[0]]=q[campo[0]]
                        }else{
                            return {erro}
                        }
                    }
                }
            }
            if(alterou)mudadas++
            return objeto
        })
        setar(lista)
        localStorage.setItem(nomeTransf, JSON.stringify(lista))
        return {acerto:`${mudadas} itens alterados na tabela ${q.tabela}`}
    }else{
        let mudadas=0
        const lista=[]
        for(let obj of estado){
            const objeto=obj
            for(let campo of campos){
                if(!q[campo[0]])continue
                const erro=checarInvalidadeColuna(referencia,campo,q)
                if(!erro){
                    objeto[campo[0]]=q[campo[0]]
                }else{
                    return {erro}
                }
            }
            mudadas++
            lista.push(objeto)
        }
        setar(lista)
        localStorage.setItem(nomeTransf, JSON.stringify(lista))
        return {acerto:`${mudadas} itens alterados na tabela ${q.tabela}`}
    }
    
}