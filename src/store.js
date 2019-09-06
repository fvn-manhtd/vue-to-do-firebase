import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/main'

Vue.use(Vuex)

const removerAcentos = (string) => {
  const mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g
  }

  for (let letra in mapaAcentosHex) {
    var expressaoRegular = mapaAcentosHex[letra]
    string = string.replace(expressaoRegular, letra)
  }

  return string
}


const store = new Vuex.Store({
  state: {
    notes: null,
    note: [],
    searchWord: null,
    filteredNotes: null,
  },
  getters: {
    allNotes: (state) => state.notes,
    getNote: (state) => state.note,
    getSearchWord: (state) => state.searchWord,
    getFilteredNote: (state) => state.filteredNotes
  },
  mutations: {
    SET_NOTES(state){
        let notes = []
        db.collection('notes').orderBy('created_at').onSnapshot((snapshot) => {
          notes = []
          snapshot.forEach((doc) => {
            notes.push({id: doc.id, title: doc.data().title, description: doc.data().description})
          })
          state.notes = notes
        })
    },
    FILTERED_NOTES (state,word){
      if (!(word) || word === '{}') {
          state.searchWord = null
          state.filteredNotes = null
      } else {
        state.searchWord = word
        word = removerAcentos(word.trim().toLowerCase())
        state.filteredNotes = state.notes.filter((note) => {
          return note.title.toLowerCase().includes(word) || note.description.toLowerCase().includes(word)
        })
      }
    }
  },
  actions: {
    SET_NOTES ({commit}){
      commit('SET_NOTES')
    },
    FILTERED_NOTES ({commit}, word){
      commit('FILTERED_NOTES', word)
    }
  }
})

export default store
