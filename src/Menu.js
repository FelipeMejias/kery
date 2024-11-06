import styled from 'styled-components'
export default function Menu({setFase}){
    return(
    <Tudo>
        <Acoes>
            <Botao onClick={()=>setFase(1)} cor={'#497c65'}>Banco</Botao>
            <Botao onClick={()=>setFase(22)} cor={'#497c65'}>Banco Gráfico</Botao>
        </Acoes>
        <h6>Querys:</h6>
        <Acoes>
            <BD ><p>Criar</p><h5>em desenvolvimento</h5></BD>
            <BD ><p>Historico</p><h5>em desenvolvimento</h5></BD>
        </Acoes>
        
    </Tudo>
)}
/*
<Botao onClick={()=>setFase(3)} cor={'#0967a5'}>Criar</Botao>
            <Botao onClick={()=>setFase(3)} cor={'#497c65'}>Histórico</Botao>
            */
const Acoes=styled.div`

flex-direction:column;height:140px;justify-content:space-between;
`
const Botao=styled.div`cursor:pointer;
color:white;font-size:18px;
justify-content:center;line-height:18px;
background-color:${props=>props.cor};
width:120px;height:60px;
border-radius:15px;
`

const BD=styled.div`cursor:pointer;
color:black;font-size:18px;flex-direction:column;
justify-content:center;line-height:18px;
background-color:#c4c4c4;
width:120px;height:60px;
border-radius:15px;
p{margin:0;
font-size:18px;
justify-content:center;line-height:18px;
}
h5{margin:0;font-weight:300;font-size:12px;}
`
const Tudo=styled.div`
h6{
position:absolute;bottom:130px;
font-size:18px;font-weight:500;padding-left:30px;
width:100%;display:flex;}
flex-direction:column;justify-content:space-between;
padding:15px 0 15px 0;position:relative;
height:100%;width:150px;background-color:#6da88e;
`