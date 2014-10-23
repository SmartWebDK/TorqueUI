---
layout:     post
title:      Pagination
source:     modules/_pagination.scss
order:      1
component:  components
---

<p class="lead">Pagination component</p>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <ul class="pagination">
                  <li><a href="#">«</a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">»</a></li>
                </ul>
            </div>
        </div>
    </div>
{% highlight html %}
<ul class="pagination">
  <li><a href="#">«</a></li>
  <li><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
  <li><a href="#">»</a></li>
</ul>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <ul class="pagination">
                  <li><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
{% highlight html %}
<ul class="pagination">
  <li><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
  <li><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
  <li><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
</ul>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <ul class="pagination">
                  <li><a href="#"><i class="fa fa-angle-left"></i></a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
{% highlight html %}
<ul class="pagination">
  <li><a href="#"><i class="fa fa-angle-left"></i></a></li>
  <li><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
  <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
</ul>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <ul class="pagination">
                  <li><a href="#">«</a></li>
                  <li class="current"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">»</a></li>
                </ul>
            </div>
        </div>
    </div>
{% highlight html %}
<ul class="pagination">
  <li><a href="#">«</a></li>
  <li class="current"><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
  <li><a href="#">»</a></li>
</ul>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <ul class="pagination">
                  <li><a href="#">«</a></li>
                  <li class="is-disabled"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">»</a></li>
                </ul>
            </div>
        </div>
    </div>
{% highlight html %}
<ul class="pagination">
  <li><a href="#">«</a></li>
  <li class="is-disabled"><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
  <li><a href="#">»</a></li>
</ul>
{% endhighlight %}
</div>

<p>Sizes</p>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <ul class="pagination large">
                  <li><a href="#">«</a></li>
                  <li class="is-disabled"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li class="current"><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">»</a></li>
                </ul>
            </div>
        </div>
    </div>
{% highlight html %}
<ul class="pagination large">
  <li><a href="#">«</a></li>
  <li class="is-disabled"><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li class="current"><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
  <li><a href="#">»</a></li>
</ul>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <ul class="pagination default">
                  <li><a href="#">«</a></li>
                  <li class="is-disabled"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li class="current"><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">»</a></li>
                </ul>
            </div>
        </div>
    </div>
{% highlight html %}
<ul class="pagination default">
  <li><a href="#">«</a></li>
  <li class="is-disabled"><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li class="current"><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
  <li><a href="#">»</a></li>
</ul>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <ul class="pagination small">
                  <li><a href="#">«</a></li>
                  <li class="is-disabled"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li class="current"><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">»</a></li>
                </ul>
            </div>
        </div>
    </div>
{% highlight html %}
<ul class="pagination small">
  <li><a href="#">«</a></li>
  <li class="is-disabled"><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li class="current"><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
  <li><a href="#">»</a></li>
</ul>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <ul class="pagination xsmall">
                  <li><a href="#">«</a></li>
                  <li class="is-disabled"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li class="current"><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">»</a></li>
                </ul>
            </div>
        </div>
    </div>
{% highlight html %}
<ul class="pagination xsmall">
  <li><a href="#">«</a></li>
  <li class="is-disabled"><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li class="current"><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
  <li><a href="#">»</a></li>
</ul>
{% endhighlight %}
</div>
