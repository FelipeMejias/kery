import styled from 'styled-components'
import { useState } from 'react'
import Cidade from './Cidade'
import Casa from './Casa'
import Pessoa from './Pessoa'
export default function BancoGrafico({context}){
    const {cidades,pessoas,casas,sofas,tvs,fase,setFase}=context
    return(
    <Tudo>
        <Holder>
            <Botao selec={fase==21} onClick={()=>setFase(21)}>cidades</Botao>
            <Botao selec={fase==22} onClick={()=>setFase(22)}>casas</Botao>
            <Botao selec={fase==23} onClick={()=>setFase(23)}>pessoas</Botao>
        </Holder>
        <Quadro>
            {fase==21?cidades.map(item=><Cidade item={item} context={context}/>):<></>}
            {fase==22?casas.map(item=><Casa item={item} context={context}/>):<></>}
            {fase==23?pessoas.map(item=><Pessoa item={item} context={context}/>):<></>}
        </Quadro>
    </Tudo>
)}
const Botao=styled.div`font-size:20px;
border-radius:10px;cursor:pointer;
width:30%;height:100%;justify-content:center;
background-color:${props=>props.selec?'#8fbaa6':'transparent'};
color:${props=>props.selec?'white':'black'}
`
const Holder=styled.div`
width:100%;height:60px;
justify-content:space-evenly
`
const Quadro=styled.div`
width:100%;height:calc(100% - 80px);
flex-direction:column;

overflow:hidden;overflow-y:scroll;
`
const Tudo=styled.div`
padding:10px 0 10px 0;
flex-direction:column;
height:calc(100% - 30px);width:calc(100% - 165px);
background-color:#cee5db;border-radius:15px;

justify-content:space-evenly;

`