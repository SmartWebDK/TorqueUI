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
