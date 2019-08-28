<template id="add-post">
    <div class="container" style="padding:10em">
        <h2>View/Update new Order Details</h2>
        {{product}}
        <form v-on:submit.prevent="createPost">
            <div class="form-group">
                <label for="add-name">Name</label>
                <input class="form-control" id="add-name" v-model="product.product.name"  required/>
            </div>
            <div class="form-group">
                <label for="add-supplier">Supplier</label>
                <select class="form-control" id="add-supplier" v-model="form.order_id" required>
                    <option v-for="order in all_orders" :value="order.id">{{order.order_number}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="add-product">Order</label>
                <select class="form-control" id="add-product" v-model="product_id" required>
                    <option v-for="product in all_products" :value="product.id">{{product.name}}</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
            <router-link class="btn btn-default" v-bind:to="'/'">Cancel</router-link>
        </form>
    </div>
</template>


<script>
    export default {
        props: ['id'],
        data() {
            return {
                form: new Form({name: '', order_id: '', product_id: ''}),
                all_products: [],
                product: [],
                all_orders: [],
            }
        },
        mounted() {

            /**products data**/
            this.fetch_product();
            /**products data**/
            // this.fetch_all_products();
            /**suppliers data**/
            // this.fetch_all_orders();
        },
        methods: {
            createPost: function () {
                this.$store.dispatch("save_orders_details", this.form);
            },

            /**products data**/
            fetch_product() {
                this.$store.dispatch("get_order_details_details", this.id)
            },
            /**products data**/
            fetch_all_products() {
                this.$store.dispatch("get_products")
            },
            /**suppliers data**/
            fetch_all_orders() {
                this.$store.dispatch("get_orders")
            },
        }, computed: {
            load_product_detail() {
                let _product = this.$store.getters.SINGLE_ORDER_DETAIL_DETAIL;
                this.product = _product;
                return _product;
            }, load_all_products() {
                let _products = this.$store.getters.ALL_PRODUCTS;
                this.all_products = _products;
                return _products;
            }, load_all_orders() {
                let _orders = this.$store.getters.ALL_ORDERS;
                this.all_orders = _orders;
                return _orders;
            },
        }, watch: {
            load_product_detail(old, new_) {

                if (old != new_) {
                    this.product = old;
                }
            }, load_all_products(old, new_) {

                if (old != new_) {
                    this.all_products = old;
                }
                console.log(this.all_products)
            }, load_all_orders(old, new_) {
                if (old != new_) {
                    this.all_orders = old;
                }
            },
        }

    }
</script>
