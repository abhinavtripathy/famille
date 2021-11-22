<template>
    <div>
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
            memories: []
        }
    },
    created() {
        this.getMemories()
    },
    methods: {
        getMemories () {
            this.$http.get('http://localhost:5000/memories')
            .then(function (response) {
                this.memories = response
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>
