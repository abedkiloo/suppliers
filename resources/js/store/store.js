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
            return state.group_created_status = payload
        }
    },
    actions: {
        save_products: (context, payload) => {
            axios.post(baseURL + '/products/', payload).then(response => {
                context.commit("SET_ALL_PRODUCTS", response.data);
                console.log(response.data);
                if (response.status == 200) {
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

        /**
         * authentication
         */
        AUTH_RESPONSE: state => state.authenticate_token_status,


    }

})


export default store;
