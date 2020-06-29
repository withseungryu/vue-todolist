<template>
    <div>
        <div class="input-group" v-for="item in itemList" >
            <span class="input-group-addon" id="basic-addon1">
                <input type="checkbox" :checked="item.status == 'clear'" @change = "changeStatus(item)" >
            </span>          
            <input type="text" class="form-control" :value="item.content"/>
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" v-on:click="removeItem(item.id)">X</button>
            </span>
        </div>
        {{itemList}}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'

    interface ItemList{
        id : number;
        content : string;
        status : string;
    }

    @Component
    export default class List extends Vue{
        itemList : ItemList[] = [];

        created(){
            this.itemList = this.$store.state.itemList;
        }
        initItem(){
            this.itemList = this.$store.state.itemList;
        }
        
        removeItem(id: number){
            this.$store.commit('removeItem', id );
            this.initItem()
  
        }
        changeStatus(item: ItemList){
            this.$store.commit('changeStatus', item );
            this.initItem()
        }


    }


</script>

<style scoped>

</style>