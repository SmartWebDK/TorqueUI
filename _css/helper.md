---
layout:		post
title:		Helper classes
source:		modules/_images.scss
order:      1
component:  css
---

<p class="lead">Throughout the framework we have alot of different helpers and utility CSS classes for which the task is to provide solutions for repetative task or commen issues in web development.</p>

# Visibility helpers
These to classes can decide the visibility of the element. The classes are:

* ```.is-hidden``` hide from screenreaders and browsers.
* ```.is-visuallyhidden``` hide only visually, but have it available for screenreaders.
* ```.is-visuallyhidden.focusable``` extend ```.visuallyhidden``` to allow the element to be focusable with keyboard.
* ```.shown``` show element.
* ```.is-invisible``` element is invisble, but still takes up place on the page.
* ```.is-collapsed``` hides element, is used in conjunction with ```.dropdown``` class.

We have also build some responsive versions. The CSS classes are ```.is-visible-x``` and ```.is-hidden-x```. The example and the code below shows how they work. Resize your screen, and you will see the visible element indicating the current breakpoint.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="row">
                <div class="col-s-4 col-m-3 col-l-3 col-xl-6 trailing-mobile">
                    <div class="badge badge-warning is-hidden-s">.is-hidden-s</div>
                    <div class="badge badge-succes is-visible-s">.is-visible-s</div>
                </div>
                <div class="col-s-4 col-m-3 col-l-3 col-xl-6 trailing-mobile">
                    <div class="badge badge-warning is-hidden-m">.is-hidden-m</div>
                    <div class="badge badge-succes is-visible-m">.is-visible-m</div>
                </div>
                <div class="col-s-4 col-m-3 col-l-3 col-xl-6 trailing-mobile">
                    <div class="badge badge-warning is-hidden-l">.is-hidden-l</div>
                    <div class="badge badge-succes is-visible-l">.is-visible-l</div>
                </div>
                <div class="col-s-4 col-m-3 col-l-3 col-xl-6 trailing-mobile">
                    <div class="badge badge-warning is-hidden-xl">.is-hidden-xl</div>
                    <div class="badge badge-succes is-visible-xl">.is-visible-xl</div>
                </div>
            </div>
        </div>
    </div>
  </div>
{% highlight html %}
<div class="row">
    <div class="col-s-4 col-m-3 col-l-3 col-xl-6">
        <div class="badge badge-warning is-hidden-s">.is-hidden-s</div>
        <div class="badge badge-succes is-visible-s">.is-visible-s</div>
    </div>
    <div class="col-s-4 col-m-3 col-l-3 col-xl-6">
        <div class="badge badge-warning is-hidden-m">.is-hidden-m</div>
        <div class="badge badge-succes is-visible-m">.is-visible-m</div>
    </div>
    <div class="col-s-4 col-m-3 col-l-3 col-xl-6">
        <div class="badge badge-warning is-hidden-l">.is-hidden-l</div>
        <div class="badge badge-succes is-visible-l">.is-visible-l</div>
    </div>
    <div class="col-s-4 col-m-3 col-l-3 col-xl-6">
        <div class="badge badge-warning is-hidden-xl">.is-hidden-xl</div>
        <div class="badge badge-succes is-visible-xl">.is-visible-xl</div>
    </div>
</div>
{% endhighlight %}
</div>

# Box model helpers
The responsive helpers also include a set of layout helpers, to set a element at a certain display type at a certain breakpoint. The classes are:

* ```.is-block``` set element to ```display: block``` on all breakpoint.
* ```.is-block-x``` set element to ```display: block``` on x breakpoint.
* ```.is-inline-block``` set element to ```display: inline-block``` on all breakpoint.
* ```.is-inline-block-x``` set element to ```display: inline-block``` on x breakpoint.

{% highlight html %}
<div class="is-block"> ... </div>
<div class="is-block-s"> ... </div>
<div class="is-block-m"> ... </div>
<div class="is-block-l"> ... </div>
<div class="is-block-xl"> ... </div>
<div class="is-inline-block"> ... </div>
<div class="is-inline-block-s"> ... </div>
<div class="is-inline-block-m"> ... </div>
<div class="is-inline-block-l"> ... </div>
<div class="is-inline-block-xl"> ... </div>
{% endhighlight %}


# Clearfix helper
The clearfix helper is a great tool when you experience issues with floated elements or the clearing of floated elements. The example below shows how the ```.clearfix``` class would be utilized.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="row">
                <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db-mobile">        
                    <div class="wrap" style="background-color: #f3f3f3;">
                        <p>Wrapping element without <code>.clearfix</code></p>
                        <div class="badge badge-danger pull-left" style="width: 80px; height: 80px;">floated<br>element</div>
                        <div class="badge badge-succes pull-left" style="width: 80px; height: 80px;">floated<br>element</div>                        
                    </div>
                </div>
                <div class="col-s-4 col-m-6 col-l-6 col-xl-12">        
                    <div class="wrap clearfix" style="background-color: #f3f3f3;">
                        <p>Wrapping element with <code>.clearfix</code></p>
                        <div class="badge badge-danger pull-left" style="width: 80px; height: 80px;">floated<br>element</div>
                        <div class="badge badge-succes pull-left" style="width: 80px; height: 80px;">floated<br>element</div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
  </div>
{% highlight html %}
<div class="row">
    <div class="wrap">
        <!-- Wrapping element without .clearfix -->
        <div class="badge badge-danger pull-left">floated element</div>
        <div class="badge badge-succes pull-left">floated element</div>                        
    </div>
    <div class="wrap clearfix">
        <!-- Wrapping element with .clearfix -->
        <div class="badge badge-danger pull-left">floated element</div>
        <div class="badge badge-succes pull-left">floated element</div>
    </div>
</div>
{% endhighlight %}
</div>


# Transition helper
```.transition``` is a commen class that can be used to add transition to a element, try to hover the example below.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <a href="#" class="transition">Transition example</a> <a href="#" >Normal example</a>
        </div>
    </div>
  </div>
{% highlight html %}
<div class="content clearfix">
    <a href="#" class="transition">Transition example</a> <a href="#" >Normal example</a>
</div>
{% endhighlight %}
</div>



# Layout helpers
Layout helpers are as set of small helpers, general shortcuts to CSS properties, that can be used in the markup in the standard way. But are also great to use via Javascript as toggelers.

### Center-block
```.is-center-block``` is a simple class to help center a block level element.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="is-center-block badge badge-warning" style="width: 300px;">.is-center-block</div>
        </div>
    </div>
  </div>
{% highlight html %}
<div class="content clearfix">
    <div class="is-center-block badge badge-warning" style="width: 300px;">.is-center-block</div>
</div>
{% endhighlight %}
</div>

### Float helpers

The float helper classes are ```.pull-right``` and ```.pull-left``` and are basicly shorthand classes that are there for convinience and to ease development. They classes work great together with the grid. And can be used to pull columns left or right, when needed.


<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="pull-left badge badge-warning" style="width: 80px;">.pull-left</div>
            <div class="pull-right badge badge-warning" style="width: 80px;">.pull-right</div>
        </div>
    </div>
  </div>
{% highlight html %}
<div class="content clearfix">
    <div class="pull-left badge badge-warning" style="width: 80px;">.pull-left</div>
    <div class="pull-right badge badge-warning" style="width: 80px;">.pull-right</div>
</div>
{% endhighlight %}
</div>


### Fixed position helper
```.is-fixed``` is a shorthand class to ```position: fixed``` a element.

{% highlight html %}
<div class="ios-menu is-fixed"> ... </div>
{% endhighlight %}


### Border-box helper

We use this class or the proberties it entails all the way thru the framework. The class sets the CSS property ```box-sizing: border-box```, if you don't know this property we suggest you visit the well written article by __Paul Irish__: [* { Box-sizing: Border-box } FTW](http://www.paulirish.com/2012/box-sizing-border-box-ftw/).

{% highlight html %}
<div class="border-box"> ... </div>
{% endhighlight %}


### Reset helper

A simple class to reset a elements padding and margin.

{% highlight html %}
<div class="reset"> ... </div>
{% endhighlight %}


# UI helpers
UI helpers are ment to be used mainly on interactable elments, like forms and buttons. But they can be used everywhere.

## Disabled helper
```.is-disabled``` is a general class we use to on elements to show that they are disabled, and there for not able to be interacted with.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="row">
                <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
                        <button class="button">Normal .button</button> 
                        <button class="button is-disabled">Disabled .button</button> <br>
                </div>
                <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
                        <button class="button-primary">Normal .button-primary</button>
                        <button class="button-primary is-disabled">Disabled .button-primary</button> <br>
                </div>
                <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
                        <input type="text" class="form-input" placeholder="Normal input" style="width:150px;">
                        <input type="text" class="form-input is-disabled" placeholder="Disabled input" style="width:150px;"> <br>
                </div>
                <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
                        <select class="form-input form-select" style="width:150px;" name="">
                            <option value="">Normal select</option>
                        </select>
                        <select class="form-input form-select is-disabled" style="width:150px;" name="">
                            <option value="">Disabled select</option>
                        </select>            
                </div>
            </div>
        </div>
    </div>
  </div>
{% highlight html %}
<div class="row">
    <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
            <button class="button">Normal .button</button> 
            <button class="button is-disabled">Disabled .button</button> <br>
    </div>
    <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
            <button class="button-primary">Normal .button-primary</button>
            <button class="button-primary is-disabled">Disabled .button-primary</button> <br>
    </div>
    <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
            <input type="text" class="form-input" placeholder="Normal input" style="width:150px;">
            <input type="text" class="form-input is-disabled" placeholder="Disabled input" style="width:150px;"> <br>
    </div>
    <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
            <select class="form-input form-select" style="width:150px;" name="">
                <option value="">Normal select</option>
            </select>
            <select class="form-input form-select is-disabled" style="width:150px;" name="">
                <option value="">Disabled select</option>
            </select>            
    </div>
</div>
{% endhighlight %}
</div>


## Unclickable helper
```.is-unclickable``` is a general class we use to on elements to make them unclickable, and there for not able to be interacted with.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="row">
                <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
                        <button class="button">Normal .button</button> 
                        <button class="button is-unclickable">Unclickable .button</button> <br>
                </div>
                <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
                        <button class="button-primary">Normal .button-primary</button>
                        <button class="button-primary is-unclickable">Unclickable .button-primary</button> <br>
                </div>
                <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
                        <input type="text" class="form-input" placeholder="Normal input" style="width:150px;">
                        <input type="text" class="form-input is-unclickable" placeholder="unclickable input" style="width:150px;"> <br>
                </div>
                <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
                        <select class="form-input form-select" style="width:150px;" name="">
                            <option value="">Normal select</option>
                        </select>
                        <select class="form-input form-select is-unclickable" style="width:150px;" name="">
                            <option value="">Unclickable select</option>
                        </select>            
                </div>
            </div>
        </div>
    </div>
  </div>
{% highlight html %}
<div class="row">
    <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
            <button class="button">Normal .button</button> 
            <button class="button is-unclickable">Unclickable .button</button> <br>
    </div>
    <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
            <button class="button-primary">Normal .button-primary</button>
            <button class="button-primary is-unclickable">Unclickable .button-primary</button> <br>
    </div>
    <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
            <input type="text" class="form-input" placeholder="Normal input" style="width:150px;">
            <input type="text" class="form-input is-unclickable" placeholder="Unclickable input" style="width:150px;"> <br>
    </div>
    <div class="col-s-4 col-m-6 col-l-6 col-xl-12 trailing-db">        
            <select class="form-input form-select" style="width:150px;" name="">
                <option value="">Normal select</option>
            </select>
            <select class="form-input form-select is-unclickable" style="width:150px;" name="">
                <option value="">Unclickable select</option>
            </select>            
    </div>
</div>
{% endhighlight %}
</div>



## Unselectable helper
```.is-unselectable``` is a general class we use to on elements to make them unselectable.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam consequuntur nostrum commodi reprehenderit, assumenda ipsum, illo quo quod delectus porro est quis, rem harum facere nam incidunt. Impedit, sint, in!</p>
            <p class="is-unselectable">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique repellat illum reprehenderit aspernatur quod consectetur quibusdam soluta numquam, consequatur esse. Eos molestias, reiciendis recusandae. Quia quam, eaque voluptas tempore inventore.</p>
        </div>
    </div>
  </div>
{% highlight html %}
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam consequuntur nostrum commodi reprehenderit, assumenda ipsum, illo quo quod delectus porro est quis, rem harum facere nam incidunt. Impedit, sint, in!</p>
<p class="is-unselectable">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique repellat illum reprehenderit aspernatur quod consectetur quibusdam soluta numquam, consequatur esse. Eos molestias, reiciendis recusandae. Quia quam, eaque voluptas tempore inventore.</p>
{% endhighlight %}
</div>


# Text helpers
We have provide some simple text helpers, in case you have some text that need to be adjusted. The helpers are listed below. 


## Text left
```.text-left``` set text vertical alignment to left.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <p class="text-left">This text is set to be left</p>
        </div>
    </div>
  </div>
{% highlight html %}
<p class="text-left">This text is set to be left.</p>
{% endhighlight %}
</div>



## Text right
```.text-right``` set text vertical alignment to right.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <p class="text-right">This text is set to be right.</p>
        </div>
    </div>
  </div>
{% highlight html %}
<p class="text-right">This text is set to be right.</p>
{% endhighlight %}
</div>

## Text center
```.text-center``` centers the text inside the element.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <p class="text-center">This text is centered.</p>
        </div>
    </div>
  </div>
{% highlight html %}
<p class="text-center">This text is centered.</p>
{% endhighlight %}
</div>

## Text justify
```.text-justify``` centers the text inside the element.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, ducimus porro consectetur. Accusantium velit quis vitae. Asperiores, commodi minima illum sequi debitis ut sit suscipit dicta, repellendus, sed quae incidunt?</p>
        </div>
    </div>
  </div>
{% highlight html %}
<p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, ducimus porro consectetur. Accusantium velit quis vitae. Asperiores, commodi minima illum sequi debitis ut sit suscipit dicta, repellendus, sed quae incidunt?</p>
{% endhighlight %}
</div>

