<template>
    <div class="container">
        <div class="title">
            <div></div>
            <p>{{this.$route.params.table_name.toUpperCase()+' Table'}}</p>
            <button>Add</button>
        </div>
        
        
        <!-- Movies -->
        <table v-if="this.$route.params.table_name == 'movies' ">
            <thead>
                <tr >
                    <th>Id</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Video</th>
                    <th>View</th>
                    <th>Like</th>
                    <th>Description</th>
                    <th>Year</th>
                    <th>Activity</th>
                </tr>
            </thead>
            
            <tbody v-if="tables">
                <tr v-for="table in tables" :key="table.id">
                    <td>{{ table.id }}</td>
                    <td>{{ table.name }}</td>
                    <td>{{ table.title }}</td>
                    <td>{{ table.image }}</td>
                    <td>{{ table.video }}</td>
                    <td>{{ table.view }}</td>
                    <td>{{ table.like }}</td>
                    <td>{{ table.description }}</td>
                    <td>{{ table.year }}</td>
                <td>

                        <button class="edit-button">Edit</button>
                    
                        <button class="delete-button">Delete</button>
                    
                </td>
            </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="9">Loading...</td>
                </tr>
            </tbody>
        </table>

        <!-- Users -->
        <table v-if="this.$route.params.table_name == 'users' ">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Activity</th>
                </tr>
            </thead>
            
            <tbody v-if="tables">
                <tr v-for="table in tables" :key="table.id">
                    <td>{{ table.id }}</td>
                    <td>{{ table.username }}</td>
                    <td>{{ table.password }}</td>
                    <td>{{ table.email }}</td>
                    <td>{{ table.phone }}</td>
                <td>
                        <button class="edit-button">Edit</button>
                        <button class="delete-button">Delete</button>
                </td>
            </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="5">Loading...</td>
                </tr>
            </tbody>
        </table>

        <!-- My List -->
        <table v-if="this.$route.params.table_name == 'mylists' ">
            <thead>
                <tr >
                    <th>Id</th>
                    <th>Name</th>
                    <th>userId</th>
                    <th>movieId</th>
                    <th>Activity</th>
                </tr>
            </thead>
            
            <tbody v-if="tables">
                <tr v-for="table in tables" :key="table.id">
                    <td>{{ table.id }}</td>
                    <td>{{ table.name }}</td>
                    <td>{{ table.userId }}</td>
                    <td>{{ table.movieId }}</td>
                <td>
                        <button class="edit-button">Edit</button> 
                        <button class="delete-button">Delete</button>
                </td>
            </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="4">Loading...</td>
                </tr>
            </tbody>
        </table>

        <!-- Actors -->
        <table v-if="this.$route.params.table_name == 'actors' ">
            <thead>
                <tr >
                    <th>Id</th>
                    <th>Name</th>
                    <th>movieId</th>
                    <th>Activity</th>
                </tr>
            </thead>
            
            <tbody v-if="tables">
                <tr v-for="table in tables" :key="table.id">
                    <td>{{ table.id }}</td>
                    <td>{{ table.name }}</td>
                    <td>{{ table.movieId }}</td>
                <td>
                        <button class="edit-button">Edit</button>
                        <button class="delete-button">Delete</button>
                </td>
            </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="3">Loading...</td>
                </tr>
            </tbody>
        </table>

        <!-- Country -->
        <table v-if="this.$route.params.table_name == 'countries' ">
            <thead>
                <tr >
                    <th>Id</th>
                    <th>Name</th>
                    <th>movieId</th>
                    <th>Activity</th>
                </tr>
            </thead>
            
            <tbody v-if="tables">
                <tr v-for="table in tables" :key="table.id">
                    <td>{{ table.id }}</td>
                    <td>{{ table.name }}</td>
                    <td>{{ table.movieId }}</td>
                <td>
                        <button class="edit-button">Edit</button>
                        <button class="delete-button">Delete</button>
                </td>
            </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="3">Loading...</td>
                </tr>
            </tbody>
        </table>

        <!-- Genres -->
        <table v-if="this.$route.params.table_name == 'genres' ">
            <thead>
                <tr >
                    <th>Id</th>
                    <th>Name</th>
                    <th>movieId</th>
                    <th>Activity</th>
                </tr>
            </thead>
            
            <tbody v-if="tables">
                <tr v-for="table in tables" :key="table.id">
                    <td>{{ table.id }}</td>
                    <td>{{ table.name }}</td>
                    <td>{{ table.movieId }}</td>
                <td>
                        <button class="edit-button">Edit</button>
                        <button class="delete-button">Delete</button>
                </td>
            </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="3">Loading...</td>
                </tr>
            </tbody>
        </table>

        <!-- Comments -->
        <table v-if="this.$route.params.table_name == 'comments' ">
            <thead>
                <tr >
                    <th>Id</th>
                    <th>Text</th>
                    <th>UserId</th>
                    <th>movieId</th>
                    <th>Activity</th>
                </tr>
            </thead>
            
            <tbody v-if="tables">
                <tr v-for="table in tables" :key="table.id">
                    <td>{{ table.id }}</td>
                    <td>{{ table.text }}</td>
                    <td>{{ table.userId }}</td>
                    <td>{{ table.movieId }}</td>
                <td>
                        <button class="edit-button">Edit</button>
                        <button class="delete-button">Delete</button>
                </td>
            </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="4">Loading...</td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script>
// import sourdata from '@/data.json' 
import axios from 'axios';

export default {
    data(){
        return{
            tables: null
        }
    },
    mounted(){
        
        this.getTable();
        
    },
    methods:{
        getTable() {
            let tablename = this.$route.params.table_name;
            axios.get(`http://localhost:3000/table`).then((res) => {
                console.log(res.data[1][tablename])
                if(tablename == "movies"){
                    this.tables = res.data[0][tablename];
                }else if(tablename == "users"){
                    this.tables = res.data[1][tablename];
                }else if(tablename == "mylists"){
                    this.tables = res.data[2][tablename];
                }else if(tablename == "actors"){
                    this.tables = res.data[3][tablename];
                }else if(tablename == "countries"){
                    this.tables = res.data[4][tablename];
                }else if(tablename == "genres"){
                    this.tables = res.data[5][tablename];
                }else if(tablename == "comments"){
                    this.tables = res.data[6][tablename];
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
    .btn{
        width: 100%;
        height: 65px;
        display: flex;
        justify-content: end;
        align-items: start;
    }
    .btn button{
        height: 40px;
        width: 70px;
        margin: 5px;
        background-color: rgb(11, 175, 11);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: aliceblue;
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