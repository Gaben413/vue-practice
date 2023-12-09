<template>
  <h1>{{ title }}</h1>

  <teleport to=".modals" v-if="showModal">
    <Modal  theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="">sign up now</a>
        <a href="">more info</a>
      </template>
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </teleport>

  <button @click.alt="toggleModal">open modal (alt)</button>
</template>

<script>

import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data(){
    return{
      title: 'My First Vuue App :)',
      showModal: false
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>