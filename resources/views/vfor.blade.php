<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="vfor-app">
        <p>Songs: <input type="text" v-model= "songs.tracks" name="song"></p> 
        <p>Artist: <input type="text" v-model= "songs.artists" name="artist"></p>
        <button type="button" v-on:click= "submitSong(newSong);">Add Song</button>
        
        <ul>
            <li v-for="song in songs" >@{{song}}|</li>
        </ul>
        <button type="button" v-on:click= "removeSong()">Delete Song</button>
        <button type="button" v-on:click= "emptyList()">Empty List</button>

    </div>


    <script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="js/vue.js"></script>
</body>
</html>