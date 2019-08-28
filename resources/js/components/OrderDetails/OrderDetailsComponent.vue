<template>
    <div class="container">
        <div>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Suppliers Component</div>

                        <div class="card-body">
                            <table class="table table-bordered  table">
                                <tr>
                                    <th>Products Name</th>
                                    <th>Order Number</th>
                                    <th> Creation Date</th>
                                </tr>

                                <tr v-for="order_details in all_order_details">
                                    <td>{{order_details.product.name}}</td>
                                    <td>{{order_details.order.order_number}}</td>
                                    <td>{{order_details.created_at | custom_date}}</td>
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
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            /**group data**/
            fetch_all_order_details() {
                this.$store.dispatch("get_orders__details")
            },
        },
        computed: {
            load_all_order_details() {
                let _order_details = this.$store.getters.ALL_ORDERS_DETAILS;
                this.all_order_details = _order_details;
                return _order_details;
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
