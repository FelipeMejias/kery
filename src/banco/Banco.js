import styled from 'styled-components'
import { useState } from 'react'
import Tabela from './Tabela'
import { transf } from '../Acoes'

export default function Banco({context}){
    const {setPagina,referencia,tabelas,naQuery,setNaQuery}=context
    const nomeFixas=[]
    for(let tab of tabelas)nomeFixas.push(tab.nome)
    return(
    <Tudo naQuery={naQuery}>
        <Holder style={{position:'sticky',margin:0,top:'0px',minHeight:'100px'}}>
            <Trocar onClick={()=>{setPagina(2)}}>Mudar Banco</Trocar>
            <Trocar onClick={()=>{setNaQuery(true)}}>Fazer Query</Trocar>
        </Holder>
        {nomeFixas.map(tabela=>{
        const {estado,campos}=referencia[transf(tabelas,tabela)]
        return(
        <Holder>
            <Tabela nome={tabela} campos={campos} lista={estado}/>
        </Holder>
        )})}
    </Tudo>
)}
const Trocar=styled.article`cursor:pointer;
display:flex;
color:white;font-size:18px;
flex-direction:column;
justify-content:center;line-height:18px;
background-color:#497c65;
width:120px;height:50px;
border-radius:15px;

ion-icon{font-size:30px;margin-bottom:5px;}
`
const Holder=styled.section`
background:#CEE5DB;
display:flex;margin:10px 0 10px 0;
width:100%;
justify-content:space-evenly;
align-items:center;
`
const Tudo=styled.article`
display:flex;
position:relative;
width:350px;
div{align-items:center}
padding:0px 0 10px 0;
flex-direction:column;
height:calc(100% - 30px);
background-color:#cee5db;border-radius:15px;
box-sizing:border-box;
overflow:hidden;overflow-y:scroll;
@media(max-width:800px){
width:90%;
display:${p=>p.naQuery?'none':''}
}
`