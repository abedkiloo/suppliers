<template id="add-post">

        <div class="container" style="padding:10em">
            <h2 class="text-center">Add new Products</h2>
            <div class="row justify-content-center">

            <form v-on:submit.prevent="createPost">
                <div class="form-group">
                    <label for="add-name">Name</label>
                    <input class="form-control" id="add-name" v-model="form.name" required/>
                </div>

                <div class="form-group">
                    <label for="add-description">Description</label>
                    <textarea class="form-control" id="add-description" rows="3" v-model="form.description"></textarea>
                </div>
                <div class="form-group">
                    <label for="add-name">Quantity</label>
                    <input class="form-control" id="add-quantity" v-model="form.quantity" required/>
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
                <router-link class="btn btn-default" v-bind:to="'/'">Cancel</router-link>
            </form>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {form: new Form({product: '', description: '', quantity: ''})}
        },
        methods: {

            createPost: function () {
                this.$store.dispatch("save_products", this.form);
            }
        }

    }
</script>
