<template>
  <div class="home">
    <div class="container">
      <div class="text">
        <h1>Hi I am Shohnurbek
          <span class="typed-text">{{ typeValue }}</span>
          <span class="cursor" :class="{ 'typing': typeStatus }">&nbsp;</span>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus impedit quas quasi tempora
          voluptates. Alias aliquam architecto, aspernatur assumenda dicta modi, molestiae nobis obcaecati perspiciatis
          possimus quo repellendus sapiente!
        </p>
      </div>
      <div class="buttons">
        <a href="https://t.me/shohnurbek_05" class="btn">visit Telegram</a>
        <a href="https://github.com/Shohnurbek05" class="btn">visit GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/home.css'

export default {
  name: 'HomeView',
  components: {},

  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['Fullstack developer'],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus)
          this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus)
          this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  }
}
</script>

<style>

</style>
