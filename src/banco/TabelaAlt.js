import styled from 'styled-components'
import { useEffect, useState } from 'react'
export default function TabelaAlt({i,nome,campos,context}){
    const {
        referencia,
        formacao,setFormacao,
        iTabela,setiTabela,
        pagina,setPagina,
        choseG,setChoseG,
        choseQ,setChoseQ,
        fase,setFase,setReload,reload
    }=context
    
    const [tex,setTex]=useState('')
    const [texTabela,setTexTabela]=useState(nome)
    function adicionarTab(){
        if(!texTabela)return
        const novaFormacao=[]
        for(let k=0;k<formacao.length;k++){
            const atual=formacao[k]
            if(k!=iTabela){
                novaFormacao.push(atual)
            }else{
                novaFormacao.push({...atual,
                    nome:texTabela})
            }
        }
        setFormacao(novaFormacao)
        setFase(-1)
    }
    function adicionar(elNome=''){
        if(!tex && !elNome)return
        const novaFormacao=[]
        for(let k=0;k<formacao.length;k++){
            const atual=formacao[k]
            if(k!=iTabela){
                novaFormacao.push(atual)
            }else if(elNome){
                const nomeOf='id'+ elNome.charAt(0).toUpperCase() + elNome.slice(1,elNome.length-1)
                novaFormacao.push({...atual,
                    campos:[...atual.campos,[nomeOf,fase]]})
            }else{
                novaFormacao.push({...atual,
                    campos:[...atual.campos,[tex,fase]]})
            }
        }
        setFormacao(novaFormacao)
        setFase(-1)
    }
    function apagar(campo){
        const novaFormacao=[]
        for(let k=0;k<formacao.length;k++){
            const atual=formacao[k]
            if(k!=iTabela){
                novaFormacao.push(atual)
            }else{
                const novosCampos=[]
                for(let campu of atual.campos){
                    if(campu[0]!=campo[0]){
                        novosCampos.push(campu)
                    }
                }
                novaFormacao.push({...atual,
                    campos:novosCampos})
            }
        }
        setFormacao(novaFormacao)
        setFase(-1)
    }
    useEffect(()=>{setFase(-1);setTex('')},[iTabela])
    function podeRelacionar(elNome){
        const nomeOf='id'+ elNome.charAt(0).toUpperCase() + elNome.slice(1,elNome.length-1)
        for(let kamp of formacao[iTabela].campos){
            if(kamp[0]==nomeOf) return false
        }
        return true
    }
    return(
    <Tudo>
        <Topo>
            {i==iTabela&&fase==-1?<Change onClick={()=>setFase(-3)}><ion-icon name={'create'}/></Change>:<></>}
            {i==iTabela&&fase==-3?<input placeholder={texTabela} value={texTabela} onChange={(e)=>setTexTabela(e.target.value)} />:<></>}
            {i==iTabela&&fase==-3?<Campo onClick={()=>adicionarTab()} c={'62E54E'} style={{color:'black',justifyContent:'center',cursor:'pointer'}}><h3>OK</h3></Campo>:<></>}
            {i!=iTabela||fase!=-3?<h1>{texTabela}</h1>:<></>}
            <Campos>
                <Campo c={'829099'}><h2>id</h2><ion-icon name={'key'}/></Campo>
                {campos.map(c=>i==iTabela&&fase==-1?
                    <Holder>
                        <Campo c={'064166'} style={{width:'calc(100% - 40px)'}}>
                    <h2>{c[0]}</h2>
                    <h3>{c[1]==1?'Relacional':c[1]==2?'Texto':'Número'}</h3>
                    </Campo>
                    <Apagar onClick={()=>apagar(c)}><ion-icon name={'close'}/></Apagar>
                    </Holder>:
                <Campo c={'064166'}>
                    <h2>{c[0]}</h2>
                    <h3>{c[1]==1?'Relacional':c[1]==2?'Texto':'Número'}</h3>
                    </Campo>)}
                {i==iTabela&&fase==-1?<Campo onClick={()=>setFase(-2)} c={'62E54E'} style={{color:'black',justifyContent:'flex-start',cursor:'pointer'}}><ion-icon name={'add'} style={{marginRight:'7px'}}/><h3>Nova coluna</h3></Campo>:<></>}
                {i==iTabela&&fase==-2?<Campo onClick={()=>setFase(1)} c={'62E54E'} style={{color:'black',justifyContent:'center',cursor:'pointer'}}><h3>Relacional</h3></Campo>:<></>}
                {i==iTabela&&fase==-2?<Campo onClick={()=>setFase(2)} c={'62E54E'} style={{color:'black',justifyContent:'center',cursor:'pointer'}}><h3>Texto</h3></Campo>:<></>}
                {i==iTabela&&fase==-2?<Campo onClick={()=>setFase(3)} c={'62E54E'} style={{color:'black',justifyContent:'center',cursor:'pointer'}}><h3>Número</h3></Campo>:<></>}
                {i==iTabela&&fase==1?<h6>Clique na tabela da relação</h6>:<></>}
                {i==iTabela&&fase>1?<input placeholder='Título da coluna' value={tex} onChange={(e)=>setTex(e.target.value)} />:<></>}
                {i==iTabela&&fase>1?<Campo onClick={()=>adicionar()} c={'62E54E'} style={{color:'black',justifyContent:'center',cursor:'pointer'}}><h3>OK</h3></Campo>:<></>}
            </Campos>
        </Topo>
        {i==iTabela?
        <></>
        :fase==1?
        (podeRelacionar(texTabela)?<Add onClick={()=>adicionar(texTabela)}>Relacionar</Add>:<></>)
        :<Add onClick={()=>setiTabela(i)}>Editar</Add>
        }
    </Tudo>
)}
const Campo=styled.div`
justify-content:space-between;
align-items:center;
width:200px;
border-radius:5px;
background-color:#${props=>props.c};
margin:0 0px 10px 0px;padding:5px 10px 5px 10px;
h2{font-size:18px;margin:0;font-weight:500;}
h3{font-size:14px;margin:0;font-weight:300;}
`
const Change=styled.div`
cursor:pointer;
height:30px;
background-color:white;
color:black;
width:30px;
border-radius:50%;
justify-content:center;;
align-items:center;
position:absolute;
top:10px;right:10px;
`
const Add=styled.div`
cursor:pointer;
height:30px;
background-color:#fcc453;
color:black;
width:100px;
border-radius:15px;
justify-content:center;;
flex-direction:column;
align-items:center;
position:absolute;
bottom:-50px;left:55px;
`
const Campos=styled.div`margin-bottom:5px;
width:100%;justify-content:space-between;
flex-direction:column;
align-items:center;
input{
justify-content:space-between;
align-items:center;
width:200px;box-sizing:border-box;
border-radius:5px;
margin:0 0px 10px 0px;padding:5px 10px 5px 10px;
}
`
const Holder=styled.div`background:;
width:200px;
justify-content:space-between;
`
const Apagar=styled.div`
cursor:pointer;
background:#e2684f;color:white;
border-radius:50%;height:30px;width:30px;
justify-content:center;;
align-items:center;
`
const Topo=styled.div`
flex-direction:column;
color:white;width:100%;
h1{font-size:24px;}
input{
justify-content:space-between;
align-items:center;
width:200px;box-sizing:border-box;
border-radius:5px;
margin:0 0px 10px 0px;padding:5px 10px 5px 10px;
}
`
const Tudo=styled.div`
position:relative;
flex-direction:column;
background-color:#157ebf;
border-radius:10px;
padding:0 10px 0px 10px;
margin:10px 10px 10px 10px;
h6{
display:flex;justify-content:center;;
align-items:center;
color:yellow;
width:200px;box-sizing:border-box;
padding:5px 10px 5px 10px;
font-size:14px;margin:0;font-weight:300;

`