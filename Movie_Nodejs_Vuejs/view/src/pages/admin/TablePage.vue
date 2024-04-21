<template>
    <div class="container">
        <div class="title">
            <div></div>
            <p>{{this.$route.params.table_name.toUpperCase()+' Table'}}</p>
            <button>Add</button>
        </div>      

        <DynamicTable
        :entity-type="'movies'"
        :headers="['Id', 'Name', 'Title', 'Image','Video','View','Like','Description','Year']"
        :data="tables"
        v-if="$route.params.table_name === 'movies'"
        />

        <DynamicTable
        :entity-type="'users'"
        :headers="['Id', 'Username', 'Password', 'Email','Phone']"
        :data="tables"
        v-if="$route.params.table_name === 'users'"
        />

        <DynamicTable
        :entity-type="'mylists'"
        :headers="['Id', 'Name', 'User_id', 'Movie_id']"
        :data="tables"
        v-if="$route.params.table_name === 'mylists'"
        />

        <DynamicTable
        :entity-type="'actors'"
        :headers="['Id', 'Name', 'Movie_id']"
        :data="tables"
        v-if="$route.params.table_name === 'actors'"
        />

        <DynamicTable
        :entity-type="'countries'"
        :headers="['Id', 'Name', 'Movie_id']"
        :data="tables"
        v-if="$route.params.table_name === 'countries'"
        />

        <DynamicTable
        :entity-type="'genres'"
        :headers="['Id', 'Name', 'Movie_id']"
        :data="tables"
        v-if="$route.params.table_name === 'genres'"
        />

        <DynamicTable
        :entity-type="'comments'"
        :headers="['Id', 'Text', 'User_id', 'Movie_id']"
        :data="tables"
        v-if="$route.params.table_name === 'comments'"
        />

        
    </div>
    
</template>

<script>
// import sourdata from '@/data.json' 
import axios from 'axios';
import DynamicTable from './../admin/dynamicTable/DynamicTable.vue'
export default {
    components:{
        DynamicTable
    },
    data(){
        return{
            tables: []
        }
    },
    mounted() {
        this.getTable();
    },
    methods:{
        getTable() {
            let tablename = this.$route.params.table_name;
            axios.get(`http://localhost:3000/table`).then((res) => {
                for(let i = 0; i < res.data.length; i++) {
                    if(res.data[i][tablename]) {
                        this.tables = res.data[i][tablename];
                        break; 
                    }
                }
            }).catch(error => {
                console.error(error);
            });
        }
    },
    watch: {
    '$route.params.table_name': {
      handler() {
        this.getTable();
      }
    }
  }
}
</script>

<style scoped>
    .container{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        align-items: center;
    }
    .title{
        display:flex;
        width: 100%;
        height: 60px;
        margin: 10px;
        align-items: center;
        justify-content: space-between;
    }
    .title p{
        font-size: 20px;
        font-weight:bold;
        
    }
    .title button{
        height: 40px;
        width: 70px;
        margin: 5px;
        background-color: rgb(45, 164, 6);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: aliceblue;
    }

    table{
        width: 98%;
        height: 70%;
        text-align: center;
        border-collapse: collapse;
    }
    table tr {
        border-bottom: 0.5px solid rgb(193, 190, 190);
    }
    .edit-button{
        height: 40px;
        width: 70px;
        margin: 5px;
        background-color: rgb(11, 90, 175);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: aliceblue;
    }
    .delete-button{
        height: 40px;
        width: 70px;
        margin: 5px;
        background-color: rgb(195, 71, 49);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: aliceblue;
    }
</style>



