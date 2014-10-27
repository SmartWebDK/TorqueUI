---
layout:		post
title:		Badge
source:		modules/_badge.scss
order:      1
component:  css
---


<p class="lead">Badges are a simple way to mark icons or make inline text highlightning.</p>


# Introduction
The badge primarily is ```.badge``` class with different theming possibilities:

* ```.badge-clean```
* ```.badge-warning```
* ```.badge-info```
* ```.badge-danger```
* ```.badge-succes```

Checkout the code example below, that shows how text and icons can be interchanged.

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">        
<span class="badge">Badge</span>
<span class="badge badge-clean"><i class="fa fa-bolt"></i></span>
<span class="badge badge-warning"><i class="fa fa-warning"></i></span>
<span class="badge badge-info"><i class="fa fa-info-circle"></i></span>
<span class="badge badge-danger"><i class="fa fa-close"></i></span>
<span class="badge badge-succes"><i class="fa fa-check"></i></span>
<br><br>
<span class="badge">Badges</span>
<span class="badge badge-clean">work</span>
<span class="badge badge-warning">with</span>
<span class="badge badge-info">text</span>
<span class="badge badge-danger">and</span>
<span class="badge badge-succes"><i class="fa fa-check"></i> icons</span> 
            </div>
        </div>
    </div>
{% highlight html %}
<span class="badge">Badge</span>
<span class="badge badge-clean"><i class="fa fa-bolt"></i></span>
<span class="badge badge-warning"><i class="fa fa-warning"></i></span>
<span class="badge badge-info"><i class="fa fa-info-circle"></i></span>
<span class="badge badge-danger"><i class="fa fa-close"></i></span>
<span class="badge badge-succes"><i class="fa fa-check"></i></span>
<br><br>
<span class="badge">Badges</span>
<span class="badge badge-clean">work</span>
<span class="badge badge-warning">with</span>
<span class="badge badge-info">text</span>
<span class="badge badge-danger">and</span>
<span class="badge badge-succes"><i class="fa fa-check"></i> icons</span> 
{% endhighlight %}
</div>                


