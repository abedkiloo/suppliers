import ProductsCreateComponent from './components/Products/ProductsCreateComponent'
import ProductsComponent from './components/Products/ProductsComponent'

import SupplierCreateComponent from './components/Suppliers/SuppliersCreateComponent'
import SupplierComponent from './components/Suppliers/SuppliersComponent'


import ProductSupplierCreateComponent from './components/ProductSuppliers/ProductsSuppliersCreateComponent'
import ProductSupplierComponent from './components/ProductSuppliers/ProductsSuppliersComponent.vue'


const routes = [
    {path: '/products', component: ProductsComponent},
    {path: '/products-create', component: ProductsCreateComponent},


    {path: '/suppliers', component: SupplierComponent},
    {path: '/suppliers-create', component: SupplierCreateComponent},


    {path: '/product-suppliers', component: ProductSupplierComponent},
    {path: '/product-suppliers-create', component: ProductSupplierCreateComponent},
]


export default routes;
