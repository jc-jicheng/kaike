import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'

Vue.use(Vuex)

let store = new Vuex.Store({
    state,
    getters: {
        subContent(state) {
            return state.content.length <= 12 ? state.content : state.content.substring(0, 12) + '......'
        },

        // subContent(state) {
        //     return function(number) {
        //         return state.content.length <= number ? state.content : state.content.substring(0, number) + '......'
        //     }
        // }
    },
    mutations: {
        editContent(state, payload) {
            state.content = payload;
            // setTimeout(() => {
            //     state.content = payload;
            // }, 1000)
            // return true;
        }
    },
    actions: {
        editContent(store, payload) {
            // setTimeout(() => {
            //     store.commit('editContent', payload)
            // }, 1000);
            // return true;

            return new Promise(resolve => {
                setTimeout(() => {
                    store.commit('editContent', payload);
                    resolve(true);
                }, 1000);
            })
        }
    }
})


//
// let state = {
//   a: 1
// }
// let state = _=>({a:1})
// const store1 = new Vuex.Store({
//     state
// })
// const store2 = new Vuex.Store({
//     state
// })

// console.log(store1.state == store2.state)
// store1.state.a = 100;
// console.log(store1.state.a, store2.state.a);

export default store