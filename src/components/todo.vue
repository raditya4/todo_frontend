<template>
  <div>
    <!-- Budi {{nilai}} gendernya {{jk}} 
    <button @click="nilai++">Klik</button> -->

    <div>Tugas Pemograman Web </div>
    <ul>
      <li v-for="item in todos" :key="item.id">{{item.deskripsi}}<button @click="hapus(item.id)">X</button></li>
    </ul>
      <input v-model="myText" name="deskripsi"/>
      <button @click="tambah">Tambah</button>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data : function(){
    return{
      // nilai : 0,
      // jk :'lk'
      todos : [],
      myText: ''
    }
  },
  created : function (){
    const username = localStorage.getItem('usr')
    const password = localStorage.getItem('pwd')
    axios.get('http://localhost:3000/todo',{headers:{username,password}})
    .then(result=>{
      this.todos = result.data
    })
  },
  methods: {
    tambah: function(){
      const newItem = {deskripsi:this.myText}
      const username = localStorage.getItem('usr')
      const password = localStorage.getItem('pwd') 
      axios.post('http://localhost:3000/todo',newItem,{headers:{username,password}})
      .then(()=>{
        location.reload()
      })
    },
    hapus: function(id){
      const username = localStorage.getItem('usr')
      const password = localStorage.getItem('pwd')
     axios.delete(`http://localhost:3000/todo/${id}`,{headers:{username,password}})
     location.reload()
    }
  }
}
</script>