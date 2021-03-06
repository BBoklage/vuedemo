
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
//     data: {
//         firstName: '',
//         lastName: ''
//     }
// });
// const vforApp = new Vue({
//     el: '#vfor-app',
//     data: {
        
//         songs: [
//             {"tracks":"", "artists":""},
            
//         ],
//         newTrack:"",
//         newArtist:"",
        
//     },
    // methods:{
    //     submitSong(song){
    //         this.songs.push(song);
            

    //     },
    //     removeSong(){
    //         this.songs.pop();
    //     },
    //     emptyList(){
    //         this.songs = [];
    //     },

    // },
// });
// const eventsApp = new Vue({
//     el: '#event-app',
//     data: {
        
//     },
//     methods:{
//         buttonClicked() {
//             alert('Clicked');
//         },
//         onhover(){
//             alert('Hovered');
//         }
//     }
// });


Vue.component('playlist',{
    template:
    `
    <div class="text-center">
        Title: <input v-model ="newSong.title">
        Artist: <input v-model ="newSong.artist">
        <button class="btn btn-primary" @click="addSong(newSong)">add song</button>
        
        <ul class="list-group text-center">
            <li class="list-group-item mt-1 " v-for='(song, index) in songs' :key='song.title'>{{song.title}}<br><small>{{song.artist}}</small><br>
            <button class="btn btn-danger" @click="deleteSong(index)">Remove Song</button>
            <button class="btn" :class="{'btn-info' : !song.favorited, 'btn-warning': song.favorited }" @click="favoriteSong(index)">Favorite Song</button></li>
        </ul>
    
        
    </div>

    `,
    methods:{
        addSong(){
            this.songs.push({
                title: this.newSong.title,
                artist: this.newSong.artist
            })
        },
        deleteSong(index){
            this.songs.splice(index, 1)
        },
        favoriteSong(index){
           
            this.songs[index].favorited = !this.songs[index].favorited;
        }
    },
    data(){
        return{
            newSong:{
                title:'',
                artist:'',
                favorited: false
        },
            songs:[
                {
                    title: "bababa",
                    artist: "Blaine",
                    favorited: false
                }
               
            ]
        }
    }
});
new Vue({
    el: '#playlist'
});

