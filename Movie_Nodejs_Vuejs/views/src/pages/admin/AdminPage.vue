<template>

  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

  <div class="container">
    <div :class="['left-section',{active: menuBtn}]">
      <div class="logo">
        <button class="menu-close" @click="ToggleMenu">
          <i class='bx bx-x'></i>
        </button>
        <h3>Admin Page</h3>
      </div>

      <div class="sidebar">
        <div class="item">
          <i class='bx bx-movie' ></i>
          <router-link to="/viewdata/movies">Movies</router-link>
        </div>

        <div class="item">
          <i class='bx bx-user' ></i>
          <router-link to="/viewdata/users">Users</router-link>
        </div>

        <div class="item">
          <i class='bx bx-list-check' ></i>
          <router-link to="/viewdata/mylists">My list</router-link>
        </div>

        <div class="item">
          <i class='bx bx-body' ></i>
          <router-link to="/viewdata/actors">Actors</router-link>
        </div>

        <div class="item">
          <i class='bx bx-world' ></i>
          <router-link to="/viewdata/countries">Countries</router-link>
        </div>

        <div class="item">
          <i class='bx bx-category' ></i>
          <router-link to="/viewdata/genres">Genres</router-link>
        </div>

        <div class="item">
          <i class='bx bxs-comment-detail' ></i>
          <router-link to="/viewdata/comments">Comments</router-link>
        </div>
      </div>
    </div>

    
      
    <main>
      <!-- Navbar -->
      <div class="nav-bar"  >
        <i :class="['bx bx-list-ul',{'hide-list': !menuBtn}]" @click="ToggleMenu"></i>
        <div class="account">
            <img src="@/assets/img/background-img.png" alt=""> 
            <p>Admin</p>
        </div>
      </div>
      
      <div class="content">
        <router-view></router-view>
        
        
      </div>
    </main>
      
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      menuBtn:true,
    }
  },
  methods:{
    ToggleMenu(){
      this.menuBtn = !this.menuBtn;
    }
  }
}
  

</script>

<style scoped>
  
  /* side bar */
  a{
    text-decoration: none;
    color: var(--fourth-color);
  }

  i{
    font-size: 24px;
  }

  .container{
    display: flex;
  }

  .container .left-section {
    position: relative;
    height: 100vh;
    width: 15%;
    /* left: 0px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--secondary-color);
    transition: 0.3s ease;
    /* transition-property: left; */
    box-sizing: border-box;
  }
  .container .active{
    display: none;
    /* left: -200px; */
  }

  .container .left-section .logo{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: var(--primary-color);
    width: 100%;
    height: 80px;
    position: relative;
  }

  .container .left-section .logo h3{
    font-weight: 800;
    font-size: 20px;
    color: var(--fifth-color);
  }

  .menu-close{
    position: absolute;
    top:0px;
    right: 0px;
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }

  .container .left-section .sidebar{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top:20px;
    width: 80%;
  }

  .container .left-section .sidebar .item{
    display:flex;
    gap:20px;
    cursor: pointer;
  }

  .container .left-section .sidebar a,i{
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 120%;
    color: var(--fourth-color);
    overflow: hidden;
  }

  .container .left-section .sidebar .item:active a,
  .container .left-section .sidebar .item:active i
  {
    color: var(--third-color);
  }

   /* main content */
   main{
    height: 100vh;
    width: 100%;
  }

  /* navbar */
  .nav-bar{
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-color: var(--primary-color);
    padding: 0 10px;
    box-sizing: border-box;
  }
  .nav-bar i{
    color: var(--fourth-color);
    font-size: 30px;
    cursor: pointer;
    position: relative;
    margin:20px;
  }
  .nav-bar .account{
    height: 100%;
    width: 100px;
    display: flex;
    align-items:center ;
    justify-content: center;
    gap:10px
  }
  .nav-bar .account img{
    height: 30px;
    width: 30px;
    border-radius: 999%;
  }
  .nav-bar .account p{
    color: var(--fourth-color);
  }
  /* .hide-list{
    display: none;
  } */
  .content{
    height: calc(100vh - 100px);
    width: 99%;
    margin: 5px;
    border: 1px solid;
    border-radius: 10px;
  }
</style>