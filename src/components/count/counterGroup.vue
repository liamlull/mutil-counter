<template>
    <div>
        <counter v-for=" n in title"/>
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
    }
</script>

<style scoped>

</style>