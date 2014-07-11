Navigation
=====================

The navigation module has several behavioral settings, such as the **default** behavior, **pills**, **tabs** and **breadcrumb** behavior. Common to all behaviors, they derive from the **.nav** class. Swap the modifier classes to switch between the different behaviors.

----------

Behavior
---------

### Default

The default navigation is a simple one level list, perfectly suitable for use in the **navbar** component.

Example
``` 
This is an example
```

Source
``` 
<ul class="nav nav-default">
    <li class="active"><a href="#">Frontpage</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
</ul>
```

----------

### Menu

The default navigation is a multi level list, designed to support many levels of navigation, for example category listing.

Example
``` 
This is an example
```

Source
``` 
<ul class="nav nav-menu">
    <li class="active"><a href="#">Frontpage</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
</ul>
```

----------


### Pills

The default navigation is a simple one level list, perfectly suitable for use in the **navbar** component.

Example
``` 
This is an example
```

Source
``` 
<ul class="nav nav-pills">
    <li class="active"><a href="#">Frontpage</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
</ul>
```

----------


### Tabs

The tabs behavior is a one level list, designed for the JavaScript tabs component, but can be used as a visual representation of any navigational menu.

Example
``` 
This is an example
```

Source
``` 
<ul class="nav nav-tabs">
    <li class="active"><a href="#">Frontpage</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
</ul>
```

----------


### Breadcrumb

The breadcrumb navigation is a one level list, designed for the listing of breadcrumbs.

Example
``` 
This is an example
```

Source
``` 
<ul class="nav nav-breadcrumb">
    <li><a href="#">Frontpage</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
</ul>
```

----------

> **NOTE:**
> 
> Behaviors cannot stand alone, as they do not directly extend the **nav** class, but only affects its behavior.

----------

Helpers
---------

Helper classes were designed to act as modifiers to the behavior classes. As the behavior classes does not extend the **.nav** class, these helpers does not extend any classes nor behaviors either.

### Justified

Example
``` 
This is an example
```

Source
``` 
<ul class="nav nav-default nav-justified">
    <li><a href="#">Frontpage</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
</ul>
```

### Stacked

Example
``` 
This is an example
```

Source
``` 
<ul class="nav nav-default nav-stacked">
    <li><a href="#">Frontpage</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
</ul>
```



----------

Dependencies
---------

The navigation module depends on the settings, components and third party software listed below

|                       | Type                            | Where                                               |
 -----------------------|---------------------------------|------------------------------------------------------
| `compass`             | Third party software            | [compass-style.org](https://compass-style.org/)     |
| `base/_base.scss`     | Internal                        | [_base.scss](#)                                     |
| `globals/_mixins.scss`| Internal                        | [_mixins.scss](#)                                   |
| `globals/_sizes.scss` | Internal                        | [_sizes.scss](#)                                    |
| `globals/_states.scss`| Internal                        | [_states.scss](#)                                   |


----------

Table of contents
---------

You can insert a table of contents using the marker `[TOC]`:

[TOC]


Comments
---------

Usually, comments in Markdown are just standard HTML comments. <!-- like this -->
**StackEdit** extends HTML comments in order to produce useful, highlighted comments in the preview but not in your exported documents. <!--- This is very useful for collecting feedback in a collaborative document. -->
