<template>
  <div id="containerLogin" class="w-100 h-100">
    <img id="logoUHC" src="../assets/images/logos/Opcion_6.png" alt="logoUHC">
    <v-card id="containerChat" class="d-flex flex-column text-start justify-end pa-1">
      <div class="content">
        <ChatRow v-for="(line,i) in chat" :key="i" :row="line"/>
      </div>
      <input class="inputLogin text-white" v-model="inputChat" @keyup.enter="handleEnterInput()" spellcheck="false">
    </v-card>
  </div>
</template>

<script>
  import ChatRow from "../components/ChatRow.vue"
  export default 
  {
    name: 'LoginPage',
    components:{
      ChatRow
    },
    data: () => ({
      inputSelect: false,
      inputChat: "",
      stepChat: 0,
      showChat: true,
      chat:[],
      count: 0
    }),
    mounted(){
      // {pre:'[Admin]', text:'Bienvenido o/',preColor:'red'},
      // {text:'Por favor, registrate con "/register Contraseña ConfirmarContraseña"', color: "amber-accent-4"},
      // {text:'Puedes loguearte con "/login Contraseña ConfirmarContraseña"', color: "yellow-accent-4"}
      let time = Math.floor(Math.random() * (20000 - 2000 + 1)) + 2000;

      const chatLoop = async () => {
        if(this.chat.length < 30){     // Limite de Chat = 30 Rows
          await this.eventChat(this.randomRows(), this.count);
          time = Math.floor(Math.random() * (20000 - 2000 + 1)) + 2000;
          setTimeout(chatLoop, time);
          this.count++;
        }
      };
      setTimeout(chatLoop, time);
    },
    methods:{
      eventChat(message, index){
        this.chat.splice(index,0,message) 
      },

      async handleEnterInput(){
        let mensaje = {pre:'Usuario', text: this.inputChat, color: "grey"}
        const aux = this.inputChat.toLowerCase().split(' ')

        if(aux[0] == '/register'){
          if(aux[1] && aux[2] && aux[1] == aux[2]){
            mensaje = {text: 'Ha sido registrado correctamente', color: "green"}
            this.stepChat = 1
          }else{
            mensaje = {text:'Por favor, registrate con "/register Contraseña ConfirmarContraseña"', color: "amber-accent-4"}
          }
        }
        else if(aux[0] == '/login'){
          if(aux[1] && aux[2] && aux[1] == aux[2]){
            mensaje = {text: 'Te has logueado correctamente', color: "green"}
            this.stepChat = 2
            this.showChat = false
          }else{ 
            mensaje = {text:'Puedes loguearte con "/login Contraseña ConfirmarContraseña"', color: "yellow-accent-4"}
          }
        }else{
          const saluda = aux.includes('q') || aux.includes('cooked') ? {pre:'Cooked_MC', text:'o/'} : 
            aux.includes('suri') || aux.includes('suricata') ? {pre:'SuricataLaconica', text:'que'} :
            aux.includes('lolo') || aux.includes('pajin') ? {pre:'LOLO50', text:'Buenas'} :
            aux.includes('santi') || aux.includes('negrin') ? {pre:'jajs', text:'que pasa negro'} :
            aux.includes('ragnar') || aux.includes('maicol') ? {pre:'Ragnar', text:'?'} :
            aux.includes('franco') || aux.includes('fran') ? {pre:'FrancoB', text:'decime'} :
            undefined
          if(saluda){
            setTimeout(() => {
              this.chat.push(saluda)
            }, 2000);
          }
        }
        this.chat.push(mensaje)
        this.inputChat = ""
      },

      randomRows(){
        const Player1 = this.$players[Math.floor(Math.random() * this.$players.length)]
        const Player2 = this.$players[Math.floor(Math.random() * this.$players.length)]
        const rows = [
         {color:'blue-lighten-2', text:'La Batalla Final se acerca. Comienza a ir a 0,0'}, 
         {pre:'KevlarFort', text:'*se rie tanto que le da un derrame cerebral y muere*'},
         {pre:'CoccoB', text:'gracias señor cock por darse 2 medallas sacadas del culo'},
         {color:'blue-lighten-2', text:'El pacto de caballeros termina en 5 minutos'}, 
         {color:'red', text:'El Equipo Naranja ha sido completamente eliminado.'}, 
         {pre:'KevlarFort', text:'Igual sí, si incumplen las normas, hay tabla'},
         {color:'white', text:'Saved screenshot as 2021-04-18_15.21.55.png'}, 
         {color:'white', text:'Applied effect Strength to '+  Player1+''}, 
         {color:'white', text:'Applied effect Weakness to '+  Player2+''}, 
         {color:'white', text:'Teleported '+ Player1+' to '+ Player2+''}, 
         {color:'white', text:''+ Player1+' was slain by '+ Player2+''}, 
         {color:'white', text:'Set own game mode to Spectator Mode'}, 
         {color:'white', text:'Set own game mode to Creative Mode'}, 
         {pre:'SuricataLaconica', text:'Che cooked y mi medalla?'},
         {pre:'LOLO50', text:'ustedes full pociones no? hdps'}, 
         {color:'white', text:'Ragnar blown up by Creeper'}, 
         {color:'white', text:'jajs blown up by Creeper'}, 
         {color:'yellow', text: Player1+' joined the game'}, 
         {color:'yellow', text: Player1+' left the game'}, 
         {pre:'FrancoB', text:'Veni Q que te reviento'},
         {color:'white', text:'Set the time to 1000'}, 
         {pre:'[Mod]', text:'Hi o/', preColor:'green'},
         {pre:'LOLO50', text:'Yo quiero a ragnar'}, 
         {pre:'Ragnar', text:'de que te reisdown'}, 
         {pre:'agus_yt345', text:'lolo pajin'},
         {pre:'Cooked_MC', text:'Buenass'},
         {pre:'LOLO50', text:'Che q'}, 
         {pre:'Ragnar', text:'uwu'}, 
       ]
       return rows[Math.floor(Math.random() * rows.length)]
      },
    }
  }
</script>

<style>
  #logoUHC{
    width: 800px;
    animation: pulse 3s infinite alternate;
    filter: drop-shadow(0 2px 19px rgba(126, 217, 240, 0.822));
  }
  @keyframes pulse {
    0% {transform: scale(1);}
    100% {transform: scale(1.1);}
  }

  #containerLogin{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url("../assets/images/bg-mossy.png");
    background-size: cover;
    background-position-x: -10em;
  }

  #containerChat{
    width: 30vw;
    height: 10em;
    background: linear-gradient(transparent,#000000a0, #000000a0,#000000a0,#000000a0);
    line-height: normal;
    border-radius: 0;
  }
  #containerChat .content{
    max-height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  /* #containerChat .content::-webkit-scrollbar {
    width: 0.8em;
  }
  #containerChat .content::-webkit-scrollbar-thumb {
    background: #6161617c;
  }
   */
  
  .inputLogin{
    width:100%;
    background: #ffffff20;
  }
  .inputLogin:focus{
    outline: none;
  }

  @media (max-width: 768px) {
    #containerChat{
      width: 100%;
      position: absolute;
      bottom: 0;
      font-size: 1.2rem;
    }
    #logoUHC{
      width: 600px;
      margin-bottom: 200px;
    }
  }

</style>