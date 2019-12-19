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

<div class = "column">
  <div class = "column is-one-quater">
    <ul class="panel">
      <p class="panel-heading">Exercises</p>
      <vSelect label = "addExercise" :options="exerciseLog" @search="searchExercises($event)" placeholder = "Add an exercise"></vSelect>
        <li v-for="(p, i) in userData.ExerciseLog" :key="i" 
          class="panel-block">
          {{p.name}}
        </li>
        
    </ul>
  </div>

  <div class = "column is-one-quater">
    <ul class="panel">
      <p class="panel-heading">Friends</p>
         <li v-for="(p, i) in userData.Friends" :key="i" 
          class="panel-block">
          {{p.name}}
        </li>
    </ul>
  </div>
</div>
</div>
</template>

<script>
import { Profile_Server } from "../models/Profile";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  data: () => ({
    userData: [],
    exerciseLog: [],
    }),
  
  async created() {
    this.userData = await Profile_Server.Get_User_Data();
  },
  methods:
  {
    addFriend()
    {

    },
    addExercise()
    {

    }
  },
  components:
  {
    vSelect
  },
  async searchExercises(input)
  {
    this.exerciseLog = await Profile_Server.Get_Exercise(input);
  }

};

</script>

<style>
</style>