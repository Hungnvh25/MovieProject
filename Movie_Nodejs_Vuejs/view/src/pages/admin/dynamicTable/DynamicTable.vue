<template>
    <table v-if="$route.params.table_name === entityType">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
          <th>Activity</th>
        </tr>
      </thead>
  
      <tbody v-if="data.length">
        <tr v-for="item in data" :key="item.id">
          <td v-for="property in headers" :key="property">{{ item[property.toLowerCase()] }}</td>
          <td>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
          </td>
        </tr>
      </tbody>
  
      <tbody v-else>
        <tr>
          <td :colspan="headers.length + 1">Loading...</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    name:'DynamicTable',
    props: {
      entityType: String,
      headers: Array,
      data: Array
    }
  };
  </script>
  
  <style>
  
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