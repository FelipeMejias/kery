import { determinarCondicao, separarFiltro, transf } from "../Acoes"

export function busca(context,q){
    const nomeTransf=transf(q.tabela)
    let resposta=context.referencia[nomeTransf].estado
    if(resposta.length==0)return{erro:'Esta tabela está vazia'}
    if(q.filtrar){
        const {inicio,sinal,final}=separarFiltro(q.filtrar)
        if(!Object.keys(resposta[0]).includes(inicio))return {erro:'A coluna do FILTRO não existe na tabela'}
        if(sinal!='>'&&sinal!='>='&&sinal!='='&&sinal!='<'&&sinal!='<=')return {erro:'O sinal de condição do FILTRO está errado'}
        resposta=resposta.filter(obj=>determinarCondicao(obj,inicio,sinal,final))
    }        
    if(resposta.length==0)return{erro:'Não existem LINHAS de tabela com essas condições'}
    const ordenador=q.ordenar?.replace(/\s+/g, "")
    if(ordenador){
        if(!Object.keys(resposta[0]).includes(ordenador))return {erro:'A coluna de ORDENAÇÃO não existe na tabela'}
        resposta=resposta.sort((a,b)=>{
            if(a[ordenador]<b[ordenador]){
                return -1
            }else{return true}
        })
    }
    return {resposta}
}