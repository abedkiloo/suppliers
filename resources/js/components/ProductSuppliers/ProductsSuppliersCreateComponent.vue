<template id="add-post">
    <div class="container" style="padding:10em">

            <h2 class="text-center">Add new Products supplier</h2>
        <div class="row justify-content-center">

        <form v-on:submit.prevent="createPost">
                <div class="form-group">
                    <label for="add-name">Name</label>
                    <input class="form-control" id="add-name" v-model="form.name" required/>
                </div>
                <div class="form-group">
                    <label for="add-supplier">Supplier</label>
                    <select class="form-control" id="add-supplier" v-model="form.supply_id" required>
                        <option v-for="supplier in all_suppliers" :value="supplier.id">{{supplier.name}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="add-product">Product</label>
                    <select class="form-control" id="add-product" v-model="form.product_id" required>
                        <option v-for="product in all_products" :value="product.id">{{product.name}}</option>
                    </select>
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
            return {
                form: new Form({name: '', supply_id: '', product_id: ''}),
                all_products: [],
                all_suppliers: [],
            }
        },
        mounted() {

            /**products data**/
            this.fetch_all_products();
            /**suppliers data**/
            this.fetch_all_suppliers();
        },
        methods: {
            createPost: function () {
                this.$store.dispatch("save_product_suppliers", this.form);
            },

            /**products data**/
            fetch_all_products() {

                this.$store.dispatch("get_products")
            },
            /**suppliers data**/
            fetch_all_suppliers() {
                this.$store.dispatch("get_suppliers")
            },
        }, computed: {
            load_all_products() {
                let _products = this.$store.getters.ALL_PRODUCTS;
                this.all_products = _products;
                return _products;
            }, load_all_suppliers() {
                let _suppliers = this.$store.getters.ALL_SUPPLIERS;
                this.all_suppliers = _suppliers;
                return _suppliers;
            },
        }, watch: {
            load_all_products(old, new_) {

                if (old != new_) {
                    this.all_products = old;
                }
                console.log(this.all_products)
            }, load_all_suppliers(old, new_) {
                if (old != new_) {
                    this.all_suppliers = old;
                }
            },
        }

    }
</script>
