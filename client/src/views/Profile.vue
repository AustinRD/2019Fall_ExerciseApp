<template>
<div>
  <h1 class = "is-size-1">
      My Profile
  </h1>

  <div class="columns">
    <div class="column is-one-quater">
      <ul class="panel">
        <p class="panel-heading">
          Health Statistics
        </p>
      </ul>

      <ul class = "panel">
        <p class = "panel-heading">
          Exercise Log
        </p>
      </ul>
    </div>

    <div class="column">
      <ul class="panel">
        <p class="panel-heading">
          Friends
        </p>
      </ul>
    </div>
  </div>

</div>
</template>


<script>
import { App_Client, App_Server} from '../models/Profile';

export default {
  data:() => ({
    profile: App_Client,
  }),
  created()
  {
    this.My_Exercises = App_Server.Get_Exercise_Log();
  }
}
</script>

<style>

</style>