<template>
  <div
    class="airport"
    :class="{ 'is-under-construction': airport.construction }"
  >
    <p>{{ airport.abbreviation }}</p>
    <p>{{ airport.name }}</p>
    <p>
      {{ airport.city }}, {{ airport.state }} , Under Construction?
      {{ airport.construction }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    airport: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.airport {
  border: 3px solid;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
}

.airport p:first-child {
  font-weight: bold;
  font-size: 2.5rem;
  margin: 1rem 0;
}

.airport p:last-child {
  font-style: italic;
  font-size: 0.8rem;
}

.airport.is-under-construction {
  border-color: red;
  color: red;
}
</style>
