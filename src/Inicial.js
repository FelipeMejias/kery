import styled from 'styled-components'
import Menu from './Menu'
import { useEffect, useState } from 'react'
import Banco from './Banco'
import { adicionar } from './Acoes'
import BancoGrafico from './bancoGrafico/__BancoGrafico'
import Add from './Add'
function criar(tabela,items){
    const lista=[]
    let id=1
    
    for(let item of items){
        let objeto
        switch(tabela){
    
            case 'cidades':objeto={nome:item};break;
            case 'pessoas':objeto={nome:item};break;
            case 'casas':objeto={idCidade:item[0],idPessoa:item[1],valor:item[2]};break;
            case 'sofas':objeto={idCasa:item[0],valor:item[1]};break;
            case 'tvs':objeto={idCasa:item[0],valor:item[1]};break;
        }
        lista.push({id,...objeto})
        id++
    }    
    for(let item in items){
        
    }
    console.log(lista)
    return lista

}
export default function Inicial(){
    const [cidades,setCidades]=useState([])
    const [pessoas,setPessoas]=useState([])
    const [casas,setCasas]=useState([])

    const [sofas,setSofas]=useState([])
    const [tvs,setTvs]=useState([])
    const [fase,setFase]=useState(0)
    const context={
        cidades,setCidades,
        pessoas,setPessoas,
        casas,setCasas,
        sofas,setSofas,
        tvs,setTvs,

        fase,setFase
    }
    useEffect(()=>{
        setCidades(criar('cidades',['Rio de Janeiro','São Paulo']))
        setPessoas(criar('pessoas',['Maria','Pedro','Amanda']))
        setCasas(criar('casas',[[1,1,100],[2,3,300],[1,2,150],[2,1,200],[1,3,250]]))
        setSofas(criar('sofas',[[3,25],[4,20],[4,30],[1,25],[5,20]]))
        setTvs(criar('tvs',[[4,5],[1,15],[1,10],[5,15]]))
    },[])
    return(
    <Tudo>
        <Menu setFase={setFase}/>
        {fase==1?<Banco context={context}/>:
        fase==21||fase==22||fase==23?<BancoGrafico context={context}/>:
        fase==3?<Add context={context}/>:
        <></>}

    </Tudo>
)}
const Tudo=styled.div`
display:flex;align-items:center;
justify-content:space-between;
padding-right:15px;box-sizing:border-box;
height:100vh;width:100vw;background-color:#8fc9b0;
div{display:flex;align-items:center;box-sizing:border-box;}
`