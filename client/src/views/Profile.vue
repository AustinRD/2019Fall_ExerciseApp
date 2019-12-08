<template>
  <div class="profile">
    <section class="hero is-danger">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">My Profile</h1>
          <h2 class="subtitle">Welcome, {{ username }}</h2>
        </div>
      </div>
    </section>

  <div>
    <ul class="panel">
      <p class="panel-heading">Exercises</p>
        <li v-for="(p, i) in userData.ExerciseLog" :key="i" 
          class="panel-block">
          {{p.name}}
        </li>
    </ul>
  </div>
    
</div>
</template>

<script>
import { App_Server } from "../models/Profile";

export default {
  data: () => ({
    userData: {}
    }),
  async created() {
    this.userData = await App_Server.Get_User_Data();
  },
  methods:
  {
    addFriend()
    {

    },
    addExercise()
    {

    }
  }
};

</script>

<style>
</style>