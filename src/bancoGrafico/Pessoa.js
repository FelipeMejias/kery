import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Opcao from './w_Opcao'
import Topo from './w_Topo'
import Objeto from './w_Objeto'
export default function Casa({context,item}){
    const {cidades,pessoas,casas,carros,tvs}=context
    const {id,nome}=item
    const [casasEncontradas,setCasas]=useState([])
    const [carrosEncontradas,setCarros]=useState([])
    function buscarNomeCidade(ide){
        for(let l of cidades){
            if(l.id==ide)return(l.nome)
        }
    }
    useEffect(()=>{
        const newList=[]
        for(let c of casas){
            if(c.idPessoa==id)newList.push({...c,nome:buscarNomeCidade(c.idCidade)})
        }
        setCasas(newList)

        const nl=[]
        for(let c of carros){
            if(c.idPessoa==id)nl.push(c)
        }
        setCarros(nl)
    },[])
    return(
    <Tudo>
        <Topo id={id} nome={nome} icone={'man'} colors={['var(--azul2)','var(--azul3)']} />
        <aside>
            {casasEncontradas.map(item=><Objeto colors={['var(--marrom1)','var(--marrom2)','var(--marrom3)',]} item={item} icone={'home'}/>)}
            {carrosEncontradas.map(item=><Objeto colors={['var(--marrom1)','var(--marrom2)','var(--marrom3)',]} item={item} icone={'car'}/>)}
        </aside>
    </Tudo>
)}

const Tudo=styled.div`
main{
    height:100%;
}
aside{
    width:calc(100% - 230px);
    display:flex;
    height:100%;align-items:center;
    }
width:95%;min-height:110px;
background-color:var(--azul1);
border-radius:10px;
margin:10px 0 10px 0;
box-sizing:border-box;
position:relative;
`