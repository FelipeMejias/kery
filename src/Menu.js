import styled from 'styled-components'
export default function Menu({setPagina}){
    return(
    <Tudo>
        <Acoes>
            <Botao onClick={()=>setPagina(1)} cor={'#497c65'}>
            <ion-icon name={'grid'}/>
                Banco
            </Botao>
            <Botao onClick={()=>setPagina(2)} cor={'#497c65'}>
            <ion-icon name={'eye'}/>
                Vizualizar
            </Botao>
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
flex-direction:column;height:420px;
justify-content:space-between;
`
const Botao=styled.div`cursor:pointer;
color:white;font-size:18px;
flex-direction:column;
justify-content:center;line-height:18px;
background-color:${props=>props.cor};
width:120px;height:95px;
border-radius:15px;
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