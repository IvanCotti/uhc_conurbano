<template>
    <span :class="'chat-row text-'+ line.color">
        <template v-if="line.pre">
            {{'<'}}<b :class="'text-'+ line.preColor">{{line.pre}}</b>{{'> '}}
        </template>
        {{ line.text }}
    </span>
</template>

<script>
    export default 
    {
        props: {
           row: Object
        },
        data: () => ({
            line: {pre:null,text:'',color:'grey',preColor:'grey'}
        }),
        mounted(){
            this.line = {...this.line, ...this.row}
        }
    }
</script>