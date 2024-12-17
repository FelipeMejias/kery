import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { criacaoInicial, criarLinhas, nomeFixas, transf } from '../Acoes'
import TabelaAlt from './TabelaAlt'

export default function Modificar({context}){
    const {
        referencia,
        formacao,
        pagina,setPagina,
        choseG,setChoseG,
        choseQ,setChoseQ,
        fase,setFase,reload,setReload
    }=context
    function salvar(){
        localStorage.setItem('tabelas', JSON.stringify(formacao));
        localStorage.setItem('tabela0', JSON.stringify([]));
        localStorage.setItem('tabela1', JSON.stringify([]));
        localStorage.setItem('tabela2', JSON.stringify([]));
        localStorage.setItem('tabela3', JSON.stringify([]));
        localStorage.setItem('tabela4', JSON.stringify([]));
        setReload(!reload);
    }
    return(
    <Tudo>
        <Holder onClick={()=>setPagina(1)}>
            <Trocar onClick={()=>{setPagina(2)}}>Voltar</Trocar>
            <Trocar onClick={salvar}>Salvar</Trocar>
        </Holder>
        <Tabelas>
            {nomeFixas.map((tabela,i)=>{
            const {campos}=formacao[nomeFixas.indexOf(tabela)]
            return(
                <TabelaAlt i={i} context={context} nome={tabela} campos={campos} />
            )})}
        </Tabelas>
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
const Tabelas=styled.div`
display:flex;
align-items:flex-start;
justify-content:flex-start;
height:calc(100% - 70px);
width:100%;
overflow:auto;
`
const Tudo=styled.div`
flex-direction:column;
display:flex;
align-items:flex-start;
justify-content:flex-start;
border-radius:20px;
box-sizing:border-box;
height:calc(100% - 40px);
width:calc(100% - 40px);
background-color:#CEE5DB;
`
const Holder=styled.section`
background:#CEE5DB;
display:flex;margin:10px 0 10px 0;
width:270px;
justify-content:space-evenly;
align-items:center;
`