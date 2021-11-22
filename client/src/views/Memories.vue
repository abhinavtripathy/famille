<template>
    <div>
        <h3>Family Memories!</h3>
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

    <b-button href="#" variant="primary">Go somewhere</b-button>
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
            // this.$http.get('http://localhost:5000/memories')
            // .then(function (response) {
            //     // this.memories = response
            //     // console.log(response['data'])
                
            //     pushData(response['data'])
                
            // })
            // .catch(function () {
            //     console.log("error")
            // });
            this.$http.get('http://localhost:5000/memories').then(response => { 
            this.memories = response['data']
            })
        }
    }
}
</script>
