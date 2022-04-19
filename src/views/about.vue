<template>
  <div class="about">

    <div class="container">
      <h1 class="title">About</h1>
      <div class="item">
        <div class="left">
          <img src="../assets/images/about.jpg" alt="" class="img">
        </div>
        <div class="right">
          <div class="right-left">
            <div class="name card">
              <i class="bi bi-person-fill"></i>
              <h3>Name:</h3>
            </div>
            <div class="birthday card">
              <i class="bi bi-calendar"></i>
              <h3>Birthday:</h3>
            </div>
            <div class="address card">
              <i class="bi bi-geo-alt"></i>
              <h3>Address:</h3>
            </div>
          </div>
          <div class="right-right">
            <h3>Saloxiddin</h3>
            <h3>27.01.2004</h3>
            <h3>Tashkent</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/about.css'

export default {
  name: 'AboutView'
}
</script>
