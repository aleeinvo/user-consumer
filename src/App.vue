<script>
import axios from 'axios';

axios.defaults.baseURL = 'https://25ac-119-153-144-209.ap.ngrok.io/api/v1'
export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    async createUser() {
      try {
        const response = await axios.post('/users');
        
        this.user = response.data.data?.user || {};
      } catch (error) {
        console.error(error.message);
      }
    }
  },
  created() {
    this.createUser();
  }
}
</script>

<template>
  <section style="background-color: #eee; min-height: 100vh;">
    <div class="container py-5">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">User</a></li>
              <li class="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                class="rounded-circle img-fluid" style="width: 150px;">
              <h5 class="my-3">{{ user.name || 'N/A' }}</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Full Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ user.name || 'N/A' }}</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ user.email || 'N/A' }}</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Phone</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ user.phone_number || 'N/A' }}</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Address</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ user.address || 'N/A' }}</p>
                </div>
              </div>
              <hr/>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Joined On</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ user.created_at ? (new Date(user.created_at)).toDateString() : 'N/A' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
