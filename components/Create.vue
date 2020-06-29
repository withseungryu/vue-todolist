<template>
    <div>
       <input type="text" class="input" v-model="content">
       <button type="button" class= "btn" v-on:click="addItem()">+</button>
    </div>
</template> 

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class Create extends Vue{
        content:string = ''

        addItem(){
            this.$store.commit('addItem', { id : this.$store.state.itemList.length+1, content : this.content, status : 'yet'})
        }
    }
    
</script>

<style scoped>

</style>