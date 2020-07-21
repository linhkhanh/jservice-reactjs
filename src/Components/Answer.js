import React from 'react';
class Answer extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.question ?
                    <div>
                        <button onClick={this.props.toggleAnswer}>Answer</button>
                        <p>{this.props.showAnswer ? this.props.question.answer : ''} </p>
                    </div> : ''
                }
            </React.Fragment>

        )
    }
}

export default Answer;
