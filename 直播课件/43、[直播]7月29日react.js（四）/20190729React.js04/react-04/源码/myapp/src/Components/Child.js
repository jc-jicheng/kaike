import React from 'react';

export default class Child extends React.Component {

    render() {

        console.log(this.props.datas.a);
        
        return(
            <div>
                Child
            </div>
        );
    }

}