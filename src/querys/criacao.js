import { checarInvalidadeColuna } from "./utils"
export function criacao(context,q){
    const {referencia}=context
    const {campos,estado,setar}=referencia[q.tabela]
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
    const id=estado[estado.length-1].id+1
    setar([...estado,{...objeto,id}])
    return {acerto:`Item inserido na tabela ${q.tabela}`}
}