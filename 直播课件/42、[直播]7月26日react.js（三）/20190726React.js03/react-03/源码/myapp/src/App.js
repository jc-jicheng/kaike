import React from 'react';

import Children1 from './demo/Children1';

import Dialog from './demo/Dialog';

import LifeCycleDemo from './demo/LifeCycleDemo/LifeCycleDemo';

import Mail from './demo/Mail';

import ErrorBoundary from "./demo/ErrorBoundary";

class App extends React.Component {

  constructor(args) {
      super(args);
      this.state = {
          n: 1,
      }
  }

  render() {
    return (
      <div className="App">
        
        {/*
          Children1：组件，当React解析完成以后，会把组件render方法返回的内容
          覆盖掉这里的<Children1></Children1>
        */}
        {/*<Children1 id="c1">
          <p>这是内容</p>
        </Children1>*/}
  
        {/*<Dialog title="标题一">
          <p>
            用户名：<input type="text" />
          </p>
        </Dialog>*/}
  
        <h2 onClick={e=> {
          this.setState({n: this.state.n + 1})
        }}>n: {this.state.n}</h2>

        <ErrorBoundary>
          <LifeCycleDemo></LifeCycleDemo>
        </ErrorBoundary>
  
        {/*<Mail />*/}
  
      </div>
    );
  }
}

export default App;
