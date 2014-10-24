---
layout:     post
title:      Dropdown
source:     modules/app.js
order:      1
component:  javascript
---


<p class="lead">Toggleable, contextual menu for displaying lists of links. The <a href="/component/dropdown.html">dropdown component</a> made interactive with JavaScript.</p>


# Usage examples.
It is easy to add Javascript functionality to a dropdown with the Javascript dropdown plugin included in the main Javascript file.


#Dropdown in a navbar

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <nav class="navbar">
              <div class="navbar-collapse in">
                <ul class="nav nav-default">
                  <li class="dropdown">
                    <span data-toggle="navigation" class="marker"><i class="fa fa-fw fa-caret-down"></i></span>
                    <a href="...">Home</a>
                    <div class="dropdown-menu">
                        <div class="dropdown-container">        
                            <ul>
                                <li><a href="...">Link 1</a></li>
                                <li><a href="...">Link 2</a></li>
                                <li><a href="...">Link 3</a></li>
                                <li><a href="...">Link 4</a></li>
                                <li><a href="...">Link 5</a></li>
                            </ul>
                        </div>
                    </div>                    
                   </li>
                  <li class="active"><a href="...">Profile</a></li>
                  <li><a href="...">Messages</a></li>
                </ul>
              </div>
            </nav>
        </div>
    </div>
  </div>            
{% highlight html %}
<nav class="navbar-collapse in">
<ul class="nav nav-default">
  <li class="dropdown">
    <span data-toggle="navigation" class="marker"><i class="fa fa-fw fa-caret-down"></i></span>
    <a href="...">Home</a>
    <div class="dropdown-menu">
        <div class="dropdown-container">        
            <ul>
                <li><a href="...">Link 1</a></li>
                <li><a href="...">Link 2</a></li>
                <li><a href="...">Link 3</a></li>
                <li><a href="...">Link 4</a></li>
                <li><a href="...">Link 5</a></li>
            </ul>
        </div>
    </div>                    
   </li>
  <li class="active"><a href="...">Profile</a></li>
  <li><a href="...">Messages</a></li>
</ul>
</nav>
{% endhighlight %}
</div>  

# Dropdown on a button
<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="dropdown pull-left">
                <button class="button" data-toggle="dropdown" style="float:left;">Dropdown</button>
                <div class="dropdown-menu">
                    <div class="dropdown-container">        
                        <ul>
                            <li><a href="...">Link 1</a></li>
                            <li><a href="...">Link 2</a></li>
                            <li><a href="...">Link 3</a></li>
                            <li><a href="...">Link 4</a></li>
                            <li><a href="...">Link 5</a></li>
                            <li><a href="...">Link 6</a></li>
                            <li><a href="...">Link 7</a></li>
                            <li><a href="...">Link 8</a></li>
                            <li><a href="...">Link 9</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>            
{% highlight html %}
<div class="dropdown">
    <button class="button" data-toggle="dropdown" style="float:left;">Dropdown</button>
    <div class="dropdown-menu">
        <div class="dropdown-container">        
            <ul>
                <li><a href="...">Link 1</a></li>
                <li><a href="...">Link 2</a></li>
                <li><a href="...">Link 3</a></li>
                <li><a href="...">Link 4</a></li>
                <li><a href="...">Link 5</a></li>
                <li><a href="...">Link 6</a></li>
                <li><a href="...">Link 7</a></li>
                <li><a href="...">Link 8</a></li>
                <li><a href="...">Link 9</a></li>
            </ul>
        </div>
    </div>
</div>
{% endhighlight %}
</div>


# Dropdown on a button with target
<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <button class="button" data-toggle="dropdown" data-target="#dropdown-example" style="float:left;">Dropdown</button>
            <div id="dropdown-example" class="dropdown" style="clear:both;">
                <div class="dropdown-menu">
                    <div class="dropdown-container">        
                        <ul>
                            <li><a href="...">Link 1</a></li>
                            <li><a href="...">Link 2</a></li>
                            <li><a href="...">Link 3</a></li>
                            <li><a href="...">Link 4</a></li>
                            <li><a href="...">Link 5</a></li>
                            <li><a href="...">Link 6</a></li>
                            <li><a href="...">Link 7</a></li>
                            <li><a href="...">Link 8</a></li>
                            <li><a href="...">Link 9</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>            
{% highlight html %}
<button class="button" data-toggle="dropdown" data-target="#dropdown-example">Dropdown</button>
<div id="dropdown-example" class="dropdown">
    <div class="dropdown-menu">
        <div class="dropdown-container">        
            <ul>
                <li><a href="...">Link 1</a></li>
                <li><a href="...">Link 2</a></li>
                <li><a href="...">Link 3</a></li>
                <li><a href="...">Link 4</a></li>
                <li><a href="...">Link 5</a></li>
                <li><a href="...">Link 6</a></li>
                <li><a href="...">Link 7</a></li>
                <li><a href="...">Link 8</a></li>
                <li><a href="...">Link 9</a></li>
            </ul>
        </div>
    </div>
</div>
{% endhighlight %}
</div>

# Usage
Using the JavaScript dropdown plugin it is possible to **click** toggle the dropdown menus by switching the visibility class ```.open```. To enable the toggle functionality TorqueUI uses the data-attribute ```data-toggle``` with the property ```data-toggle='dropdown'```.

To use the Javascript plugin add the ```data-toggle="dropdown"``` to a link or a button.
{% highlight html %}
<div class="dropdown">
    <button class="button" data-toggle="dropdown">Dropdown toggle</button>
    <div class="dropdown-menu">
        <div class="dropdown-container">        
            <ul> ... </ul>
        </div>
    </div>
</div>
{% endhighlight %}

It is also possible to place the trigger or toggle button outside the dropdow the dropdown by using the ```data-target``` data attribute. The property inside the target attribute is a CSS selector to the dropdown you want to toggle ```data-target="#mydropdown"```.

{% highlight html %}
<button class="button" data-toggle="dropdown" data-target="#dropdown-example">Dropdown toggle</button>
<div id="dropdown-example" class="dropdown">
    <div class="dropdown-menu">
        <div class="dropdown-container">        
            <ul> ... </ul>
        </div>
    </div>
</div>
{% endhighlight %}
