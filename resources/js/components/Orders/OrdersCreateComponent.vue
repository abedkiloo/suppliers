<template id="add-post">
    <div class="container" style="padding:10em">
        <h2>Add new Order</h2>
        <form v-on:submit.prevent="createPost">
            <div class="form-group">
                <label for="add-name">Name</label>
                <input class="form-control" id="add-name" v-model="form.order_number" required/>
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
            <router-link class="btn btn-default" v-bind:to="'/'">Cancel</router-link>
        </form>
    </div>
</template>


<script>
    export default {
        data() {
            return {form: new Form({order_number: '',})}
        },
        methods: {
            createPost: function () {
                this.$store.dispatch("save_orders", this.form);
            }
        }

    }
</script>
