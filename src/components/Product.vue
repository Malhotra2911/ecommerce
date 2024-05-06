<script>
export default {
    name: 'Product'
}
</script>

<template>
    <div class="products">
    <h1 class="text-center heading">Top <span class="goldenrod">Products</span></h1>
        <section class="container">
            <div class="row mx-auto">
                <div class="col-md-3 p-2">
                    <div class="card" style="width: 18rem;">
                        <img src="../../public/categories/2.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-8">
                                    <h5 class="card-title text-uppercase">Mg Choice</h5>
                                </div>
                                <div class="col-md-4">
                                    <h5 class="card-title d-flex justify-content-end"><i class="bi bi-currency-rupee"></i> 99</h5>
                                </div>
                                <p class="card-text text-muted">Vantagekart Natural Cotton Plain Tote Shopping Bags with Extra...</p>
                            </div>
                            <router-link :to="{path: '/order', query: { id: 2, name: 'MG CHOICE Vantagekart Natural Cotton Plain Tote Shopping Bags', price: '99' }}" class="btn btn-outline-warning">View Details</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 p-2">
                    <div class="card" style="width: 18rem;">
                        <img src="../../public/categories/1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-8">
                                    <h5 class="card-title text-uppercase">Fur Jaden</h5>
                                </div>
                                <div class="col-md-4">
                                    <h5 class="card-title d-flex justify-content-end"><i class="bi bi-currency-rupee"></i> 1019</h5>
                                </div>
                                <p class="card-text text-muted">Fur Jaden Red Textured Leatherette Stylish & Spacious...</p>
                            </div>
                            <router-link :to="{path: '/order', query: { id: 1, name: 'Fur Jaden Red Textured Leatherette Stylish & Spacious Weekender Duffle Bag for Travel', price: '1019' }}" class="btn btn-outline-warning">View Details</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 p-2">
                    <div class="card" style="width: 18rem;">
                        <img src="../../public/categories/3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-8">
                                    <h5 class="card-title">Your Gift Studio</h5>
                                </div>
                                <div class="col-md-4">
                                    <h5 class="card-title d-flex justify-content-end"><i class="bi bi-currency-rupee"></i> 449</h5>
                                </div>
                                <p class="card-text text-muted">YOUR GIFT STUDIO Customized Leather Travel Wallet, Passport...</p>
                            </div>
                            <router-link :to="{path: '/order', query: { id: 3, name: 'YOUR GIFT STUDIO Customized Leather Travel Wallet, Passport Holder with Name & Charm | Personalized Passport Case, Leather Travel Document Holder for Men & Women Travel Accessories', price: '449' }}" class="btn btn-outline-warning">View Details</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 p-2">
                    <div class="card" style="width: 18rem;">
                        <img src="../../public/categories/4.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-8">
                                    <h5 class="card-title">Lunch Bags</h5>
                                </div>
                                <div class="col-md-4">
                                    <h5 class="card-title d-flex justify-content-end"><i class="bi bi-currency-rupee"></i> 399</h5>
                                </div>
                                <p class="card-text text-muted">Home Puff Lunch Bag for Women & Men, Insulated Lunch Bag...</p>
                            </div>
                            <router-link :to="{path: '/order', query: { id: 4, name: 'Home Puff Lunch Bag for Women & Men, Insulated Lunch Bag for 4 containers, Tiffin Lunch Bag for Office/College/School, Lightweight, Durable Handles, Cutlery Holder, Water Resistant', price: '399' }}" class="btn btn-outline-warning">View Details</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 p-2">
                    <div class="card" style="width: 18rem;">
                        <img src="../../public/categories/5.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-8">
                                    <h5 class="card-title">Laptop & Tablet Bags</h5>
                                </div>
                                <div class="col-md-4">
                                    <h5 class="card-title d-flex justify-content-end"><i class="bi bi-currency-rupee"></i> 649</h5>
                                </div>
                                <p class="card-text text-muted">Dyazo Water Resistant Laptop...</p>
                            </div>
                            <router-link :to="{path: '/order', query: { id: 5, name: 'Dyazo Water Resistant Laptop Sleeve with Handle Compatible for 15 Inch to 15.6 Inches laptops & Notebooks - Grey', price: '649' }}" class="btn btn-outline-warning">View Details</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 p-2">
                    <div class="card" style="width: 18rem;">
                        <img src="../../public/categories/6.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-8">
                                    <h5 class="card-title">Backpacks</h5>
                                </div>
                                <div class="col-md-4">
                                    <h5 class="card-title d-flex justify-content-end"><i class="bi bi-currency-rupee"></i> 599</h5>
                                </div>
                                <p class="card-text text-muted">Classic 20L Small Faux Leather Water Resistant Anti Theft...</p>
                            </div>
                            <router-link :to="{path: '/order', query: { id: 6, name: 'Gear Classic 20L Small Faux Leather Water Resistant Anti Theft Laptop Backpack', price: '599' }}" class="btn btn-outline-warning">View Details</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 p-2">
                    <div class="card" style="width: 18rem;">
                        <img src="../../public/categories/7.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-8">
                                    <h5 class="card-title">Messenger Bags</h5>
                                </div>
                                <div class="col-md-4">
                                    <h5 class="card-title d-flex justify-content-end"><i class="bi bi-currency-rupee"></i> 649</h5>
                                </div>
                                <p class="card-text text-muted">Canvas Splash-Proof Laptop Messenger Bag for up to 15.6"...</p>
                            </div>
                            
                            <router-link :to="{path: '/order', query: { id: 7, name: 'Contacts Canvas Splash-Proof Laptop Messenger Bag for up to 15.6 Laptop/Mac with Genuine Leather Trim | Laptop Sleeve Sling Bag with Shoulder Strap', price: '649' }}" class="btn btn-outline-warning">View Details</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 p-2">
                    <div class="card" style="width: 18rem;">
                        <img src="../../public/categories/8.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-8">
                                    <h5 class="card-title">Cooler Bags</h5>
                                </div>
                                <div class="col-md-4">
                                    <h5 class="card-title d-flex justify-content-end"><i class="bi bi-currency-rupee"></i> 559</h5>
                                </div>
                                <p class="card-text text-muted">Outer Woods Insulated 6 Can Cooler Bag | Fits 6 x 500ml...</p>
                            </div>
                            <router-link :to="{path: '/order', query: { id: 8, name: 'Outer Woods Insulated 6 Can Cooler Bag | Fits 6 x 500ml Beer Cans | Keep Cans Cool for up to 10 Hrs | with 2 Units of Ice Gel Packs', price: '559' }}" class="btn btn-outline-warning">View Details</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>   
</template>

<style scoped>
    .products {
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: black;
    }
    .heading {
        margin-top: 10vh;
    }
    .goldenrod {
        color: goldenrod;
    }
    .card-img-top {
        height: 30vh;
    }
    .card {
        border-radius: 10px;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
    }
    @media screen and (max-width: 1024px) and (min-width: 769px) {
        .col-md-3 {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }  
    }
    @media screen and (max-width: 768px) and (min-width: 426px) {
        .col-md-3 {
            flex: 0 0 50%;
            max-width: 50%;
        }  
    }
</style>