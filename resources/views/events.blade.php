<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="event-app">
        <button type="button" v-on:click= "buttonClicked();" name="button" >Clicked</button>


        <div v-on:mouseover= "onhover();">
            <h2>Hi</h2>
            <h2>Hi</h2>
            <h2>Hi</h2>
            

        </div>

    </div>


    <script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="js/vue.js"></script>
</body>
</html>