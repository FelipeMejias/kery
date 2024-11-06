import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Opcao from './w_Opcao'
import Topo from './w_Topo'
import Objeto from './w_Objeto'
export default function Casa({context,item}){
    const {cidades,pessoas,casas,sofas,tvs}=context
    const {id,nome}=item
    const [objetos,setObjetos]=useState([])
    function buscarNomeCidade(ide){
        for(let l of cidades){
            if(l.id==ide)return(l.nome)
        }
    }
    useEffect(()=>{
        const newList=[]
        for(let l of casas){
            if(l.idPessoa==id)newList.push({id:l.id,idCidade:l.idCidade,nome:buscarNomeCidade(l.idCidade)})
        }
        
        setObjetos(newList)
    },[])
    return(
    <Tudo>
        <Topo id={id} icone={'man'} colors={['var(--azul2)','var(--azul3)']} />
        
        <main>
            <Opcao icone={'language'} titulo={nome}/>
        </main>
        <aside>
            {objetos.map(item=><Objeto colors={['var(--marrom1)','var(--marrom2)','var(--marrom3)',]} item={item} icone={'home'}/>)}
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