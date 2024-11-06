import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Opcao from './w_Opcao'
import Topo from './w_Topo'
import Objeto from './w_Objeto'
export default function Casa({context,item}){
    const {cidades,pessoas,casas,sofas,tvs}=context
    const {id,idPessoa,idCidade,valor}=item
    const [t1,setT1]=useState('')
    const [t2,setT2]=useState('')
    const [objetos,setObjetos]=useState([])
    useEffect(()=>{
        for(let l of pessoas){
            if(l.id==idPessoa)setT1(l.nome)
        }
        for(let l of cidades){
            if(l.id==idCidade)setT2(l.nome)
        }
        const newList=[]
        for(let l of sofas){
            if(l.idCasa==id)newList.push({...l,sofa:true})
        }
        for(let l of tvs){
            if(l.idCasa==id)newList.push({...l,sofa:false})
        }
        setObjetos(newList)
    },[])
    return(
    <Tudo>
        <Topo id={id} icone={'home'} colors={['var(--marrom2)','var(--marrom3)']}/>
        
        <main>
            <Opcao icone={'man'} color='var(--azul2)' titulo={t1}/>
            <Opcao icone={'location'} color='var(--verde2)' titulo={t2}/>
            <Opcao icone={'logo-usd'} titulo={valor}/>
        </main>
        <aside>
            {objetos.map(item=><Objeto colors={['var(--amarelo1)','var(--amarelo2)','var(--amarelo3)',]} item={item} icone={item.sofa?'bed':'desktop'}/>)}
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
background-color:var(--marrom1);
border-radius:10px;
margin:10px 0 10px 0;
box-sizing:border-box;
position:relative;
`