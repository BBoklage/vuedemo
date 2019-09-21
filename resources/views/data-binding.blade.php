<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Data Binding</title>
    <link rel="stylesheet" href="css/app.css">
</head>
<body>
    <div class="text-center">
        <h1 class="">Data Binding</h1>
    </div>
    <div id="app" class="text-center">
        <input class="" type="text" name="person" v-model= "firstName">
        <input class="" type="text" name="person" v-model= "lastName">
        <p>My name is @{{firstName}} @{{lastName}}</p>
    </div>
    
    <script src="js/app.js"></script>
    <script src="js/vue.js"></script>

</body>
</html>