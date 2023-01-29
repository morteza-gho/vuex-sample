<template>
   <h2>Count: {{count}}</h2>
   <button @click="increment">Increment</button>

   <br>
   <h3>Todo List:</h3>
   <ul>
      <li v-for="todo in todos" :key="todo.id">{{todo.title}}</li>
   </ul>
   <hr>
   <h4>Done:</h4>
   <ol>
      <li v-for="todo in doneTodos" :key="todo.id">
         <s>{{todo.title}}</s>
      </li>
   </ol>
   <hr>
   <p>Todo 2: {{todo2.title}}</p>




</template>

<script>
   import {useStore} from "vuex";
   import {computed} from "@vue/reactivity";

   export default {
      name: 'Home',

      setup() {

         const store = useStore();

         const count = computed(() => store.state.count);
         const todos = computed(() => store.state.todos);
         const doneTodos = computed(() => store.getters.doneTodos);
         const todo2 = computed(() => store.getters.getTodo(2));

         const increment = () => {
            // store.commit('incrementCount', {number: 2});
            store.dispatch('increment', {number: 3});
         }

         return {count, todos, doneTodos, todo2, increment}
      }

   }
</script>
