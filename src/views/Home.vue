<template>

  <div class="home">

    <ListNote></ListNote>
    
  </div>


</template>

<script>
  import ListNote from '../components/ListNote.vue';
  // import NewNote from '../components/NewNote.vue';
  export default {
    name: 'home',
    components: {
      // NewNote,
      ListNote
    },

  }
</script>