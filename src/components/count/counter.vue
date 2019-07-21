<template>
    <div>
        <button v-on:click="minus()">-</button>
        <span>{{ count }}</span>
        <button v-on:click="addNum()">+</button>
    </div>
</template>

<script>
    export default {
        name: "counter",
        data(){
            return {
                count:0
            }
        },
        methods:{
            addNum(){
                this.count++
            },
            minus(){
                this.count--
            }
        }

    }
</script>

<style scoped>

</style>