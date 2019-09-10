<template>
    <div class="container">
        <div>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Product Suppliers Component</div>
                        <div class="col-sm-12">
                            <router-link class="btn btn-primary float-right" v-bind:to="'/product-suppliers-create'">Create Product Suppliers</router-link>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered  table">
                                <tr>
                                    <th>Products Name</th>
                                    <th>Supplier Name</th>
                                    <th> Creation Date</th>
                                </tr>

                                <tr v-for="products_supplier in all_products_supplier">
                                    <td>{{products_supplier.product.name}}</td>
                                    <td>{{products_supplier.supplier.name}}</td>
                                    <td>{{products_supplier.created_at | custom_date}}</td>
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
                all_products_supplier: [],
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            /**group data**/
            fetch_all_products_supplier() {
                this.$store.dispatch("get_product_suppliers")
            },
        },
        computed: {
            load_all_products_supplier() {
                let _products_supplier = this.$store.getters.ALL_PRODUCT_SUPPLIERS;
                this.all_products_supplier = _products_supplier;
                return _products_supplier;
            }
        }, created() {
            this.fetch_all_products_supplier();
        },
        watch: {
            load_all_products_supplier(old, new_) {

                if (old != new_) {
                    this.all_products_supplier = old;
                }
                console.log(this.all_products_supplier)
            },
        }
    }
</script>
