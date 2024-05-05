/<template>
  <div class="container">
    <div class="card-header">
      <p>Add {{ this.$route.params.table_create.toUpperCase() }}</p>
    </div>
    <div class="card-body">
      <div class="form-input" v-for="(name,index) in name_column" :key="index">
        <label :for="name">{{ name }}</label>
        <input type="text" :id="name">
      </div>
    </div>
    <div class="btn">
        <button>Add</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      name_column:[]
    }
  },
  mounted(){
    
    this.getNameTableCreate()
  },
  methods:{
    getNameTableCreate(){
      
      axios.get(`http://localhost:3000/admin/${this.$route.params.table_create}`).then(res=>{
        
        this.name_column = Object.keys(res.data[this.$route.params.table_create][0])
        this.name_column.length -= 2
      }).catch(error => {
            console.error(error);
        });
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:15px;
}
.card-header p{
  font-size: 30px;
  font-weight: bold;
}
.card-body{
  height: 70%;
  width: 35%;
  gap:10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.form-input{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.form-input label{
  font-size: 17px;
  font-weight: bold;
  letter-spacing: 0.03rem;
}
.form-input input{
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  height: 35px;
  letter-spacing: 0.03rem;
  border: 1px solid rgb(183, 179, 179);
  background: transparent;
  outline: none;
  border-radius: 8px;
  text-indent: 20px;
  margin-top: 6px;
}
.btn{
  width: 20%;
}
.btn button{
  color: aliceblue;
  width: 100%;
  background: #21b40d;
  border: none;
  border-radius: 10px;
  line-height: 50px;
  font-size: 18px;
  letter-spacing: 0.03rem;
  cursor: pointer;
  font-weight: 800;
}
</style>