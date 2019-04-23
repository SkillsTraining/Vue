<template>
<div>
    <div class="Test" v-html ="myHtml">

    </div>
    <div v-if="showName">
        <h1>{{ user.firstName +' '+user.lastName}}</h1>
    </div>
    <div v-else>
        <p>No puedo mostrar el nombre</p>
    </div>
    <hr>
    <div>
        {{ tasks[1].title }}
    </div>
    <br>

    <ul>
        <li v-for="task in tasks" :key="task.titles">
            {{task.titles}}
        </li>
    </ul>
    <br><hr>
    <div>
        <input type="text" v-model="user.firstName">
        <br>
        <button type="button" v-on:click="saludar(user.firstName)">
            Click Me Now
        </button>
    </div>
    <br><hr>
    <div>
        <input type="text" v-on:keyup.enter="typingEnter">
    </div>
    <br><hr>
    <div>
        {{fullName}}
    </div>
    <br>
    <div>
        {{msg}}
    </div>
    <br>
    <div>
        {{call}}
    </div>

</div>
</template>

<script>
export default {
    data(){
        return{
            title:"Hola Vue.js",
            myHtml:"<h3>hola vue</h3>",
            user: {
                firstName: "Ismael",
                lastName:"Flores"
            },
            showName: true,
            tasks:[
                {titles:"eat"},
                {titles:"dinner"}
            ]
        }
    },
    methods:{
        saludar(name){
            alert('Hello ' + name)
        },
        typing (e){
            console.log(e.target.value);
        },
        typingEnter (e){
            console.log('Dio un Enter');
        }
    },
    computed:{
        fullName(){
            return this.user.firstName + ' ' + this.user.lastName;
        }
    },
    props: {
        msg:{
            type:String,
        }, call:{
            default: 'Mensaje por defecto'
        }
    }
}
</script>

<style media="screen">
    .Test{
        background-color: gray;
    }
</style>
