<template>
  <div class="sign-up">
        <div class="mb-5">
            <router-link :to="{name: 'home'}">
                <img src="../../public/icon/logo.svg" alt="">
            </router-link>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-11 sign-up__form">
                    <div class="mb-5">
                        <h2 class="text-light mb-3">Sign up</h2>
                        <small>Please fill in this form to create account!</small>
                    </div>
                    <form @click.prevent="signUp" class="form-horizontal book__form">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="email" class="form-control" placeholder="Name" id="email">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" placeholder="Email address" id="email">
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password</label>
                            <input type="password" class="form-control" placeholder="Password" id="pwd">
                        </div>
                        <div class="form-group mt-5">
                            <div class="col-sm-offset-2">
                                <button type="submit" class="btn btn--orange btn-block py-2">Sign up</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-2">
                                <small>Already have an account? <span class="text-danger">Sign in</span>.</small>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'SignUp',
    methods: {
        signUp(){

        }
    }
}
</script>

<style>

</style>