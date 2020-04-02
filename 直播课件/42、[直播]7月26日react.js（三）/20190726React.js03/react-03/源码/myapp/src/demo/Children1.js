import React from 'react';

export default class Children1 extends React.Component {

    render() {
        // console.log(this.props.children);
        return (
            <div>
                <h1>标题 - Children1</h1>
                {this.props.children}
            </div>
        );
    }

}