<template>
  <div class="mainLogin">
    <router-view></router-view>
  </div>
</template>

<script>
  export default 
  {
    name: 'App',
  }
</script>

<style>

  @font-face {
    font-family: "MinecraftFont";
    src: url("./assets/fonts/MinecraftRegular-Bmg3.ttf");
  }  

  body, html {
    width:100vw;
    height:100vh;
    margin:0;
    overflow: hidden !important;
  }

  #app {
    font-family: "MinecraftFont", sans-serif;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
    background: black;
  }

  .mainLogin{
    height: 100vh;
    width: 100%;
  }

</style>
