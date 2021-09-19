<template>
    <!-- Start Contact Us -->
    <div class="contact text-center">
        <div class="overlay"></div>
        <div class="container">
            <h2 class="upper">Say <span class="main-color">Hello</span></h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br> Asperiores fugit maiores, corrupti minima
                incidunt nostrum.</p>
            <form>
                <input type="email" class="email" name="mail" placeholder="Please Enter Your Email">
                <input type="text"  class="subject" name="subject" placeholder="Please Enter Your Subject">
                <div class="subject-helper"></div>
                <textarea class="text-area" placeholder="Please Enter Your Message" ></textarea>
                <span class="info">
                    <button class="upper">Hire us</button>
                    <span class="social-media">
                        <i class="fab fa-facebook" aria-hidden="true"></i>
                        <i class="fab fa-twitter" aria-hidden="true"></i>
                        <i class="fab fa-youtube" aria-hidden="true"></i>
                        <i class="fab fa-google" aria-hidden="true"></i>
                    </span>
                </span>
            </form>
        </div>
    </div>
    <!-- End Contact Us -->
</template>

<script>
export default {
    name : 'ContactUs'
}
</script>