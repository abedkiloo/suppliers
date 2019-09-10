<template>
    <div class="container">
        <div>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Order Details Component</div>
                        <div class="col-sm-12">
                            <router-link class="btn btn-primary float-right" v-bind:to="'/orders-details-create'">Create Orders
                                Details
                            </router-link>
                        </div>
                        <div class="col-sm-6">
                            <input class="form-control" type="text" v-model="search_key"
                                   placeholder="search order details">
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered  table">
                                <tr>
                                    <th>Products Name</th>
                                    <th>Order Number</th>
                                    <th> Creation Date</th>
                                </tr>

                                <tr v-for="order_details in searched_order_details">
                                    <td>{{order_details.product.name}}</td>
                                    <td>{{order_details.order.order_number}}</td>
                                    <td>{{order_details.created_at | custom_date}}</td>
                                    <td>
                                        <button @click="view_order_detail(order_details.id)"
                                                class="btn btn-sm btn-secondary">View Details
                                        </button>
                                    </td>
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
                all_order_details: [],
                search_key: ""
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            /**group data**/
            fetch_all_order_details() {
                this.$store.dispatch("get_orders__details")
            }, view_order_detail(payload) {

                this.$router.push({
                    path: `orders-details/${payload}`,
                    params: {orders_details: payload}
                })
            }
        },
        computed: {
            load_all_order_details() {
                let _order_details = this.$store.getters.ALL_ORDERS_DETAILS;
                this.all_order_details = _order_details;
                return _order_details;
            },
            searched_order_details: function () {
                return this.all_order_details.filter((order_details) => {
                    return order_details.product.name.match(this.search_key);
                })
            }
        }, created() {
            this.fetch_all_order_details();
        },
        watch: {
            load_all_order_details(old, new_) {

                if (old != new_) {
                    this.all_order_details = old;
                }
                console.log(this.all_order_details)
            },
        }
    }
</script>
