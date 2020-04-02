import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
        // 基本错误处理
        console.log('getDerivedStateFromError', error);
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // 处理副作用等一些动作，比如：记录错误日志，发送错误警告
        console.log('componentDidCatch', error, info);
    }
  
    render() {
        if (this.state.hasError) {
            return <div>出错了</div>;
        }
        return this.props.children;
    }
  }