<template>
    <div>
        <h3>Family Memories!</h3>
        <b-button variant="primary" @click="filter">Happy Memories Only!</b-button>
        <br>
         <br>
    <div id="box">
        <b-row>
<b-card
    v-for="index in memories"
    :key="index.name"
    :title="index.name"
    :img-src="index.img"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="col-md-4"
  >
    <b-card-text>
      {{index.labels}}
    </b-card-text>

    <b-button href="localhost:3000/index.html" variant="primary">View Family Tree</b-button>
  </b-card>
        </b-row>
        
  </div>
</div>
</template>
<style scoped>
#box {
    padding-left: 5%;
}
.spacing {
    padding-left: 5%;
}
</style>
<script>
export default {
    data() {
        return {
            memories: null
        }
    },
    created() {
        this.getMemories()
        console.log("hello")
    },
    methods: {
        getMemories: function () {
            this.$http.get('http://localhost:5000/memories').then(response => { 
            this.memories = response['data']
            })
        },
        filter() {
            let tempArr = []
            for(let i of this.memories) {
                if(i['happy'] == true) {
                    tempArr.push(i)
                }
            }
            console.log(this.memories)
            console.log(tempArr)
            this.memories = tempArr
        }
    }
}
</script>
