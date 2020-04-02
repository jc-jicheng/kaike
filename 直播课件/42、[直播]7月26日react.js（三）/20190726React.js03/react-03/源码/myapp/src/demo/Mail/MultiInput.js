import React from 'react';

export default class MultiInput extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            // 收件人列表
            users: []
        }

        this.keyDown = this.keyDown.bind(this);
    }


    static getDerivedStateFromProps(props, state) {
        if (props.user) {
            // 如果props中的user存在，那么更新到组件的state中
            let users = MultiInput.addNewUser(state.users, {name: props.user.name, email: props.user.email});
            return {
                users
            }
        }

        return null;
    }

    keyDown({which, target}) {
        // console.log(which);

        if (which === 13 && target.value !== '') {
            let users = MultiInput.addNewUser(this.state.users, {name: '', email: target.value});

            this.setState({
                users
            });
            target.value = '';
        }
    }

    // 添加不重复的收件人
    static addNewUser(users, user) {
        // 如果 users 里面 不存在 要添加的新 user
        if ( !users.find(u => u.email === user.email) ) {
            users.push(user);
        }
        return users;
    }

    render() {
        // console.log(this.props);
        // 虽然可以在这里拿到更新后的props，但是不要在render函数中调用
        // setState，问题：死循环
        let {users} = this.state;

        return (
            <div className="multi-input">
                {
                    users.map(user => (
                        <div key={user.email}>{user.name} {user.email};</div>
                    ))
                }
                <div>
                    <input type="text" onKeyDown={this.keyDown} />
                </div>
            </div>
        );
    }

}