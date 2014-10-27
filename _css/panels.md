---
layout:     post
title:      Panels
source:     modules/_panels.scss
order:      1
component:  css
---


<p class="lead">Toggleable, customizable panel for wrapping content or display alerts. Made interactive with the <a href="/javascript/collapsable.html">Collapsable JavaScript plugin</a>.</p>


# Introduction
The panels primarily consists of 4 elements and CSS classes.

* ```.panel``` a wrapper for the panel.
* ```.panel-head``` a heading for the panel.
* ```.panel-body``` the body of the panel
* ```.panel-footer``` a footer section of the panel.

The panels have a set of themes that can be used:

* ```.panel-default```
* ```.panel-success```
* ```.panel-warning```
* ```.panel-danger```
* ```.panel-border```
* ```.panel-info```
* ```.panel-rounded```



# Panel

The ```.panel-head``` and  ```.panel-footer``` are optional parts of setting up a panel, but the ```.panel-body``` is required for correct spacing.


<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4>Heading</h4>
                </div>
                <div class="panel-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="...">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="panel-footer">
                    <button type="button" class="button">Cancel</button>
                    <button type="button" class="button-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
  </div>            
{% highlight html %}
<div class="panel panel-default">
    <div class="panel-heading">
        <h4>Heading</h4>
    </div>
    <div class="panel-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="...">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="panel-footer">
        <button type="button" class="button">Cancel</button>
        <button type="button" class="button-primary">Save</button>
    </div>
</div>
{% endhighlight %}
</div>  

# Themes

### Panel success
<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="panel panel-success">
                <div class="panel-heading">
                    <h4>Heading</h4>
                </div>
                <div class="panel-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="...">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="panel-footer">
                    <button type="button" class="button">Cancel</button>
                    <button type="button" class="button-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
  </div>            
{% highlight html %}
<div class="panel panel-success">
    <div class="panel-heading">
        <h4>Heading</h4>
    </div>
    <div class="panel-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="...">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="panel-footer">
        <button type="button" class="button">Cancel</button>
        <button type="button" class="button-primary">Save</button>
    </div>
</div>
{% endhighlight %}
</div>  



### Panel warning
<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="panel panel-warning">
                <div class="panel-heading">
                    <h4>Heading</h4>
                </div>
                <div class="panel-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="...">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="panel-footer">
                    <button type="button" class="button">Cancel</button>
                    <button type="button" class="button-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
  </div>            
{% highlight html %}
<div class="panel panel-warning">
    <div class="panel-heading">
        <h4>Heading</h4>
    </div>
    <div class="panel-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="...">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="panel-footer">
        <button type="button" class="button">Cancel</button>
        <button type="button" class="button-primary">Save</button>
    </div>
</div>
{% endhighlight %}
</div>  





### Panel danger
<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="panel panel-danger">
                <div class="panel-heading">
                    <h4>Heading</h4>
                </div>
                <div class="panel-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="...">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="panel-footer">
                    <button type="button" class="button">Cancel</button>
                    <button type="button" class="button-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
  </div>            
{% highlight html %}
<div class="panel panel-danger">
    <div class="panel-heading">
        <h4>Heading</h4>
    </div>
    <div class="panel-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="...">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="panel-footer">
        <button type="button" class="button">Cancel</button>
        <button type="button" class="button-primary">Save</button>
    </div>
</div>
{% endhighlight %}
</div>  




### Panel border
<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="panel panel-border">
                <div class="panel-heading">
                    <h4>Heading</h4>
                </div>
                <div class="panel-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="...">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="panel-footer">
                    <button type="button" class="button">Cancel</button>
                    <button type="button" class="button-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
  </div>            
{% highlight html %}
<div class="panel panel-border">
    <div class="panel-heading">
        <h4>Heading</h4>
    </div>
    <div class="panel-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="...">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="panel-footer">
        <button type="button" class="button">Cancel</button>
        <button type="button" class="button-primary">Save</button>
    </div>
</div>
{% endhighlight %}
</div>  


### Panel info
<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h4>Heading</h4>
                </div>
                <div class="panel-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="...">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="panel-footer">
                    <button type="button" class="button">Cancel</button>
                    <button type="button" class="button-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
  </div>            
{% highlight html %}
<div class="panel panel-info">
    <div class="panel-heading">
        <h4>Heading</h4>
    </div>
    <div class="panel-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="...">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="panel-footer">
        <button type="button" class="button">Cancel</button>
        <button type="button" class="button-primary">Save</button>
    </div>
</div>
{% endhighlight %}
</div>  



### Panel rounded

Rounded is a second modifier that can be applied to the element to get rounded borders. Here shown in conjunction with the ```.panel-success``` class. 

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="panel panel-success panel-rounded">
                <div class="panel-heading">
                    <h4>Heading</h4>
                </div>
                <div class="panel-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="...">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="panel-footer">
                    <button type="button" class="button">Cancel</button>
                    <button type="button" class="button-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
  </div>            
{% highlight html %}
<div class="panel panel-success panel-rounded">
    <div class="panel-heading">
        <h4>Heading</h4>
    </div>
    <div class="panel-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="...">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="panel-footer">
        <button type="button" class="button">Cancel</button>
        <button type="button" class="button-primary">Save</button>
    </div>
</div>
{% endhighlight %}
</div>  
