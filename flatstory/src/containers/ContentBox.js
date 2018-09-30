import React, { Component } from 'react';
import GameContainer from './GameContainer'


class ContentBox extends Component {
    render() {
        return (
            <div style={this.props.style}>
             I am the ContentBox
                <div style={{border: '1px dotted black'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ContentBox;
