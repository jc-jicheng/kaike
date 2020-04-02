import React from 'react';

import './index.css';

export default class Dialog extends React.Component {

    render() {

        let {title, children} = this.props;

        return(
            <div className="dialog">
                <i className="dialog_close_btn"></i>
                <div className="dialog_header">
                    <span className="dialog_title">{title}</span>
                </div>
                <div className="dialog_content">
                    {children}
                </div>
            </div>
        )
    }

}