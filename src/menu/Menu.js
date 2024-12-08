import styled from 'styled-components'
export default function Menu({setPagina}){
    return(
    <Tudo>
        <Acoes>
            <h1>Banco:</h1>
            <h2>{'Casas'}</h2>
            <Botao wid={true} onClick={()=>setPagina(1)} cor={'#497c65'}>
                Alterar Banco
            </Botao>
        </Acoes>
        <Acoes>
            <Botao onClick={()=>setPagina(1)} cor={'#497c65'}>
            <ion-icon name={'grid'}/>
                Tabelas
            </Botao>
            {/*<Botao onClick={()=>setPagina(2)} cor={'#497c65'}>
            <ion-icon name={'eye'}/>
                Vizualizar
            </Botao>*/}
            <Botao onClick={()=>setPagina(3)}  cor={'#497c65'}>
            <ion-icon name={'play'}/>
                Querys
            </Botao>
            <Botao onClick={()=>setPagina(3)} style={{color:'gray'}}  cor={'#c9c9c9'}>
            <ion-icon name={'reader'}/>
                Histórico
            </Botao>
        </Acoes>
    </Tudo>
)}
const Acoes=styled.div`
flex-direction:column;
justify-content:space-between;
h1{margin:0;font-size:20px;font-weight:500;}
h2{margin:0;font-size:20px;font-weight:700;}
`
const Botao=styled.div`cursor:pointer;
color:white;font-size:18px;
flex-direction:column;
justify-content:center;line-height:18px;
background-color:${props=>props.cor};
width:120px;height:${p=>p.wid?55:95}px;
border-radius:15px;
margin:10px 0 10px 0;
ion-icon{font-size:30px;margin-bottom:5px;}
`


const Tudo=styled.div`
div{align-items:center}
h6{
position:absolute;bottom:130px;
font-size:18px;font-weight:500;padding-left:30px;
width:100%;display:flex;}
flex-direction:column;justify-content:space-between;
padding:15px 0 15px 0;position:relative;
height:100%;width:150px;background-color:#6da88e;
`