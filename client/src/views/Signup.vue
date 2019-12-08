<template>
  <div class="column is-one-third is-offset-one-third">
    <ul class="panel">
      <p class="panel-heading">Sign up</p>

      <div class="field is-grouped is-grouped-centered">

        <form style="padding: 1em;">
          
          <div class="field">
            <label class="label">User:</label>
            <div class="control">
              <input v-model="firstname" style="width:20em;" class="input" type="text" placeholder="First Name"/>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input v-model="lasttname" style="width:20em;" class="input" type="text" placeholder="Last Name"/>
            </div>
          </div>

          <div class="field">
            <label class="label">Account:</label>
            <div class="control">
              <input v-model="username" style="width:20em;" class="input" type="text" placeholder="Username"/>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input v-model="password" style="width:20em;" class="input" type="password" placeholder="Password"/>
            </div>
          </div>

          <div class="field">
            <label class="label">Body Information:</label>
            <div class="control">
              <input v-model="age" style="width:20em;" class="input" type="number" placeholder="Age"/>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input v-model="height" style="width:20em;" class="input" type="number" placeholder="Height"/>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input v-model="weight" style="width:20em;" class="input" type="number" placeholder="Weight"/>
            </div>
          </div>

          <div class="field">
            <p class="control">
            <span class="select">
              <select>
                <option selected>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </span>
            </p>
          </div>

          <div class="field is-grouped is-grouped-centered">
            <div class="control">
              <button class="button is-link" v-on:click="createUser">Sign Up</button>
            </div>
            <div class="control">
              <a href = './' class="button is-link is-light">Cancel</a>
            </div>
          </div>

        </form>
        <p class="help is-danger">{{ error }}</p>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      age: '',
      height: '',
      weight: '',
      gender: '',
      status: ''
    })
}
</script>

<style>
</style>