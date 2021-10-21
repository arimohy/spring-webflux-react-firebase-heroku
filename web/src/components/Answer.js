import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//const auth=firebase.auth().currentUser;
//console.log(auth)

export const Answer = ({ answer }) => (
  //<aside className="answer">
  // <p>{answer.answer}</p>
  //</aside>
  <aside className="answer">
  <div className="card mb-3">
  <div className="row g-0">
  <h6 className="card-header">{answer.nombre}</h6>
    <div className="col-md-2">
    <img src={answer.url} alt="img-fluid rounded-start" alt="..." />
    </div>
    
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">Answer:</h5>
        <p className="card-text">{answer.answer}.</p>
        
      </div>
    </div>
  </div>
</div>
  </aside>
);
