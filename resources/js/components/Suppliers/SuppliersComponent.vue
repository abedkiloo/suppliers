<template>
    <div class="container">
        <div>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Users Component</div>
                        <div class="col-sm-12">
                            <router-link class="btn btn-primary float-right" v-bind:to="'/suppliers-create'">Create Supplier</router-link>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered  table">
                                <tr>
                                    <th>Supplier Name</th>
                                    <th>Supplier Creation Date</th>
                                </tr>

                                <tr v-for="all_supplier in all_suppliers">
                                    <td>{{all_supplier.name}}</td>
                                    <td>{{all_supplier.created_at | custom_date}}</td>
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
                all_suppliers: [],
            }
        },
        mounted() {
            this.fetch_all_suppliers()
        },
        methods: {
            /**group data**/
            fetch_all_suppliers() {
                this.$store.dispatch("get_suppliers")
            },
        },
        computed: {
            load_all_suppliers() {
                let _suppliers = this.$store.getters.ALL_SUPPLIERS;
                this.all_suppliers = _suppliers;
                return _suppliers;
            }
        }, created() {
            this.fetch_all_suppliers();
        },
        watch: {
            load_all_suppliers(old, new_) {

                if (old != new_) {
                    this.all_suppliers = old;
                }
                console.log(this.all_suppliers)
            },
        }
    }
</script>
