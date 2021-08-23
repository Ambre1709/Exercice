<template>
  <div class="banner_mario relative">
    <div class="bg-image z-1 bg-center bg-contain bg-no-repeat"></div>
    <div class="blue-content font-sans absolute z-2 flex items-center"></div>
    <div
      class="text flex flex-col items-center lg:items-start text-center lg:text-left text-white absolute z-10"
    >
      <h1 class="text-4xl ">
        L'histoire de nos consoles !
      </h1>
      <h3 class="text-xl py-4">
        POINT CULTURE
      </h3>
      <p class="py-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in magna
        arcu. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Curabitur mollis a ex quis tempor.
      </p>
      <router-link to="/news">
        <button
          class="flex flex-row items-center my-3 py-2 px-4 bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          <img
            class="arrow"
            src="../assets/arrow.png"
            alt="flèche plus d'information"
          />Ici les news
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.arrow {
  width: 20px;
}
.text {
  padding: 20px;
  top: 50%;
  left: 50%;
  transform: translate(0, -50%);
  max-width: 550px;
}
.banner_mario {
  height: 500px;
}
.bg-image {
  background-image: url(../assets/switch.png);
  height: 500px;
}
.blue-content {
  right: 0;
  top: 0;
  width: 65%;
  height: 500px;
  background-color: rgba(206, 36, 36, 0.7);
  -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 10% 100%);
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 10% 100%);
}
@media screen and (max-width: 1023px) {
  .blue-content {
    width: 100%;
    -webkit-clip-path: none;
    clip-path: none;
  }
  .text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@media screen and (max-width: 600px) {
  .text {
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
