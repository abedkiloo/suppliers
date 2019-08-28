import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const baseURL = "http://127.0.0.1:8000/api";
let config = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
    }
}
const store = new Vuex.Store({
    state: {
        all_products: [],
        product_details: [],
        product_created_status: [],


        all_suppliers: [],
        supplier_details: [],
        supplier_created_status: [],


        all_product_supplier: [],
        product_supplier_details: [],
        product_supplier_created_status: [],


        all_orders: [],
        order_details: [],
        order_created_status: [],


        user_token: [],
        authenticate_token_status: [],


    },
    mutations: {

        /*----------------------
          ------products -------
        /*---------------------*/
        SET_ALL_PRODUCTS: (state, payload) => {
            return state.all_products = payload;
        }, SET_PRODUCT_DETAILS: (state, payload) => {
            return state.product_details = payload;
        }, SET_PRODUCTS_CREATE_RESPONSE: (state, payload) => {
            return state.product_created_status = payload
        },
        /*----------------------
          ------orders -------
        /*---------------------*/
        SET_ALL_ORDERS: (state, payload) => {
            return state.all_orders = payload;
        }, SET_ORDER_DETAILS: (state, payload) => {
            return state.order_details = payload;
        }, SET_ORDERS_CREATE_RESPONSE: (state, payload) => {
            return state.order_created_status = payload
        },
        /*----------------------
          ------suppliers -------
        /*---------------------*/
        SET_ALL_SUPPLIERS: (state, payload) => {
            return state.all_suppliers = payload;
        }, SET_SUPPLIERS_DETAILS: (state, payload) => {
            return state.suppliers_details = payload;
        }, SET_SUPPLIER_CREATE_RESPONSE: (state, payload) => {
            return state.supplier_created_status = payload
        },
        /*----------------------
          ------product suppliers -------
        /*---------------------*/
        SET_ALL_PRODUCT_SUPPLIERS: (state, payload) => {
            return state.all_product_supplier = payload;
        }, SET_PRODUCT_SUPPLIERS_DETAILS: (state, payload) => {
            return state.product_supplier_details = payload;
        }, SET_PRODUCT_SUPPLIER_CREATE_RESPONSE: (state, payload) => {
            return state.product_created_status = payload
        }
    },
    actions: {
        save_products: (context, payload) => {
            axios.post(baseURL + '/products/', payload).then(response => {
                context.commit("SET_ALL_PRODUCTS", response.data);
                console.log(response.data);
                if (response.data.status_code == 0) {
                    context.commit("SET_PRODUCTS_CREATE_RESPONSE", 1);
                    toast.fire({
                        type: 'success',
                        title: 'Products Created successfully'
                    })
                } else {
                    console.log(response)
                    context.commit("SET_PRODUCTS_CREATE_RESPONSE", 0);
                    toast.fire({
                        type: 'error',
                        title: 'Product Not Created Please Try again '
                    })
                }
                return response;

            })
        },

        get_products: (context) => {
            let response_data = {};
            axios.get(baseURL + '/products', config).then(response => {
                context.commit("SET_ALL_PRODUCTS", response.data.data.data);
                response_data = response.data.data.data
            }).catch(error => {
                return error;
            })
            return response_data
        },
        get_product_details: (context, payload) => {
            let response_data = {};
            axios.get(baseURL + '/products/' + payload, config).then(response => {
                context.commit("SET_PRODUCT_DETAILS", response.data);
                response_data = response.data

            }).catch(error => {
                return error;
            })
            return response_data
        },

        save_suppliers: (context, payload) => {
            axios.post(baseURL + '/suppliers/', payload).then(response => {
                context.commit("SET_ALL_SUPPLIERS", response.data);
                console.log(response.data);
                if (response.status == 200) {
                    context.commit("SET_SUPPLIER_CREATE_RESPONSE", 1);
                    toast.fire({
                        type: 'success',
                        title: 'Suppliers Created successfully'
                    })
                } else {
                    context.commit("SET_SUPPLIERS_CREATE_RESPONSE", 0);
                    toast.fire({
                        type: 'error',
                        title: 'Suppliers Not Created Please Try again '
                    })
                }
                return response;

            })
        },

        get_suppliers: (context) => {
            let response_data = {};
            axios.get(baseURL + '/suppliers', config).then(response => {
                context.commit("SET_ALL_SUPPLIERS", response.data.data.data);
                response_data = response.data.data.data
            }).catch(error => {
                return error;
            })
            return response_data
        },
        get_suppliers_details: (context, payload) => {
            let response_data = {};
            axios.get(baseURL + '/suppliers/' + payload, config).then(response => {
                context.commit("SET_SUPPLIER_DETAILS", response.data);
                response_data = response.data

            }).catch(error => {
                return error;
            })
            return response_data
        },


        save_orders: (context, payload) => {
            axios.post(baseURL + '/orders/', payload).then(response => {
                context.commit("SET_ALL_ORDERS", response.data);
                console.log(response.data);
                if (response.data.status_code == 0) {
                    context.commit("SET_ORDERS_CREATE_RESPONSE", 1);
                    toast.fire({
                        type: 'success',
                        title: 'Order Created successfully'
                    })
                } else {
                    context.commit("SET_ORDERS_CREATE_RESPONSE", 0);
                    toast.fire({
                        type: 'error',
                        title: 'Orders Not Created Please Try again '+ response.data.message
                    })
                }
                return response;

            })
        },

        get_orders: (context) => {
            let response_data = {};
            axios.get(baseURL + '/orders', config).then(response => {
                context.commit("SET_ALL_ORDERS", response.data.data.data);
                response_data = response.data.data.data
            }).catch(error => {
                return error;
            })
            return response_data
        },
        get_order_details: (context, payload) => {
            let response_data = {};
            axios.get(baseURL + '/orders/' + payload, config).then(response => {
                context.commit("SET_ORDER_DETAILS", response.data);
                response_data = response.data

            }).catch(error => {
                return error;
            })
            return response_data
        },


        save_product_suppliers: (context, payload) => {
            axios.post(baseURL + '/supplier-products/', payload).then(response => {
                context.commit("SET_ALL_PRODUCT_SUPPLIERS", response.data);
                console.log(response.data);
                if (response.data.status_code == 0) {
                    context.commit("SET_PRODUCT_SUPPLIER_CREATE_RESPONSE", 1);
                    toast.fire({
                        type: 'success',
                        title: 'Suppliers Created successfully'
                    })
                } else {
                    context.commit("SET_PRODUCT_SUPPLIERS_CREATE_RESPONSE", 0);
                    toast.fire({
                        type: 'error',
                        title: 'Suppliers Not Created Please Try again '
                    })
                }
                return response;

            })
        },

        get_product_suppliers: (context) => {
            let response_data = {};
            axios.get(baseURL + '/supplier-products', config).then(response => {
                context.commit("SET_ALL_PRODUCT_SUPPLIERS", response.data.data.data);
                response_data = response.data.data.data
            }).catch(error => {
                return error;
            })
            return response_data
        },
        get_product_suppliers_details: (context, payload) => {
            let response_data = {};
            axios.get(baseURL + '/supplier-products/' + payload, config).then(response => {
                context.commit("SET_PRODUCT_SUPPLIER_DETAILS", response.data);
                response_data = response.data

            }).catch(error => {
                return error;
            })
            return response_data
        },
        /**
         * user login
         */
        authenticate_user: (context, payload) => {
            axios.post(baseURL + '/auth/authenticate/', payload, config).then(response => {
                console.log(response.data)
                console.log("response server")
                context.commit("SET_AUTH_TOKEN", response.data.data.token);
                console.log(response.data);
                if (response.status == 200) {
                    if (response.data.status_code == 0) {
                        context.commit("SET_AUTH_TOKEN_RESPONSE", 1);
                        localStorage.setItem('token', response.data.data.token)
                        toast.fire({
                            type: 'success',
                            title: 'Successfully logged In'
                        })
                    } else {
                        context.commit("SET_AUTH_TOKEN_RESPONSE", 0);
                        toast.fire({
                            type: 'error',
                            title: 'Failed to login in. Wrong credentials  '
                        })
                    }
                } else {
                    context.commit("SET_AUTH_TOKEN_RESPONSE", 0);
                    toast.fire({
                        type: 'error',
                        title: 'Failed to login in. Wrong credentials  '
                    })
                }
                return response;

            })
        }

    },
    getters: {
        /*----------------------
          ------products -------
        /*---------------------*/
        ALL_PRODUCTS: state => state.all_products,
        /*----------------------
               ------orders -------
             /*---------------------*/
        ALL_ORDERS: state => state.all_orders,

        /*----------------------
          ------suppliers -------
        /*---------------------*/
        ALL_SUPPLIERS: state => state.all_suppliers,
        /*----------------------
          ------suppliers -------
        /*---------------------*/
        ALL_PRODUCT_SUPPLIERS: state => state.all_product_supplier,

        /**
         * authentication
         */
        AUTH_RESPONSE: state => state.authenticate_token_status,


    }

})


export default store;
