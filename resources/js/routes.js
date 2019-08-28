import ProductsCreateComponent from './components/Products/ProductsCreateComponent'
import ProductsComponent from './components/Products/ProductsComponent'
import SupplierCreateComponent from './components/Suppliers/SuppliersCreateComponent'
import SupplierComponent from './components/Suppliers/SuppliersComponent'


const routes = [
    {path: '/products', component: ProductsComponent},
    {path: '/products-create', component: ProductsCreateComponent},
    {path: '/suppliers', component: SupplierComponent},
    {path: '/suppliers-create', component: SupplierCreateComponent},
]


export default routes;
