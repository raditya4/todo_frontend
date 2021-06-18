<template>
  <div>
    <div>Input data User </div>
    <ul>
      <li v-for="item in users" :key="item.id_user">{{item.username}}<button @click="hapus(item.id_user)">X</button></li>
    </ul>
      <input v-model="username"  placeholder="Your Username"/>
      <input v-model="password"  placeholder="Your Password"/>
      <button @click="tambah">Add</button>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data : function(){
    return{
      users : [],
      username: '',
      password:''
    }
  },
  created : function (){
    const username = localStorage.getItem('usr')
    const password = localStorage.getItem('pwd')
    axios.get('http://localhost:3000/user',{headers:{username,password}})
    .then(result=>{
      this.users = result.data
    })
  },
  methods: {
    tambah: function(){
      const newItem = {username:this.username,password:this.password}
      const username = localStorage.getItem('usr')
      const password = localStorage.getItem('pwd')
      axios.post('http://localhost:3000/user',newItem,{headers:{username,password}})
      .then(()=>{
        // this.users.push(newItem)
        // this.username=''
        // this.password=''
        location.reload()
      }) 
    },
    hapus: function(id_user){
      const username = localStorage.getItem('usr')
      const password = localStorage.getItem('pwd')
     axios.delete(`http://localhost:3000/user/${id_user}`,{headers:{username,password}})
     location.reload()
    }
  }
}
</script>