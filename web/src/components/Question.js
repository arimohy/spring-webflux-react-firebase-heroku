import React from 'react'
import { Link } from 'react-router-dom'

export const Question = ({ question, excerpt, onDelete }) => (
  <article className={excerpt ? 'question-excerpt' : 'question'}>

    <div className="card mb-3">
      <div className="row g-0">
      <h6 className="card-header">{question.nombre}</h6>
        
        
        <div className="col-md-10">
          <div className="card-body">
            <h3 className="card-title">{question.question}</h3>
            <h5 className="card-text">{question.category}  - <small>{question.type}</small></h5>
            
          </div>
        </div>
        <div className="col-md-2">
        <img src={question.url} alt="img-fluid rounded-end" alt="..." />
        </div>
      </div>
    </div>
   
    {onDelete && (
      <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
    )}
    {excerpt && (
      <Link to={`/question/${question.id}`} className="button">
        View Question
      </Link>
    )}
  </article>
)
