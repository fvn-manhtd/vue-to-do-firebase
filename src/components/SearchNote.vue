<template>

    <div class="search-note"> 
      <div class="search-note__form">
          <div class="form-control">
            <input 
                v-model="searchWord" required
                placeholder="Find a note..." />
          </div>
          
      </div>    
      
    </div>
  
</template>

<script>

  export default {
    // data(){
    //   return{
    //     message: '',
    //     canMessageSubmit: false
    //   }
    // },
    // methods: {
    //   setCanMessageSubmit(){
    //     this.canMessageSubmit = true
    //   },
    //   findNote(){
    //     if(!this.canMessageSubmit){
    //       this.$store.dispatch('findNote', this.message.toLowerCase());
    //       //console.log(this.message.toLowerCase());
    //       // this.$store.getters.getNotes.filter(note => {
    //       //   if(note.title.toLowerCase().includes(this.message.toLowerCase())){
    //       //     this.$store.state = note;
    //       //     //console.log(note);
    //       //   }
    //       // })
    //     }
    //     this.message = ''
    //     this.canMessageSubmit = false
    //   }
    // }
    computed: {
      searchWord: {
        get() {
          return this.$store.state.searchWord
        },
        set(value) {
          this.$store.dispatch('FILTERED_NOTES', value)
        }
      }
    }
  }
</script>