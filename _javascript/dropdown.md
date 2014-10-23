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
