import { checarInvalidadeColuna, transf } from "../Acoes"
export function criacao(context,q){
    const {referencia}=context
    const nomeTransf=transf(q.tabela)
    const {campos,estado,setar}=referencia[nomeTransf]
    const objeto={}
    for(let campo of campos){
        if(!q[campo[0]])continue
        const erro=checarInvalidadeColuna(referencia,campo,q)
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