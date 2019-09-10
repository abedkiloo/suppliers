<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">


    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Suppliers & Products (Supply Chain ) Simulation</title>
    <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
</head>
<body>
<div id="app">
    <div class="container">
        <h1>Suppliers & Products (Supply Chain ) Simulation</h1>

        <nav>
            <ul>
                <li class="nav-item">
                    <router-link to="/products">Products</router-link>
                <li class="nav-item">
                    <router-link to="/suppliers">Suppliers</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/orders">Orders</router-link>
                </li>
                </li>
            </ul>
        </nav>
        <ProductsComponent></ProductsComponent>
        <router-view></router-view>
    </div>
</div>
<script src="{{asset('js/app.js')}}"></script>
</body>
</html>
