---
layout:		post
title:		Dropdown
source:		modules/_dropdown.scss
order:      1
component:  components
---



<p class="lead">Toggleable, contextual menu for displaying lists of links. Made interactive with the <a href="/javascript/dropdown.html">dropdown JavaScript plugin</a>.</p>

# Simple dropdown
The example below is a example of how a dropdown would work using the primary classes: ```.dropdown```, ```.dropdown-menu``` and ```.dropdown-container```.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content">
            <div class="dropdown">
                <button class="button" style="float:left;">Dropdown</button>
                <div class="dropdown-menu" style="display: block; opacity:1; position:static; margin-bottom: 10px; clear: left;">
                    <div class="dropdown-container">        
                        <ul>
                            <li><a href="...">Link 1</a></li>
                            <li><a href="...">Link 2</a></li>
                            <li><a href="...">Link 3</a></li>
                            <li><a href="...">Link 4</a></li>
                            <li><a href="...">Link 5</a></li>
                            <li><a href="...">Link 6</a></li>
                            <li><a href="...">Link 7</a></li>
                            <li><a href="...">Link 8</a></li>
                            <li><a href="...">Link 9</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>            
{% highlight html %}
<div class="dropdown">
    <button class="button">Dropdown</button>
    <div class="dropdown-menu">
        <div class="dropdown-container">        
            <ul>
                <li><a href="...">Link 1</a></li>
                <li><a href="...">Link 2</a></li>
                <li><a href="...">Link 3</a></li>
                <li><a href="...">Link 4</a></li>
                <li><a href="...">Link 5</a></li>
                <li><a href="...">Link 6</a></li>
                <li><a href="...">Link 7</a></li>
                <li><a href="...">Link 8</a></li>
                <li><a href="...">Link 9</a></li>
            </ul>
        </div>
    </div>
</div>
{% endhighlight %}
</div>  


# Simple dropdown with headers and footer
This example is much like the example above, but here we have split the dropdown into sections using ```.divider```, ```.dropdown-header``` and ```.dropdown-footer```.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content">
            <div class="dropdown">
                <button class="button" style="float:left;">Dropdown</button>         
                <div class="dropdown-menu padding-double" style="display: block; opacity:1; position:static; margin-bottom: 10px; clear: left;">
                    <div class="dropdown-container">
                        <header class="dropdown-header"><h4>Header</h4></header>
                        <ul>
                            <li><a href="...">Link 1</a></li>
                            <li><a href="...">Link 2</a></li>
                            <li><a href="...">Link 3</a></li>
                            <li><a href="...">Link 4</a></li>
                            <hr class="divider">
                            <li><a href="...">Link 5</a></li>
                            <li><a href="...">Link 6</a></li>
                        </ul>
                        <hr class="divider">
                        <header class="dropdown-header"><h4>Header 2</h4></header>
                        <ul>
                            <li><a href="...">Link 2.1</a></li>
                            <li><a href="...">Link 2.2</a></li>
                            <li><a href="...">Link 2.3</a></li>
                            <li><a href="...">Link 2.4</a></li>
                            <li><a href="...">Link 2.5</a></li>
                        </ul>
                        <footer class="dropdown-footer"><h4>Footer note</h4></footer>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
{% highlight html %}
<div class="dropdown">
    <button class="button">Dropdown</button>
    <div class="dropdown-menu padding-double">
        <div class="dropdown-container">
            <header class="dropdown-header"><h4>Header</h4></header>
            <ul>
                <li><a href="...">Link 1</a></li>
                <li><a href="...">Link 2</a></li>
                <li><a href="...">Link 3</a></li>
                <li><a href="...">Link 4</a></li>
                <hr class="divider">
                <li><a href="...">Link 5</a></li>
                <li><a href="...">Link 6</a></li>
            </ul>
            <hr class="divider">
            <header class="dropdown-header"><h4>Header 2</h4></header>
            <ul>
                <li><a href="...">Link 2.1</a></li>
                <li><a href="...">Link 2.2</a></li>
                <li><a href="...">Link 2.3</a></li>
                <li><a href="...">Link 2.4</a></li>
                <li><a href="...">Link 2.5</a></li>
            </ul>
            <footer class="dropdown-footer"><h4>Footer note</h4></footer>
        </div>
    </div>
</div>
{% endhighlight %}
</div>    




# Nested dropdowns 

An example of dropdowns nested.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content">
            <div class="dropdown">
                <button class="button" style="float:left;">Dropdown</button>
                <div class="dropdown-menu" style="display: block; opacity:1; position:static; margin-bottom: 10px; clear: left;">
                    <div class="dropdown-container">        
                        <ul>
                            <li><a href="...">Link 1</a></li>
                            <li><a href="...">Link 2</a></li>
                            <li><a href="...">Link 3</a></li>
                            <li><a href="...">Link 4</a></li>
                            <li class="dropdown">
                                <a href="...">Link 5</a>
                                <div class="dropdown-menu" style="display: block; opacity:1;">
                                    <div class="dropdown-container">        
                                        <ul>
                                            <li><a href="...">Link 5.1</a></li>
                                            <li><a href="...">Link 5.2</a></li>
                                            <li><a href="...">Link 5.3</a></li>
                                        </ul>
                                    </div>
                                </div>                                
                            </li>
                            <li><a href="...">Link 6</a></li>
                            <li><a href="...">Link 7</a></li>
                            <li><a href="...">Link 8</a></li>
                            <li><a href="...">Link 9</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>            
{% highlight html %}
<div class="dropdown">
    <button class="button" style="float:left;">Dropdown</button>
    <div class="dropdown-menu">
        <div class="dropdown-container">        
            <ul>
                <li><a href="...">Link 1</a></li>
                <li><a href="...">Link 2</a></li>
                <li><a href="...">Link 3</a></li>
                <li><a href="...">Link 4</a></li>
                <li class="dropdown">
                    <a href="...">Link 5</a>
                    <div class="dropdown-menu">
                        <div class="dropdown-container">        
                            <ul>
                                <li><a href="...">Link 5.1</a></li>
                                <li><a href="...">Link 5.2</a></li>
                                <li><a href="...">Link 5.3</a></li>
                            </ul>
                        </div>
                    </div>                                
                </li>
                <li><a href="...">Link 6</a></li>
                <li><a href="...">Link 7</a></li>
                <li><a href="...">Link 8</a></li>
                <li><a href="...">Link 9</a></li>
            </ul>
        </div>
    </div>
</div>
{% endhighlight %}
</div>  






# Advanced drodown 

An example of a dropdown with mixed content.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content">
            <div class="dropdown">
                <button class="button" style="float:left;">Dropdown</button>
                <div class="dropdown-menu" style="width: 300px; display: block; opacity:1; position:static; margin-bottom: 10px; clear: left;">
                    <div class="dropdown-container">        
                        <ul>
                            <li class="media">
                                <img src="http://placehold.it/60x60" class="media-image" alt="">
                                <div class="media-body">
                                    <h4>Headline</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, iusto beatae culpa eritatis.</p>
                                </div>
                            </li>
                            <li class="media">
                                <img src="http://placehold.it/60x60" class="media-image" alt="">
                                <div class="media-body">
                                    <h4>Headline</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, iusto beatae culpa eritatis.</p>
                                </div>
                            </li>
                            <li class="media">
                                <img src="http://placehold.it/60x60" class="media-image" alt="">
                                <div class="media-body">
                                    <h4>Headline</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, iusto beatae culpa eritatis.</p>
                                </div>
                            </li>
                        </ul>
                        <footer class="dropdown-footer">
                            <button type="submit" class="is-block button-primary">Button-primary</button>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>            
{% highlight html %}
<div class="dropdown">
    <button class="button" style="float:left;">Dropdown</button>
    <div class="dropdown-menu" style="display: block; opacity:1; position:static; margin-bottom: 10px; clear: left;">
        <div class="dropdown-container">        
            <ul>
                <li class="media">
                    <img src="..." class="media-image" alt="">
                    <div class="media-body">
                        <h4>Headline</h4>
                        <p>Lorem ...</p>
                    </div>
                </li>
                <li class="media">
                    <img src="..." class="media-image" alt="">
                    <div class="media-body">
                        <h4>Headline</h4>
                        <p>Lorem ...</p>
                    </div>
                </li>
                <li class="media">
                    <img src="..." class="media-image" alt="">
                    <div class="media-body">
                        <h4>Headline</h4>
                        <p>Lorem ...</p>
                    </div>
                </li>
            </ul>
            <footer class="dropdown-footer">
                <button type="submit" class="is-block button-primary">Button-primary</button>
            </footer>
        </div>
    </div>
</div>
{% endhighlight %}
</div>  




