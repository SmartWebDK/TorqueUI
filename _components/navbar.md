---
layout:     post
title:      Navbar
source:     modules/_navbar.scss
order:      1
component:  components
---


<p class="lead">The navigation of a website is very important even on small devices. For this we build the <code>.navbar</code> component.</p>

The navbar is a component that is made to work across all breakpoints, from large to small, and is our most complex compontent. The navbar is build to house the navigation components you already know from the [navigation components](/components/navigation.html) if you did not, we highly recommend you read this section first.

<br>

<div class="panel">
    <div class="panel-heading">
        <span class="h4"><i class="fa fa-exclamation-circle"></i> Note</span>
    </div>
    <div class="panel-body">
        <p>The navbar has its own Javascript dependencies but also relies on the two Javascript plugins [dropdown](/javascript/dropdown.html) and [collapsable](/javascript/collabsable). So read up on those before continuing.</p>
    </div>
</div>


# Introduction
The navbar compontents primarily consists of 3 CSS classes:

* ```.navbar``` the main wrapper for the component.
* ```.navbar-header``` this can contain the ```.navbar-brand``` but is the part that is visible when the navbar is collapsed.
* ```.navbar-collapse``` this contains the main part of the navigation, the links. This part is collapsed on mobile devices.


# Navbar with nav

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <nav class="navbar">

              <div class="navbar-header">
                <button type="button" class="button navbar-toggle" data-toggle="collapse" data-target="navbar-1"><i class="fa fw fa-bars"></i></button>
              </div>

              <div class="navbar-collapse is-collapsed" data-group="navbar-1">
                <ul class="nav nav-default large">
                  <li class="active"><a href="...">Home</a></li>
                  <li><a href="...">Profile</a></li>
                  <li><a href="...">Messages</a></li>
                </ul>
              </div>

            </nav>
        </div>
    </div>
  </div>
{% highlight html %}
<nav class="navbar">

  <div class="navbar-header">
    <button type="button" class="button navbar-toggle" data-toggle="collapse" data-target="navbar"><i class="fa fw fa-bars"></i></button>
  </div>

  <div class="navbar-collapse is-collapsed" data-group="navbar">
    <ul class="nav nav-default large">
      <li class="active"><a href="...">Home</a></li>
      <li><a href="...">Profile</a></li>
      <li><a href="...">Messages</a></li>
    </ul>
  </div>

</nav>
{% endhighlight %}
</div>




# Navbar with text brand 

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <nav class="navbar">

              <div class="navbar-header">
                <button type="button" class="button navbar-toggle" data-toggle="collapse" data-target="navbar-2"><i class="fa fw fa-bars"></i></button>
                <a class="navbar-brand large" href="#">Brand</a>
              </div>

              <div class="navbar-collapse is-collapsed" data-group="navbar-2">
                <ul class="nav nav-default large">
                  <li class="active"><a href="...">Home</a></li>
                  <li><a href="...">Profile</a></li>
                  <li><a href="...">Messages</a></li>
                </ul>
              </div>

            </nav>
        </div>
    </div>
  </div>
{% highlight html %}
<nav class="navbar">

  <div class="navbar-header">
    <button type="button" class="button navbar-toggle" data-toggle="collapse" data-target="navbar"><i class="fa fw fa-bars"></i></button>
    <a class="navbar-brand large" href="#">Brand</a>
  </div>

  <div class="navbar-collapse is-collapsed" data-group="navbar">
    <ul class="nav nav-default large">
      <li class="active"><a href="...">Home</a></li>
      <li><a href="...">Profile</a></li>
      <li><a href="...">Messages</a></li>
    </ul>
  </div>

</nav>
{% endhighlight %}
</div>



# Navbar with button 

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <nav class="navbar">

              <div class="navbar-header">
                <button type="button" class="button navbar-toggle" data-toggle="collapse" data-target="navbar-3"><i class="fa fw fa-bars"></i></button>
                <a class="navbar-brand" href="#">Brand</a>
              </div>

              <div class="navbar-collapse is-collapsed" data-group="navbar-3">
                  <ul class="list-unstyled">
                    <li><button class="button">Log in</button></li>
                  </ul>
              </div>

            </nav>
        </div>
    </div>
  </div>
{% highlight html %}
<nav class="navbar">

  <div class="navbar-header">
    <button type="button" class="button navbar-toggle" data-toggle="collapse" data-target="navbar"><i class="fa fw fa-bars"></i></button>
    <a class="navbar-brand large" href="#">Brand</a>
  </div>

  <div class="navbar-collapse is-collapsed" data-group="navbar">
    <ul class="nav nav-default large">
      <li class="active"><a href="...">Home</a></li>
      <li><a href="...">Profile</a></li>
      <li><a href="...">Messages</a></li>
    </ul>
  </div>

</nav>
{% endhighlight %}
</div>


# Navbar with form element 

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <nav class="navbar">

              <div class="navbar-header">
                <button type="button" class="button navbar-toggle" data-toggle="collapse" data-target="navbar-4"><i class="fa fw fa-bars"></i></button>
                <a class="navbar-brand" href="#">Brand</a>
              </div>

              <div class="navbar-collapse is-collapsed" data-group="navbar-4">
                <fieldset class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-input input-group-main" placeholder="Search">
                        <span class="input-group-addon"><i class="fa fa-fw fa-search"></i></span>
                    </div>
                </fieldset>
              </div>

            </nav>
        </div>
    </div>
  </div>
{% highlight html %}
<nav class="navbar">

    <div class="navbar-header">
        <button type="button" class="button navbar-toggle" data-toggle="collapse" data-target="navbar"><i class="fa fw fa-bars"></i></button>
        <a class="navbar-brand" href="#">Brand</a>
    </div>

    <div class="navbar-collapse is-collapsed" data-group="navbar">
        <fieldset class="form-group">
            <div class="input-group">
                <input type="text" class="form-input input-group-main" placeholder="Search">
                <span class="input-group-addon"><i class="fa fa-fw fa-search"></i></span>
            </div>
        </fieldset>
    </div>

</nav>
{% endhighlight %}
</div>


# Navbar with form element 

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <nav class="navbar">

                <div class="navbar-header">
                    <button type="button" class="button navbar-toggle" data-toggle="collapse" data-target="navbar-5"><i class="fa fw fa-bars"></i></button>
                    <a class="navbar-brand" href="#">Brand</a>
                </div>            

                <div class="navbar-collapse is-collapsed" data-group="navbar-5">
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
                </div>

            </nav>
        </div>
    </div>
  </div>
{% highlight html %}
<nav class="navbar">

    <div class="navbar-header">
        <button type="button" class="button navbar-toggle" data-toggle="collapse" data-target="navbar"><i class="fa fw fa-bars"></i></button>
        <a class="navbar-brand" href="#">Brand</a>
    </div>            

    <div class="navbar-collapse is-collapsed" data-group="navbar">
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
    </div>

</nav>
{% endhighlight %}
</div>




