---
layout:		default-page
title:		"Navigation"
source:		modules/_nav.scss
component: Navigation
---


Navigation
---------

The navigation module has several behavioral settings, such as the **default** behavior, **pills**, **tabs** and **breadcrumb** behavior. Common to all behaviors, they derive from the **.nav** class. Swap the modifier classes to switch between the different behaviors.

----------

### Behavior

#### Default

The default navigation is a simple one level list, perfectly suitable for use in the **navbar** component.

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
    <li class="active"><a href="#">Frontpage</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
</ul>
{% endhighlight %}
</div>

----------

#### Menu

The default navigation is a multi level list, designed to support many levels of navigation, for example category listing.

<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content">
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

----------


#### Pills

The default navigation is a simple one level list, perfectly suitable for use in the **navbar** component.

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

----------


#### Tabs

The tabs behavior is a one level list, designed for the JavaScript tabs component, but can be used as a visual representation of any navigational menu.

<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content">
        <ul class="nav nav-tabs">
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
<ul class="nav nav-tabs">
    <li class="active"><a href="#">Frontpage</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
</ul>
{% endhighlight %}
</div>


----------


#### Breadcrumb

The breadcrumb navigation is a one level list, designed for the listing of breadcrumbs.

<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content">
        <ul class="nav nav-breadcrumb">
          <li><a href="#">Frontpage</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
{% highlight html %}
<ul class="nav nav-breadcrumb">
  <li><a href="#">Frontpage</a></li>
  <li><a href="#">Products</a></li>
  <li><a href="#">News</a></li>
  <li><a href="#">About us</a></li>
  <li><a href="#">Contact</a></li>
</ul>
{% endhighlight %}
</div>


----------

> **NOTE:**
> 
> Behaviors cannot stand alone, as they do not directly extend the **nav** class, but only affects its behavior.

----------

### Helpers

Helper classes were designed to act as modifiers to the behavior classes. As the behavior classes does not extend the **.nav** class, these helpers does not extend any classes nor behaviors either.

#### Justified

<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content">
        <ul class="nav nav-pills nav-justified">
          <li><a href="#">Frontpage</a></li>
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
  <li><a href="#">Frontpage</a></li>
  <li><a href="#">Products</a></li>
  <li><a href="#">News</a></li>
  <li><a href="#">About us</a></li>
  <li><a href="#">Contact</a></li>
</ul>
{% endhighlight %}
</div>

#### Stacked

<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content">
        <ul class="nav nav-pills nav-stacked">
          <li><a href="#">Frontpage</a></li>
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
  <li><a href="#">Frontpage</a></li>
  <li><a href="#">Products</a></li>
  <li><a href="#">News</a></li>
  <li><a href="#">About us</a></li>
  <li><a href="#">Contact</a></li>
</ul>
{% endhighlight %}
</div>


----------

### Dependencies

The navigation module depends on the settings, components and third party software listed below

`compass` `base/_base.scss` `globals/_mixins.scss` `globals/_sizes.scss` `globals/_states.scss`

