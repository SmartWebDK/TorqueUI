---
layout:		post
title:		Images
source:		modules/_images.scss
order:      1
component:  css
---

<p class="lead">A simple class that makes sure that images don't exceed their parent's boundaries.</p>

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <img src="http://placehold.it/500x150" class="responsive"/>
        </div>
    </div>
  </div>
{% highlight html %}
    <img src="http://placehold.it/500x150" class="responsive"/>
{% endhighlight %}
</div>

# Adjusments
Images can be adjusted left or right of text, with the ```.pull-right``` or ```.pull-left``` classes. Or even the good old ```style="float: right;"``` and ```style="float: left;"```. Check out the examples below.


<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
        <p>
            <img src="http://placehold.it/120x70" class="responsive pull-right"/> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
            <img src="http://placehold.it/120x70" class="responsive pull-left"/> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>        
        <p>
            <img src="http://placehold.it/120x70" class="responsive" style="float:right;"/> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
            <img src="http://placehold.it/120x70" class="responsive" style="float:left;"/> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>          
        </div>
    </div>
  </div>
{% highlight html %}
<p>
    <img src="http://placehold.it/120x70" class="responsive pull-right"/> Lorem ipsum ...
</p>
<p>
    <img src="http://placehold.it/120x70" class="responsive pull-left"/> Lorem ipsum ...
</p>        
<p>
    <img src="http://placehold.it/120x70" class="responsive" style="float:right;"/> Lorem ipsum ...
</p>
<p>
    <img src="http://placehold.it/120x70" class="responsive" style="float:left;"/> Lorem ipsum ...
</p>     
{% endhighlight %}
</div>
