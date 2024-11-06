import styled from 'styled-components'
import { useState } from 'react'
export default function Objeto({icone,item,colors}){
    const {id,valor,idPessoa,idCidade,nome}=item
    return(
    <Tudo c1={colors[0]} c2={colors[1]} c3={colors[2]}>
        <h5 >id <strong>{id}</strong></h5>
        <p></p>
        <ion-icon  name={icone}/>
        {idPessoa?
        <p style={{color:'var(--azul2)'}}><ion-icon name={'man'}/>{nome}</p>:
        idCidade?
        <p style={{color:'var(--verde2)'}}><ion-icon name={'location'}/>{nome}</p>:
        <p style={{color:'black'}}><ion-icon name={'logo-usd'}/>{valor}</p>}
    </Tudo>
)}

const Tudo=styled.div`
h5{height:20px;width:60px;
background-color:${props=>props.c3||'#d6d6d6'};font-size:15px;
    position:absolute;top:-25px;left:0;
    border-top-left-radius:10px;
    border-bottom-right-radius:10px;
}
font-size:15px;
ion-icon{font-size:35px;margin:0 0px 0 0px}
p{height:0px;background-color:;
strong{margin:0 0 0 5px;}
display:flex;width:100%;justify-content:center;align-items:center;
ion-icon{font-size:16px;margin:0 3px 0 0px}
}
color:${props=>props.c2||'#d6d6d6'};
justify-content:space-between;;
flex-direction:column;
background-color:${props=>props.c1||'#d6d6d6'};
width:120px;height:85%;border-radius:10px;
margin:7px 0 7px 17px;
position:relative;
`