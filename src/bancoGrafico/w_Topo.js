import styled from 'styled-components'
import { useState } from 'react'
export default function Topo({icone,id,colors,nome}){
    return(
        
    <Tudo c3={colors[1]} c2={colors[0]}>
        <ion-icon name={icone}/>
        <h1>{nome}</h1>
        <p>id <strong>{id}</strong></p>
    </Tudo>
)}

const Tudo=styled.div`background-color:;
p{height:20px;width:60px;
background-color:${props=>props.c3||'#d6d6d6'};font-size:15px;
    position:absolute;top:-15px;left:0;
    border-top-left-radius:10px;
    border-bottom-right-radius:10px;
}
height:100%;
flex-direction:column;
color:${props=>props.c2||'black'};
width:120px;
justify-content:center;
font-size:12px;
ion-icon{font-size:45px;
margin:20px 0 0 7px;
}
h1{white-space: nowrap;text-align: left;;
margin:7px 0 0 7px;;font-size:15px;
}
`