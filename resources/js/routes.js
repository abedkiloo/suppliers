import ProductsCreateComponent from './components/Products/ProductsCreateComponent'
import ProductsComponent from './components/Products/ProductsComponent'

import SupplierCreateComponent from './components/Suppliers/SuppliersCreateComponent'
import SupplierComponent from './components/Suppliers/SuppliersComponent'


import OrdersCreateComponent from './components/Orders/OrdersCreateComponent'
import OrderComponent from './components/Orders/OrdersComponent'


import OrdersDetailsCreateComponent from './components/OrderDetails/OrderDetailsCreateComponent'
import OrderDetailsViewComponent from './components/OrderDetails/OrderDetailsViewComponent'
import OrderDetailsComponent from './components/OrderDetails/OrderDetailsComponent'


import ProductSupplierComponent from './components/ProductSuppliers/ProductsSuppliersComponent'
import ProductSupplierCreateComponent from './components/ProductSuppliers/ProductsSuppliersCreateComponent'


const routes = [
    {path: '/products', component: ProductsComponent},
    {path: '/products-create', component: ProductsCreateComponent},


    {path: '/suppliers', component: SupplierComponent},
    {path: '/suppliers-create', component: SupplierCreateComponent},


    {path: '/orders', component: OrderComponent},
    {path: '/orders-create', component: OrdersCreateComponent},


    {path: '/orders-details', component: OrderDetailsComponent},
    {path: '/orders-details/:id', name: 'orders-details-view', component: OrderDetailsViewComponent, props: true},
    {path: '/orders-details-create', component: OrdersDetailsCreateComponent},


    {path: '/product-suppliers', component: ProductSupplierComponent},
    {path: '/product-suppliers-create', component: ProductSupplierCreateComponent},
]


export default routes;
