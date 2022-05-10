import React, { Component } from "react";
import axios from "axios";
import ShowQuestions from "./showQuestions";
import { useParams } from "react-router-dom";


function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

export class Quiz extends Component {
    
  constructor(props) {
    super(props);
      this.state = {
      questions: [],
      currentIndex: 0,
    };
  };


  componentDidMount() {
    let { quizId } = this.props.params;
    console.log(quizId);
        axios
      .get(`https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/${quizId}`, {
        headers: { "X-Access-Token": process.env.REACT_APP_ACCESS_TOKEN },
      })
      .then((res) => {
        const sandu = res.data;
        this.setState({
          questions: sandu.questions,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

 
  render() {
    return (
      <>
        <h2>{this.state.questions.title}</h2>
        <ShowQuestions questions={this.state.questions} />
      </>
    );
  }
}

export default withParams(Quiz);