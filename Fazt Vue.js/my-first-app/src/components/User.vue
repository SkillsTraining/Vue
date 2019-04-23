<template>
    <div class="users">
        <h1>User Component</h1>
        <ul>
            <li v-for="user in users" :key="user.name">
                {{user.name}} - {{user.email}} <button v-on:click="deleteUser(user)">X</button>
            </li>
        </ul>
        <br>
        <form v-on:submit.prevent="addUser">
            <input type="text" v-model="newUser.name" placeholder="Nombre">
            <input type="email" v-model="newUser.email" placeholder="Email">
            <button type="submit">
                Add
            </button>
        </form>

    </div>
</template>

<script>
export default {
    data(){
        return{
            users:[
                /*{
                    name:'Jue',
                    email:'joe@gmail.com',
                    contacto:'false'
                },
                {
                    name:'Carlos',
                    email:'carlos@gmail.com',
                    contacto:'false'
                },
                {
                    name:'Maria',
                    email:'Nel@gmail.com',
                    contacto:'true'
                }*/
            ], newUser:{}
        }
    }, methods:{
        addUser(){
            //console.log('Agregango usuarios', this.newUser);
            this.users.push(this.newUser);
            this.newUser = {};
        }, deleteUser(user){
            this.users.splice(this.users.indexOf(user),1);
        }
    }, created(){
        //console.log("Componente creado");
        this.$http.get("https://jsonplaceholder.typicode.com/users").then(res => this.users = res.body);
    }
}
</script>

<style lang="css">
    .users{
        background-color: #333;
        color: white;
    }
</style>
