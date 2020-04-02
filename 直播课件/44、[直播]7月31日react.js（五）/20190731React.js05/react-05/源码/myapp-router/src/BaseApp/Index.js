import React from 'react';

import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';

import Home from './view/Home';
import About from './view/About';
import Item from './view/Item';
import Cart from './view/Cart';
import Login from './view/Login';
import NotFound from './view/NotFound';

export default class BaseApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // 当前登录的用户信息
            userInfo: {
              id: 0,
              username: ''
            },
            items: [
              {
                id: 1,
                name: 'iPhone XR',
                price: 542500
              },
              {
                id: 2,
                name: 'Apple iPad Air 3',
                price: 377700
              },
              {
                id: 3,
                name: 'Macbook Pro 15.4',
                price: 1949900
              },
              {
                id: 4,
                name: 'Apple iMac',
                price: 1629900
              },
              {
                id: 5,
                name: 'Apple Magic Mouse',
                price: 72900
              },
              {
                id: 6,
                name: 'Apple Watch Series 4',
                price: 599900
              }
            ]
        }
    }

    render(){
        return(
            <div>
                <h1>我的个人应用</h1>
                <hr/>
                
                {/*<Home />
                <About />*/}

                <nav>
                    {/*<Link to="/">Home</Link>
                    <span> | </span>
                    <Link to="/about">About</Link>*/}

                    {/*<NavLink to="/" exact activeStyle={{color:'red'}}>Home</NavLink>*/}
                    <NavLink to="/" activeStyle={{color:'red'}} isActive={function(a, b){
                      // 自定义激活规则
                      // console.log('arg', arguments);
                      // arguments[0]: NavLink 的路由配置对象
                      // arguments[1]: 当前访问的url解析过后的路由对象
                      // console.log(b.pathname);
                      // return false;
                      return b.pathname === '/' || b.pathname.startsWith('/item');
                    }}>Home</NavLink>
                    <span> | </span>
                    <NavLink to="/cart" activeStyle={{color:'red'}} exact>Cart</NavLink>
                    <span> | </span>
                    <NavLink to="/about" exact activeStyle={{color:'red'}}>About</NavLink>
                </nav>
                <hr/>

                <Switch>
                  {/* <Home data={this.state.items} /> */}
                  {/* <Route exact path="/" component={Home} /> */}

                  <Route path="/:page(\d*)" render={props => {
                      // 传递props给组件的时候，我们使用 render 属性
                      return <Home {...props} items={this.state.items} />
                  }} />

                  <Route path="/item/:id(\d+)" render={props => {
                      // console.log(props);
                      // <Item history={props.history} match={props.match} items={this.state.items} />
                      
                      return <Item {...props} items={this.state.items} />
                  }} />

                  <Route path="/cart" render={props => {
                    if (this.state.userInfo.id > 0) {
                      return <Cart />;
                    } else {
                      // console.log(props);
                      // props.history.push('/login');
                      // return (
                      //   <div>你没有权限访问，<Link to="/login">请先登录</Link></div>
                      // );
                      return <Redirect to='/login' />;
                    }
                  }} />

                  <Route path="/login" component={Login} />

                  <Route path="/about" component={About} />

                  {/*NotFound*/}
                  <Route component={NotFound} />
                </Switch>
            </div>
        );
    }

}