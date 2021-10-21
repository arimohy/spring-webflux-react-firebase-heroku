import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import imagensinusuario from "../userd.png"
import Swal from 'sweetalert2'
//const auth=firebase.auth().currentUser;
//console.log(auth)

export const Answer = ({ answer ,userId, onDelete}) => (
  //<aside className="answer">
  // <p>{answer.answer}</p>
  //</aside>
  <aside className="answer">
  <div className="card mb-3">
  <div className="row g-0">
  <h6 className="card-header">{answer.nombre!=null?answer.nombre:"usuario sin nombre"}</h6>
  
    <div className="col-md-2">
    <img src={answer.url!=null?answer.url:imagensinusuario} alt="img-fluid rounded-start" alt="..." />
    </div>
    
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">Answer:</h5>
        <p className="card-text">{answer.answer }.</p>
        {answer.userId === userId && 
        <a className="btn btn-danger"onClick={() => {
          Swal.fire({
            title: "¿Eliminar respuesta?",
            text: "Esta seguro ya no se podra recuperar !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminarlo!",
          }).then((result) => {
            if (result.isConfirmed) {
              onDelete(answer.id)
              Swal.fire("Eliminado!", "Su pregunta fue eliminado.", "success");
            }
          });
          
        }} >Delete Answer</a>}
      </div>
      
    </div>
    
  </div>
  
</div>
<div>

</div>

  </aside>
);
