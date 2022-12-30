<template>
  <div class="contact">
    <div class="container">
      <h1 class="title">Contact Us</h1>
      <div class="wrapper">
        <form method="post" @submit.prevent="submit" class="left">
          <input v-model="fullName" type="text" placeholder="Your Name">
          <input v-model="number" type="number" placeholder="Your phone number">
          <input v-model="email" type="email" placeholder="Your e-mail">
          <textarea v-model="message" placeholder="Message"/>
          <button class="btn">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import '../assets/css/contact.css'

export default {
  name: 'ContactView',
  data() {
    return {
      fullName: '',
      number: '',
      email: '',
      message: '',

      token: '5863439392:AAGSzPyQUB1dtXxLodxrHjs4xk4kO5hog7w',
      chatId: 419771697
    }
  },
  methods: {
    submit() {
      if (this.fullName === '' && this.number === '' && this.email && this.message) {
        alert('Sign in your data')
        return
      }
      const fullMessage = `Name: ${this.fullName} %0ANumber: ${this.number} %0AEmail: ${this.email} %0AMessage: ${this.message} %0A`
      axios.post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullMessage}`)
          .then(response => {
            console.log('Success', response)
            this.fullName = ''
            this.number = ''
            this.email = ''
            this.message = ''
          }, error => {
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>

</style>
