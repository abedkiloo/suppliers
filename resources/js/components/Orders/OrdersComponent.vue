<template>
    <div class="container">
        <div>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Orders Component</div>
                        <div class="col-sm-12">
                            <router-link class="btn btn-primary float-right" v-bind:to="'/orders-create'">Create Orders </router-link>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered  table">
                                <tr>
                                    <th>Order Name</th>
                                    <th>order Creation Date</th>
                                </tr>

                                <tr v-for="order in all_orders">
                                    <td>{{order.order_number}}</td>
                                    <td>{{order.created_at | custom_date}}</td>
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
                all_orders: [],
            }
        },
        mounted() {
            this.fetch_all_orders()
        },
        methods: {
            /**group data**/
            fetch_all_orders() {
                this.$store.dispatch("get_orders")
            },
        },
        computed: {
            load_all_orders() {
                let _orders = this.$store.getters.ALL_ORDERS;
                this.all_orders = _orders;
                return _orders;
            }
        }, created() {
            this.fetch_all_orders();
        },
        watch: {
            load_all_orders(old, new_) {

                if (old != new_) {
                    this.all_orders = old;
                }
                console.log(this.all_orders)
            },
        }
    }
</script>
