<template>
    <div>
        <counter v-for=" n in title" @func="getCount"/>
        <span>总计：{{countSum}}</span>
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
        computed:{
            countSum(){
                return this.$store.state.countSum;
            }
        },methods:{
            getCount(count){
                this.$store.commit('addNum',count);
            }
        }
    }
</script>

<style scoped>

</style>