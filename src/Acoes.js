export function adicionar(func,tab,listaInfos){
    const id=tab.length==0?1:tab[tab.length-1].id+1
    func([...tab,{...listaInfos,id}])
}