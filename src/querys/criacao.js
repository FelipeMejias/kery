import { checarInvalidadeColuna, transf } from "../Acoes"
export function criacao(context,q){
    const {referencia,tabelas}=context
    const nomeTransf=transf(tabelas,q.tabela)
    const {campos,estado,setar}=referencia[nomeTransf]
    const objeto={}
    for(let campo of campos){
        if(!q[campo[0]])continue
        const erro=checarInvalidadeColuna(tabelas,referencia,campo,q)
        if(!erro){
            objeto[campo[0]]=q[campo[0]]
        }else{
            return {erro}
        }
    }
    const id=estado.length==0?1:estado[estado.length-1].id+1
    const lista=[...estado,{...objeto,id}]
    setar(lista)
    localStorage.setItem(nomeTransf, JSON.stringify(lista))
    return {acerto:`Item inserido na tabela ${q.tabela}`}
}