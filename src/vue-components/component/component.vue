<template>
    <div id="hello">
        <h2>{{message}}</h2>
        <button v-bind:class="{ active: !show }"  @click="show = !show">Переключитьtyutyutyu отображение</button>
        <transition name="bounce"><p   v-if="!show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et
            netus.</p>  </transition>
       <div v-if="show"> Динамичная обработка input</div>

        <form>
            <label for="name">Name:</label>
            <input id="name" type="text" v-model="name"/>
            <p>{{ name }}</p>
        </form>
        Toggle - переключение css классов
        <div>
            <button @click="active = !active" :aria-pressed="active ? 'true' : 'false'">Toggle me</button>
            <p :class="{ red: active }">Sometimes I need to be styled differently</p>
        </div>
        <ol>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>
        <input type="text" v-model="query">
        <ul>
            <li v-for="item in filteredItems">{{item}}</li>
        </ul>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                message: 'Hello Vue',
                show: true,
                actives: false,
                name: '',
                active: false,
                todos: [
                    { text: 'Изучить JavaScript' },
                    { text: 'Изучить Vue' },
                    { text: 'Создать что-нибудь классное' }
                ],
                query:'',
                items:['red','Apple','Banana','Orange','Facebook','Twitter','Youtube']

            }
        },
        computed:{
            filteredItems:function()
            {
                var self=this;
                return self.items.filter(function(val){
                    return Array.isArray( val.match( new RegExp(self.query, 'i') ) );
                });
            }
        },

        props: {
        }


    }
</script>



