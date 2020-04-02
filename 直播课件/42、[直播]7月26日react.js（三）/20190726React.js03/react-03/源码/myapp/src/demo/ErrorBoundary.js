import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError');
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
    
    render() {
        if (this.state.hasError) {
            return <div>出错了</div>;
        }
        return this.props.children;
    }
}