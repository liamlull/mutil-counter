<template>
    <div>
        <counter v-for=" n in title" @func="getCount"/>
        <span>总计：{{sum}}</span>
    </div>
</template>

<script>
    import counter from './counter'
    export default {
        name: "counterGroup",
        components: {
            counter
        },
        props:[
            'title'
        ],
        data() {
            return {
                sum:0
            }
        },methods:{
            getCount(count){
                this.sum+=count;
            }
        }
    }
</script>

<style scoped>

</style>