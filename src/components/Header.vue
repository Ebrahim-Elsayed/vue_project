<template>
     <!-- Start Header -->
    <div class="header">
        <div class="overlay"></div>
        <div class="container">
            <div class="row justify-content-center justify-content-md-between navbar">
                <span class="col-12 col-md-4 logo">Tanatos<span class="main-color">Studio</span></span>
                <span class="col-12 col-md-4 links">
                    Menu
                    <i class="fa fa-bars fa-lg menu-icon"></i>
                </span>
            </div>
            <div class="menu">
                <div class="row">
                    <div class="col-6">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <i class="fas fa-times close-icon"></i>
                    </div>
                </div>
            </div>
            <!--Start sec navbar-->
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top sticky-nav">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">Navbar</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                      </li>
                    </ul>
                    <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
              </nav>
              <!--End sec navbar-->
            <div class="intro text-center">
                <h1 class="upper">We Design <span class="main-color">Things</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio aut ducimus rem hic laboriosam aperiam
                    quod saepe. Ex, quasi nulla. Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing
                    elit. Assumenda ullam quasi eos corporisdebitisvoluptates.
                </p>
                <div class="buttons">
                    <button class="upper">Hire Us</button>
                    <button class="upper">Our Works</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End Header -->
</template>

<script>
export default {
    name : 'Header'
}
</script>