<template>
  <div class="list-notes">

    <div class="list-notes__content">


      <div v-masonry transition-duration="0.3s" item-selector=".item">
        <div v-masonry-tile class="item list-notes__box" v-for="note in filteredNotes" :key="note.id" :id="note.id"
          @click="showModal">

          <div class="list-notes__box__title">{{ note.title }}</div>
          <div class="list-notes__box__des">{{ note.description }}</div>
          <!-- <button @click="deleteItem(note.id)">Delete</button> -->
        </div>
      </div>

    </div>


    <v-dialog />

  </div>

</template>

<script>
  import {
    db
  } from '@/main'

  export default {
    beforeCreate: function () {
      this.$store.dispatch('SET_NOTES');
    },
    methods: {
      showModal: function (event) {
        let targetId = event.currentTarget.id;
        let titleNew, desNew;
        this.$store.getters.allNotes.map(function (value) {
          if (value.id === targetId) {
            titleNew = value.title
            desNew = value.description
          }
        });
        this.$modal.show('dialog', {
          title: titleNew,
          text: desNew,
          buttons: [{
              title: 'Delete',
              handler: () => {
                this.deleteItem(targetId)
                this.$modal.hide('dialog')
              }
            },
            {
              title: 'Close'
            }
          ]
        })
      },
      deleteItem: function (id) {
        if (id) {
          db.collection("notes").doc(id).delete().then(function () {
            console.log('Document successfully deleted')
          }).catch(function (error) {
            this.error = error
          })
        } else {
          this.error = 'Invalid ID'
        }
      }
    },
    computed: {
      filteredNotes() {
        var a;
        try {
          a = (this.$store.getters.getFilteredNote || this.$store.getters.allNotes)
          console.log(a)
        } catch (e) {
          console.log(e)
        }
        return a
      }
    }

  }
</script>