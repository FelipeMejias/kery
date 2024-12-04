import { determinarCondicao, separarFiltro } from "./utils"

export function alteracao(context,q){
    const {referencia}=context
    const {campos,estado,setar}=referencia[q.tabela]
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
                objeto[campo[0]]=q[campo[0]]
                alterou=true
            }
        }
        if(alterou)mudadas++
        return objeto
    })
    setar(lista)
    return {acerto:`${mudadas} itens alterados na tabela ${q.tabela}`}
}