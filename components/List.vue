<template>
    <div>
        <div class="input-group" v-for="item in itemList"  v-bind:key="item">
            <span class="input-group-addon" id="basic-addon1">{{item.id}}</span>
            <input type="text" class="form-control" :value="item.content"/>
            <span class="input-group-btn">
                <button class="btn btn-default" type="button">X</button>
            </span>
        </div>
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
        itemList : ItemList[] = [ 
            {id: 1, content : '씻기', status: 'clear'},
            {id: 2, content : '준비하기', status: 'clear'},
            {id: 3, content : '학교가기', status: 'clear'},
            {id: 4, content : '게임하기', status: 'yet'},
        ];



    }


</script>

<style scoped>

</style>