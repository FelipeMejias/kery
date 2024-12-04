import styled from 'styled-components'
import { useState } from 'react'
import Cidade from './Cidade'
import Casa from './Casa'
import Pessoa from './Pessoa'
export default function BancoGrafico({context}){
    const {cidades,pessoas,casas,sofas,tvs,carros,
        choseG,setChoseG
    }=context
    return(
    <Tudo>
        <Holder>
            <Botao selec={choseG==1} onClick={()=>setChoseG(1)}>cidades</Botao>
            <Botao selec={choseG==2} onClick={()=>setChoseG(2)}>pessoas</Botao>
        </Holder>
        <Quadro>
            {choseG==1?cidades.map(item=><Cidade item={item} context={context}/>):<></>}
            {choseG==2?pessoas.map(item=><Pessoa item={item} context={context}/>):<></>}
        </Quadro>
    </Tudo>
)}
const Botao=styled.div`font-size:20px;
align-items:center;
border-radius:10px;cursor:pointer;
width:30%;height:100%;justify-content:center;
background-color:${props=>props.selec?'#8fbaa6':'transparent'};
color:${props=>props.selec?'white':'black'}
`
const Holder=styled.div`
align-items:center;
width:100%;height:60px;
justify-content:space-evenly
`
const Quadro=styled.div`
align-items:center;
width:100%;height:calc(100% - 80px);
flex-direction:column;

overflow:hidden;overflow-y:scroll;
`
const Tudo=styled.div`
align-items:center;
padding:10px 0 10px 0;
flex-direction:column;
height:calc(100% - 30px);width:calc(100% - 165px);
background-color:#cee5db;border-radius:15px;

justify-content:space-evenly;

`