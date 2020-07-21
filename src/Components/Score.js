import React from 'react';
class Score extends React.Component {
  render () {
    return (
      <div>
          <h2>Score: {this.props.score} </h2>
          <button onClick={this.props.question? this.props.subtractScore: ''}>Decrease</button>
          <button onClick={this.props.question? this.props.addScore: ''}>Increase</button>
          <button onClick={this.props.resetScore}>Reset</button>
      </div>
    )
  }
}

export default  Score;
