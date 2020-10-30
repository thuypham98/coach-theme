<template>
    <div class="header__wrap">
        <!-- header  -->
        <div class="header" id="header">
            <div class="container">
                <div class="row">
                    <div class="col-5 header__logo">
                        <router-link :to="{name: 'home'}"><img src="../../public/icon/logo.svg" alt="Logo"></router-link>
                    </div>
                    <div class="col-7">
                        <ul class="header__menu--list flex-content">
                            <li class="header__menu--item">
                                <a href="#">Homepages</a>
                                <ul class="header__sub-menu--list">
                                    <li class="header__sub-menu--item">
                                        <router-link class="header__sub-menu--link" :to="{name: 'coach'}">
                                            <b>Coach</b>
                                            <span>Motivational Speaker</span>
                                        </router-link>
                                        <!-- <a href="./home-pages/coach.html" class="header__sub-menu--link">
                                            <b>Coach</b>
                                            <span>Motivational Speaker</span>
                                        </a> -->
                                    </li>
                                    <li class="header__sub-menu--item">
                                        <router-link class="header__sub-menu--link" :to="{name: 'banner'}">
                                            <b>Business Coach</b>
                                            <span>Consulting Business Coach</span>
                                        </router-link>
                                        <!-- <a href="#" class="header__sub-menu--link">
                                            <b>Business Coach</b>
                                            <span>Consulting Business Coach</span>
                                        </a> -->
                                    </li>
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Life Coach</b>
                                            <span>LifeCoach layout design.</span>
                                        </a>
                                    </li>
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>CEO Coaching</b>
                                            <span>Excellent in CEO Coaching</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="header__menu--item">
                                <a href="#">Pages</a>
                                <ul class="header__sub-menu--list">
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Program</b>
                                            <span>Coaching program & details</span>
                                        </a>
                                        <ul>
                                            <li><a class="text-dark" href="./pages/program/grid.html">Grid</a></li>
                                            <li>List</li>
                                            <li>Single</li>
                                        </ul>
                                    </li>
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Events</b>
                                            <span>Keynote Speakers Events</span>
                                        </a>
                                        <ul>
                                            <li>List</li>
                                            <li>Single</li>
                                        </ul>
                                    </li>
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Podcast</b>
                                            <span>Imporve Yourself to listen podcast.</span>
                                        </a>
                                        <ul>
                                            <li>List</li>
                                            <li>Thumbnail</li>
                                            <li>Single</li>
                                        </ul>
                                    </li>
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Courses</b>
                                            <span>Find the motivational courses</span>
                                        </a>
                                        <ul>
                                            <li>Grid</li>
                                            <li>Single</li>
                                        </ul>
                                    </li>
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Utilities</b>
                                            <span>Additional Pages</span>
                                        </a>
                                        <ul>
                                            <li>Pricing <span class="text-danger">(New)</span></li>
                                            <li>About me</li>
                                            <li>Team</li>
                                            <li>Contact</li>
                                            <li>Error</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            
                            <li class="header__menu--item">
                                <a href="#">Resources</a>
                                <ul class="header__sub-menu--list">
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Help Center <span class="text-danger">(New)</span></b>
                                            <span>How can we help?</span>
                                        </a>
                                        <ul>
                                            <li><a href="./resources/help-center/help.html" class="text-dark">Help</a></li>
                                            <li>Category</li>
                                            <li>Category Article</li>
                                            <li>Help Center Profile</li>
                                        </ul>
                                    </li>
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Webinar <span class="text-danger">(New)</span></b>
                                            <span>Webinar Landing Page Design</span>
                                        </a>
                                        <ul>
                                            <li>Webinar List</li>
                                            <li>Webinar Single</li>
                                            <li>Webinar Booking</li>
                                        </ul>
                                    </li>
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Download Book</b>
                                            <span>Download the book that guide your life lession.</span>
                                        </a>
                                    </li>
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Success Stories</b>
                                            <span>See what our clients say & success stories.</span>
                                        </a>
                                    </li>
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Free Session Booking</b>
                                            <span>Your 60-minute Free Coaching Session.</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="header__menu--item">
                                <a href="#">Blog</a>
                                <ul class="header__sub-menu--list">
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Blog</b>
                                        </a>
                                    </li>
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Blog Athor</b>
                                        </a>
                                    </li>
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Blog Category</b>
                                        </a>
                                    </li>
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Blog Classic</b>
                                        </a>
                                    </li>
                                    <li class="header__sub-menu--item">
                                        <a href="#" class="header__sub-menu--link">
                                            <b>Blog Single</b>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="header__menu--item"><a href="#">Amount</a></li>
                            <li class="header__menu--item"><a href="#">Shop</a></li>
                            <li class="header__menu--item"><a href="#">Docs</a></li>
                            <li class="header__menu--item">
                                <router-link :to="{name: 'sign-up'}" class="btn btn--orange py-1 px-3">Sign up</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <div class="header header__mobile"  id="">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                         <router-link :to="{name: 'home'}"><img src="../../public/icon/logo.svg" alt="Logo"></router-link>
                        </div>
                    <div class="col-6"><i class="fas fa-bars text-light float-right toggler__icon" id=""
                            data-toggle="modal" data-target="#menuOnMobile"></i></div>
                    <div class="menu__mobile">
                        <!-- Modal -->
                        <div class="modal fade" id="menuOnMobile" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel"><b>Menu</b></h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <ul class="menu__mobile--list">
                                            <li class="menu__mobile--item">
                                                <a data-toggle="collapse" href="#mobile__menu--homepages" role="button"
                                                    aria-expanded="false"
                                                    aria-controls="mobile__menu--homepages">Homepages</a>
                                            </li>
                                            <!-- mobile - menu homepages -->
                                            <div class="collapse mobile__menu" id="mobile__menu--homepages">
                                                <ul class="pl-2">
                                                    <li class="header__sub-menu--item">
                                                        <a href="./home-pages/coach.html"
                                                            class="header__sub-menu--link">
                                                            <b>Coach</b>
                                                            <span>Motivational Speaker</span>
                                                        </a>
                                                    </li>
                                                    <li class="header__sub-menu--item">
                                                        <a href="#" class="header__sub-menu--link">
                                                            <b>Business Coach</b>
                                                            <span>Consulting Business Coach</span>
                                                        </a>
                                                    </li>
                                                    <li class="header__sub-menu--item">
                                                        <a href="#" class="header__sub-menu--link">
                                                            <b>Life Coach</b>
                                                            <span>LifeCoach layout design.</span>
                                                        </a>
                                                    </li>
                                                    <li class="header__sub-menu--item">
                                                        <a href="#" class="header__sub-menu--link">
                                                            <b>CEO Coaching</b>
                                                            <span>Excellent in CEO Coaching</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <li class="menu__mobile--item">
                                                <a data-toggle="collapse" href="#mobile__menu--pages" role="button"
                                                    aria-expanded="false" aria-controls="mobile__menu--pages">Pages</a>
                                            </li>
                                            <div class="collapse mobile__menu" id="mobile__menu--pages">
                                                <ul class="pl-2">
                                                    <li class="header__sub-menu--item">
                                                        <a href="./home-pages/coach.html"
                                                            class="header__sub-menu--link">
                                                            <b>Program</b>
                                                            <span>Coaching program & details</span>
                                                        </a>
                                                    </li>
                                                    <li class="header__sub-menu--item">
                                                        <a href="#" class="header__sub-menu--link">
                                                            <b>Events</b>
                                                            <span>Keynote Speakers Events</span>
                                                        </a>
                                                    </li>
                                                    <li class="header__sub-menu--item">
                                                        <a href="#" class="header__sub-menu--link">
                                                            <b>Podcast</b>
                                                            <span>Imporve Yourself to listen podcast</span>
                                                        </a>
                                                    </li>
                                                    <li class="header__sub-menu--item">
                                                        <a href="#" class="header__sub-menu--link">
                                                            <b>Courses</b>
                                                            <span>Find the motivational courses</span>
                                                        </a>
                                                    </li>
                                                    <li class="header__sub-menu--item">
                                                        <a href="#" class="header__sub-menu--link">
                                                            <b>Utilities</b>
                                                            <span>Additional Pages</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <li class="menu__mobile--item"><a href="./index.html">Blog</a></li>
                                            <li class="menu__mobile--item"><a href="#">Resources</a></li>
                                            <li class="menu__mobile--item"><a href="#">Account</a></li>
                                            <li class="menu__mobile--item"><a href="#">Shop</a></li>
                                            <li class="menu__mobile--item"><a href="#">Docs</a></li>
                                            <li class="menu__mobile--item"><a href="#"><button
                                                        class="btn btn--orange">Sign up</button></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>

</style>