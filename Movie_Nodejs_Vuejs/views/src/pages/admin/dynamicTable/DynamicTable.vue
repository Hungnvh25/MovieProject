<template>
    <table v-if="$route.params.table_name === entityType">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
          <th>Activity</th>
        </tr>
      </thead>
  
      <tbody v-if="data.length">
        <tr v-for="item in paginatedData" :key="item.id">
          <td v-for="property in headers" :key="property">{{ item[property] }}</td>
          <td>
            <router-link :to="{name:'edit-table',params:{table_edit:this.$route.params.table_name,id:item.id}}" target="_blank"><button class="edit-button">Edit</button></router-link>
            <button class="delete-button">Delete</button>
          </td>
        </tr>
      </tbody>
  
      <tbody v-else>
        <tr>
          <td :colspan="headers.length + 1">Loading...</td>
        </tr>
      </tbody>
      <tfoot v-if="totalPages > 1">
        <tr>
          <td class="pagination" :colspan="headers.length + 1">
            <button @click="prevPage" :disabled="currentPage === 1"><i class='bx bx-chevron-left'></i></button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages"><i class='bx bx-chevron-right' ></i></button>
          </td>
        </tr>
      </tfoot>
    </table>
  </template>
  
  <script>
  export default {
    name:'DynamicTable',
    props: {
      entityType: String,
      headers: Array,
      data: Array
    },
    data() {
      return {
        currentPage: 1,
        rowsPerPage: 6,
      };
    },
    computed: {
      paginatedData() {
        const start = (this.currentPage - 1) * this.rowsPerPage;
        const end = start + this.rowsPerPage;
        return this.data.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.data.length / this.rowsPerPage);
      },
    },
    methods: {
      nextPage() {
        if (this.currentPage < this.totalPages) this.currentPage++;
      },
      prevPage() {
        if (this.currentPage > 1) this.currentPage--;
      },
    },
  };

  </script>
  
  <style>
  
  table{
        width: 98%;
        height: 100%;
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
    tfoot{
      height: 15%;
      width: 100%;
      
    }
    tfoot .pagination button{
      width: 27px;
      height: 27px;
      border: 0.2px solid rgb(97, 97, 225);
      background-color: aliceblue;
      border-radius: 99%;
      cursor: pointer;
    }
  </style>