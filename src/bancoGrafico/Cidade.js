import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Opcao from './w_Opcao'
import Topo from './w_Topo'
import Objeto from './w_Objeto'
export default function Casa({context,item}){
    const {cidades,pessoas,casas,sofas,tvs}=context
    const {id,nome}=item
    const [objetos,setObjetos]=useState([])
    function buscarNomePessoa(ide){
        for(let l of pessoas){
            if(l.id==ide)return(l.nome)
        }
    }
    useEffect(()=>{
        const newList=[]
        for(let l of casas){
            if(l.idCidade==id)newList.push({id:l.id,idPessoa:l.idPessoa,nome:buscarNomePessoa(l.idPessoa)})
        }
        
        setObjetos(newList)
    },[])
    return(
    <Tudo>
        <Topo id={id} icone={'location'} colors={['var(--verde2)','var(--verde3)']}/>
        
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
background-color:var(--verde1);
border-radius:10px;
margin:10px 0 10px 0;
box-sizing:border-box;
position:relative;
`