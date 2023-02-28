import React from 'react';
import { useState, useEffect } from 'react';

function Genre(){

    const [seguros, setSeguros] = useState([]);

    useEffect (()=> {
        fetch("http://localhost:3001/apip/alltipes")
        .then(response => response.json())
        .then (data => {
            setSeguros(data.data)
        })
    }, [])

    return(
        <React.Fragment>
            { seguros.length === 0 && <p>Cargando</p> }
                {
                    seguros.map ((tipo, i) =>{
                        return (
                            <div className="col-lg-6 mb-4">
                            <div className="card text-white bg-dark  shadow">
                                <div className="card-body">
                                    {tipo.nombre}
                                </div>
                            </div>
                        </div>
                        )
                   })
             }
        </React.Fragment>
    )
}
export default Genre;

