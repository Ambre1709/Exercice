<template>
  <div class="card relative">
    <div>
      <img class="article" alt="image news" :src="image" />
    </div>
    <div class="content">
      <div class="description text-left">
        infos ici
        <h3>{{ title }}</h3>
        <h4>{{ subTitle }}</h4>
        <p>{{ description }}</p>
      </div>
      <div class="square bg-yellow-500 bottom-0 right-0 absolute">
        <img
          class="arrow"
          src="../assets/arrow.png"
          alt="flèche plus d'information"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardNews",
  props: ["title", "subTitle", "description", "image"],
};
</script>

<style scoped>
.card {
  width: 400px;
  margin: 0 20px;
}
.article {
  background: blue;
  height: 300px;
}
.content {
  position: relative;
  margin-top: -50px;
  width: 360px;
  height: 200px;
  background: yellow;
  margin-bottom: 50px;
}
.square {
  width: 50px;
  height: 50px;
}
.description {
  padding: 30px;
  background-color: purple;
}
.arrow {
  padding: 12px;
}
</style>
