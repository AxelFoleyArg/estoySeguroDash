import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Cantidad de Seguros ",
    valor: 21,
    icono: "fas fa-car",
}

let amount ={
    color:   "success",
    titulo: "Cantidad de Usuarios",
    valor: 79,
    icono: "fas fa-user",
}

let user = {
    color:   "warning",
    titulo: "Cantidad de Seguros por Usuario",
    valor: 49,
    icono: "fas fa-heart",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;