import React, { useEffect ,useState} from "react";
import { useHistory } from "react-router-dom";
import { postQuestion } from '../actions/questionActions'
import { connect } from 'react-redux'
import { Text } from "../components/Text";

const FormPage = ({ dispatch, loading, redirect, userId,url,nombre ,userEmail}) => {
    const [formState, setformState] = useState({
        type:'OPEN (LONG OPEN BOX)',
        category:'TECHNOLOGY AND COMPUTER'
    })
    const validateInput = ({question}) => {
        if(question.length && question.length <=500) {
            return true;
        }
        return false;
    }


    const [content, setContent] = useState('');


    const history = useHistory();

    
    const onSubmit = e => {
        e.preventDefault();
        const data = {...formState,
            userId,
            url,
            nombre,
            question:content,
            userEmail
        }
        validateInput(data) && dispatch(postQuestion(data));
    }
    const handleInputChange = ({target}) => {
        setformState({...formState,
            [target.name]:target.value
        });
    }

    useEffect(() => {
        if (redirect) {
            history.push(redirect);
        }
    }, [redirect, history])

    return (
        <section>
            <h1>New Question</h1>

            <form onSubmit={onSubmit}>

                <div>
                    <label for="type">Type</label>
                    <select name="type" onChange={handleInputChange} id="type">
                        <option value="OPEN (LONG OPEN BOX)">OPEN (LONG OPEN BOX)</option>
                        <option value="OPINION (SHORT OPEN BOX)">OPINION (SHORT OPEN BOX)</option>
                        <option value="WITH RESULT (OPEN BOX WITH LINK)">WITH RESULT (OPEN BOX WITH LINK)</option>
                        <option value="WITH EVIDENCE (OPEN BOX WITH VIDEO)">WITH EVIDENCE (OPEN BOX WITH VIDEO)</option>
                    </select>
                </div>
                <div>
                    <label for="category">Category</label>
                    <select name="category"onChange={handleInputChange} id="category">
                        <option value="TECHNOLOGY AND COMPUTER">TECHNOLOGY AND COMPUTER</option>
                        <option value="SCIENCES">SCIENCES</option>
                        <option value="SOFTWARE DEVELOPMENT">SOFTWARE DEVELOPMENT</option>
                        <option value="SOCIAL SCIENCES">SOCIAL SCIENCES</option>
                        <option value="LANGUAGE">LANGUAGE</option>

                    </select>
                </div>

                <div>
                    <label for="question">Question</label>
                    <Text id="question" setContent={setContent}/>
                    </div>

                <button type="submit" className="button" disabled={loading} >{
                    loading ? "Saving ...." : "Save"
                }</button>
            </form>
        </section>

    );
}

const mapStateToProps = state => ({
    loading: state.question.loading,
    redirect: state.question.redirect,
    hasErrors: state.question.hasErrors,
    userId: state.auth.uid,
    url:state.auth.photoURL,
    nombre: state.auth.displayName,
    userEmail: state.auth.email
})

export default connect(mapStateToProps)(FormPage)