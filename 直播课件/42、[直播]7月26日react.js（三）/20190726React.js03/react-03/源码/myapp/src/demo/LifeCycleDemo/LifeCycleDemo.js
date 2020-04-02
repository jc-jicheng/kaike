import React from 'react';

export default class LifeCycleDemo extends React.Component {

    constructor(props) {
        super(props);

        console.log('constructor');

        this.state = {
            n: 1
        }

        this.p = React.createRef();
        this.input = React.createRef();

        // console.log(this.p.current);
    }

    /**
     * 因为 getDerivedStateFromProps 是静态方法
     * 所以在该方法中不能使用 this 对象
     * 
     * 该方法的主要作用是，通过 props 更新 state
     * 如果一个组件内部状态state依赖props的更新，就使用该方法
     * 
     * 返回的对象就是新的 state
     */
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');

        return state;
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');

        return null;
    }
    /**
     * 组件挂载完成以后
     * 组件结构被渲染到页面dom中以后
     * 需要发送请求的时候，也可以在该生命周期中进行处理
     */
    componentDidMount() {
        console.log('componentDidMount');
        console.log(this.p.current);
        this.input.current.focus();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        console.log(this.state.n, nextState.n);

        // 只有 state 更新的时候渲染子组件，父级的更新不去重新渲染
        return this.state.n !== nextState.n;

        // return true;
    }

    

    render() {
        console.log('render');
        console.log(this.p.current);

        throw new Error('I crashed!');
        return (
            <div>
                <h1>LifeCycle</h1>
                <p onClick={e=>{
                    this.setState({n: this.state.n + 1});
                }} ref={this.p}>{this.state.n}</p>
                <input ref={this.input} type="text"/>
            </div>
        );
    }

}