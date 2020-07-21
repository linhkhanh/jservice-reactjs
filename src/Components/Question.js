import React from 'react';
class Question extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.question ?
                    <div>
                        <h2>New question</h2>
                        <p>Question: {this.props.question.question}</p>
                        <p>Category: {this.props.question.category}</p>
                        <p>Points: {this.props.question.point}</p>
                    </div> : ''}
            </React.Fragment>
        )
    }
}

export default Question;
