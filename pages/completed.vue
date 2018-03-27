<template>
   <div class="mx-auto container">
   <article class="container mx-auto max-w-md text-center font-mono">
     <h1 class="text-bold">Active Todos</h1>
     <ul class="text-white p-0">
       <li v-for="t in todos" :key="t.id" class="flex p-2 items-center list-reset my-2 py-4 bg-orange border-black border-dashed border-2">
        <span @dblclick="toggle(t)" class="flex-1 cursor-pointer" :class="{ 'line-through text-grey-darkest': t.done }">{{t.text}}</span>
       </li>
       </ul>
     </article>
     </div>
</template>

<script>
import { mapState } from 'vuex';
import { init } from './shared';

export default {
  fetch: init,

  computed: {
    ...mapState({
      todos: state => state.todos.filter(t => t.done)
    })
  }
}
</script>
