<template>
    <div class="full_wrap">
        <Header></Header>
        <List></List>
        {{hi}}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
  import {Component} from 'vue-property-decorator'
  import List from '~/components/List'
  import Header from '~/components/Header'

  @Component({
    components: {
        List,
        Header
    } 
  })
  export default class Index extends Vue{

  }
</script>

<style scoped>
    .full_wrap{
        padding : 100px;
    }
</style>