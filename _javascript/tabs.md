---
layout:     post
title:      Tabs
source:     modules/app.js
order:      1
component:  javascript
---


<p class="lead">Add a simple and easy tab list to you website with TorqueUI tabs.</p>

# Usage

The plugin is build around 2 data attributes:

* ```data-toggle="content"``` the initiator.
* ```data-target``` the toggle target for tab.

Besides that, the you can use any navigation from the [navigation compontent](/components/navigation.html). In our example we will use tabs: ```class="nav nav-tabs"```. Together with the navigation you will need a ```.toggle-content``` element wrapper for your tabbed content, which you need to place inside a ```.pane```. 

The ```.pane``` and ```.toggle-content``` are there for presentation. Each pane will need a unique tab identifier in form of a class or a id. We recommend ids. Since they are by nature unique. With the ```.active``` class on the panes you can tell with pane you want to be the active one.


# Usage examples

It is easy to add Javascript functionality to a list of tabs with the Javascript tabs plugin included in the main Javascript file.

To trigger the tabbed content you can use either a ```data-target``` attribute or a href with the id. We have shown both examples below.

# Simple example

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <ul class="nav nav-tabs">
                <li class=""><a data-toggle="content" href="#tabs-pane1">Home</a></li>
                <li class=""><a data-toggle="content" data-target="#tabs-pane2">Profile</a></li>
                <li class="active"><a data-toggle="content" href="#tabs-pane3">Messages</a></li>
            </ul>

            <div class="toggle-content">
                <div class="pane" id="tabs-pane1">
                    <p>Pane 1</p>
                </div>
                <div class="pane" id="tabs-pane2">
                    <p>Pane2</p>
                </div>
                <div class="pane active" id="tabs-pane3">
                   <p>Pane3</p>
                </div>
            </div>
        </div>
    </div>
  </div>            
{% highlight html %}
<ul class="nav nav-tabs">
    <li class=""><a data-toggle="content" href="#tabs-pane1">Home</a></li>
    <li class=""><a data-toggle="content" data-target="#tabs-pane2">Profile</a></li>
    <li class="active"><a data-toggle="content" href="#tabs-pane3">Messages</a></li>
</ul>

<div class="toggle-content">
    <div class="pane" id="tabs-pane1">
        <p>Pane 1</p>
    </div>
    <div class="pane" id="tabs-pane2">
        <p>Pane 2</p>
    </div>
    <div class="pane active" id="tabs-pane3">
        <p>Pane 3</p>
    </div>
</div>

{% endhighlight %}
</div>  


# Trigger tab from button

It is possible to trigger tabs from all the place in the document. Your button will just need to have the ```data-toggle="content"``` data attribute. And besides that, it will need a target, either in form of the ```data-target``` attribute or the ```href``` of the element (if it is a link).

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">

            <button class="button" data-toggle="content" data-target="#tabs-pane5">Show pane 2</button>
            <a class="button" data-toggle="content" href="#tabs-pane6">Show pane 3</a>

            <hr>

            <ul class="nav nav-tabs">
                <li class=""><a data-toggle="content" href="#tabs-pane4">Home</a></li>
                <li class=""><a data-toggle="content" data-target="#tabs-pane5">Profile</a></li>
                <li class="active"><a data-toggle="content" href="#tabs-pane6">Messages</a></li>
            </ul>

            <div class="toggle-content">
                <div class="pane" id="tabs-pane4">
                    <p>Pane 1</p>
                </div>
                <div class="pane" id="tabs-pane5">
                    <p>Pane2</p>
                </div>
                <div class="pane active" id="tabs-pane6">
                   <p>Pane 3</p>
                </div>
            </div>
        </div>
    </div>
  </div>            
{% highlight html %}
<button class="button" data-toggle="content" data-target="#tabs-pane2">Show pane 2</button>
<a class="button" data-toggle="content" data-target="#tabs-pane3">Show pane 3</button>

<hr>

<ul class="nav nav-tabs">
    <li class=""><a data-toggle="content" href="#tabs-pane1">Home</a></li>
    <li class=""><a data-toggle="content" data-target="#tabs-pane2">Profile</a></li>
    <li class="active"><a data-toggle="content" href="#tabs-pane3">Messages</a></li>
</ul>

<div class="toggle-content">
    <div class="pane" id="tabs-pane1">
        <p>Pane 1</p>
    </div>
    <div class="pane" id="tabs-pane2">
        <p>Pane2</p>
    </div>
    <div class="pane active" id="tabs-pane3">
       <p>Pane 3</p>
    </div>
</div>

{% endhighlight %}
</div>  
