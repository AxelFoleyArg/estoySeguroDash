import React from "react";
import imagenFondo from '../assets/images/mandalorian.jpg';
import { useEffect, useState } from "react";



function LastMovie (){

    const [seguro, setSeguros] = useState ([]);

    useEffect (()=>{
        fetch ("http://localhost:3001/apiup/most")
        .then(response => response.json())
        .then (data =>{
            setSeguros(data.data)
        })
    },[])

    
    return(
        <React.Fragment>
        <div className="col-lg-6 mb-4">
	    <div className="card shadow mb-4">
		<div className="card-header py-3">
			<h5 className="m-0 font-weight-bold text-gray-800">Seguro mas Vendido</h5>
            <p> {seguro.nombre} </p>
		</div>
		<div className="card-body">
		    <div className="text-center">
			    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
		    </div>
			    <p>{seguro.descripcion} </p>
			    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver Detalle</a>
		</div>
	</div>
</div>
</React.Fragment>
    )
}

export default LastMovie;

