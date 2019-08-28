<template>
    <div class="container">
        <div>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Users Component</div>

                        <div class="card-body">
                            <table class="table table-bordered  table">
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Description</th>
                                    <th>Product Quantity</th>
                                    <th>Product Creation Date</th>
                                </tr>

                                <tr v-for="all_product in all_products">
                                    <td>{{all_product.name}}</td>
                                    <td>{{all_product.description}}</td>
                                    <td>{{all_product.quantity}}</td>
                                    <td>{{all_product.created_at | custom_date}}</td>

                                </tr>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                all_products: [],
            }
        },
        mounted() {
            this.fetch_all_products()
        },
        methods: {
            /**products data**/
            fetch_all_products() {
                this.$store.dispatch("get_products")
            },
        },
        computed: {
            load_all_products() {
                let _products = this.$store.getters.ALL_PRODUCTS;
                this.all_products = _products;
                return _products;
            }
        }, created() {
            this.fetch_all_products();
        },
        watch: {
            load_all_products(old, new_) {

                if (old != new_) {
                    this.all_products = old;
                }
                console.log(this.all_products)
            },
        }
    }
</script>
