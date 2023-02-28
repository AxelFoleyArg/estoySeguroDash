import React from 'react';
import { useEffect, useState } from 'react';

function SmallCard(props){

const [cantidad, setCantidad] = useState ([])

 
 useEffect(()=>{
    fetch ("http://localhost:3001/apiu/listall")
    .then (response =>response.json())
    .then (data => {
        setCantidad(data.data)
    })

}
, []);

    return(
        <React.Fragment>
            <div className="col-md-4 mb-4">
                <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}> {props.titulo}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{cantidad.length}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas ${props.icono} fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SmallCard;