<template>
  <div class="wrapper">
    <!-- List airport -->
    <div v-for="airport in airports" :key="airport.abbreviation">
      <airport-card
        :airport="airport"
        @favorite-airport="$store.dispatch('addToFavorites', $event)"
      />
    </div>
    <!-- List airport favorate -->
    <div v-if="$store.state.favorites.length">
      <h1>
        Favorites
        <template v-if="$store.state.favorites.length"
          >({{ $store.state.favorites.length }})</template
        >
      </h1>
      <div
        v-for="airport in $store.state.favorites"
        :key="airport.abbreviation"
      >
        <airport-card :airport="airport" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import allAirports from "@/data/airports.js";
import AirportCard from "@/components/AirportCard.vue";

export default {
  components: {
    AirportCard,
  },
  setup() {
    const airports = ref(allAirports);
    return { airports };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

p,
h3 {
  grid-column: span 3;
}
</style>
