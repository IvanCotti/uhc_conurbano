<template>
    <div class="container">
        <div class="card">
            <img class="imagen" alt="image" src="../assets/images/uhc1.png">
            <div class="logo">
                <img alt="logo" src="../assets/images/logos/uhcLogo1.png">
                <h2 class="text-yellow">La primera edicion de UHC Conurbano</h2>
            </div>
        </div>
        <div class="card">
            <img class="imagen" alt="image" src="../assets/images/island_front.png">
            <div class="logo">
                <img alt="logo" src="../assets/images/logos/uhcLogo2.png">
                <h2 class="text-yellow-darken-2">La segunda edicion de UHC Conurbano</h2>
            </div>
        </div>
        <div class="card">
            <img class="imagen" alt="image" src="../assets/images/underwater.png">
            <div class="logo">
                <img alt="logo" src="../assets/images/logos/Opcion_2.png">
                <h2 class="text-indigo">Proximamente</h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default 
    {
        name: 'MainPage',
    }
</script>

<style scoped>
    .container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: stretch;
        /* gap: 0.2rem; */
        transition: all 400ms;
        background: linear-gradient(0deg,black,gray);
    }
    
    .card{
        flex: 1;
        height: 100%;
        width: 33vw;
        transition: all 400ms;
        cursor: pointer;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        translate: 0 0;
    }
    .card .imagen{ height: 100%; }
    .card .logo{ position: absolute; }
    .card .logo img{ width: 100%; }
    .card h2{
        filter: drop-shadow(0px 0px 5px #b44b1c);
    }

    .container:hover >
    .card:not(:hover) {
        filter: grayscale(100%);
    }
    .card:hover{
        flex:3;
    }
</style>