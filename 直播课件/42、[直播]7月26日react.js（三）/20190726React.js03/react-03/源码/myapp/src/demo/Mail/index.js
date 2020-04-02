import React from 'react';

import './index.css';

import MultiInput from './MultiInput';

export default class Mail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            friends: [
                {id: 1, name: '张三', email: 'zhangsan@email.com'},
                {id: 2, name: '李四', email: 'lisi@email.com'},
                {id: 3, name: '王五', email: 'wangwu@email.com'}
            ],
            user: null
        };

        this.addUser = this.addUser.bind(this);
    }

    addUser(user, e) {
        // 如果一个函数是事件绑定的，那么这个函数的第一个参数是事件对象
        // 如果一个函数传入了其他参数，那么可以手动传入事件对象到绑定函数中
        // console.log(user, e);

        // console.log(user);

        // 组件更新的以后，会重新渲染
        this.setState({user});
    }

    render() {
        let {friends, user} = this.state;

        return (
            <div>
                <h1>邮件发送</h1>
                <hr/>
                <ul className="box fl">
                    {
                        friends.map(friend => (
                            <li 
                                key={friend.id}
                                onClick={e=>this.addUser(friend, e)}
                            >
                                {friend.name}
                            </li>
                        ))
                    }
                </ul>

                <div className="fl">
                    <MultiInput user={user} />
                </div>


            </div>
        );
    }

}