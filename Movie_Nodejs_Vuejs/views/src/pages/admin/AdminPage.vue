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
          <p @click="ToggleTable">Tables<i :class="['bx bx-chevron-right' ,'dropdown',{'table-arrow':tableArrow}]"></i></p>
          <div :class="['sub-menu',{'table-dropdown': tableDropdown}]">
            <div class="sub-item">
              <i class='bx bx-movie' ></i>
              <router-link to="/viewdata/movies">Movies</router-link>
            </div>

            <div class="sub-item">
              <i class='bx bx-user' ></i>
              <router-link to="/viewdata/users">Users</router-link>
            </div>

            <div class="sub-item">
              <i class='bx bx-list-check' ></i>
              <router-link to="/viewdata/mylists">My list</router-link>
            </div>

            <div class="sub-item">
              <i class='bx bx-body' ></i>
              <router-link to="/viewdata/actors">Actors</router-link>
            </div>

            <div class="sub-item">
              <i class='bx bx-world' ></i>
              <router-link to="/viewdata/countries">Countries</router-link>
            </div>

            <div class="sub-item">
              <i class='bx bx-category' ></i>
              <router-link to="/viewdata/genres">Genres</router-link>
            </div>

            <div class="sub-item">
              <i class='bx bxs-comment-detail' ></i>
              <router-link to="/viewdata/comments">Comments</router-link>
            </div>         
          </div>
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
      tableDropdown:true,
      tableArrow: false
    }
  },
  methods:{
    ToggleMenu(){
      this.menuBtn = !this.menuBtn;
    },
    ToggleTable(){
      this.tableDropdown = !this.tableDropdown;
      this.tableArrow = !this.tableArrow;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--secondary-color);
    transition: 0.3s ease;
    box-sizing: border-box;
    overflow: hidden;
  }
  .container .active{
    width: 0%;
  }

  .container .left-section .logo{
    display: flex;
    align-items: center;
    justify-content: center;
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
    height: calc(100vh - 80px);
    width: 100%;
    overflow-x: hidden;
  }
  .container .left-section .sidebar .item{
    display: flex;
    flex-direction: column;
    line-height: 50px;
    width: 100%;
    cursor: pointer;
    position: relative;
  }
  .container .left-section .sidebar .item p,i{
    font-size: 120%;
    color: var(--fourth-color);
    overflow: hidden;
  }
  .container .left-section .sidebar .item p{
    width: 100%;
    display: flex;
    justify-content: center;
    user-select: none;
  }

  .container .left-section .sidebar .item .dropdown{
    position: absolute;
    right: 0px;
    margin: 15px;
    transition: 0.2s ease;
  }
  .table-arrow{
    transform: rotate(90deg);
  }

  /* .container .left-section .sidebar .item .sub-menu */

  .sub-menu{
    display:flex;
    height: 350px;
    flex-direction: column;
    width: 100%;
    cursor: pointer;
    background-color: #682a7b;
    overflow-x: hidden;
    transition: 0.3s ease;
  }
  .sub-menu::-webkit-scrollbar{
    width: 0px;
  }

  .table-dropdown{
    height: 0px;
  }

  .container .left-section .sidebar .item .sub-menu .sub-item{
    display: flex;
    align-items: center;
    margin-left: 30%;
  }

  .container .left-section .sidebar .item .sub-menu .sub-item a,i{
    font-size: 100%;
    color: var(--fourth-color);
    overflow: hidden;
  } 

  .container .left-section .sidebar .sub-item:active a,
  .container .left-section .sidebar .sub-item:active i
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