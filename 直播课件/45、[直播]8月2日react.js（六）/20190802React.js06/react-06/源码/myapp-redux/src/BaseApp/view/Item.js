import React from 'react';

export default class Item extends React.Component {

    render(){
        // console.log(this.props);
        // let id = this.props.match.params.id;

        // items：所有商品
        let items = this.props.items;
        // id：根据动态url中的不同数字获取到的
        let id = Number(this.props.match.params.id) || 0;
        // 根据不同的id从所有的商品中items中获取对应的某个item
        let item = items.find(item => item.id === id);

        return item ? (
            <div>
              <h2>商品详情 - {item.name}</h2>
              <dt>ID</dt>
              <dd>{item.id}</dd>
              <dt>名称</dt>
              <dd>{item.name}</dd>
              <dt>价格</dt>
              <dd>￥ {(item.price / 100).toFixed(2)}</dd>
            </div>
        ) : <div>不存在该商品！</div>;
    }

}