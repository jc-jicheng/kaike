<template>
    <div>
        <!-- <template v-if="loading">
            Loading......
        </template> -->

        <template v-if="hasError">
            <h2>没有该商品信息</h2>
        </template>

        <template v-if="item">
            <h2>商品详情 - {{item.name}}</h2>
            <dt>ID</dt>
            <dd>{{item.id}}</dd>
            <dt>名称</dt>
            <dd>{{item.name}}</dd>
            <dt>价格</dt>
            <dd>{{item.price|RMB}}</dd>
            <h2>商品详情 - {{item.name}}</h2>
            <dt>ID</dt>
            <dd>{{item.id}}</dd>
            <dt>名称</dt>
            <dd>{{item.name}}</dd>
            <dt>价格</dt>
            <dd>{{item.price|RMB}}</dd>
            <h2>商品详情 - {{item.name}}</h2>
            <dt>ID</dt>
            <dd>{{item.id}}</dd>
            <dt>名称</dt>
            <dd>{{item.name}}</dd>
            <dt>价格</dt>
            <dd>{{item.price|RMB}}</dd>
            <h2>商品详情 - {{item.name}}</h2>
            <dt>ID</dt>
            <dd>{{item.id}}</dd>
            <dt>名称</dt>
            <dd>{{item.name}}</dd>
            <dt>价格</dt>
            <dd>{{item.price|RMB}}</dd>
            <h2>商品详情 - {{item.name}}</h2>
            <dt>ID</dt>
            <dd>{{item.id}}</dd>
            <dt>名称</dt>
            <dd>{{item.name}}</dd>
            <dt>价格</dt>
            <dd>{{item.price|RMB}}</dd>
        </template>
    </div>
</template>
<script>
import axios from "axios"
import {RMB} from '@/filters/filters'

function getItem(itemId, next) {
    axios({
        url: `/api/item/${itemId}`
    }).then(res => {
        // 注意 beforeRouteEnter 还不能获取组件实例
        next(vm=>{
            vm.item = res.data;
        });
    }).catch(err=>{
        next(vm => {
            vm.hasError = true;
        });
    });
}

export default {
    name: 'item',
    props: ['itemId'],
    data() {
        return {
            hasError: false,
            item: null
        }
    },
    filters: {RMB},
    watch: {
        itemId() {
            getItem();
        }
    },
    created() {
        console.log('created');
        //console.log(this.$route.params.itemId);
        // getItem();
    },

    beforeRouteEnter( to, from, next ) {
        console.log('开始发送请求');

        getItem(to.params.itemId, next);

        // axios({
        //     url: '/api/item/' + (to.params.itemId)
        // }).then(res => {
        //     // this.item = res.data;
        //     next( vm => {
        //         vm.item = res.data;
        //     });
        // }).catch(err=>{
        //     next(vm => {
        //         vm.hasError = true;
        //     });
        // });

        // next();
    },

    beforeRouteUpdate(to, from, next) {
        getItem(to.params.itemId);
        // axios({
        //     url: `/api/item/${to.params.itemId}`
        // }).then(res => {
        //     // 注意 beforeRouteEnter 还不能获取组件实例
        //     next(vm=>{
        //         vm.item = res.data;
        //     });
        // }).catch(err=>{
        //     next(vm => {
        //         vm.hasError = true;
        //     });
        // });
        
    }
}
</script>