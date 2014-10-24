---
layout:     post
title:      Tables
source:     modules/_tables.scss
order:      1
component:  css
---


<p class="lead">Eventhough though the web has become modern and responsive, it is still important to support tables, but not in the old faction way, but in the correct way. Mainly for presenting tabular data. And TorqueUI contains a CSS module with style for tables, even responsive tables.</p>

# Table

Tables in TorqueUI comes with different themes for tables, below is a simple table, using the ```.table``` class.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                        <td>4</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                     <tr>
                        <td>5</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Username</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
  </div>
{% highlight html %}
<table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody> ... </tbody>
    <thead>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody> ... </tbody>
    <tfoot>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </tfoot>
</table>
{% endhighlight %}
</div>

# Table horizontally striped

The same table as above but with horizontally stripes. Using the ```.table-h-striped``` class.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <table class="table-h-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                        <td>4</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                     <tr>
                        <td>5</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Username</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
  </div>
{% highlight html %}
<table class="table-h-striped">
    <thead>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody> ... </tbody>
    <thead>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody> ... </tbody>
    <tfoot>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </tfoot>
</table>
{% endhighlight %}
</div>




# Table vertically striped

The same table as above but with vertically stripes. Using the ```.table-v-striped``` class.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <table class="table-v-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                        <td>4</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                     <tr>
                        <td>5</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Anonymous</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Username</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
  </div>
{% highlight html %}
<table class="table-h-striped">
    <thead>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody> ... </tbody>
    <thead>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody> ... </tbody>
    <tfoot>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </tfoot>
</table>
{% endhighlight %}
</div>


# Table vertically and horizontally striped

It is possible to combine the ```.table-h-striped``` and ```.table-v-striped``` classes.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
<table class="table-h-striped table-v-striped">
    <thead>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>Anonymous</td>
        </tr>
        <tr>
            <td>2</td>
            <td>John</td>
            <td>Doe</td>
            <td>Anonymous</td>
        </tr>
        <tr>
            <td>3</td>
            <td>John</td>
            <td>Doe</td>
            <td>Anonymous</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody>
         <tr>
            <td>4</td>
            <td>John</td>
            <td>Doe</td>
            <td>Anonymous</td>
        </tr>
         <tr>
            <td>5</td>
            <td>John</td>
            <td>Doe</td>
            <td>Anonymous</td>
        </tr>
        <tr>
            <td>6</td>
            <td>John</td>
            <td>Doe</td>
            <td>Anonymous</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </tfoot>
</table>
        </div>
    </div>
  </div>
{% highlight html %}
<table class="table-h-striped table-v-striped">
    <thead>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody> ... </tbody>
    <thead>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody> ... </tbody>
    <tfoot>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </tfoot>
</table>
{% endhighlight %}
</div>



# Table with borders 

A third theme is a bordered table, with borders around all the cells using the ```.table-border```.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
<table class="table-border">
    <thead>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>Anonymous</td>
        </tr>
        <tr>
            <td>2</td>
            <td>John</td>
            <td>Doe</td>
            <td>Anonymous</td>
        </tr>
        <tr>
            <td>3</td>
            <td>John</td>
            <td>Doe</td>
            <td>Anonymous</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody>
         <tr>
            <td>4</td>
            <td>John</td>
            <td>Doe</td>
            <td>Anonymous</td>
        </tr>
         <tr>
            <td>5</td>
            <td>John</td>
            <td>Doe</td>
            <td>Anonymous</td>
        </tr>
        <tr>
            <td>6</td>
            <td>John</td>
            <td>Doe</td>
            <td>Anonymous</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </tfoot>
</table>
        </div>
    </div>
  </div>
{% highlight html %}
<table class="table-border">
    <thead>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody> ... </tbody>
    <thead>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody> ... </tbody>
    <tfoot>
        <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
        </tr>
    </tfoot>
</table>
{% endhighlight %}
</div>


# Responsive wrapper for tables

To make a table responsive you need to wrap it with the ```.responsive-table-wrap``` wrapper element. Resize you browser and see how the table functions.

<div class="m-browser">
  <div class="browser">
    <div class="image">
        <div class="content clearfix">
            <div class="responsive-table-wrap">        
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>Anonymous</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>Anonymous</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>Anonymous</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>4</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>Anonymous</td>
                        </tr>
                         <tr>
                            <td>5</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>Anonymous</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>Anonymous</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>#</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Username</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
  </div>
{% highlight html %}
<div class="responsive-table-wrap">
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Username</th>
            </tr>
        </thead>
        <tbody> ... </tbody>
        <thead>
            <tr>
                <th>#</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Username</th>
            </tr>
        </thead>
        <tbody> ... </tbody>
        <tfoot>
            <tr>
                <th>#</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Username</th>
            </tr>
        </tfoot>
    </table>
</div>
{% endhighlight %}
</div>

