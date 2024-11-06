import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Tabela from './Tabela'
export default function Add({context}){
    const {cidades,pessoas,casas,sofas,tvs}=context
    const [texto, setTexto] = useState('');
    const [possivel,setPossivel]=useState(false)
    const [campos,setCampos]=useState([])
    const [lista,setLista]=useState([])
    const tabelas=['cidades','pessoas','casas','sofas','tvs',]
    function setarItems(tabela){
        switch(tabela){
            case 'cidades':setCampos([['nome',2],]);setLista(cidades);break;
            case 'pessoas':setCampos([['nome',2],]);setLista(pessoas);break;
            case 'casas':setCampos([['idCidade',1],['idPessoa',1],['valor',3]]);setLista(casas);break;
            case 'sofas':setCampos([['idCasa',1],['valor',3]]);setLista(sofas);break;
            case 'tvs':setCampos([['idCasa',1],['valor',3]]);setLista(tvs);break;
        }
    }
    const lis=texto.split(' ')
    const l=[]
    for(let z of lis){
        if(z!==' ')l.push(z)
    }
    function rodar(){
        if(possivel){
            setarItems(l[3])
        }else{

        }
    }
    useEffect(()=>{
        if(
            l[0]=='SELECT' &&
            l[1]=='*' &&
            l[2]=='FROM' &&
            tabelas.includes(l[3])
        ){
            setPossivel(true)
        }else{
            setPossivel(false)
        }
    },[texto])
    return(
    <Tudo>
        <Esquerda>
            <Comand>
                <textarea
                    value={texto}
                    onChange={(e) => {setTexto(e.target.value)}}
                    rows={8} // Número de linhas visíveis inicialmente
                    cols={20} // Largura da caixa de texto em caracteres
                    style={{ resize: 'vertical' }} // Permite redimensionar verticalmente
                />
            <Run onClick={rodar} cor={possivel?'03a020':'d14623'}><ion-icon name="play"/>Rodar</Run>
            </Comand>
        
        </Esquerda>
        <Direita>
            <Quadro>
                <Tabela nome={'Resultado'} campos={campos} lista={lista}/>
            </Quadro>
        </Direita>
    </Tudo>
)}
const Comand=styled.div`
position:absolute;bottom:20px;
`
const Run=styled.div`cursor:pointer;
position:absolute;top:-40px;right:0;
justify-content:space-evenly;
width:90px;height:40px;
background-color:#${props=>props.cor};color:white;
border-top-left-radius:15px;
border-top-right-radius:15px;
`
const Esquerda=styled.div`
flex-direction:column;position:relative;height:100%;
width:50%;
`
const Quadro=styled.div`
flex-direction:column;
position:relative;height:100%;
background-color:#157ebf;
border-radius:15px;
height:calc(100% - 20px);
`
const Direita=styled.div`
justify-content:center;position:relative;height:100%;
width:50%;
`
const Tudo=styled.div`position:relative;
padding:10px 0 10px 0;
height:calc(100% - 30px);width:calc(100% - 165px);
background-color:#cee5db;border-radius:15px;

overflow:hidden;overflow-y:scroll;
textarea{

font-size:18px;padding:5px 0 0 7px;
}
`