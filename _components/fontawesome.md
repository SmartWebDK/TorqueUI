---
layout:     post
title:      Glyphicons
source:     modules/_button.scss
order:      0
component:  components
---


<p class="lead">Glyphicons are a great, lightweight and flexible way to add graphics and icons to a website.</p>

In TorqueUI, we use the excellent [Font Awesome](http://fontawesome.io) icon font. To see all the icons, checkout Font Awesomes website, where are the icons are [listed](http://fontawesome.io/icons/). 

Font Awesome is a icon font, in other words it is a font that is setup of icons. If you remember Dingbats, Font Awesome is alot like that, just more awesome. The advantage of icons that are fonts, is that they can scale really well and they can be colored really easily using only CSS. No need to load 10 different images, because you need a icon in different colors or sizes. Check out the examples below to see how to use the glyphicons.


# Inline example
The example below shows a simple glyph inside text.

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content">
                <p>A simple icon <i class="fa fa-area-chart"></i> inside text</p>
            </div>
        </div>
    </div>
{% highlight html %}
<p>A simple icon <i class="fa fa-area-chart"></i> inside text</p>
{% endhighlight %}
</div>

# Sizing icons
Examples of icons i different sizes.

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content">
                <p><i class="fa fa-camera-retro fa-lg"></i> fa-camera-retro</p>
                <p><i class="fa fa-fighter-jet fa-2x"></i> fa-fighter-jet</p>
                <p><i class="fa fa-shopping-cart fa-3x"></i> fa-shopping-cart</p>
                <p><i class="fa fa-phone fa-4x"></i> fa-phone</p>
                <p><i class="fa fa-suitcase fa-5x"></i> fa-suitcase</p>
            </div>
        </div>
    </div>
{% highlight html %}
<p><i class="fa fa-camera-retro fa-lg"></i> fa-camera-retro</p>
<p><i class="fa fa-fighter-jet fa-2x"></i> fa-fighter-jet</p>
<p><i class="fa fa-shopping-cart fa-3x"></i> fa-shopping-cart</p>
<p><i class="fa fa-phone fa-4x"></i> fa-phone</p>
<p><i class="fa fa-suitcase fa-5x"></i> fa-suitcase</p>
{% endhighlight %}
</div>                

# Fixed width icons
It can sometimes be a problem to align icons if they are not the same size, this can be done with the ```.fa-fw``` class, see the exampel below.

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content">
    <ul class="nav nav-pills nav-stacked">
      <li class="active"><a href="#"><i class="fa fa-home fa-fw"></i> Home</a></li>
      <li><a href="#"><i class="fa fa-book fa-fw"></i> Library</a></li>
      <li><a href="#"><i class="fa fa-pencil fa-fw"></i> Applications</a></li>
      <li><a href="#"><i class="fa fa-cogs fa-fw"></i> Settings</a></li>
    </ul>
            </div>
        </div>
    </div>
{% highlight html %}
<ul class="nav nav-pills nav-stacked">
  <li class="active"><a href="#"><i class="fa fa-home fa-fw"></i> Home</a></li>
  <li><a href="#"><i class="fa fa-book fa-fw"></i> Library</a></li>
  <li><a href="#"><i class="fa fa-pencil fa-fw"></i> Applications</a></li>
  <li><a href="#"><i class="fa fa-cogs fa-fw"></i> Settings</a></li>
</ul>
{% endhighlight %}
</div>                

# List icons
List icons (like these) can be used to replace default bullets in lists using ```.fa-ul``` and ```.fa-li``` classes.

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content">
    <ul class="fa-ul">
      <li><i class="fa-li fa fa-check-square"></i>List icons (like these)</li>
      <li><i class="fa-li fa fa-check-square"></i>can be used</li>
      <li><i class="fa-li fa fa-spinner fa-spin"></i>to replace</li>
      <li><i class="fa-li fa fa-square"></i>default bullets in lists</li>
    </ul>
            </div>
        </div>
    </div>
{% highlight html %}
<ul class="fa-ul">
  <li><i class="fa-li fa fa-check-square"></i>List icons (like these)</li>
  <li><i class="fa-li fa fa-check-square"></i>can be used</li>
  <li><i class="fa-li fa fa-spinner fa-spin"></i>to replace</li>
  <li><i class="fa-li fa fa-square"></i>default bullets in lists</li>
</ul>
{% endhighlight %}
</div>                


# Border and pull classes 
Use a few styles together and you'll have easy pull quotes or a great introductory article icon using the ```.fa-border``` in conjunction with the ```.fa-quote-left``` and ```.fa-quote-right``` classes.

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content">
<p>    
    <i class="fa fa-quote-left fa-2x pull-left fa-border"></i>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem amet, facere, culpa adipisci fugiat fugit quidem dolores consectetur, eos ipsam necessitatibus impedit similique ullam asperiores. Maiores quaerat libero molestiae dolor?</p>

<p>    
    <i class="fa fa-quote-right fa-2x pull-right fa-border"></i>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem amet, facere, culpa adipisci fugiat fugit quidem dolores consectetur, eos ipsam necessitatibus impedit similique ullam asperiores. Maiores quaerat libero molestiae dolor?</p>
            </div>
        </div>
    </div>
{% highlight html %}
<p>
    <i class="fa fa-quote-left fa-2x pull-left fa-border"></i>
    Lorem ipsum ...   
</p>
<p>
    <i class="fa fa-quote-right fa-2x pull-right fa-border"></i>
    Lorem ipsum ...       
</p>
{% endhighlight %}
</div>                


# Spinning icons
It is possible to make spinning icons, with the ```.fa-spin``` class. The spinning is done using CSS3, so your browser needs to support this, before you will see a spinning icon.

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content">
    <i class="fa fa-spinner fa-spin"></i>
    <i class="fa fa-refresh fa-spin"></i>
    <i class="fa fa-cog fa-spin"></i>
            </div>
        </div>
    </div>
{% highlight html %}
<i class="fa fa-spinner fa-spin"></i>
<i class="fa fa-refresh fa-spin"></i>
<i class="fa fa-cog fa-spin"></i>
{% endhighlight %}
</div>                




# Rotate or flip icons
It is possible to make rotate icons, the example below, shows how this can be done. The rotating and and flipping is done using CSS3, so your browser needs to support this, before you will see this.

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content">        
    <i class="fa fa-shield"></i>&nbsp; normal<br>
    <i class="fa fa-shield fa-rotate-90"></i>&nbsp; fa-rotate-90<br>
    <i class="fa fa-shield fa-rotate-180"></i>&nbsp; fa-rotate-180<br>
    <i class="fa fa-shield fa-rotate-270"></i>&nbsp; fa-rotate-270<br>
    <i class="fa fa-shield fa-flip-horizontal"></i>&nbsp; fa-flip-horizontal<br>
    <i class="fa fa-shield fa-flip-vertical"></i>&nbsp; icon-flip-vertical
            </div>
        </div>
    </div>
{% highlight html %}
<i class="fa fa-shield"></i>&nbsp; normal<br>
<i class="fa fa-shield fa-rotate-90"></i>&nbsp; fa-rotate-90<br>
<i class="fa fa-shield fa-rotate-180"></i>&nbsp; fa-rotate-180<br>
<i class="fa fa-shield fa-rotate-270"></i>&nbsp; fa-rotate-270<br>
<i class="fa fa-shield fa-flip-horizontal"></i>&nbsp; fa-flip-horizontal<br>
<i class="fa fa-shield fa-flip-vertical"></i>&nbsp; icon-flip-vertical
{% endhighlight %}
</div>                




# Icon stacking
It is possible to place icons on top of eachother, by using the ```fa-stack``` class on a wrapping element.

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content">        
<span class="fa-stack fa-lg">
  <i class="fa fa-square-o fa-stack-2x"></i>
  <i class="fa fa-twitter fa-stack-1x"></i>
</span>
fa-twitter on fa-square-o<br>
<span class="fa-stack fa-lg">
  <i class="fa fa-circle fa-stack-2x"></i>
  <i class="fa fa-flag fa-stack-1x fa-inverse"></i>
</span>
fa-flag on fa-circle<br>
<span class="fa-stack fa-lg">
  <i class="fa fa-square fa-stack-2x"></i>
  <i class="fa fa-terminal fa-stack-1x fa-inverse"></i>
</span>
fa-terminal on fa-square<br>
<span class="fa-stack fa-lg">
  <i class="fa fa-camera fa-stack-1x"></i>
  <i class="fa fa-ban fa-stack-2x text-danger"></i>
</span>
fa-ban on fa-camera
            </div>
        </div>
    </div>
{% highlight html %}
<span class="fa-stack fa-lg">
  <i class="fa fa-square-o fa-stack-2x"></i>
  <i class="fa fa-twitter fa-stack-1x"></i>
</span>
fa-twitter on fa-square-o<br>
<span class="fa-stack fa-lg">
  <i class="fa fa-circle fa-stack-2x"></i>
  <i class="fa fa-flag fa-stack-1x fa-inverse"></i>
</span>
fa-flag on fa-circle<br>
<span class="fa-stack fa-lg">
  <i class="fa fa-square fa-stack-2x"></i>
  <i class="fa fa-terminal fa-stack-1x fa-inverse"></i>
</span>
fa-terminal on fa-square<br>
<span class="fa-stack fa-lg">
  <i class="fa fa-camera fa-stack-1x"></i>
  <i class="fa fa-ban fa-stack-2x text-danger"></i>
</span>
fa-ban on fa-camera
{% endhighlight %}
</div>                


# Invert icons
It is possible to make rotate icons, the example below, shows how this can be done. The rotating and and flipping is done using CSS3, so your browser needs to support this, before you will see this.

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content">        
<p style="background-color: #bada55">
    <i class="fa fa-shopping-cart"></i>&nbsp; normal<br>
    <i class="fa fa-shopping-cart fa-inverse"></i>&nbsp; inverse<br>    
</p>

            </div>
        </div>
    </div>
{% highlight html %}
<p style="background-color: #bada55">
    <i class="fa fa-shopping-cart"></i>&nbsp; normal<br>
    <i class="fa fa-shopping-cart fa-inverse"></i>&nbsp; inverse<br>    
</p>
{% endhighlight %}
</div>                


# Buttons and icons
Icons work perfectly together with buttons:

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content">        
                <button class="button"><i class="fa fa-close"></i> Close</button>
                <button class="button button-icon"><i class="fa fa-close"></i> Close</button>
            </div>
        </div>
    </div>
{% highlight html %}
<button class="button"><i class="fa fa-close"></i> Close</button>
<button class="button button-icon"><i class="fa fa-close"></i> Close</button>
{% endhighlight %}
</div>                


