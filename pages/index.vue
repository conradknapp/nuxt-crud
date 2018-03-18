<template>
   <article class="container mx-auto max-w-md text-center font-mono">
     <h1 class="text-bold">Todos</h1>
     <ul class="text-white p-0">
       <li v-for="t of todos" v-text="t.task" :key="t" class="list-reset my-2 py-4 bg-orange border-black border-dashed border-2"></li>
       </ul>
     </article>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  }
}
</script>
