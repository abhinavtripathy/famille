<template>
    <div>
        <b-row>
            <b-col>
            </b-col>
            <b-col>
                <h2>Daily Check In!</h2>
        <h5>Who is {{partner}}'s Partner?</h5>
        <b-form-input
      class="MT-2"
      placeholder="Name"
      v-model="partner_input"
    >
    </b-form-input>
    <br>
    <b-button v-b-modal.modal-1 variant="primary">Hint!</b-button>
 <b-modal id="modal-1" title="Daily Check in Hint">
    <p class="my-4">The person's name starts with the letter A!</p>
  </b-modal>
    <br> <br>
    <b-button variant="primary" @click="check">Submit</b-button>
                
            </b-col>
            <b-col>
            </b-col>
        </b-row>
        
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    data() {
        return {
            partner: "Tom",
            partner_input: ""
        }
    },
    methods: {
        check() {
            if(this.partner_input=="Annie") {
                alert("That is correct!")
            }
            else {
                alert("You are close think again!")
            }
        }
    }
}
</script>
