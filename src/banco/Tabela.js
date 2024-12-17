import styled from 'styled-components'
import { useState } from 'react'
export default function Tabela({nome,campos,lista}){
    return(
    <Tudo alt={92+lista.length*23}>
        <Topo>
            <h1>{nome}</h1>
            <Campos>
                <Campo larg={30}>id</Campo>
                {campos.map(ml=><Campo larg={ml[1]==1?60:ml[1]==2?150:50}>{ml[0]}</Campo>)}
            </Campos>
            <Linhas>
                {lista.map(l=><Linha>
                    <Campo larg={30} tr={true}>{l.id}</Campo >
                    {campos.map(ml=><Campo tr={true} larg={ml[1]==1?60:ml[1]==2?150:50}>{l[ml[0]]}</Campo>)}
                </Linha>)}
            </Linhas>
        </Topo>
    </Tudo>
)}
const Campo=styled.div`
min-width:${props=>props.larg}px;
justify-content:center;
background-color:${props=>props.tr?'transparent':'#064166'};
margin:0 2px 0 2px;padding:0 10px 0 10px;
`
const Linha=styled.div`background-color:white;color:black;
width:100%;justify-content:space-between;margin:0 0 2px 0;
`
const Campos=styled.div`margin-bottom:5px;
width:100%;justify-content:space-between;
`
const Linhas=styled.div`flex-direction:column;
width:100%;margin-bottom:15px;
`
const Topo=styled.div`
flex-direction:column;
color:white;width:100%;
h1{font-size:24px;margin:12px}
`
const Tudo=styled.div`
flex-direction:column;
background-color:#157ebf;
border-radius:10px;padding:0 5px 0px 5px;
margin:0 10px 0 10px;
`