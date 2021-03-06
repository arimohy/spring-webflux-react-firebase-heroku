import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchQuestion ,deleteAnwer} from '../actions/questionActions'

import { Question } from '../components/Question'
import { Answer } from '../components/Answer'
import { Link } from 'react-router-dom'
import QuestionReviewForm from "../components/QuestionReviewForm";

const SingleQuestionPage = ({
  match,
  dispatch,
  question,
  hasErrors,
  loading,
  userId,
  url,
  nombre,
  redirect
}) => {
  const { id } = match.params
  useEffect(() => {
    dispatch(fetchQuestion(id))
  }, [dispatch, id,redirect])

  const onDelete = (id) => {
    dispatch(deleteAnwer(id))
}
  const renderQuestion = () => {
    if (loading.question) return <p>Loading question...</p>
    if (hasErrors.question) return <p>Unable to display question.</p>

    return (
      <div>
        <Question question={question} />{" "}
        
        <QuestionReviewForm question={question} />
        
      </div>
    );
  };


  const renderAnswers = () => {
    return (question.answers && question.answers.length) ? question.answers.map(answer => (
      <Answer key={answer.id}
       answer={answer} 
       userId={userId} 
       onDelete={onDelete} />
    )) : <p>Empty answer!</p>;
  }

  return (
    <section>
      {renderQuestion()}
      {userId && <Link to={"/answer/" + id} className="button right">
        Reply
      </Link>}
      
      <h2>Answers</h2>
      {renderAnswers()}
      
    </section>
  )
}

const mapStateToProps = state => ({
  question: state.question.question,
  loading: state.question.loading,
  hasErrors: state.question.hasErrors,
  userId: state.auth.uid,
  url:state.auth.photoURL,
  nombre: state.auth.displayName,
  redirect: state.question.redirect,
})

export default connect(mapStateToProps)(SingleQuestionPage)
