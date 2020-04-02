<template>
  <div>
    <h2>商品列表</h2>
    <select v-model="sort">
        <option value="desc">从高到低</option>
        <option value="asc">从低到高</option>
    </select>
    <ul class="item-list">
      <li class="head">
        <span>名称</span>
        <span>价格</span>
        <span>操作</span>
      </li>
      <li v-for="item of items" :key="item.id">
        <span>
          <router-link :to="{name: 'item', params: {itemId: item.id}}">{{item.name}}</router-link>
        </span>
        <span>{{item.price|RMB}}</span>
        <span>
          <button>添加到购物车</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
import {RMB} from '@/filters/filters'

export default {
  name: "home",
  data() {
    return {
      items: []
    };
  },
  filters: {
      RMB
  },
  computed: {
      sort: {
          get() {
            //   console.log(this.$route.query);
              return this.$route.query.sort || 'desc';
          },
          set(newVal) {
            //   console.log(newVal);
            this.$router.push({name: 'home', query: {sort: newVal}});
          }
      }
  },
  created() {
    this.getItems();
  },
//   watch: {
//       $route(to, from) {
//           // console.log('$route变了');
//           this.getItems();
//       }
//   },
  methods: {
      getItems() {
        axios({
            url: "/api/items",
            params: {
                sort: this.sort
            }
        }).then(({ data }) => {
            this.items = data;
        });
      }
  },


  beforeRouteEnter(to, from, next) {
      console.log('beforeRouteEnter');
      next(vm => {
          console.log(vm);
      });
  },
  beforeRouteUpdate(to, from, next) {
      console.log('beforeRouteUpdate', this);
      this.getItems();
      next();
  },
  beforeRouteLeave(to, from, next) {
      console.log('beforeRouteLeave', this);
      next();
  }
};
</script>
<style scoped>
ul {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

.item-list li {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px dotted #333;
}
.item-list li.head {
    font-weight: bold;
}
.item-list li span {
    min-width: 200px;
}
</style>