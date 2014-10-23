---
layout:		post
title:		Lists
source:		modules/_lists.scss
order:      1
component:  css
---

<p class="lead">
  A display of various lists in the framework.
</p>

### Unordered

A bulleted list of unordered items

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                    <li>Nulla volutpat aliquam velit
                        <ul>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                        </ul>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                    <li>Aenean sit amet erat nunc</li>
                    <li>Eget porttitor lorem</li>
                </ul>
            </div>
        </div>
    </div>
{% highlight html %}
<ul>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>Nulla volutpat aliquam velit
        <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
        </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
</ul>
{% endhighlight %}
</div>

### Ordered

A ordered list of items

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <ol>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit
                        <ol>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                        </ol>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                    <li>Aenean sit amet erat nunc</li>
                    <li>Eget porttitor lorem</li>
                </ol>
            </div>
        </div>
    </div>
{% highlight html %}
<ol>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit
        <ol>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
        </ol>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
</ol>
{% endhighlight %}
</div>

### Combined

Example of combining ordered list elements

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <div class="row">
                    <div class="col-s-2 col-m-6 col-l-6 col-xl-6">
                        <ol>
                            <li>Lorem ipsum</li>
                            <li>Consectetur
                                <ul>
                                    <li>Iaculis</li>
                                    <li>Purus</li>
                                    <li>Vestibulum </li>
                                    <li>Tristique</li>
                                </ul>
                            </li>
                            <li>Faucibus</li>
                            <li>Aenean </li>
                            <li>Eget</li>
                        </ol>
                    </div>
                    <div class="col-s-2 col-m-6 col-l-6 col-xl-6">
                        <ul>
                            <li>Lorem ipsum</li>
                            <li>Consectetur
                                <ol>
                                    <li>Iaculis</li>
                                    <li>Purus</li>
                                    <li>Vestibulum</li>
                                    <li>Ac tristique</li>
                                </ol>
                            </li>
                            <li>Faucibus</li>
                            <li>Aenean</li>
                            <li>Eget</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-s-2 col-m-6 col-l-6 col-xl-6">
{% highlight html %}
<ol>
    <li>Lorem ipsum</li>
    <li>Consectetur
        <ul>
            <li>Iaculis</li>
            <li>Purus</li>
            <li>Vestibulum </li>
            <li>Tristique</li>
        </ul>
    </li>
    <li>Faucibus</li>
    <li>Aenean </li>
    <li>Eget</li>
</ol>
{% endhighlight %}
        </div>
        <div class="col-s-2 col-m-6 col-l-6 col-xl-6">
{% highlight html %}
<ul>
    <li>Lorem ipsum</li>
    <li>Consectetur
        <ol>
            <li>Iaculis</li>
            <li>Purus</li>
            <li>Vestibulum</li>
            <li>Ac tristique</li>
        </ol>
    </li>
    <li>Faucibus</li>
    <li>Aenean</li>
    <li>Eget</li>
</ul>
{% endhighlight %}
        </div>
    </div>
</div>

### Definition list

A list of terms with their associated descriptions

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <dl>
                    <dt>Definition 1</dt>
                    <dd>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</dd>
                    <dt>Definition 2</dt>
                    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                    <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                    <dt>Definition 3</dt>
                    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                </dl>
            </div>
        </div>
    </div>
{% highlight html %}
<dl>
    <dt>Definition 1</dt>
    <dd>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</dd>
    <dt>Definition 2</dt>
    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
    <dd>Donec id elit non mi porta gravida at eget metus.</dd>
    <dt>Definition 3</dt>
    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
</dl>
{% endhighlight %}
</div>

### Paragraphs and lists

Test of lists with paragraphs

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <div class="wrap-for-example">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, facilis, recusandae, consequatur, tempora mollitia porro quos corporis odit impedit odio magnam libero tempore animi a incidunt laudantium eum. Nostrum, natus?</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit
                            <ul>
                                <li>Phasellus iaculis neque</li>
                                <li>Purus sodales ultricies</li>
                                <li>Vestibulum laoreet porttitor sem</li>
                                <li>Ac tristique libero volutpat at</li>
                            </ul>
                        </li>
                        <li>Faucibus porta lacus fringilla vel</li>
                        <li>Aenean sit amet erat nunc</li>
                        <li>Eget porttitor lorem</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, quae nam laborum debitis facere quod nemo vitae reiciendis quidem odio voluptate eos molestias doloribus qui sapiente consequuntur odit deleniti quisquam.</p>
                    <ol>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit
                            <ol>
                                <li>Phasellus iaculis neque</li>
                                <li>Purus sodales ultricies</li>
                                <li>Vestibulum laoreet porttitor sem</li>
                                <li>Ac tristique libero volutpat at</li>
                            </ol>
                        </li>
                        <li>Faucibus porta lacus fringilla vel</li>
                        <li>Aenean sit amet erat nunc</li>
                        <li>Eget porttitor lorem</li>
                    </ol>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eos, soluta distinctio facilis assumenda amet quidem optio ea perspiciatis debitis reiciendis temporibus corporis veritatis at aperiam! Ad reiciendis adipisci error.</p>
                    <dl>
                        <dt>Definition 1</dt>
                        <dd>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</dd>
                        <dt>Definition 2</dt>
                        <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                        <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                        <dt>Definition 3</dt>
                        <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                    </dl>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, odit, maiores, et soluta nisi tempora nulla alias ab illum ducimus assumenda reprehenderit reiciendis perferendis veniam minus similique quod id odio.</p>
                </div>
            </div>
        </div>
    </div>
{% highlight html %}
<div class="wrap-for-example">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, facilis, recusandae, consequatur, tempora mollitia porro quos corporis odit impedit odio magnam libero tempore animi a incidunt laudantium eum. Nostrum, natus?</p>
    <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Integer molestie lorem at massa</li>
        <li>Facilisis in pretium nisl aliquet</li>
        <li>Nulla volutpat aliquam velit
            <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
            </ul>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
        <li>Aenean sit amet erat nunc</li>
        <li>Eget porttitor lorem</li>
    </ul>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, quae nam laborum debitis facere quod nemo vitae reiciendis quidem odio voluptate eos molestias doloribus qui sapiente consequuntur odit deleniti quisquam.</p>
    <ol>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit
            <ol>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
            </ol>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
        <li>Aenean sit amet erat nunc</li>
        <li>Eget porttitor lorem</li>
    </ol>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eos, soluta distinctio facilis assumenda amet quidem optio ea perspiciatis debitis reiciendis temporibus corporis veritatis at aperiam! Ad reiciendis adipisci error.</p>
    <dl>
        <dt>Definition 1</dt>
        <dd>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</dd>
        <dt>Definition 2</dt>
        <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
        <dd>Donec id elit non mi porta gravida at eget metus.</dd>
        <dt>Definition 3</dt>
        <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
    </dl>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, odit, maiores, et soluta nisi tempora nulla alias ab illum ducimus assumenda reprehenderit reiciendis perferendis veniam minus similique quod id odio.</p>
</div>
{% endhighlight %}
</div>

### Unstyled

Removes styling from list items

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <ul class="list-unstyled">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                    <li>Nulla volutpat aliquam velit
                        <ul>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                        </ul>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                    <li>Aenean sit amet erat nunc</li>
                    <li>Eget porttitor lorem</li>
                </ul>
            </div>
        </div>
    </div>
{% highlight html %}
<ul class="list-unstyled">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>Nulla volutpat aliquam velit
        <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
        </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
</ul>
{% endhighlight %}
</div>

### Inline

All list items are setup with display: inline-block

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <ul class="list-inline">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                </ul>
            </div>
        </div>
    </div>
{% highlight html %}
<ul class="list-inline">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
</ul>
{% endhighlight %}
</div>


### No icon

Remove the icon for a list

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <ul class="no-icon">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                </ul>
            </div>
        </div>
    </div>
{% highlight html %}
<ul class="no-icon">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
</ul>
{% endhighlight %}
</div>
