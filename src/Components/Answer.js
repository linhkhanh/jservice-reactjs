import React from 'react';
class Answer extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.question ?
                    <div className="answer">
                        <button onClick={this.props.toggleAnswer} className="btn btn-warning">Answer</button>
                        &nbsp; <span className="red">{this.props.showAnswer ? this.props.question.answer : ''} </span>
                    </div> : ''
                }
            </React.Fragment>

        )
    }
}

export default Answer;
