import styled from 'styled-components'
import { useState } from 'react'
export default function Topo({icone,id,colors}){
    return(
        
    <Tudo c3={colors[1]} c2={colors[0]}>
        <ion-icon name={icone}/>
        <p>id <strong>{id}</strong></p>
    </Tudo>
)}

const Tudo=styled.div`
p{height:20px;width:60px;
background-color:${props=>props.c3||'#d6d6d6'};font-size:15px;
    position:absolute;top:-15px;left:0;
    border-top-left-radius:10px;
    border-bottom-right-radius:10px;
}
color:${props=>props.c2||'black'};
width:60px;;
justify-content:center;
font-size:12px;
ion-icon{font-size:45px;}
`