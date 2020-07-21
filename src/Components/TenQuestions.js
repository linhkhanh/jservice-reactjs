import React from 'react';
import OneQuestion from './OneQuestion';
class TenQuestions extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.tenQuestions ?
                    <div>
                        <h1>Ten questions</h1>
                        {this.props.tenQuestions.map((question, index) => {
                            return (
                                <OneQuestion question={question} index={index}/>
                            )
                        })}
                    </div>
                    : ''
                }
            </React.Fragment>
        )
    }
}

export default TenQuestions;