import React from "react";
import { Link } from "react-router-dom";
import imagensinusuario from "../userd.png";
import Swal from 'sweetalert2'

export const Question = ({ question, excerpt, onDelete ,setCategorySearch}) => {
  
  const handleCategorySearch = (e)=>{
    setCategorySearch(question.category)
  }


  return (<article className={excerpt ? "question-excerpt" : "question"}>
    <div className="card mb-3">
      <div className="row g-0">
        <h6 className="card-header">
          {question.nombre != null ? question.nombre : "usuario sin nombre"}
        </h6>

        <div className="col-md-10">
          <div className="card-body">
          <div dangerouslySetInnerHTML={{__html:question.question}} />
            <h5 className="card-text">
            {setCategorySearch?
            <p className="categorySearch" onClick={handleCategorySearch}>{question.category}  - <small>{question.type}</small></p>:
            <p>{question.category}  - <small>{question.type}</small></p>
            }
            </h5>
          </div>

          
        </div>
        <div className="col-md-2">
          <img
            src={question.url != null ? question.url : imagensinusuario}
            alt="img-fluid rounded-end"
            alt="..."
          />
        </div>
      </div>
    </div>

    {onDelete && (
      <button
        className="button right"
        onClick={() => {
          Swal.fire({
            title: "¿Estas Seguro que quieres eliminar esta pregunta?",
            text: "Se eliminaran tambien sus respuestas!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminarlo!",
          }).then((result) => {
            if (result.isConfirmed) {
              onDelete(question.id)
              Swal.fire("Eliminado!", "Su pregunta fue eliminado.", "success");
            }
          });
          //onDelete(question.id)
        }}
      >
        DELETE
      </button>
      //<button className="button right">DELETE</button>
    )}
    {excerpt && (
      <Link to={`/question/${question.id}`} className="button">
        View Question
      </Link>
    )}
  </article>)
}
