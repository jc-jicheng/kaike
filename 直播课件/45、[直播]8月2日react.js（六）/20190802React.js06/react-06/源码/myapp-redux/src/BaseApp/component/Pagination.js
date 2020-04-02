import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';


class Pagination extends React.Component {
    static defaultProps = {
        pages: 1,
        page: 1
    }

    static propTypes = {
        pages: PropTypes.number,
        page: PropTypes.number
    }

    render() {

        let {pages, page} = this.props;
        // console.log(this.props);

        return (
            <div className="pagination">
                {
                    (new Array(pages)).fill('').map((v, i) => {
                        return (
                            <Link 
                                key={++i}
                                className={i === page ? 'active' : ''}
                                to={'/'+i}
                            >
                                {i}
                            </Link>
                        );
                    })
                }
                前往
                <input type="text" className="goto" onKeyDown={e=>{
                    if(e.keyCode === 13) {
                        // console.log(e.target.value);
                        // console.log(this.props);
                        this.props.history.push('/' + e.target.value);
                    }
                }} />
                页
            </div>
        );
    }
}

export default withRouter(Pagination);