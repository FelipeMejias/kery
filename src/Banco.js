import styled from 'styled-components'
import { useState } from 'react'
import Tabela from './Tabela'
export default function Banco({context}){
    const {cidades,pessoas,casas,sofas,tvs}=context
    return(
    <Tudo>
        <Holder>
            <Tabela nome={'cidades'} campos={[['nome',2]]} lista={cidades}/>
            <Tabela nome={'pessoas'} campos={[['nome',2]]} lista={pessoas}/>
        </Holder>
        <Holder>
            <Tabela nome={'casas'} campos={[['idCidade',1],['idPessoa',1],['valor',3]]} lista={casas}/>
        </Holder>
        <Holder>
            <Tabela nome={'sofas'} campos={[['idCasa',1],['valor',3]]} lista={sofas}/>
            <Tabela nome={'tvs'} campos={[['idCasa',1],['valor',3]]} lista={tvs}/>
        </Holder>
    </Tudo>
)}
const Holder=styled.section`
display:flex;margin:10px 0 10px 0;
justify-content:space-evenly
`
const Tudo=styled.div`
padding:10px 0 10px 0;
flex-direction:column;
height:calc(100% - 30px);width:calc(100% - 165px);
background-color:#cee5db;border-radius:15px;

overflow:hidden;overflow-y:scroll;

`