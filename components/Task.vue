<template>
  <v-list-item :disabled="task.done" class="my-2">
    <v-card
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :color="task.done ? '#ECEFF1' : '#E3F2FD'"
      class="d-flex align-center py-1 px-2"
      min-width="100%"
      max-height=""
    >
      <template start>
        <v-checkbox
          v-if="!task.done"
          @click="toggleDone"
          :model-value="task.done"
        ></v-checkbox>
        <v-icon class="py-3" v-else>mdi-check</v-icon>
      </template>

      <v-list-item-title>{{ task.content }}</v-list-item-title>
      <template end>
        <v-btn
          density="comfortable"
          color="#B71C1C"
          v-if="hover"
          icon
          @click="removeTask"
          ><v-icon>mdi-delete</v-icon></v-btn
        >
      </template>
    </v-card>
  </v-list-item>
</template>

<script>
export default {
  props: ["task"],
  beforeCreate() {
    this.$store.commit("LOAD_STORE");
  },
  data() {
    return {
      hover: false,
      selected: [],
    };
  },
  methods: {
    toggleDone() {
      this.$store.commit("TOGGLE_TASK", this.task);
    },
    removeTask() {
      this.$store.commit("REMOVE_TASK", this.task);
    },
  },
};
</script>

<style>
</style>