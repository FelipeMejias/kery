import styled from 'styled-components'
import Menu from './menu/Menu'
import { useEffect, useState } from 'react'
import Banco from './banco/Banco'
import { criacaoInicial } from './Acoes'
import BancoGrafico from './bancoGrafico/__BancoGrafico'
import Query from './Query'

export default function Inicial(){
    const [cidades,setCidades]=useState([])
    const [pessoas,setPessoas]=useState([])
    const [casas,setCasas]=useState([])
    const [carros,setCarros]=useState([])

    const [pagina,setPagina]=useState(0)
    const [choseG,setChoseG]=useState(2)
    const [choseQ,setChoseQ]=useState(1)

    const referencia={
        cidades:{
            estado:cidades,
            setar:setCidades,
            campos:[['nome',2],]
        },
        pessoas:{
            estado:pessoas,
            setar:setPessoas,
            campos:[['nome',2],]
        },
        casas:{
            estado:casas,
            setar:setCasas,
            campos:[['idCidade',1],['idPessoa',1],['valor',3]]
        },
        carros:{
            estado:carros,
            setar:setCarros,
            campos:[['idPessoa',1],['valor',3]]
        }
    }
    const context={
        referencia,

        cidades,setCidades,
        pessoas,setPessoas,
        casas,setCasas,
        carros,setCarros,

        pagina,setPagina,
        choseG,setChoseG,
        choseQ,setChoseQ,
    }
    useEffect(()=>{
        setCidades(criacaoInicial('cidades',[['Rio de Janeiro'],['São Paulo']],referencia))
        setPessoas(criacaoInicial('pessoas',[['Maria'],['Pedro'],['Amanda']],referencia))
        setCasas(criacaoInicial('casas',[[1,1,100],[2,3,300],[1,2,150],[2,1,200],[1,3,250]],referencia))
        setCarros(criacaoInicial('carros',[[2,60],[3,35],[2,15]],referencia))
    },[])
    return(
    <Tudo>
        <Menu setPagina={setPagina}/>
        <Banco context={context}/>
        <Query context={context}/>
    </Tudo>
)}
//pagina==2?<BancoGrafico context={context}/>:
const Tudo=styled.div`
display:flex;align-items:center;
justify-content:space-between;
padding-right:15px;box-sizing:border-box;
height:100vh;width:100vw;background-color:#8fc9b0;
div{display:flex;;box-sizing:border-box;}
`