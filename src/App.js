import './menu/App.css';
import styled from 'styled-components'
import Menu from './menu/Menu'
import { useEffect, useState } from 'react'
import Banco from './banco/Banco'
import BancoGrafico from './bancoGrafico/__BancoGrafico'
import Query from './querys/Query'
import Modificar from './banco/Modificar'
import { tabela0Fixa,tabela1Fixa,tabela2Fixa,tabela3Fixa,tabela4Fixa, tabelasFixas } from './Acoes'

export default function App(){
    const [reload, setReload] = useState(false);
    const tabelas=JSON.parse(localStorage.getItem('tabelas'))||tabelasFixas
    //localStorage.setItem('usuario', JSON.stringify(nome))
    const [t0,setT0]=useState(JSON.parse(localStorage.getItem('tabela0'))||tabela0Fixa)
    const [t1,setT1]=useState(JSON.parse(localStorage.getItem('tabela1'))||tabela1Fixa)
    const [t2,setT2]=useState(JSON.parse(localStorage.getItem('tabela2'))||tabela2Fixa)
    const [t3,setT3]=useState(JSON.parse(localStorage.getItem('tabela3'))||tabela3Fixa)
    const [t4,setT4]=useState(JSON.parse(localStorage.getItem('tabela4'))||tabela4Fixa)
    
    const [formacao,setFormacao]=useState(tabelas)
    const [pagina,setPagina]=useState(1)
    const [choseG,setChoseG]=useState(2)
    const [choseQ,setChoseQ]=useState(1)
    const [iTabela,setiTabela]=useState(-1)
    const [fase,setFase]=useState(-1)
    const referencia={
        tabela0:{estado:t0,setar:setT0,campos:tabelas[0].campos},
        tabela1:{estado:t1,setar:setT1,campos:tabelas[1].campos},
        tabela2:{estado:t2,setar:setT2,campos:tabelas[2].campos},
        tabela3:{estado:t3,setar:setT3,campos:tabelas[3].campos},
    }

    const context={reload,setReload,fase,setFase,formacao,setFormacao,iTabela,setiTabela,referencia,pagina,setPagina,choseG,setChoseG,choseQ,setChoseQ,}
    
    return(<div className="App">{
    pagina==1?
        <Tudo>
            <Banco context={context}/>
            <Query context={context}/>
        </Tudo>:
        <Tudo>
            
            <Modificar context={context} />
        </Tudo>
}</div>)}
//pagina==2?<BancoGrafico context={context}/>:
const Tudo=styled.div`
display:flex;align-items:center;
justify-content:space-evenly;
box-sizing:border-box;
height:100vh;width:100vw;background-color:#8fc9b0;
div{display:flex;;box-sizing:border-box;}
`
