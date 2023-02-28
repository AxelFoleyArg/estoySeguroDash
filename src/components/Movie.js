import React from 'react';
import { useEffect, useState } from 'react';


function Movie(){

const [seguros, setSeguros] = useState ([]);

useEffect (()=> {
	fetch ("http://localhost:3001/apiup/listall")
	.then (response => response.json())
	.then(data => {
		setSeguros(data.data)
	})
}
, [])



    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Ultimas contrataciones</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Usuario</th>
                                            <th>Seguro</th>
                                            <th>Fecha Contratacion</th>
                                            <th>Email</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Usuario</th>
                                            <th>Seguro</th>
                                            <th>Fecha Contratacion</th>
                                            <th>Email</th>
										</tr>
									</tfoot>
									<tbody>
										{ seguros.length === 0 && <p>Cargando</p>}
										{
											seguros.map((seguro,i) => {
												return (
													<tr>
													<td key = {i}> {1+i++} </td>
													<td> {seguro.usuario_id} </td>
													<td>{seguro.seguro_id}</td>
													<td> {seguro.fecha_contratacion} </td>
													<td> {seguro.fecha_vencimiento} </td>
												</tr>
												)
											})
										}
									
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default Movie;