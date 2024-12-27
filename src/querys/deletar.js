import { determinarCondicao, separarFiltro, transf } from "../Acoes"

export function delecao(context,q){
    const {referencia,tabelas}=context
    const nomeTransf=transf(tabelas,q.tabela)
    const {campos,estado,setar}=referencia[nomeTransf]
    if(q.filtrar){
        const {inicio,sinal,final}=separarFiltro(q.filtrar)
        if(!Object.keys(estado[0]).includes(inicio))return {erro:'A coluna do FILTRO não existe na tabela'}
        if(sinal!='>'&&sinal!='>='&&sinal!='='&&sinal!='<'&&sinal!='<=')return {erro:'O sinal de condição do FILTRO está errado'}
        let mudadas=0
        const lista=estado.filter(obj=>{
            if(determinarCondicao(obj,inicio,sinal,final)){
                mudadas++
                return false
            }else{
                return true
            }
        })
        setar(lista)
        localStorage.setItem(nomeTransf, JSON.stringify(lista))
        return {acerto:`${mudadas} itens deletados na tabela ${q.tabela}`}
    }else{
        setar([])
        localStorage.setItem(nomeTransf, JSON.stringify([]))
        return {acerto:`${estado.length} itens deletados na tabela ${q.tabela}`}
    }
}