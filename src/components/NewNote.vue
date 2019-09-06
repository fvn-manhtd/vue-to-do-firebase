<template>

    <div class="new-note"> 
      <div class="new-note__form container">
          <div class="form-group">
            <label class="form-label">
              Title
            </label>
            <div class="form-control">
              <input v-model="title" placeholder="Please enter title" />
            </div>
            <div class="new-note__error" v-if="errors !== ''" id="errors">{{ errors }}</div>
          </div>

          

          <div class="form-group">
            <label class="form-label">
              Description
            </label>
           <div class="form-control">
              <textarea v-model="description" placeholder="Please enter description" rows="5"></textarea>
            </div>
            <div class="new-note__error" v-if="errors !== ''" id="errors">{{ errors }}</div>
          </div>

          
          
          <div class="form-actions">
            <button class="form-submit" @click="addToDo"><font-awesome-icon icon="plus-circle" /> ADD</button>
          </div>
          
      </div>    
      
    </div>
  
</template>

<script>
  import {
    db
  } from '@/main'

  export default {
    data: function () {
      return {
        title: '',
        description: '',
        errors: ''
      }
    },
    methods: {
      addToDo: function () {
        this.errors = '';
        
        if (this.title !== '') {
          db.collection('notes').add({
            title: this.title,
            description: this.description,
            created_at: Date.now()
          }).then((response) => {
            if (response) {
              this.title = ''
              this.description = ''
              this.$parent.$modal.hide('new-note')
            }
          }).catch((error) => {
            this.errors = error
          })
        } else {
          this.errors = 'Please enter some text'
        }
      }
    }
  }
</script>

