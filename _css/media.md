---
layout:		post
title:		Media
source:		modules/_media.scss
order:    1
---

<p class="lead">
  The media element is a very versatile element, it can be used for structuring comments and posts, articles you name it. We have decided to build a simple version of the media element. It can be nested, and it can have the media image on the left side. The media element works well in conjunction with lists. See the code examples below, to see how this can be achieved.
</p>

### Simple

Simple list of media elements, nicely aligned and listed.

<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content">
        <ul class="list-unstyled">
          <li class="media">
            <img class="media-image" src="http://placehold.it/50x50&amp;text=1" alt="Avatar">
            <div class="media-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur omnis deserunt porro corporis. Quibusdam non facere ipsa dolorem molestias.</p>
              <p>Voluptatum in recusandae asperiores? Rem deserunt tempora maxime error ipsa cum iure. Voluptas.</p>
            </div>
          </li> 
          <li class="media">
            <img class="media-image" src="http://placehold.it/50x50&amp;text=2" alt="Avatar">
            <div class="media-body">
              <p>Voluptatum in recusandae asperiores? Rem deserunt tempora maxime error ipsa cum iure. Voluptas.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur omnis deserunt porro corporis. Quibusdam non facere ipsa dolorem molestias.</p>
            </div>
          </li>           
          <li class="media">
            <img class="media-image" src="http://placehold.it/50x50&amp;text=3" alt="Avatar">
            <div class="media-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur omnis deserunt porro corporis. Quibusdam non facere ipsa dolorem molestias.</p>
              <p>Voluptatum in recusandae asperiores? Rem deserunt tempora maxime error ipsa cum iure. Voluptas.</p>
            </div>
          </li>           
        </ul>
      </div>
    </div>
  </div>
  {% highlight html %}
<ul class="list-unstyled">
  <li class="media">
    <img class="media-image" src="…" alt="Avatar">
    <div class="media-body">
      <p>Lorem ipsum dolor sit amet, consectetur…</p>
      <p>Voluptatum in recusandae asperiores? …</p>
    </div>
  </li> 
  <li class="media">
    <img class="media-image" src="…" alt="Avatar">
    <div class="media-body">
      <p>Voluptatum in recusandae asperiores? …</p>
      <p>Lorem ipsum dolor sit amet, consectetur…</p>
    </div>
  </li>           
  <li class="media">
    <img class="media-image" src="…" alt="Avatar">
    <div class="media-body">
      <p>Lorem ipsum dolor sit amet, consectetur…</p>
      <p>Voluptatum in recusandae asperiores? …</p>
    </div>
  </li>           
</ul>
  {% endhighlight %}
</div>


### Nested

It is also possible, to nest the media element. This has to be done inside the `.media` element. See the example below. 

<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content">
        <ul class="list-unstyled">
          <li class="media">
            <img class="media-image" src="http://placehold.it/50x50&amp;text=1" alt="Avatar">
            <div class="media-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur omnis deserunt porro corporis. Quibusdam non facere ipsa dolorem molestias.</p>
              <p>Voluptatum in recusandae asperiores? Rem deserunt tempora maxime error ipsa cum iure. Voluptas.</p>
            </div>
          </li> 
          <li class="media">
            <img class="media-image" src="http://placehold.it/50x50&amp;text=2" alt="Avatar">
            <div class="media-body">
              <p>Voluptatum in recusandae asperiores? Rem deserunt tempora maxime error ipsa cum iure. Voluptas.</p>         
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur omnis deserunt porro corporis. Quibusdam non facere ipsa dolorem molestias.</p>
            </div>
            <ul>
              <li class="media">
                <img class="media-image" src="http://placehold.it/50x50&amp;text=2.1" alt="Avatar">
                <div class="media-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur omnis deserunt porro corporis. Quibusdam non facere ipsa dolorem molestias.</p>
                  <p>Voluptatum in recusandae asperiores? Rem deserunt tempora maxime error ipsa cum iure. Voluptas.</p>
                </div>
              </li> 
              <li class="media">
                <img class="media-image" src="http://placehold.it/50x50&amp;text=2.2" alt="Avatar">
                <div class="media-body">
                  <p>Voluptatum in recusandae asperiores? Rem deserunt tempora maxime error ipsa cum iure. Voluptas.</p>          
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur omnis deserunt porro corporis. Quibusdam non facere ipsa dolorem molestias.</p>
                </div>
                <ul>
                  <li class="media">
                    <img class="media-image" src="http://placehold.it/50x50&amp;text=2.2.1" alt="Avatar">
                    <div class="media-body">
                      <p>Voluptatum in recusandae asperiores? Rem deserunt tempora maxime error ipsa cum iure. Voluptas.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur omnis deserunt porro corporis. Quibusdam non facere ipsa dolorem molestias.</p>
                    </div>
                  </li>                
                </ul>        
              </li>                   
            </ul>
          </li>                   
        </ul>
      </div>
    </div>
  </div>
  {% highlight html %}
<ul class="list-unstyled">
  <li class="media">
    <img class="media-image" src="…" alt="Avatar">
    <div class="media-body">
      <p>Lorem ipsum dolor sit amet, consectetur…</p>
      <p>Voluptatum in recusandae asperiores?…</p>    
    </div>
  </li> 
  <li class="media">
    <img class="media-image" src="…" alt="Avatar">
    <div class="media-body">
      <p>Voluptatum in recusandae asperiores?…</p>         
      <p>Lorem ipsum dolor sit amet, consectetur…</p>
    </div>
    <ul>
      <li class="media">
        <img class="media-image" src="…" alt="Avatar">
        <div class="media-body">
          <p>Lorem ipsum dolor sit amet, consectetur…</p>
          <p>Voluptatum in recusandae asperiores? …</p>
        </div>
      </li> 
      <li class="media">
        <img class="media-image" src="…" alt="Avatar">
        <div class="media-body">
          <p>Voluptatum in recusandae asperiores? …</p>          
          <p>Lorem ipsum dolor sit amet, consectetur…</p>
        </div>
        <ul>
          <li class="media">
            <img class="media-image" src="…" alt="Avatar">
            <div class="media-body">
              <p>Voluptatum in recusandae asperiores? …</p>
              <p>Lorem ipsum dolor sit amet, consectetur…</p>
            </div>
          </li>                
        </ul>        
      </li>                   
    </ul>
  </li>                   
</ul>
  {% endhighlight %}
</div>

### Pulled right

With the `.pull-right` utility class, it's possible to move the image from the left, to the right side of the `.media` element.

<div class="m-browser">
  <div class="browser">
    <div class="image">
      <div class="content">
        <ul class="list-unstyled">
          <li class="media">
            <img class="media-image" src="http://placehold.it/50x50&amp;text=1" alt="Avatar">
            <div class="media-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur omnis deserunt porro corporis. Quibusdam non facere ipsa dolorem molestias.</p>
              <p>Voluptatum in recusandae asperiores? Rem deserunt tempora maxime error ipsa cum iure. Voluptas.</p>
            </div>
          </li> 
          <li class="media">
            <img class="media-image pull-right" src="http://placehold.it/50x50&amp;text=2" alt="Avatar">
            <div class="media-body">
              <p>Voluptatum in recusandae asperiores? Rem deserunt tempora maxime error ipsa cum iure. Voluptas.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur omnis deserunt porro corporis. Quibusdam non facere ipsa dolorem molestias.</p>
            </div>
          </li>           
          <li class="media">
            <img class="media-image" src="http://placehold.it/50x50&amp;text=3" alt="Avatar">
            <div class="media-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur omnis deserunt porro corporis. Quibusdam non facere ipsa dolorem molestias.</p>
              <p>Voluptatum in recusandae asperiores? Rem deserunt tempora maxime error ipsa cum iure. Voluptas.</p>
            </div>
          </li>           
        </ul>
      </div>
    </div>
  </div>
  {% highlight html %}
<ul class="list-unstyled">
  <li class="media">
    <img class="media-image" src="…" alt="Avatar">
    <div class="media-body">
      <p>Lorem ipsum dolor sit amet, consectetur…</p>
      <p>Voluptatum in recusandae asperiores? …</p>
    </div>
  </li> 
  <li class="media">
    <img class="media-image pull-right" src="…" alt="Avatar">
    <div class="media-body">
      <p>Voluptatum in recusandae asperiores? …</p>
      <p>Lorem ipsum dolor sit amet, consectetur…</p>
    </div>
  </li>           
  <li class="media">
    <img class="media-image" src="…" alt="Avatar">
    <div class="media-body">
      <p>Lorem ipsum dolor sit amet, consectetur…</p>
      <p>Voluptatum in recusandae asperiores? …</p>
    </div>
  </li>           
</ul>
  {% endhighlight %}
</div>

Source: `modules/_media.scss`

Dependencies

`compass`
`sass`

---
