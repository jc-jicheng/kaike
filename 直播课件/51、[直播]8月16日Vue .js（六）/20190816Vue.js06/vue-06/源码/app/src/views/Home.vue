<template>
  <div>
    <h1>{{title}}</h1>
    <hr>

    <h2>{{subTitle}} - {{x}}</h2>
    <div>{{content}}</div>
    <div>{{subContent}}</div>

    <button @click="editContent">修改content</button>

  </div>
</template>

<script>
// import store from '@/stores'
import {mapState, mapGetters} from 'vuex'

export default {
  name: "home",
  data() {
    return {title: 'Vuex'}
  },
  // computed: {
  //   title() {
  //     return this.$store.state.title
  //   },
  //   content() {
  //     return this.$store.state.content
  //   }
  // },

  // computed: mapState([
  //   'title','content'
  // ]),

  // computed: mapState({
  //   subTitle: 'title',
  //   // content: 'content',

  //   content: ({content}) => content.length <= 12 ? content : content.substring(0, 12) + '......'
  // })

  computed: {
    x() {
      return 1
    },
    ...mapState({
      subTitle: 'title',
      content: 'content'
    }),

    // subContent() {
    //   //return this.$store.getters.subContent
    //   return this.$store.getters.subContent(1)
    // }

    ...mapGetters(['subContent'])
  },

  methods: {
    async editContent() {
      //this.$store.state.content = '123';

      // let rs = this.$store.commit('editContent', '123');
      // console.log(rs);

      let rs = await this.$store.dispatch('editContent', '123');
      console.log(rs);
    }
  }
};
</script>
<style scoped>
</style>