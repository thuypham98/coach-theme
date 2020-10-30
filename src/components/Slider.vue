<template>
  <!-- slider top  -->
  <div class="slider slider--top">
    <div class="container-fluid px-5">
      <!--Carousel Wrapper-->
      <div
        id="multi-item-example"
        class="carousel slide carousel-multi-item"
        data-ride="carousel"
      >
        <!--Slides-->
        <div class="carousel-inner" role="listbox">
          <!--First slide-->
          <div class="carousel-item active">
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="../assets/images/slide-img-1.png"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="../assets/images/slide-img-2.png"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="../assets/images/slide-img-3.png"
                    alt="Card image cap"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--/.First slide-->

          <!--Second slide-->
          <div class="carousel-item">
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="../assets/images/slide-img-4.png"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="../assets/images/slide-img-5.png"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="../assets/images/slide-img-6.png"
                    alt="Card image cap"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--/.Second slide-->

          <!--Third slide-->
          <div class="carousel-item">
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="../assets/images/slide-img-1.png"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="../assets/images/slide-img-2.png"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div class="col-md-4 clearfix d-none d-md-block">
                <div class="card mb-2">
                  <img
                    class="card-img-top"
                    src="../assets/images/slide-img-3.png"
                    alt="Card image cap"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--/.Third slide-->
        </div>
        <!--/.Slides-->
      </div>
      <!--/.Carousel Wrapper-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
};
</script>

<style lang="stylus" scoped></style>