<template>
    <div>
        <ol class="breadcrumb">
            <li><router-link to="/">모두</router-link></li>
            <li><router-link to="/clear">끝난 활동</router-link></li>
            <li class="active"><router-link to="/yet">진행 중인 활동</router-link></li>
        </ol>
    </div>
</template> 

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class Header extends Vue{
    }
    
</script>

<style scoped>

</style>