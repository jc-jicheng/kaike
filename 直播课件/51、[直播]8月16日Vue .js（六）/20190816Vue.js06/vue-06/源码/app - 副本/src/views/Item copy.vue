<template>
    <div>
        <template v-if="loading">
            Loading......
        </template>

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
        </template>
    </div>
</template>
<script>
import axios from "axios"
import {RMB} from '@/filters/filters'

export default {
    name: 'item',
    props: ['itemId'],
    data() {
        return {
            loading: false,
            hasError: false,
            item: null
        }
    },
    filters: {RMB},
    watch: {
        itemId() {
            this.getItem();
        }
    },
    created() {
        //console.log(this.$route.params.itemId);
        this.getItem();
    },
    methods: {
        getItem() {
            this.loading = true;
            axios({
                url: '/api/item/' + (this.itemId)
            }).then(res => {
                this.item = res.data;
            }).catch(err=>this.hasError=true).then(_=>{
                this.loading = false;
            });
        }
    }
}
</script>