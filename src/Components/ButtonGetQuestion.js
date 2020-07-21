import React from 'react';
class ButtonGetQuestions extends React.Component {
  render () {
    return (
      <div>
         <h1>Let's play</h1>
          <button onClick={this.props.getRandomQuestion}>Random Trivia question</button>
          <button onClick={this.props.getTenQuestions}>Get 10 questions</button>
      </div>
    )
  }
}

export default  ButtonGetQuestions;
