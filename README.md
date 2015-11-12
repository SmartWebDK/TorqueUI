# TorqueUI 

## Prerequisite ##
To run the builder and compile the Sass to CSS and run the tests, you need to have 
* Ruby installed: [Ruby][Ruby website]
* Node.js installed: [Node.js][Node website]

Besides that, the builder uses two libaries, a Ruby gem:
```
$ gem install bundler
```
and a Node.js library called Grunt
```
$ npm install -g grunt-cli
```

After you have install the libraries, you can install the rest of the dependencies by going into the project folder and write:
```
$ bundler install
$ npm install
```  
<br> 

### Watch the CSS files ###
```
$ grunt
```

<br> 

### Build the CSS files ###
```
$ grunt dist
```

<br> 

### Start the test server ###
```
$ grunt server
```<small>and visit localhost:8000/ in your favorit browser</small>


[Ruby website]: https://www.ruby-lang.org/en/ "A PROGRAMMER'S BEST FRIEND"
[Node website]: http://nodejs.org/ "Javascript on the server side"

<br>

### Usage ###
```
<!-- TorqueUI -->
<link rel="stylesheet" href="/assets/css/framework.min.css">
<link rel="stylesheet" href="/assets/css/theme.min.css">
<link rel="stylesheet" href="/assets/css/print.min.css" media="print">
<link rel="stylesheet" href="/assets/css/style.css">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

<!-- Custom Javascript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="/assets/javascripts/framework.min.js"></script>
<script src="/assets/javascripts/ie.js"></script>
```
