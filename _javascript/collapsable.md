---
layout:     post
title:      Collapsable panels 
source:     modules/app.js
order:      1
component:  javascript
---


<p class="lead">The collapsable Javascript plugin is the functional driving force behind panels in TorqueUI.</p>

# Usage 

Using the collapsable Javascript plugin it is possible to **click** toggle elements. The plugin is build around 4 data attributes:

* ```data-toggle="collapse"``` the initiator.
* ```data-group``` the toggle group for targets.
* ```data-target``` the toggle target for button.
* ```data-class``` the class to toggle (fallsback to ```.is-collapsed```).

Checkout the usage examples below.


# Usage examples.

It is easy to add Javascript functionality to a panel with the Javascript collapsable plugin included in the main Javascript file.


# Panel example

Bellow is a simple example where the visibility of the ```.panel-body``` and ```.panel-footer``` is toggled from the header.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="panel panel-border">
                <div class="panel-heading">
                    <button type="submit" class="button xsmall pull-right" data-toggle="collapse" data-target="panel-1"><i class="fa fa-circle"></i></button>
                    <span class="h4">Log ind</span>
                </div>
                <div class="panel-body" data-group="panel-1">
                    <label>Brugernavn:</label>
                    <fieldset class="form-group">
                        <input type="text" class="form-input">
                    </fieldset>
                    <label>Adgangskode</label>
                    <fieldset class="form-group">
                        <input type="text" class="form-input">
                        <a href="...">Glemt adgangskode</a>
                    </fieldset>
                    <fieldset class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><input id="lorem-short" type="checkbox"></span>
                            <label for="lorem-short" class="form-label input-group-main">Husk log ind</label>
                        </div>
                    </fieldset>
                </div>
                <div class="panel-footer" data-group="panel-1">
                    <button type="button" class="button-primary">Log ind</button>
                </div>
            </div>
        </div>
    </div>
  </div>            
{% highlight html %}
<div class="panel panel-border">
    <div class="panel-heading">
        <button type="submit" class="button xsmall pull-right" data-toggle="collapse" data-target="panel"><i class="fa fa-circle"></i></button>
        <span class="h4">Log ind</span>
    </div>
    <div class="panel-body" data-group="panel">
        <label>Brugernavn:</label>
        <fieldset class="form-group">
            <input type="text" class="form-input">
        </fieldset>
        <label>Adgangskode</label>
        <fieldset class="form-group">
            <input type="text" class="form-input">
            <a href="...">Glemt adgangskode</a>
        </fieldset>
        <fieldset class="form-group">
            <div class="input-group">
                <span class="input-group-addon"><input id="lorem-short" type="checkbox"></span>
                <label for="lorem-short" class="form-label input-group-main">Husk log ind</label>
            </div>
        </fieldset>
    </div>
    <div class="panel-footer" data-group="panel">
        <button type="button" class="button-primary">Log ind</button>
    </div>
</div>
{% endhighlight %}
</div>  


# Toggle panels with buttons

It is possible to toggle the content outside the panel. The collapsable function lootes at the ```data-target``` and the ```data-group``` attributes and toggles corrosponding elements with the same id. The id needs to be unique from group to group. But you can have a button toggle multiple elements as long as they have the same ```data-group```. It also works the other way around. With multiple buttons toggleing the same group

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <button type="submit" class="button" data-toggle="collapse" data-target="panel-2">Toggle panel 1</button>
            <button type="submit" class="button" data-toggle="collapse" data-target="panel-3">Toggle panel 2</button>
            <button type="submit" class="button" data-toggle="collapse" data-target="panel-2">Toggle panel 1 again</button>
            <hr>
            <div class="panel panel-border"  data-group="panel-2">
                <div class="panel-body">
                    <p>Toggleable panel <strong>1</strong></p>
                </div>
            </div>
            <hr>
             <div class="panel panel-border"  data-group="panel-3">
                <div class="panel-body">
                    <p>Toggleable panel <strong>2</strong></p>
                </div>
            </div>           
        </div>
    </div>
  </div>            
{% highlight html %}
<button type="submit" class="button" data-toggle="collapse" data-target="group-1">Toggle panel 1</button>
<button type="submit" class="button" data-toggle="collapse" data-target="group-2">Toggle panel 2</button>
<button type="submit" class="button" data-toggle="collapse" data-target="group-1">Toggle panel 1 again</button>
<hr>
<div class="panel panel-border"  data-group="group-1">
    <div class="panel-body">
        <p>Toggleable panel <strong>1</strong></p>
    </div>
</div>
<hr>
 <div class="panel panel-border"  data-group="group-2">
    <div class="panel-body">
        <p>Toggleable panel <strong>2</strong></p>
    </div>
</div>           
{% endhighlight %}
</div>  


# Panel button icons

When the panel is toggled, the Javascript plugin will check if it is started by a button. And it will toggle the ```.is-closed``` class on the button. This is also used to make it able to toggle the fontawesome icon inside the element. The element with class ```.icon-open``` will be shown when the element is collapsed. And the class ```.icon-close``` will be show when the panel is open.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <button type="submit" class="button" data-toggle="collapse" data-target="panel-4"><i class="fa fa-circle icon-close"></i><i class="fa fa-circle-o icon-open"></i></button>
            <hr>
            <div class="panel panel-border"  data-group="panel-4">
                <div class="panel-body">
                    <p>Toggleable panel <strong>1</strong></p>
                </div>
            </div>
            <hr>
            <div class="panel panel-border">
                <div class="panel-heading">
                    <button type="submit" class="button pull-right" data-toggle="collapse" data-target="panel-5"><i class="fa fa-angle-double-up icon-close"></i><i class="fa fa-angle-double-down icon-open"></i></button>
                    <span class="h1">Header for example</span>
                </div>
                <div class="panel-body" data-group="panel-5">
                <p>Toggleable panel 2</p>
                </div>
                <div class="panel-footer" data-group="panel-5">
                    Footer for example
                </div>
            </div>          
        </div>
    </div>
  </div>            
{% highlight html %}
<button type="submit" class="button" data-toggle="collapse" data-target="group-1"><i class="fa fa-circle icon-close"></i><i class="fa fa-circle-o icon-open"></i></button>
<hr>
<div class="panel panel-border"  data-group="group-1">
    <div class="panel-body">
        <p>Toggleable panel <strong>1</strong></p>
    </div>
</div>
<hr>
<div class="panel panel-border">
    <div class="panel-heading">
        <button type="submit" class="button pull-right" data-toggle="collapse" data-target="panel-5"><i class="fa fa-angle-double-up icon-close"></i><i class="fa fa-angle-double-down icon-open"></i></button>
        <span class="h1">Header for example</span>
    </div>
    <div class="panel-body" data-group="group-2">
    <p>Toggleable panel 2</p>
    </div>
    <div class="panel-footer" data-group="group-2">
        Footer for example
    </div>
</div> 
{% endhighlight %}
</div>  
