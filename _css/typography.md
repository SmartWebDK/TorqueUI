---
layout:     post
title:      Typography
source:     modules/_typography.scss
order:      1
component:  css
---


<p class="lead">Good typography style is the basis of every website, and we have also built some great typrography styles into TorqueUI.</p>

# Headings

All the HTML headings from ```h1``` to ```h6```. We have also made heading classes available matching the HTML headling with classes from ```.h1``` through ```.h6```. Usable in situations where you want to match the font styling of a HTML heading but for some reason don't want to use a heading. Like SEO situations or you want to use the styling inline in some text.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content">
            <h1>&lt;h1&gt; Heading</h1>
            <h2>&lt;h2&gt; Heading</h2>
            <h3>&lt;h3&gt; Heading</h3>
            <h4>&lt;h4&gt; Heading</h4>
            <h5>&lt;h5&gt; Heading</h5>
            <h6>&lt;h6&gt; Heading</h6>
            <div class="h1">.h1 Heading</div>
            <div class="h2">.h2 Heading</div>
            <div class="h3">.h3 Heading</div>
            <div class="h4">.h4 Heading</div>
            <div class="h5">.h5 Heading</div>
            <div class="h6">.h6 Heading</div>
        </div>
    </div>
  </div>
{% highlight html %}
<h1>Heading</h1>
<h2>Heading</h2>
<h3>Heading</h3>
<h4>Heading</h4>
<h5>Heading</h5>
<h6>Heading</h6>
<div class="h1">.h1 Heading</div>
<div class="h2">.h2 Heading</div>
<div class="h3">.h3 Heading</div>
<div class="h4">.h4 Heading</div>
<div class="h5">.h5 Heading</div>
<div class="h6">.h6 Heading</div>
{% endhighlight %}
</div>


#Body text

Body text in TorqueUI has a ```font-size``` of **14px**. The ```font-size``` is applied to the ```<body>``` element and is inherited down thru the page and the elements using ```em``` sizing. Below is a example of body text. In addition to this ```<p>``` tags (paragraph elements) receive a bottom margin of half their line-height (```0.5em````);

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ipsum soluta nemo facilis magni iste, nulla voluptatum dolorem, vel. Quae maxime, aliquam adipisci. Voluptatibus laborum inventore, molestias minima earum voluptates!</p>
        <p>Beatae at illum quas, asperiores cum officia itaque perferendis nisi assumenda provident dignissimos fugiat error, reiciendis unde, dolore quisquam dolores quod, atque incidunt suscipit impedit maiores magni quia? Ipsam, quis.</p>
        <p>Ea minus aperiam atque quis nisi amet, iste exercitationem dolor perspiciatis quae distinctio neque culpa quasi ipsum doloremque vel nihil. Quis iste tempore et possimus, ratione nemo, sit numquam perspiciatis!</p>
        </div>
    </div>
  </div>
{% highlight html %}
<p>Lorem ...</p>
<p>Beatae ...</p>
<p>Ea minus ...</p>
{% endhighlight %}
</div>


# Blockquotes

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content">
            <blockquote>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
              itaque in harum similique laborum pariatur ex ullam reprehenderit dolorum
              accusamus. Saepe, nesciunt, totam minus distinctio voluptates est recusandae
              vero ab!
              <small>— Some smartass</small>
              </p>
            </blockquote>        
        </div>
    </div>
  </div>
{% highlight html %}
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
  itaque in harum similique laborum pariatur ex ullam reprehenderit dolorum
  accusamus. Saepe, nesciunt, totam minus distinctio voluptates est recusandae
  vero ab!
  <small>— Some smartass</small>
  </p>
</blockquote>
{% endhighlight %}
</div>




# Inline elements
Inline elements are a way to style or emphasize text found in headlines or paragraphs. 

### Small or secondary text

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content">
        <small>This text is small</small>
        <h1>.h1 heading with <small>small</small> or <small>secondary text</small></h1>
        <p>This text is <small>small</small></p>
        </div>
    </div>
  </div>
{% highlight html %}
<small>This text is small</small>
<h1>.h1 heading with <small>small</small> or <small>secondary text</small></h1>
<p>This text is <small>small</small></p>
{% endhighlight %}
</div>


### Emphasized text

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content">
            <em>This text is emphasized</em>
        </div>
    </div>
  </div>
{% highlight html %}
<em>this text is emphasized</em>
{% endhighlight %}
</div>


### Important text

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content">
            <strong>This text is important</strong>
        </div>
    </div>
  </div>
{% highlight html %}
<strong>this text is important</strong>
{% endhighlight %}
</div>


### Underlined text

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content">
            <u>This text is underlined</u>
        </div>
    </div>
  </div>
{% highlight html %}
<u>This text is underlined</u>
{% endhighlight %}
</div>

### Strikethrough text
Strikethrough text or striking text with a line through.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content">
        <s>This text is strikethrough</s>
        <del>This text is deleted / strikethrough</del>
        </div>
    </div>
  </div>
{% highlight html %}
<s>This text is strikethrough</s>
<del>This text is deleted / strikethrough</del>
{% endhighlight %}
</div>



### Inserted text

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content">
            <ins>This text is inserted</ins>
        </div>
    </div>
  </div>
{% highlight html %}
<ins>This text is inserted</ins>
{% endhighlight %}
</div>




### Marked or highlighted text

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content">
            <mark>This text is marked/highlighted</mark>
        </div>
    </div>
  </div>
{% highlight html %}
<mark>This text is marked/highlighted</mark>
{% endhighlight %}
</div>





### Text as links 

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content">
            <a href="#">This text is a link</a>
            <p>This text is a <a href="#">link</a> inside a paragraph</p>
            <h1><a href="#">Heading as a link</a></h1>
        </div>
    </div>
  </div>
{% highlight html %}
<a href="#">This text is a link</a>
<p>This text is a <a href="#">link</a> inside a paragraph</p>
<h1><a href="#">Heading as a link</a></h1>
{% endhighlight %}
</div>




