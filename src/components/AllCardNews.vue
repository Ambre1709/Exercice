<template>
  <div>
    <card-news
      :key="news.id"
      v-for="news of news"
      :title="news.title"
      :subTitle="news.subTitle"
      :description="news.description"
      :image="news.image"
      :id="news.id"
    />
  </div>
</template>

<script>
import axios from "axios";
import CardNews from "./CardNews";

export default {
  name: "AllCardNews",
  components: { CardNews },
  data() {
    return {
      news: [],
    };
  },
  methods: {
    async fetchNews() {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/news/" + this.id
        );
        this.news = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped></style>
