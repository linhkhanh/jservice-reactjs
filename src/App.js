import React from 'react';
import Header from './Components/Header';
import ButtonGetQuestions from './Components/ButtonGetQuestion';
import Question from './Components/Question';
import Answer from './Components/Answer';
import Score from './Components/Score';
import TenQuestions from './Components/TenQuestions';
import Footer from './Components/Footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'https://jservice.io/api/random',
      tenQuesUrl: 'https://jservice.io/api/random?count=10',
      showAnswer: false,
      score: 0,
      randomQuestion: '',
      tenQuestions: ''
    }
  }

  // get random question
  getRandomQuestion = async () => {
    const response = await fetch(this.state.url);
    const result = await response.json();
    this.setState({
      randomQuestion: {
        question: result[0].question,
        category: result[0].category.title,
        answer: result[0].answer,
        point: result[0].value,
        clue: result[0].category.clue_count
      },
      showAnswer: false,
      tenQuestions: ''
    })
  }

  // show answer
  toggleAnswer = () => {
    this.setState({
      showAnswer: !this.state.showAnswer
    })
  }

  // add score
  addScore = () => {
    this.setState({
      score: this.state.score + this.state.randomQuestion.point
    })
  }

  // subtract score
  subtractScore = () => {
    this.setState({
      score: this.state.score - this.state.randomQuestion.point
    })
  }

  // resrt score
  resetScore = () => {
    this.setState({
      score: 0
    })
  }

  // get 10 random questions
  getTenQuestions = async () => {
    const response = await fetch(this.state.tenQuesUrl);
    const result = await response.json();
    this.setState({
      randomQuestion: '',
      tenQuestions: result
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="top row">
            <Score score={this.state.score}
              addScore={this.addScore}
              subtractScore={this.subtractScore}
              question={this.state.randomQuestion}
              resetScore={this.resetScore}
            />
            <ButtonGetQuestions getRandomQuestion={this.getRandomQuestion} getTenQuestions={this.getTenQuestions} />
          </div>
          <div className="main-content">
            <Question question={this.state.randomQuestion} />
            <TenQuestions tenQuestions={this.state.tenQuestions} />
            <Answer toggleAnswer={this.toggleAnswer} showAnswer={this.state.showAnswer} question={this.state.randomQuestion} />
          </div>

        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
