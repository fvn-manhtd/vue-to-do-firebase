<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        
        <router-link to="/"> <font-awesome-icon icon="sticky-note" />Notes</router-link>
      </div>
      <search-note></search-note>
      <div class="controls">
        <button class="form-submit" @click="showModal"><font-awesome-icon icon="plus-circle" /> ADD NOTE</button>
      </div>
    </div>

    <!-- <div name="modal" v-show="isModalVisible">
      <div class="modal-backdrop" role="dialog">
        <NewNote></NewNote>
      </div>
    </div> -->

    <modal name="new-note" height="auto" :pivotX=1 :pivotY=1 :scrollable="true" draggable=".new-note">
      <NewNote></NewNote>
    </modal>

  </div>
</template>

<script>

  import SearchNote from '../components/SearchNote.vue';
  import NewNote from '../components/NewNote.vue';
  export default {
    components: {
      NewNote,
      SearchNote
    },
    methods: {
      showModal: function () {
        this.$modal.show('new-note');
      }
    }
  }
</script>