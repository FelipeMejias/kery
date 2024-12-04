export function criacao(context,q){
    const {referencia}=context
    const {campos,estado,setar}=referencia[q.tabela]
    const objeto={}
    for(let campo of campos){
        objeto[campo[0]]=q[campo[0]]
    }
    const id=estado.length+1
    setar([...estado,{...objeto,id}])
    return {acerto:`Item inserido na tabela ${q.tabela}`}
}