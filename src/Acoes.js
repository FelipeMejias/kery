import { alteracao } from "./querys/alteracao";
import { busca } from "./querys/busca";
import { criacao } from "./querys/criacao";
import { delecao } from "./querys/deletar";

export const tabela0Fixa=[
    {nome: 'Rio de Janeiro', id: 1},
    {nome: 'São Paulo', id: 2},
]
export const tabela1Fixa=[
    {nome: 'Maria', id: 1},
    {nome: 'Pedro', id: 2},
    {nome: 'Amanda', id: 3},
]
export const tabela2Fixa=[
    {idCidade: 1, idPessoa: 1, valor: 100, id: 1},
    {idCidade: 2, idPessoa: 3, valor: 300, id: 2},
    {idCidade: 1, idPessoa: 2, valor: 150, id: 3},
    {idCidade: 2, idPessoa: 1, valor: 200, id: 4},
    {idCidade: 1, idPessoa: 3, valor: 250, id: 5},
]
export const tabela3Fixa=[
    {idPessoa: 2, valor: 60, id: 1},
    {idPessoa: 3, valor: 35, id: 2},
    {idPessoa: 2, valor: 15, id: 3},
]
export const tabela4Fixa=[
    
]

export const tabelasFixas=[
    {
        nome:'cidades',
        campos:[['nome',2],],

    },
    {
        nome:'pessoas',
        campos:[['nome',2],],
    },
    {
        nome:'casas',
        campos:[['idCidade',1],['idPessoa',1],['valor',3]],
    },
    {
        nome:'carros',
        campos:[['idPessoa',1],['valor',3]],
    },
]
export function getNomes(tabelas){
    return tabelas.map(tab=>tab.nome)
}
export function transf(tabelas,nome){
    const nomeFixas=[]
    for(let tab of tabelas)nomeFixas.push(tab.nome)
    const i=nomeFixas.indexOf(nome)
    return `tabela${i}`
}
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
export function checarInvalidadeColuna(tabelas,referencia,campo,q){
    console.log(referencia,campo,q)
    if(campo[1]==1){
        const nomeTabela=campo[0].replace('id','').toLowerCase()+'s'
        const NomeFinal=transf(tabelas,nomeTabela)
        const estadoTabela=referencia[NomeFinal].estado
        for(let item of estadoTabela){
            if(item.id==q[campo[0]]){
                return false
            }
        }
        return `O ID atribuído a ${campo[0]} não existe na tabela ${nomeTabela.toUpperCase()}`
    }
    if(campo[1]==3 && parseInt(q[campo[0]])%1!==0){
        return `A coluna ${campo[0].toUpperCase()} deve ser um número`
    }else{
        return false
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

export function querySelect(context,q){
    const {choseQ}=context
    if(choseQ==1){
        return busca(context,q)
    }else if(choseQ==2){
        return criacao(context,q)
    }else if(choseQ==3){
        return alteracao(context,q)
    }else{
        return delecao(context,q)
    }
}
