import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Tabela from '../banco/Tabela'
import Escolha from './Escolha';
import { getNomes, querySelect, transf } from '../Acoes';
const fraseSemLinhas='Não existem linhas de tabela com essas condições'
const fraseAviso='Sem filtro, todas as linhas serão '
export default function Query({context}){
    const {naQuery,setNaQuery,
        setChoseQ,choseQ,referencia,tabelas
    }=context
    const [q,setQ]=useState({tabela:tabelas[0].nome})
    const [campos,setCampos]=useState([])
    const [texto, setTexto] = useState('');
    const [lista,setLista]=useState([])
    const [alterando,setAlterando]=useState(true)
    const [erro,setErro]=useState('')
    const [acerto,setAcerto]=useState('')
    const nomes=getNomes(tabelas)
    
    const [copiado, setCopiado] = useState(false);
    function copiarTexto(){
        navigator.clipboard.writeText(texto).then(() => {
            setCopiado(true)
            setTimeout(() => setCopiado(false), 2000)
          }).catch(err => console.error('Erro ao copiar o texto: ', err));
      };
    function executar(){
        const {resposta,erro,acerto}=querySelect(context,q)
        if(erro){
            setAcerto('')
            setErro(erro)
        }else if(acerto){
            setErro('')
            setAcerto(acerto)
        }else{
            setErro('')
            setAcerto('')
            setLista(resposta)
        }
    }
    function setarChose(num){
        setAlterando(true)
        setChoseQ(num)
        setQ({tabela:q.tabela})
    }
    useEffect(()=>{
        setCampos(referencia[transf(tabelas,q.tabela)].campos)
        let t=''

        if(choseQ==1){
            t+='SELECT * FROM '+q.tabela
            if(q.filtrar){
            t+=' WHERE '+q.filtrar
            }if(q.ordenar){
                let tem=false
                for(let c of q.ordenar)if(c!=' ')tem=true
                if(tem){
                    t+=' ORDER BY '+q.ordenar
                }
            }
        }else if(choseQ==2){
            if(!campos)return
            t='INSERT INTO '+q.tabela+' ( '
            for(let k=0;k<campos.length;k++){
                if(k!=0)t+=' , '
                t+=campos[k][0]
            }t+=' ) VALUES ( '
            for(let k=0;k<campos.length;k++){
                if(k!=0)t+=' , '
                t+=q[campos[k][0]]
            }t+=' )'
        }else if(choseQ==3){
            if(!campos)return
            t='UPDATE '+q.tabela+' SET '
            let adVir=false
            for(let k=0;k<campos.length;k++){
                if(q[campos[k][0]]){
                    t+=(adVir?' , ':'')+campos[k][0]+' = '+q[campos[k][0]]
                    adVir=true
            }}
            if(q.filtrar){
                t+=' WHERE '+q.filtrar
            }
        }else{
            t='DELETE FROM '+q.tabela
            if(q.filtrar){
                t+=' WHERE '+q.filtrar
            }
        }
        setTexto(t)
        
    },[q,choseQ])
    
    return(
    <Tudo naQuery={naQuery}>
        <Holder>
            <Botao selec={choseQ==1} onClick={()=>setarChose(1)}>Buscar</Botao>
            <Botao selec={choseQ==2} onClick={()=>setarChose(2)}>Criar</Botao>
            <Botao selec={choseQ==3} onClick={()=>setarChose(3)}>Alterar</Botao>
            <Botao selec={choseQ==4} onClick={()=>setarChose(4)}>Deletar</Botao>
        </Holder>
        <Conteudo>
            {alterando?
            choseQ==1?
                <Alterar>
                    <Escolha titulo={'tabela'} q={q} setQ={setQ} opcoes={nomes} />
                    <Escolha titulo={'filtrar'} q={q} setQ={setQ} opcoes={'Condição do filtro'} />
                    <Escolha titulo={'ordenar'} q={q} setQ={setQ} opcoes={'Coluna que indica a ordenação'} />
                </Alterar>
            :choseQ==2?
                <Alterar>
                    <Escolha titulo={'tabela'} q={q} setQ={setQ} opcoes={nomes} />
                    {campos.map(campo=><Escolha cor={true}  titulo={campo[0]} q={q} setQ={setQ} opcoes={''} />)}
                </Alterar>
            :choseQ==3?
                <Alterar>
                    <Escolha titulo={'tabela'} q={q} setQ={setQ} opcoes={nomes} />
                    {campos.map(campo=><Escolha cor={true}  titulo={campo[0]} q={q} setQ={setQ} opcoes={''} />)}
                    <Escolha aviso={fraseAviso+'alteradas'} titulo={'filtrar'} q={q} setQ={setQ} opcoes={'Condição do filtro'} />
                </Alterar>
            :
                <Alterar>
                    <Escolha titulo={'tabela'} q={q} setQ={setQ} opcoes={nomes} />
                    <Escolha aviso={fraseAviso+'deletadas'}  titulo={'filtrar'} q={q} setQ={setQ} opcoes={'Condição do filtro'} />
                </Alterar>
            :<></>}
            <QueryFinal>
                <button style={{top:'8px',fontWeight:700,backgroundColor:'#1e870e',color:'white'}} onClick={()=>{if(alterando){executar()}setAlterando(!alterando)}}>
                    {alterando?'Executar':'Nova Query'}
                </button>
                <h1>Query Final:</h1>
                <h2>{texto}</h2>
                <button  style={{bottom:'8px',backgroundColor:'#bbf7b2'}} onClick={copiarTexto}>
                {copiado ? 'Texto copiado!' : 'Copiar Texto'}
                </button>
                <Sumido   onClick={()=>setNaQuery(false)}>
                <p>Ver banco</p>
                </Sumido>
            </QueryFinal>
            {alterando?<></>:<Quadro>
                {erro||acerto?<h4 style={{color:acerto?'#00f700':erro==fraseSemLinhas?'white':'yellow'}}>{erro||acerto}</h4>:<Tabela nome={'Resultado'} campos={campos} lista={lista}/>}
            </Quadro>}
            </Conteudo>
    </Tudo>
)}
const Alterar=styled.div`
margin-bottom:20px;
flex-direction:column;
position:absolute;
top:100px;
width:95%;
background-color:white;
border-radius:15px;

`
const QueryFinal=styled.div`
flex-direction:column;
position:absolute;
bottom:20px;
width:95%;
background-color:#62e54e;
border-radius:15px;
height:130px;
h1{margin:0;font-size:18px;position:absolute;left:10px;top:8px;color:#1e870e}
h2{text-align: left;margin:0;font-size:16px;
font-weight:400;position:absolute;
left:10px;top:50px;color:black}
button{width:140px;
border-radius:10px;;cursor:pointer;
border:0;padding:7px;font-size:16px;position:absolute;
right:8px;
}
`
const Sumido=styled.article`
width:140px;display:flex;
border-radius:10px;;cursor:pointer;
border:0;font-size:16px;position:absolute;
right:156px;color:white;
bottom:8px;background:#157EBF;
justify-content:center;
p{
margin:0;padding:7px;
}
@media(min-width:800px){
display:none;
}
`
const Quadro=styled.div`
margin-top:20px;
flex-direction:column;
position:absolute;
bottom:160px;
background-color:#157ebf;
border-radius:15px;
h4{width:250px;padding:10px;
margin:0;font-size:20px;
}
`

const Tudo=styled.article`display:flex;
width:calc(100% - 400px);
position:relative;
padding:10px 0 10px 0;
height:calc(100% - 30px);
background-color:#cee5db;border-radius:15px;
flex-direction:column;
box-sizing:border-box;
justify-content:space-between;
align-items:center;
@media(max-width:800px){
width:90%;
display:${p=>p.naQuery?'':'none'}
}
`
const Botao=styled.div`font-size:20px;
align-items:center;
border-radius:10px;cursor:pointer;
width:22%;height:100%;justify-content:center;
background-color:${props=>props.selec?'#8fbaa6':'transparent'};
color:${props=>props.selec?'white':'black'}
`
const Holder=styled.div`
align-items:center;
width:100%;height:60px;
justify-content:space-evenly
`
const Conteudo=styled.div`
align-items:center;
width:100%;height:calc(100% - 60px);
flex-direction:column;
justify-content:center;
`