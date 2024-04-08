<template>
   
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  
  <div class="body">
      <div class="logo">
          <h2>Movie</h2>
      </div>
      <div class="container ">
          <h1>Sign Up</h1>

          <form @submit.prevent="formValidaton">
              <div v-for="(items,index) in form" :key="index">
                <label :for="items.name">{{ items.name }}</label>
                <div class="custom-input">
                    <input :class="{error: items.status}" :type="items.type" :name="items.name" v-model="items.text" :placeholder="items.placeholder" @keyup="items.status = false" autocomplete="off">
                    <i :class='items.icon' ></i>
                </div>
                <span v-if="items.status">{{ items.notice }}</span>
              </div>
              <button class="signup">Signup</button>
              <div class="link">
                  <router-link :to="{name: 'login-router'}">Login</router-link>
              </div>
          </form>
      </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      form:{
        user:{
          name:'User',
          type: 'text',
          text:'',
          status:false,
          placeholder: 'Enter your username',
          icon:'bx bx-user',
          notice:""
        },
        phone:{
          name:'Phone',
          type:'tel',
          text:'',
          status:false,
          placeholder: 'Enter your phone number',
          icon:'bx bx-phone',
          notice:""
        },
        email:{
          name:'Email',
          type:'text',
          text:'',
          status:false,
          placeholder: 'Enter your email',
          icon:'bx bxl-gmail',
          notice:""
        },
        password:{
          name:'Password',
          type:'password',
          text:'',
          status:false,
          placeholder: 'Enter your password',
          icon:'bx bx-lock-alt',
          notice:""
        }
      },
      
    }
    },methods:{
      formValidaton(){
        const regexPhone = /^\d{10,11}$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(this.form.user.text.trim() == ''){
          this.form.user.notice = 'Username cannot be blank';
          this.form.user.status =true
        // }else if(this.form.user.text.trim().length <6 || this.form.user.text.trim().length >12){
        //   this.form.user.notice = 'Username must be >6 and <12 character';
        //   this.form.user.status =true
        }

        if(this.form.phone.text.trim() == ''){
          this.form.phone.notice = 'Phone number cannot be blank',
          this.form.phone.status = true
        }else if(!regexPhone.test(this.form.phone.text.trim())){
          this.form.phone.notice = 'Phone number invalid';
          this.form.phone.status =true
        }

        if(this.form.email.text.trim() == ''){
          this.form.email.notice = 'Email cannot be blank',
          this.form.email.status = true
        }else if(!regexEmail.test(this.form.email.text.trim())){
          this.form.email.notice = 'Email invalid';
          this.form.email.status =true
        }

        if(this.form.password.text.trim() == ''){
          this.form.password.notice=  'Password cannot be blank',
          this.form.password.status = true
        }else if(this.form.password.text.trim().length <6 || this.form.password.text.trim().length >12){
          this.form.password.notice = 'Password must be >6 and <12 character';
          this.form.password.status =true
        }
      }
  }
}
</script>

<style scoped>
*{
  color:#E8BCB9;
}
.body{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('./../assets/img/background-img.png');
  background-size:100% 100%;
  background-repeat: no-repeat;
}
.logo{
  position: absolute;
  top:22px;
  left: 22px;
}

.container{
  width: 450px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 40px 32px;
  border-radius: 15px;
  background-color: #1D1A39;
}
.container h1{
  font-size: 1.6rem;
}

.container form label{
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.03rem;
  display: block;
  margin-top: 12px;
}
.container form .custom-input{
  position: relative;
}
.container form .custom-input input{
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  height: 46px;
  letter-spacing: 0.03rem;
  border: 1px solid #6667b0;
  background: transparent;
  outline: none;
  border-radius: 8px;
  text-indent: 20px;
  margin-top: 6px;
  transition: all 0.3s ease;
}

.container form .custom-input .error{
  border: 1px solid rgb(238, 62, 62);
}

.container form .custom-input input:focus{
  border-color: #F39F5A;
}

.container form .custom-input i{
  position: absolute;
  font-size: 28px;
  right: 10px;
  top: 15px;
}

.container form span{
  font-size: 14px;
  letter-spacing: 0.03rem;
  display: block;
  margin-top: 2px;
  color: rgb(238, 62, 62);
}

.container form .custom-input input:focus +i{
  color:#F39F5A
}

.container form .signup{
  width: 100%;
  margin-top: 30px;
  background: #5052bb;
  border: none;
  line-height: 50px;
  font-size: 18px;
  letter-spacing: 0.03rem;
  cursor: pointer;
  font-weight: 800;
  transition: all 0.3s ease;
}

.container form .signup:hover{
  background: #3f42d6;
}

.container .link{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.container .link a{
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  text-underline-offset: 5px;
  text-decoration-color: #E8BCB9;
}

.container .link a:hover{
  text-decoration: underline;
}

</style>