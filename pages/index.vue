<template>
  <main>
    <h1>Vue ToDo List</h1>
    <v-card width="600">
      <v-card-title class="d-flex justify-end">
        <div>
          <v-btn
            class="text-subtitle-2 rounded-xl pr-1"
            color="primary"
            size="small"
          >
            TASKS
            <v-chip
              end
              class="text-subtitle-2 ml-1"
              color="white"
              text-color="primary"
            >
              {{ $store.state.counter }}
            </v-chip>
          </v-btn>
          <v-btn
            class="text-subtitle-2 rounded-xl pr-1"
            color="#64B5F6"
            size="small"
            style="color: white"
          >
            TASKS DONE
            <v-chip
              end
              class="text-subtitle-2 ml-1"
              color="white"
              style="color: #64b5f6"
            >
              {{ $store.state.done }}
            </v-chip>
          </v-btn>
          <v-btn
            v-if="$store.state.done > 0"
            class="ma-2"
            color="#B71C1C"
            size="small"
            @click="deleteDone"
            style="color: white"
          >
            <v-icon start>mdi-delete</v-icon>
            Done
          </v-btn>
          <v-btn
            class="ma-2"
            color="#B71C1C"
            size="small"
            @click="deleteAll"
            style="color: white"
          >
            <v-icon start>mdi-delete</v-icon>
            Tasks
          </v-btn>
        </div>
      </v-card-title>

      <v-card-text class="">
        <v-list>
          <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
        </v-list>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <div class="d-flex justify-space-around">
          <v-text-field
            label="Add a new task"
            hide-details="auto"
            v-model="newTask"
            @keypress.enter="addTask"
          ></v-text-field>
          <v-btn
            class="ma-2"
            color="#00E676"
            size="small"
            @click="addTask"
            style="color: white"
          >
            <v-icon start>mdi-delete</v-icon>
            Tasks
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </main>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit("LOAD_STORE");
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit("ADD_TASK", this.newTask);
        this.newTask = "";
      }
    },
    deleteAll() {
      Object.values(this.$store.state.tasks).forEach((val) => {
        this.$store.commit("REMOVE_TASK", val);
      });
    },
    deleteDone() {
      Object.values(this.$store.state.tasks).forEach((val) => {
        val.done
          ? this.$store.commit("REMOVE_TASK", val)
          : console.log("no selected");
      });
    },
  },
};
</script>