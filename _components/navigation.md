---
layout:		post
title:		Navigation
source:		modules/_nav.scss
order:      1
component:  components
---


<p class="lead">The navigations are portable and placeable all around the page, and should primarily be seen ans secondary menus. </p>


# Introduction
The navigation compontents primarily consists the ```.nav``` class and some modifiers. The modifiers are:

* ```.nav-default```
* ```.nav-pills```
* ```.nav-tabs```
* ```.nav-menu```
* ```.nav-breadcrumbs```

Besides this, some of the navigation components have additional modifiers:

* ```.nav-justified``` (justifies the navigation links)
* ```.nav-stacked``` (stacks the navigation links)



# Default navigation

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
          <ul class="nav nav-default">
              <li class="active"><a href="#">Frontpage</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
        </div>
    </div>
  </div>
{% highlight html %}
<ul class="nav nav-default">
  <li class="active"><a href="...">Frontpage</a></li>
  <li><a href="...">Products</a></li>
  <li><a href="...">News</a></li>
  <li><a href="...">About us</a></li>
  <li><a href="...">Contact</a></li>
</ul>
{% endhighlight %}
</div>


# Pills

<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content clearfix">
        <ul class="nav nav-pills">
          <li class="active"><a href="#">Frontpage</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
      </div>
    </div>
  </div>
{% highlight html %}
<ul class="nav nav-pills">
  <li class="active"><a href="#">Frontpage</a></li>
  <li><a href="#">Products</a></li>
  <li><a href="#">News</a></li>
  <li><a href="#">About us</a></li>
  <li><a href="#">Contact</a></li>
</ul>
{% endhighlight %}
</div>

### Pills justified

<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content clearfix">
        <ul class="nav nav-pills nav-justified">
          <li class="active"><a href="#">Frontpage</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
      </div>
    </div>
  </div>
{% highlight html %}
<ul class="nav nav-pills nav-justified">
  <li class="active"><a href="#">Frontpage</a></li>
  <li><a href="#">Products</a></li>
  <li><a href="#">News</a></li>
  <li><a href="#">About us</a></li>
  <li><a href="#">Contact</a></li>
</ul>
{% endhighlight %}
</div>

### Pills stacked

<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content clearfix">
        <ul class="nav nav-pills nav-stacked">
          <li class="active"><a href="#">Frontpage</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
      </div>
    </div>
  </div>
{% highlight html %}
<ul class="nav nav-pills nav-stacked">
  <li class="active"><a href="#">Frontpage</a></li>
  <li><a href="#">Products</a></li>
  <li><a href="#">News</a></li>
  <li><a href="#">About us</a></li>
  <li><a href="#">Contact</a></li>
</ul>
{% endhighlight %}
</div>





# Tabs
<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content clearfix">
        <ul class="nav nav-tabs">
          <li class="active"><a href="#tabNav1" data-toggle="content">Frontpage</a></li>
          <li><a href="#tabNav2" data-toggle="content">Products</a></li>
          <li><a href="#tabNav3" data-toggle="content">News</a></li>
          <li><a href="#tabNav4" data-toggle="content">About us</a></li>
          <li><a href="#tabNav5" data-toggle="content">Contact</a></li>
        </ul>
        <div class="toggle-content t-panel-clean">
          <div id="tabNav1" class="pane active">
            Pane 1
          </div>
          <div id="tabNav2" class="pane">
            Pane 2
          </div>
          <div id="tabNav3" class="pane">
            Pane 3
          </div>
          <div id="tabNav4" class="pane">
            Pane 4
          </div>
          <div id="tabNav5" class="pane">
            Pane 5
          </div>
        </div>
      </div>
    </div>
  </div>
{% highlight html %}
<ul class="nav nav-tabs">
  <li class="active"><a href="#tabNav1" data-toggle="content">Frontpage</a></li>
  <li><a href="#tabNav2" data-toggle="content">Products</a></li>
  <li><a href="#tabNav3" data-toggle="content">News</a></li>
  <li><a href="#tabNav4" data-toggle="content">About us</a></li>
  <li><a href="#tabNav5" data-toggle="content">Contact</a></li>
</ul>
<div class="toggle-content t-panel-clean">
  <div id="tabNav1" class="pane active"> Pane 1 </div>
  <div id="tabNav2" class="pane"> Pane 2 </div>
  <div id="tabNav3" class="pane"> Pane 3 </div>
  <div id="tabNav4" class="pane"> Pane 4 </div>
  <div id="tabNav5" class="pane"> Pane 5 </div>
</div>
{% endhighlight %}
</div>


## Tabs justified
<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content clearfix">
        <ul class="nav nav-tabs nav-justified">
          <li class="active"><a href="#tabNav1" data-toggle="content">Frontpage</a></li>
          <li><a href="#tabNav2" data-toggle="content">Products</a></li>
          <li><a href="#tabNav3" data-toggle="content">News</a></li>
          <li><a href="#tabNav4" data-toggle="content">About us</a></li>
          <li><a href="#tabNav5" data-toggle="content">Contact</a></li>
        </ul>
        <div class="toggle-content t-panel-clean">
          <div id="tabNav1" class="pane active">
            Pane 1
          </div>
          <div id="tabNav2" class="pane">
            Pane 2
          </div>
          <div id="tabNav3" class="pane">
            Pane 3
          </div>
          <div id="tabNav4" class="pane">
            Pane 4
          </div>
          <div id="tabNav5" class="pane">
            Pane 5
          </div>
        </div>
      </div>
    </div>
  </div>
{% highlight html %}
<ul class="nav nav-tabs nav-justified">
  <li class="active"><a href="#tabNav1" data-toggle="content">Frontpage</a></li>
  <li><a href="#tabNav2" data-toggle="content">Products</a></li>
  <li><a href="#tabNav3" data-toggle="content">News</a></li>
  <li><a href="#tabNav4" data-toggle="content">About us</a></li>
  <li><a href="#tabNav5" data-toggle="content">Contact</a></li>
</ul>
<div class="toggle-content t-panel-clean">
  <div id="tabNav1" class="pane active"> Pane 1 </div>
  <div id="tabNav2" class="pane"> Pane 2 </div>
  <div id="tabNav3" class="pane"> Pane 3 </div>
  <div id="tabNav4" class="pane"> Pane 4 </div>
  <div id="tabNav5" class="pane"> Pane 5 </div>
</div>
{% endhighlight %}
</div>



## Tabs justified
<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content clearfix">
        <ul class="nav nav-tabs nav-stacked">
          <li class="active"><a href="#tabNav1" data-toggle="content">Frontpage</a></li>
          <li><a href="#tabNav2" data-toggle="content">Products</a></li>
          <li><a href="#tabNav3" data-toggle="content">News</a></li>
          <li><a href="#tabNav4" data-toggle="content">About us</a></li>
          <li><a href="#tabNav5" data-toggle="content">Contact</a></li>
        </ul>
        <div class="toggle-content t-panel-clean">
          <div id="tabNav1" class="pane active">
            Pane 1
          </div>
          <div id="tabNav2" class="pane">
            Pane 2
          </div>
          <div id="tabNav3" class="pane">
            Pane 3
          </div>
          <div id="tabNav4" class="pane">
            Pane 4
          </div>
          <div id="tabNav5" class="pane">
            Pane 5
          </div>
        </div>
      </div>
    </div>
  </div>
{% highlight html %}
<ul class="nav nav-tabs nav-stacked">
  <li class="active"><a href="#tabNav1" data-toggle="content">Frontpage</a></li>
  <li><a href="#tabNav2" data-toggle="content">Products</a></li>
  <li><a href="#tabNav3" data-toggle="content">News</a></li>
  <li><a href="#tabNav4" data-toggle="content">About us</a></li>
  <li><a href="#tabNav5" data-toggle="content">Contact</a></li>
</ul>
<div class="toggle-content t-panel-clean">
  <div id="tabNav1" class="pane active"> Pane 1 </div>
  <div id="tabNav2" class="pane"> Pane 2 </div>
  <div id="tabNav3" class="pane"> Pane 3 </div>
  <div id="tabNav4" class="pane"> Pane 4 </div>
  <div id="tabNav5" class="pane"> Pane 5 </div>
</div>
{% endhighlight %}
</div>

# Menu
<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content clearfix">
      <ul class="nav nav-menu">
          <li class="active">
            <a href="#">Frontpage</a>
            <ul>
              <li><a href="#">Sub category</a></li>
              <li><a href="#">Sub category</a></li>
              <li><a href="#">Sub category</a></li>
            </ul>
          </li>
          <li><a href="#">Products</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
      </div>
    </div>
  </div>

{% highlight html %}
<ul class="nav nav-menu">
  <li class="active">
    <a href="#">Frontpage</a>
    <ul>
      <li><a href="#">Sub category</a></li>
      <li><a href="#">Sub category</a></li>
      <li><a href="#">Sub category</a></li>
    </ul>
  </li>
  <li><a href="#">Products</a></li>
  <li><a href="#">News</a></li>
  <li><a href="#">About us</a></li>
  <li><a href="#">Contact</a></li>
</ul>
{% endhighlight %}
</div>



# Breadcrumbs

<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content clearfix">
        <ul class="nav nav-breadcrumbs">
          <li class="active"><a href="#">Frontpage</a></li>
          <li class="seperator">/</li>
          <li><a href="#">Products</a></li>
          <li class="seperator">/</li>
          <li><a href="#">News</a></li>
          <li class="seperator">/</li>
          <li><a href="#">About us</a></li>
          <li class="seperator">/</li>
          <li><a href="#">Contact</a></li>
      </ul>
      </div>
    </div>
  </div>
{% highlight html %}
<ul class="nav nav-breadcrumbs">
  <li class="active"><a href="#">Frontpage</a></li>
  <li class="seperator">/</li>
  <li><a href="#">Products</a></li>
  <li class="seperator">/</li>
  <li><a href="#">News</a></li>
  <li class="seperator">/</li>
  <li><a href="#">About us</a></li>
  <li class="seperator">/</li>
  <li><a href="#">Contact</a></li>
</ul>
{% endhighlight %}
</div>
