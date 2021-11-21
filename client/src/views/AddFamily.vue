<template>
  <div>
      <h2>Add Your Family Members!</h2>
      <b-container class="bv-example-row">
<div v-for="index in 10" :key="index">
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
      placeholder="Nickname"
      v-model="form[index]['nickname']"
    ></b-form-input></b-col>
    <b-col><b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Image Link"
      v-model="form[index]['img']"
    ></b-form-input></b-col>
    <b-col><b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Partner ID"
      v-model="form[index]['pid']"
    ></b-form-input></b-col>
    <b-col><b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Parents IDs"
      v-model="form[index]['ppid']"
    ></b-form-input></b-col>
  </b-row>
  <br>
 </div>
</b-container>
<br>
 <b-button v-b-modal.modal-1 variant="primary" @click="submitForm">Submit!</b-button>
 <b-modal id="modal-1" title="Add Family">
    <p class="my-4">Success! You have successfully added your family!</p>
  </b-modal>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {}, 
        }
    },
    created() {
        for(let i = 1; i <= 10; i++) {
            this.form[i] = {'id': i,'name': '', 'nickname': '', 'img': '', 'pid': '', 'ppid': '', 'main_user' : 'false'}
        }
    },
    methods: {
        submitForm () {
            this.form[1]['main_user'] = 'true'
            console.log(this.form)
            this.$http.post('http://localhost:3000/family', this.form)
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
