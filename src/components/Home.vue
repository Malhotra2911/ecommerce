<script>
export default {
    name: 'Home',
    props: {
        
    },
    mounted() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };
        this.observer = new IntersectionObserver(this.handleIntersect, options);
        const target = document.getElementById('typewriter-text');
        this.observer.observe(target);
    },
    methods: {
        handleIntersect(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }
    },
    beforeDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
</script>

<template>
    <div class="home container-fluid">
        <section class="displayBanner">
            <div class="row displayBanner1">
                <div class="col-md-5 displayBanner1_1">
                    <img src="../../public/landingPage/10.png" alt="" class="fit-image">
                </div>
                <div class="col-md-7 text-uppercase displayBanner1_2">
                    <p> <span class="d-flex justify-content-center displayBanner1_21">Online Business <br> and E-commerce</span><span class="d-flex justify-content-evenly displayBanner1_22">Lorem ipsum dolor sit amet.</span></p>
                </div>
            </div>
        </section>
        <section id="about" class="aboutUs">
            <div class="row">
                <div class="col-md-6 aboutUs1">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="../../public/landingPage/1.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src="../../public/landingPage/1.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src="../../public/landingPage/1.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-md-6 aboutUs2 text-center">
                    <h1>About <span class="goldenrod">Us</span></h1>
                    <p id="typewriter-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate, explicabo repudiandae atque assumenda praesentium natus repellat harum temporibus sint mollitia quod exercitationem dolorem laudantium amet odit voluptatibus recusandae nam sunt animi at. Beatae, amet. Ad quidem quisquam accusamus aperiam esse at harum amet! Adipisci, laudantium omnis officiis a maxime, ipsa incidunt in obcaecati consequatur expedita, distinctio recusandae harum blanditiis quo? Repudiandae consequatur maiores libero illum modi earum possimus labore dolorum? Veritatis sapiente officiis, beatae, itaque alias quibusdam quasi quas laudantium aliquam autem accusamus ratione. Hic recusandae quam eum rerum aut molestias itaque tempore, deserunt beatae harum tenetur. Beatae expedita animi fugit eos impedit tenetur, alias incidunt molestiae nihil odio quo sit dignissimos blanditiis reprehenderit magni, a, deleniti quos cupiditate libero eligendi sunt eum doloribus.</p>
                </div>
            </div>
        </section>
        <section class="contact mt-1">
            <div class="row">
                <div class="col-md-7 contactUs1">
                    <form>
                        <div class="row">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" required>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="subject" class="form-label">Subject</label>
                                    <input type="text" class="form-control" id="subject" required>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" placeholder="Leave a comment here" id="message" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-outline-dark">Send Message</button>
                    </form>
                </div>
                <div class="col-md-5">
                    <h1 class="text-center">Contact <span class="goldenrod">Us</span></h1>
                    <p class="text-muted text-center">We can't solve your problem if you don't tell us about it!</p>
                    <div class="contactUs2_3">
                        <div class="d-flex justify-content-start p-3">
                            <span><i class="bi bi-telephone-fill"></i> +123-456-7890</span>
                        </div>
                        <div class="d-flex justify-content-start p-3">
                            <span><i class="bi bi-envelope-fill"></i> hello@test.com</span>
                        </div>
                        <div class="d-flex justify-content-start p-3">
                            <span><i class="bi bi-geo-alt-fill"></i> 123 Anywhere St., Any City, 123456</span>
                        </div>
                        <div class="d-flex justify-content-start p-3">
                            <span>
                                <i class="bi bi-facebook p-2 pointer"></i>
                                <i class="bi bi-instagram p-2 pointer"></i>
                                <i class="bi bi-threads-fill p-2 pointer"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
    .home {
        /* background-color: aqua; */
        color: black;
        padding: 0;
        overflow: hidden;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .carousel-item {
        max-height: 100vh;
    }
    .carousel {
        font-weight: bolder;
    }
    .fit-image {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    transform: scale(0);
    transform: translateX(-100%);
    animation: slideInFromLeft 1s ease forwards;
    }
    .displayBanner1_1 {
        perspective: 1000px;
    }
    .displayBanner1 {
        margin-top: 15vh;
    }
    .displayBanner1_21 {
        margin-top: 18vh;
        font-size: 65px;
    }
    .displayBanner1_2 {
        transform: scale(0);
        animation: scaleUpAnimation 1s ease forwards;
    }
    #typewriter-text {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    #typewriter-text.visible {
        opacity: 1;
    }
    .carousel-caption {
        color: black;
    }
    .goldenrod {
        color: goldenrod;
    }
    .contactUs2_3 {
        font-size: 18px;
        padding-left: 25vh;
    }
    .bi {
        color: goldenrod;
    }
    .pointer {
        font-size: 20px;
    }
    .pointer:hover {
        cursor: pointer;
    }
    .aboutUs {
        padding-top: 70px;
    }
    .contact {
        padding: 70px 20px 20px 20px;
        background-color: lightgray;
    }
    @keyframes slideInFromLeft {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
    }
    @keyframes scaleUpAnimation {
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
    }
    @media screen and (max-width: 991px) and (min-width: 527px) {
    .displayBanner1 {
        flex-direction: row;
    }

    .displayBanner1_1,
    .displayBanner1_2 {
        width: 50%;
    }

    .displayBanner1_21 {
        font-size: 30px;
        margin-top: 15vh;
    }
    }
    @media screen and (max-width: 527px) {
    .displayBanner1 {
        flex-direction: row; 
    }

    .displayBanner1_1,
    .displayBanner1_2 {
        width: 50%;
    }

    .displayBanner1_21 {
        font-size: 15px;
        margin-top: 8vh;
    }

    .displayBanner1_22 {
        font-size: 8px;
    }
    }
    @media (max-width: 991px) {
        .aboutUs1,
        .aboutUs2 {
            width: 100%;
        }
        .contactUs2_3 {
            padding-left: 0;
        }
    }
    @media (max-width: 576px) {
        .aboutUs1,
        .aboutUs2 {
            width: 100%;
        }
        #carouselExampleCaptions {
            max-width: 100%;
        }
        .contactUs2_3 {
            padding-left: 0;
        }
    }

</style>