import {createStore} from "vuex";

const store = createStore({
   state: {
      count: 10,
      todos: [
         {id: 1, title: 'ToDo 1', done: true},
         {id: 2, title: 'ToDo 2', done: true},
         {id: 3, title: 'ToDo 3', done: false}
      ]
   },

   getters: {
      doneTodos(state) {
         return state.todos.filter(x => x.done);
      },
      getTodo: (state) => (id) => {
         return state.todos.find(x => x.id === id);
      }
   },

   mutations: {
      incrementCount(state, payload) {
         state.count += payload.number
      }
   },

   actions: {
      increment({commit}, number) {
         // context.commit('incrementCount', number)
         commit('incrementCount', number)
      }
   }
});

export default store;