import styled from 'styled-components'
import { useState } from 'react'
import Tabela from './Tabela'
export default function Banco({context}){
    const {cidades,pessoas,casas,carros}=context
    return(
    <Tudo>
        <Holder>
            <Tabela nome={'cidades'} campos={[['nome',2]]} lista={cidades}/>
        </Holder>
        <Holder>
            <Tabela nome={'pessoas'} campos={[['nome',2]]} lista={pessoas}/>
        </Holder>
        <Holder>
            <Tabela nome={'casas'} campos={[['idCidade',1],['idPessoa',1],['valor',3]]} lista={casas}/>
        </Holder>
        <Holder>
            <Tabela nome={'carros'} campos={[['idPessoa',1],['valor',3]]} lista={carros}/>
        </Holder>
    </Tudo>
)}
const Holder=styled.section`
display:flex;margin:10px 0 10px 0;
justify-content:space-evenly
`
const Tudo=styled.div`
div{align-items:center}
padding:10px 0 10px 0;
flex-direction:column;
height:calc(100% - 30px);
background-color:#cee5db;border-radius:15px;

overflow:hidden;overflow-y:scroll;

`