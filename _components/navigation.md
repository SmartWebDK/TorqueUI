---
layout:		post
title:		"Navigation"
source:		modules/_nav.scss
---

<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content">
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


<p class="lead">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

### Default navigation

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

<ul class="nav nav-tabs">
  <li class="active"><a href="#NavEx1Tab1" data-toggle="content">Example</a></li>
  <li><a href="#NavEx1Tab2" data-toggle="content">Source</a></li>
</ul>

<div class="toggle-content t-panel-clean">
  <div id="NavEx1Tab1" class="pane active">

<ul class="nav nav-default">
    <li class="active"><a href="#">Frontpage</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
</ul>

  </div>

  <div id="NavEx1Tab2" class="pane">
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
</div>

### Pills

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content">
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

<ul class="nav nav-tabs">
  <li class="active"><a href="#NavEx2Tab1" data-toggle="content">Example</a></li>
  <li><a href="#NavEx2Tab2" data-toggle="content">Source</a></li>
</ul>

<div class="toggle-content t-panel-clean">
  <div id="NavEx2Tab1" class="pane active">

<ul class="nav nav-pills">
    <li class="active"><a href="#">Frontpage</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
</ul>

  </div>

  <div id="NavEx2Tab2" class="pane">
{% highlight html %}
<ul class="nav nav-pills">
    <li class="active"><a href="...">Frontpage</a></li>
    <li><a href="...">Products</a></li>
    <li><a href="...">News</a></li>
    <li><a href="...">About us</a></li>
    <li><a href="...">Contact</a></li>
</ul>
{% endhighlight %}
  </div>
</div>

### Tabs

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

<ul class="nav nav-tabs">
  <li class="active"><a href="#NavEx3Tab1" data-toggle="content">Example</a></li>
  <li><a href="#NavEx3Tab2" data-toggle="content">Source</a></li>
</ul>

<div class="toggle-content t-panel-clean">
  <div id="NavEx3Tab1" class="pane active">

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
  </div></div>
</div>
<div id="NavEx3Tab2" class="pane">{% highlight html %}
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
{% endhighlight %}</div>
</div>

### Menu

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

<ul class="nav nav-tabs">
  <li class="active"><a href="#NavEx4Tab1" data-toggle="content">Example</a></li>
  <li><a href="#NavEx4Tab2" data-toggle="content">Source</a></li>
</ul>

<div class="toggle-content t-panel-clean">
  <div id="NavEx4Tab1" class="pane active">

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

  <div id="NavEx4Tab2" class="pane">
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
</div>

### Helpers

#### Stacked

<ul class="nav nav-tabs">
  <li class="active"><a href="#NavEx5Tab1" data-toggle="content">Example</a></li>
  <li><a href="#NavEx5Tab2" data-toggle="content">Source</a></li>
</ul>

<div class="toggle-content t-panel-clean">
  <div id="NavEx5Tab1" class="pane active">

<ul class="nav nav-pills nav-stacked">
    <li class="active"><a href="#">Frontpage</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
</ul>

  </div>

  <div id="NavEx5Tab2" class="pane">
{% highlight html %}
<ul class="nav nav-pills nav-stacked">
    <li class="active"><a href="...">Frontpage</a></li>
    <li><a href="...">Products</a></li>
    <li><a href="...">News</a></li>
    <li><a href="...">About us</a></li>
    <li><a href="...">Contact</a></li>
</ul>
{% endhighlight %}
  </div>
</div>

#### Justified

<ul class="nav nav-tabs">
  <li class="active"><a href="#NavEx6Tab1" data-toggle="content">Example</a></li>
  <li><a href="#NavEx6Tab2" data-toggle="content">Source</a></li>
</ul>

<div class="toggle-content t-panel-clean">
  <div id="NavEx6Tab1" class="pane active">

<ul class="nav nav-pills nav-justified">
    <li class="active"><a href="#">Frontpage</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
</ul>

  </div>

  <div id="NavEx6Tab2" class="pane">
{% highlight html %}
<ul class="nav nav-pills nav-justified">
    <li class="active"><a href="...">Frontpage</a></li>
    <li><a href="...">Products</a></li>
    <li><a href="...">News</a></li>
    <li><a href="...">About us</a></li>
    <li><a href="...">Contact</a></li>
</ul>
{% endhighlight %}
  </div>
</div>

Source: `modules/_nav.scss`

Dependencies

`compass`
`base/_base.scss`
`globals/_mixins.scss`
`globals/_sizes.scss`
`globals/_states.scss`

---