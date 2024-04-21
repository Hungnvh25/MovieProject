/<template>
    <div class="container">
      <div class="card-header">
        <p>Edit {{ this.$route.params.table_edit.toUpperCase() }}</p>
      </div>
      <div class="card-body">
        <div class="form-input" v-for="(label_name,index) in name_column" :key="index">
          <label :for="label_name">{{ label_name }}</label>
          <input type="text" :id="label_name" :value="id_detail[label_name]">
        </div>
      </div>
      <div class="btn">
          <button>Save</button>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data(){
      return{
        name_column:[],
        id_detail:{}
      }
    },
    mounted(){
      
      this.getNameTableEdit()
    },
    methods:{
      getNameTableEdit(){
        let tableName = this.$route.params.table_edit
        let idDetail = this.$route.params.id
        axios.get('http://localhost:3000/table').then(res=>{
          for(let i=0;i < res.data.length;i++){
            if(res.data[i][tableName]){
              this.name_column = Object.keys(res.data[i][tableName][0])
              for(let j=0;j<res.data[i][tableName].length;j++){
                if(res.data[i][tableName][j].id == idDetail){
                    this.id_detail = res.data[i][tableName][j];
                    break;
                }
              }
            //   console.log(this.id_detail)
              break;
            }
          }
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