<template>
  <div>
    <BannerMario />
    <!-- START CHARACTERS -->
    <div class="box flex flex-wrap 2xl:flex-nowrap justify-center">
      <!-- CHARACTERS -->
      <div class="flex-1">
        <!-- nav characters -->
        <div id="nav">
          <ul class="flex justify-around">
            <!-- Si character.id ===  selectedCharacter.id est true alors il ajoute la class selected -->
            <li
              :class="[
                { selected: character.id === selectedCharacter.id },
                'p-2',
                'text-xl',
              ]"
              v-bind:id="character.id"
              v-for="character of characters"
              :key="character.id"
            >
              <button v-on:click="showCharacters(character)">
                {{ character.title }}
              </button>
            </li>
          </ul>
        </div>
        <!-- characters content -->
        <div class="content p-6">
          <h1 class="text-4xl py-4">{{ selectedCharacter.title }}</h1>
          <h3 class="text-xl py-2">{{ selectedCharacter.subTitle }}</h3>
          <p>{{ selectedCharacter.description }}</p>
        </div>
      </div>
      <!-- IMAGE CHARACTER -->
      <div class="image flex">
        <img alt="image personnage" v-bind:src="selectedCharacter.image" />
      </div>
    </div>
    <!-- END CHARACTERS -->
    <!-- NEWS -->
    <div class="bg-gray-200">
      <h2 class="text-center p-8 text-3xl">Actualités</h2>
      <allCardNews />
    </div>
    <div>
      <card-news /><!-- A supprimer une fois les news fonctionnelles - phase de test -->
    </div>
    <router-view />
  </div>
</template>

<script>
import BannerMario from "../components/BannerMario.vue";
import axios from "axios";
import CardNews from "../components/CardNews.vue"; /*A supprimer une fois les news fonctionnelles - phase de test */
import AllCardNews from "../components/AllCardNews.vue";

export default {
  name: "Home",
  components: {
    BannerMario,
    CardNews /*A supprimer une fois les news fonctionnelles - phase de test */,
    AllCardNews,
  },
  data() {
    return {
      characters: [],
      news: [],
      selectedCharacter: {},
    };
  },
  /*récupération des données JSON Server*/
  async created() {
    try {
      const theCharacters = await axios.get("http://localhost:3000/characters");
      const theNews = await axios.get("http://localhost:3000/news");
      this.characters = theCharacters.data;
      this.news = theNews.data;
      this.selectedCharacter = this.characters[0];
    } catch (error) {
      console.error(error);
    }
  },
  /*Affichage du personnage selectionné*/
  methods: {
    showCharacters(character) {
      this.selectedCharacter = character;
    },
  },
};
</script>
<style scoped>
/*image non responsive (à voir)*/
.image {
  height: 500px;
}
.selected {
  border-bottom: orange 2px solid;
}
@media screen and (max-width: 600px) {
  .image {
    height: auto;
  }
}
</style>
