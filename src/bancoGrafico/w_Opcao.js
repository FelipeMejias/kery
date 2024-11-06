import styled from 'styled-components'
import { useState } from 'react'
export default function Opcao({icone,titulo,color}){
    return(
    <Tudo color={color}>
        <ion-icon name={icone}/>
        <p>{titulo}</p>
    </Tudo>
)}

const Tudo=styled.div`
color:${props=>props.color||'black'};
width:140px;height:25px;
font-size:15px;margin:7px 0 7px 17px;
ion-icon{font-size:20px;margin:0 7px 0 7px}
`