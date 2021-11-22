<template>
  <div>
      <h2>Add Your Family Memories!</h2>
      <b-container class="bv-example-row">
<div v-for="index in 3" :key="index">
  <b-row>
      <b-col>{{ index }}.</b-col>
    <b-col><b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Name"
      v-model="form[index]['name']"
    ></b-form-input></b-col>
    <b-col><b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Image Link"
      v-model="form[index]['img']"
    ></b-form-input></b-col>
  </b-row>
  <br>
 </div>
</b-container>
<br>
 <b-button v-b-modal.modal-1 variant="primary" @click="submitForm">Submit!</b-button>
 <b-modal id="modal-1" title="Add Family">
    <p class="my-4">Success! You have successfully added your family memories!</p>
  </b-modal>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {}
        }
    },
    created() {
        for(let i = 1; i <= 3; i++) {
            this.form[i] = {'name': '','img': ''}
        }
    },
    methods: {
        submitForm () {
            console.log(this.form)
            this.$http.post('http://localhost:5000/vision', this.form)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>
