<script>
export default {
    name: 'Contact'
}
</script>

<template>
    <div>
        <section class="contact p-4">
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
    .contact {
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-top: 15vh;
        color: black;
        padding: 0;
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
    @media (max-width: 991px) {
        .contactUs2_3 {
            padding-left: 0;
        }
    }
    @media (max-width: 576px) {
        .contactUs2_3 {
            padding-left: 0;
        }
    }
</style>