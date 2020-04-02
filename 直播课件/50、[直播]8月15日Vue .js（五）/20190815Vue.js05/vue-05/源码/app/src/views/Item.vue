<template>
    <div>
        <template v-if="item">
            <h2>商品详情 - {{item.name}}</h2>
            <dt>ID</dt>
            <dd>{{item.id}}</dd>
            <dt>名称</dt>
            <dd>{{item.name}}</dd>
            <dt>价格</dt>
            <dd>{{item.price|RMB}}</dd>
        </template>
        <template v-else>
            <h2>没有该商品信息</h2>
        </template>
    </div>
</template>
<script>
import axios from "axios"
import {RMB} from '@/filters/filters'

export default {
    name: 'item',
    data() {
        return {
            item: {}
        }
    },
    filters: {RMB},
    created() {
        //console.log(this.$route.params.itemId);
        axios({
            url: '/api/item/' + this.$route.params.itemId
        }).then(({data}) => {
            this.item = data;
        })
    }
}
</script>