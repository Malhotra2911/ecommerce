<script>
export default {
    name: 'Order',
    data() {
        return {
            productId: null,
            productName: null,
            productPrice: null
        };
    },
    mounted() {
        this.productId = this.$route.query.id;
        this.productName = this.$route.query.name;
        this.productPrice = this.$route.query.price;
    }
}
</script>

<template>
    <div class="container">
        <section class="order">
            <div class="row">
                <div class="col-md-6">
                    <img :src="'../../categories/' + productId + '.jpg'" class="card-img-top" alt="">
                    <button type="button" class="btn btn-outline-info mx-2 my-2">Add to Cart</button>
                    <button type="button" class="btn btn-outline-warning mx-2 my-2">Buy Now</button>
                </div>
                <div class="col-md-6">
                    <h2>{{productName}}</h2>
                    <hr>
                    <h5 class="card-title"><i class="bi bi-currency-rupee"></i> {{ Math.round(parseInt(productPrice) + (parseInt(productPrice) * 0.18)) }} </h5>
                    <p class="text-muted">Inclusive of all taxes (18% GST)</p>
                    <hr>
                    <h5>Product Details</h5>
                    <ul class="text-muted">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nobis!</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum!</li>
                    </ul>
                    <hr>
                    <h5>About this item</h5>
                    <ul class="text-muted">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt recusandae, in sint animi nihil dolores?</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quibusdam aut harum vel in magni quas, fugiat accusantium illo! Nemo quidem cum dolorem sunt veritatis.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, blanditiis consectetur. Corporis laudantium aperiam natus ipsam eaque cupiditate, perspiciatis dolorem.</li>
                    </ul>
                    <hr>
                    <h5>Additional Information</h5>
                    <ul>
                        <li>Manufacturer: <span class="text-muted">Lorem ipsum dolor sit amet</span></li>
                        <li>Colour: <span class="text-muted">Lorem ipsum</span></li>
                        <li>Capacity: <span class="text-muted">123 Lorem ipsum </span></li>
                        <li>Material: <span class="text-muted">Lorem ipsum dolor sit</span></li>
                    </ul>
                </div>
            </div>
        </section>
    </div> 
</template>

<style scoped>
    .order {
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: black;
        margin-top: 20vh;
    }
</style>