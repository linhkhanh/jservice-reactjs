import React from 'react';
class OneQuestion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showAnswer: false
        }
    }
    toggleAnswer = () => {
        this.setState({
            showAnswer: true
        })
    }
    render() {
        return (
            <ul>
                <li>Q{this.props.index + 1}</li>
                <ul>
                    <li>Question: {this.props.question.question}</li>
                    <li>Category: {this.props.question.category.title}</li>
                    <li>Points: {this.props.question.value}</li>
                </ul>
                <button onClick={this.toggleAnswer}>Reveal Answer</button>
                <p>{this.state.showAnswer ? "Answer:" + this.props.question.answer : ''}  </p>
            </ul>
        )
    }
}

export default OneQuestion;
