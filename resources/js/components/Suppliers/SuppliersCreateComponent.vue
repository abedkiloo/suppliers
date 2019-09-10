<template id="add-post">
    <div class="container" style="padding:10em">

        <h2 class="text-center">Add new Supplier</h2>
        <div class="row justify-content-center">

        <form v-on:submit.prevent="createPost">
            <div class="form-group">
                <label for="add-name">Name</label>
                <input class="form-control" id="add-name" v-model="form.name" required/>
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
            <router-link class="btn btn-default" v-bind:to="'/'">Cancel</router-link>
        </form></div>
    </div>
</template>


<script>
    export default {
        data() {
            return {form: new Form({name: '',})}
        },
        methods: {
            createPost: function () {
                this.$store.dispatch("save_suppliers", this.form);
            }
        }

    }
</script>
