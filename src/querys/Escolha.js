import styled from 'styled-components'
import { useState } from 'react'
export default function Escolha({titulo,opcoes,q,setQ,cor,aviso}){
    const comInput=typeof opcoes=='string'
    function tit(p){
        let r=p[0].toUpperCase()
        for(let k=1;k<p.length;k++)r+=p[k]
        return r
    }
    return(
    <Tudo>
        <h1 style={cor?{backgroundColor:'#064166'}:{}}>{cor?titulo:tit(titulo)}</h1>
        <Holder wid={comInput?'200px':'calc( 100% - 100px)'}>{comInput?
        <input value={q[titulo]} onChange={(e)=>setQ({...q,[titulo]:e.currentTarget.value})} placeholder={opcoes}/>
        :opcoes.map(item=><Botao onClick={()=>setQ({...q,[titulo]:item})} selec={q[titulo]==item} >
            <p>{item}</p>
        </Botao>)}
        {aviso?<h4>{aviso}</h4>:<></>}
        </Holder>
    </Tudo>
)}
const Botao=styled.div`font-size:16px;
align-items:center;padding:10px;
p{margin:0;}
border-radius:10px;cursor:pointer;
justify-content:center;
background-color:${props=>props.selec?'#8fbaa6':'transparent'};
color:${props=>props.selec?'white':'black'}
`
const Holder=styled.div`
align-items:center;margin-left:10px;
;height:40px;
justify-content:space-evenly;
input{width:200px;height:25px;border-radius:5px;padding-left:7px}
h4{position:absolute;left:335px;padding:5px;
max-width:calc(100% - 355px);
font-weight:400;background-color:#ed8861;border-radius:5px;
margin:0;}
`

const Tudo=styled.div`
div{align-items:center}
padding:10px 0 10px 0;
height:60px;width:100%;
border-radius:15px;
h1{background-color:black;
display:flex;align-items:center;justify-content:center;
color:white;border-radius:5px;
height:40px;width:90px;
margin:0 0 0 10px;font-weight:400;
font-size:18px;}
`