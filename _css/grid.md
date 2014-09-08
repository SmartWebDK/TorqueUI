---
layout:     post
title:      Grid
source:     layout/_grid.scss
order:      0
---

<p class="lead">
    TorqueUI includes a responsive grid system. The grid system is a mobil first fluid system. This implies that the grid follows the width of the device or the viewport that is currently viewing the grid, scaling up or down, and increasing or decreasing the amount of columns available on each breakpoint.<br>
    The grid system is built around several predefined classes that control the column with on each breakpoint.
</p>


## Introduction
The grid system is used to structure the layout of your page using a combination of columns and rows. There are some things that are important to know, before you start building your website.

* `.rows` have to be placed within a `.container`, to make sure the columns align properbly.
* `.rows` should only house columns ( columns classes ).
* Columns should contain your content, not `.rows` or `.container`.
* The space / gutters between columns is created with `padding`. 
* To align the columns proberbly, the columns are offset on the last and the first column with a negative margin on the `.row` class.
* Grid columns are created by specifying the number of twelve available columns you wish to span. For example, three equal columns would use three `.col-m-4`.
* If the column count in a single `.row` is higher then the maximum column count for the given breakpoint. The column with break and wrap onto a new line. 
* If you wan't to make sure your design doesn't break, make sure to apply column classes for all breakpoints.

Below are examples of how to work with the grid.


## Grid setup
Below is a table that gives a quick overview of the TorqueUI grid system.

<div class="responsive-table-wrap">
    <table class="table-h-striped">
        <thead>
            <tr>
                <th></th>
                <th>
                    Small devices
                    <small class="is-block">Phones (&lt;768px)</small>
                </th>
                <th>
                    Medium devices
                    <small class="is-block">Tablets (≥768px)</small>
                </th>
                <th>
                    Large devices
                    <small class="is-block">Desktops (≥960px)</small>
                </th>
                <th>
                    XLarge devices
                    <small class="is-block">Desktops (≥1280px)</small>
                </th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td><strong>Container width</strong></td>
            <td>300px</td>
            <td>748px</td>
            <td>940px</td>
            <td>1260px</td>
        </tr>
        <tr>
            <td><strong>Column class</strong></td>
            <td><code>.col-s-*</code></td>
            <td><code>.col-m-*</code></td>
            <td><code>.col-l-*</code></td>
            <td><code>.col-xl-*</code></td>
        </tr>
        <tr>
            <td><strong># of columns</strong></td>
            <td>4</td>
            <td>12</td>
            <td>12</td>
            <td>24</td>
        </tr>
        <tr>
            <td><strong>Column width</strong></td>
            <td>~75px</td>
            <td>~62px</td>
            <td>~78px</td>
            <td>~53px</td>
        </tr>
        <tr>
            <td><strong>Gutter width</strong></td>
            <td colspan="4">20px (px on each side of a column)</td>
        </tr>
        </tbody>
    </table>
</div>


## Container class

The `.container` has some advanced classes that modifies, the classes are state classes, that modifies how responsive the `.container` and therefore the grid system is: 

<div class="responsive-table-wrap">
    <table class="table-h-striped">
        <thead>
            <tr>
                <th style="width: 100px;"></th>
                <th>
                    Small devices
                    <small class="is-block">Phones (&lt;768px)</small>
                </th>
                <th>
                    Medium devices
                    <small class="is-block">Tablets (≥768px)</small>
                </th>
                <th>
                    Large devices
                    <small class="is-block">Desktops (≥960px)</small>
                </th>
                <th>
                    XLarge devices
                    <small class="is-block">Desktops (≥1280px)</small>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>.container</strong></td>
                <td><i class="fa fa-check"></i></td>
                <td><i class="fa fa-check"></i></td>
                <td><i class="fa fa-check"></i></td>
                <td></td>
            </tr>
            <tr>
                <td><strong>.container <br> .with-xlarge</strong></td>
                <td><i class="fa fa-check"></i></td>
                <td><i class="fa fa-check"></i></td>
                <td><i class="fa fa-check"></i></td>
                <td><i class="fa fa-check"></i></td>
            </tr>
            <tr>
                <td><strong>.container <br> .is-small</strong></td>
                <td><i class="fa fa-lock"></i> Locked</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td><strong>.container <br> .is-large</strong></td>
                <td></td>
                <td></td>
                <td><i class="fa fa-lock"></i> Locked</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>

<br>

<div class="panel">
    <div class="panel-heading"><span class="h4"><i class="fa fa-exclamation-circle"></i> Note</span></div>
    <div class="panel-body">
        The two state class <code>.is-small</code> and <code>.is-large</code> are speciel in the way that they lock down the grid system, so it stays at a specific size. They are also special in the way that they neglect the need for the breakpoint definition in the column classes. So the columns are simply <code>.col-1, .col-2, .col-3</code> and so forth.
    </div>
</div>

<br>

## Examples of how to use the grid system

### Example: Stacking grids
Using a set of grid classes, we can create a very basic grid, that stacks rows of columns on top of each other. Note that a row should contain a amount of columns that equal the maximum amount of columns allowed for that breakpoint. Or they should atleast contain a set of columns, that have a sum, that is equal to the maximum allowed for the breakpoint. 

`.row` is visualized with a <span class="row-color">red</span> border.

<div class="row example">
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2">
        <div class="box is-visible-s">1</div>
        <div class="box is-visible-m">1</div>
        <div class="box is-visible-l">1</div>
        <div class="box is-visible-xl">2</div>
    </div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2">
        <div class="box is-visible-s">1</div>
        <div class="box is-visible-m">1</div>
        <div class="box is-visible-l">1</div>
        <div class="box is-visible-xl">2</div>
    </div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2">
        <div class="box is-visible-s">1</div>
        <div class="box is-visible-m">1</div>
        <div class="box is-visible-l">1</div>
        <div class="box is-visible-xl">2</div>
    </div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2">
        <div class="box is-visible-s">1</div>
        <div class="box is-visible-m">1</div>
        <div class="box is-visible-l">1</div>
        <div class="box is-visible-xl">2</div>
    </div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2">
        <div class="box is-visible-s">1</div>
        <div class="box is-visible-m">1</div>
        <div class="box is-visible-l">1</div>
        <div class="box is-visible-xl">2</div>
    </div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2">
        <div class="box is-visible-s">1</div>
        <div class="box is-visible-m">1</div>
        <div class="box is-visible-l">1</div>
        <div class="box is-visible-xl">2</div>
    </div> 
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2">
        <div class="box is-visible-s">1</div>
        <div class="box is-visible-m">1</div>
        <div class="box is-visible-l">1</div>
        <div class="box is-visible-xl">2</div>
    </div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2">
        <div class="box is-visible-s">1</div>
        <div class="box is-visible-m">1</div>
        <div class="box is-visible-l">1</div>
        <div class="box is-visible-xl">2</div>
    </div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2">
        <div class="box is-visible-s">1</div>
        <div class="box is-visible-m">1</div>
        <div class="box is-visible-l">1</div>
        <div class="box is-visible-xl">2</div>
    </div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2">
        <div class="box is-visible-s">1</div>
        <div class="box is-visible-m">1</div>
        <div class="box is-visible-l">1</div>
        <div class="box is-visible-xl">2</div>
    </div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2">
        <div class="box is-visible-s">1</div>
        <div class="box is-visible-m">1</div>
        <div class="box is-visible-l">1</div>
        <div class="box is-visible-xl">2</div>
    </div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2">
        <div class="box is-visible-s">1</div>
        <div class="box is-visible-m">1</div>
        <div class="box is-visible-l">1</div>
        <div class="box is-visible-xl">2</div>
    </div>    
</div>

<div class="row example">
    <div class="col-s-2 col-m-4 col-l-4 col-xl-8">
        <div class="box is-visible-s">2</div>
        <div class="box is-visible-m">4</div>
        <div class="box is-visible-l">4</div>
        <div class="box is-visible-xl">8</div>
    </div> 
    <div class="col-s-2 col-m-4 col-l-4 col-xl-8">
        <div class="box is-visible-s">2</div>
        <div class="box is-visible-m">4</div>
        <div class="box is-visible-l">4</div>
        <div class="box is-visible-xl">8</div>
    </div>     
    <div class="col-s-2 col-m-4 col-l-4 col-xl-8">
        <div class="box is-visible-s">2</div>
        <div class="box is-visible-m">4</div>
        <div class="box is-visible-l">4</div>
        <div class="box is-visible-xl">8</div>
    </div> 
</div>

<div class="row example">
    <div class="col-s-2 col-m-9 col-l-9 col-xl-18">
        <div class="box is-visible-s">2</div>
        <div class="box is-visible-m">9</div>
        <div class="box is-visible-l">9</div>
        <div class="box is-visible-xl">18</div>
    </div>     
    <div class="col-s-2 col-m-3 col-l-3 col-xl-6">
        <div class="box is-visible-s">2</div>
        <div class="box is-visible-m">3</div>
        <div class="box is-visible-l">3</div>
        <div class="box is-visible-xl">6</div>
    </div>         
</div>

The example above shows the use of all breakpoint sizes (small to xlarge) by using all the prefix and classes: `col-s-*, col-m-*, col-l-*, col-xl-*`. See the code below. If you resize your browser window, you will see how the example changes.

<div class="m-browser">
    <div class="browser">
        <div class="image"></div>
    </div>
    {% highlight html %}
<div class="row">
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2"></div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2"></div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2"></div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2"></div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2"></div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2"></div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2"></div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2"></div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2"></div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2"></div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2"></div>
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2"></div>
</div>

<div class="row">
    <div class="col-s-2 col-m-4 col-l-4 col-xl-8"></div>
    <div class="col-s-2 col-m-4 col-l-4 col-xl-8"></div>
    <div class="col-s-2 col-m-4 col-l-4 col-xl-8"></div>
</div>

<div class="row">
    <div class="col-s-2 col-m-9 col-l-9 col-xl-18"></div>
    <div class="col-s-2 col-m-3 col-l-3 col-xl-6"></div>
</div>
    {% endhighlight %}
</div>


### Example: Column overflow
When using the grid, it is important to think about the width you give your columns. If you wan't a even and aligned grid. The count / sum of columns should always add up or match the breakpoint maximum count. Check the table above to see the info about the grid. It is possible to put more columns / higher sum of columns into a row, but then the row will overflow and wrap. This can be used if you wan't to make a long list of elements, within the same row. See the to examples below, to see what happens when the columns overflow, with a matching and unmatching column count:

`.row` is visualized with a <span class="row-color">red</span> border.

<div class="row example">
    <div class="col-s-2 col-m-8 col-l-8 col-xl-16">
        <div class="box is-visible-s">2</div>
        <div class="box is-visible-m">8</div>
        <div class="box is-visible-l">8</div>
        <div class="box is-visible-xl">16</div>
    </div>         
    <div class="col-s-3 col-m-6 col-l-6 col-xl-12">
        <div class="box is-visible-s">3</div>
        <div class="box is-visible-m">6</div>
        <div class="box is-visible-l">6</div>
        <div class="box is-visible-xl">12</div>
    </div> 
    <div class="col-s-1 col-m-4 col-l-4 col-xl-8">
        <div class="box is-visible-s">1</div>
        <div class="box is-visible-m">4</div>
        <div class="box is-visible-l">4</div>
        <div class="box is-visible-xl">8</div>
    </div>      
</div>

<div class="row example">
    <div class="col-s-2 col-m-6 col-l-6 col-xl-12">
        <div class="box is-visible-s">2</div>
        <div class="box is-visible-m">6</div>
        <div class="box is-visible-l">6</div>
        <div class="box is-visible-xl">12</div>
    </div>
    <div class="col-s-2 col-m-6 col-l-6 col-xl-12">
        <div class="box is-visible-s">2</div>
        <div class="box is-visible-m">6</div>
        <div class="box is-visible-l">6</div>
        <div class="box is-visible-xl">12</div>
    </div>
    <div class="col-s-2 col-m-6 col-l-6 col-xl-12">
        <div class="box is-visible-s">2</div>
        <div class="box is-visible-m">6</div>
        <div class="box is-visible-l">6</div>
        <div class="box is-visible-xl">12</div>
    </div>
    <div class="col-s-2 col-m-6 col-l-6 col-xl-12">
        <div class="box is-visible-s">2</div>
        <div class="box is-visible-m">6</div>
        <div class="box is-visible-l">6</div>
        <div class="box is-visible-xl">12</div>
    </div>
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image"></div>
    </div>
    {% highlight html %}
<div class="row">
    <div class="col-s-2 col-m-8 col-l-8 col-xl-16"></div>     
    <div class="col-s-3 col-m-6 col-l-6 col-xl-12"></div>
    <div class="col-s-1 col-m-4 col-l-4 col-xl-8"></div>
</div>

<div class="row">
    <div class="col-s-2 col-m-6 col-l-6 col-xl-12"></div>
    <div class="col-s-2 col-m-6 col-l-6 col-xl-12"></div>
    <div class="col-s-2 col-m-6 col-l-6 col-xl-12"></div>
    <div class="col-s-2 col-m-6 col-l-6 col-xl-12"></div>
</div>        
    {% endhighlight %}
</div>



### Example: Bleed and offset
It is possible to bleed and offset columns with the bleed (`.col-s-bleed-*, .col-m-bleed-*, .col-l-bleed-*, .col-xl-bleed-*`) and offset (`.col-s-offset-*, .col-m-offset-*, .col-l-offset-*, .col-xl-offset-*`) classes. Offsetting columns effects the following columns in the same `.row`.

`.row` is visualized with a <span class="row-color">red</span> border.

<div class="row example">
    <div class="col-s-1 col-s-bleed-3 col-m-1 col-m-bleed-3 col-l-1 col-l-bleed-3 col-xl-2 col-xl-bleed-3">
        <div class="box">-3</div>
    </div>
</div>
<div class="row example">
    <div class="col-s-1 col-s-bleed-2 col-m-1 col-m-bleed-2 col-l-1 col-l-bleed-2 col-xl-2 col-xl-bleed-2">
        <div class="box">-2</div>
    </div>
</div>
<div class="row example">
    <div class="col-s-1 col-s-bleed-1 col-m-1 col-m-bleed-1 col-l-1 col-l-bleed-1 col-xl-2 col-xl-bleed-1">
        <div class="box">-1</div>
    </div>
</div>
<div class="row example">
    <div class="col-s-1 col-m-1 col-l-1 col-xl-2">
        <div class="box">0</div>
    </div>
</div>
<div class="row example">
    <div class="col-s-1 col-s-offset-1 col-m-1 col-m-offset-1 col-l-1 col-l-offset-1 col-xl-2 col-xl-offset-1">
        <div class="box">+1</div>
    </div>
</div>
<div class="row example">
    <div class="col-s-1 col-s-offset-3 col-m-1 col-m-offset-5 col-l-1 col-l-offset-5 col-xl-2 col-xl-offset-5">
        <div class="box is-visible-s">+3</div>
        <div class="box is-hidden-s">+5</div>
    </div>
</div>
<div class="row example">
    <div class="col-s-1 col-s-offset-4 col-m-1 col-m-offset-8 col-l-1 col-l-offset-8 col-xl-2 col-xl-offset-16">
        <div class="box is-visible-s">+4</div>
        <div class="box is-hidden-s is-hidden-xl">+8</div>
        <div class="box is-visible-xl">+16</div>
    </div>
</div>
<div class="row example">
    <div class="col-s-1 col-s-offset-5 col-m-1 col-m-offset-12 col-l-1 col-l-offset-12 col-xl-2 col-xl-offset-25">
        <div class="box is-visible-s">+5</div>
        <div class="box is-hidden-s is-hidden-xl">+12</div>
        <div class="box is-visible-xl">+25</div>
    </div>
</div>
<div class="row example">
    <div class="col-s-1 col-s-offset-6 col-m-1 col-m-offset-15 col-l-1 col-l-offset-15 col-xl-2 col-xl-offset-27">
        <div class="box is-visible-s">+6</div>
        <div class="box is-hidden-s is-hidden-xl">+15</div>
        <div class="box is-visible-xl">+27</div>
    </div>
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image"></div>
    </div>
    {% highlight html %}
<div class="row">
    <div class="col-s-1 col-s-bleed-3 
                col-m-1 col-m-bleed-3 
                col-l-1 col-l-bleed-3 
                col-xl-1 col-xl-bleed-3">-3</div>
</div>
<div class="row">
    <div class="col-s-1 col-s-bleed-2 
                col-m-1 col-m-bleed-2 
                col-l-1 col-l-bleed-2 
                col-xl-1 col-xl-bleed-2">-2</div>
</div>
<div class="row">
    <div class="col-s-1 col-s-bleed-1 
                col-m-1 col-m-bleed-1 
                col-l-1 col-l-bleed-1 
                col-xl-1 col-xl-bleed-1">-1</div>
</div>
<div class="row">
    <div class="col-s-1 col-m-1 col-l-1 col-xl-1">0</div>
</div>
<div class="row">
    <div class="col-s-1 col-s-offset-1 
                col-m-1 col-m-offset-1 
                col-l-1 col-l-offset-1 
                col-xl-1 col-xl-offset-1">+1</div>
</div>
<div class="row">
    <div class="col-s-1 col-s-offset-2 
                col-m-1 col-m-offset-2 
                col-l-1 col-l-offset-2 
                col-xl-1 col-xl-offset-2">+2</div>
</div>
<div class="row">
    <div class="col-s-1 col-s-offset-4 
                col-m-1 col-m-offset-5 
                col-l-1 col-l-offset-5 
                col-xl-1 col-xl-offset-5">+5</div>
</div>
<div class="row">
    <div class="col-s-1 col-s-offset-4 
                col-m-1 col-m-offset-8 
                col-l-1 col-l-offset-8 
                col-xl-1 col-xl-offset-16">+8</div>
</div>
<div class="row">
    <div class="col-s-1 col-s-offset-4 
                col-m-1 col-m-offset-12 
                col-l-1 col-l-offset-12 
                col-xl-1 col-xl-offset-25">+12</div>
</div>
<div class="row">
    <div class="col-s-1 col-s-offset-4 
                col-m-1 col-m-offset-15 
                col-l-1 col-l-offset-15 
                col-xl-1 col-xl-offset-27">+15</div>
</div>    
    {% endhighlight %}
</div>



### Example: Column ordering (Pull and push)
It is possible to move columns between eachother and switch positions with the pull (`.col-s-pull-*, .col-m-pull-*, .col-l-pull-*, .col-xl-pull-*`) and push (`.col-s-push-*, .col-m-push-*, .col-l-push-*, .col-xl-push-*`) classes, . Pushing and pulling columns does not effects the following columns in the same `.row`.

`.row` is visualized with a <span class="row-color">red</span> border.

<div class="row example">
    <div class="col-s-2
                col-m-8 col-m-push-4
                col-l-8 col-l-push-4
                col-xl-17 col-xl-push-7">
        <div class="box is-visible-s">col-2 push-2</div>
        <div class="box is-hidden-s is-hidden-xl">.col-8 .push-4</div>
        <div class="box is-visible-xl">.col-xl-17 .col-xl-push-7</div>
    </div>
    <div class="col-s-2
                col-m-4 col-m-pull-8
                col-l-4 col-l-pull-8
                col-xl-7 col-xl-pull-17">
        <div class="box is-visible-s">col-2 pull-2</div>
        <div class="box is-hidden-s is-hidden-xl">.col-4 .pull-8</div>
        <div class="box is-visible-xl">col-xl-7 .col-xl-pull-17</div>
    </div>
</div>

<div class="row example">
    <div class="col-s-3 col-s-push-1
                col-m-10 col-m-push-2
                col-l-10 col-l-push-2
                col-xl-9 col-xl-push-15">
        <div class="box is-visible-s">col-3 push-1</div>
        <div class="box is-hidden-s is-hidden-xl">col-10 push-2</div>
        <div class="box is-visible-xl">.col-xl-9 .col-xl-push-15</div>
    </div>
    <div class="col-s-1 col-s-pull-3
                col-m-2 col-m-pull-10
                col-l-2 col-l-pull-10
                col-xl-15 col-xl-pull-9">
        <div class="box is-visible-s">c1 p2</div>
        <div class="box is-hidden-s is-hidden-xl">c2 p10</div>
        <div class="box is-visible-xl">col-xl-15 .col-xl-pull-9</div>
    </div>
</div>

<div class="row example">
    <div class="col-s-2 col-s-push-1
                col-m-6 col-m-push-3
                col-l-6 col-l-push-3
                col-xl-12 col-xl-push-6">
        <div class="box is-visible-s">col-2 push-1</div>
        <div class="box is-hidden-s is-hidden-xl">col-6 push-3</div>
        <div class="box is-visible-xl">.col-xl-12 .col-xl-push-6</div>
    </div>
</div>


<div class="m-browser">
    <div class="browser">
        <div class="image"></div>
    </div>
    {% highlight html %}
<div class="row">
    <div class="col-s-1 col-s-push-3
                col-m-1 col-m-push-11
                col-l-1 col-l-push-11
                col-xl-1 col-xl-push-11">p-11</div>
    <div class="col-s-3 col-s-pull-1
                col-m-11 col-m-pull-1
                col-l-11 col-l-pull-1
                col-xl-11 col-xl-pull-1">pull-1</div>
</div>
<div class="row">
    <div class="col-s-2 col-s-push-2
                col-m-2 col-m-push-10
                col-l-2 col-l-push-10
                col-xl-2 col-xl-push-10">push-10</div>
    <div class="col-s-2 col-s-pull-2
                col-m-10 col-m-pull-2
                col-l-10 col-l-pull-2
                col-xl-10 col-xl-pull-2">pull-2</div>
</div>
<div class="row">
    <div class="col-s-2 col-s-push-1
                col-m-6 col-m-push-3
                col-l-6 col-l-push-3
                col-xl-12 col-xl-push-6">push-6</div>
</div>
    {% endhighlight %}
</div>



### Example: Grid nesting
To nest the grid system, you have to add a new `.row` inside the column, where you want to place a new grid. Nested grids are much like using the grid normally. Execpt the grid is inside a `.row`. The same rules still apply; Nested `.row`'s should include a set of columns that add up to maximum of the breakpoint count or less (it is not required that you use all available columns).

`.row` is visualized with a <span class="row-color">red</span> border.

<div class="row example level1">
    <div class="col-s-2 col-m-4 col-l-4 col-xl-8">
        <div class="box">level 1</div>
    </div>
    <div class="col-s-2 col-m-8 col-l-8 col-xl-16">
        <div class="row example level2">
            <div class="col-s-2 col-m-6 col-l-6 col-xl-12">
                <div class="box">level 2</div>
            </div>                
            <div class="col-s-2 col-m-6 col-l-6 col-xl-12">
                <div class="row example level3">
                    <div class="col-s-2 col-m-6 col-l-6 col-xl-12">
                        <div class="box">level 3</div>
                    </div>                
                    <div class="col-s-2 col-m-6 col-l-6 col-xl-12">
                        <div class="row example level4">
                            <div class="col-s-4 col-m-12 col-l-12 col-xl-24">
                                <div class="box">level 4</div>
                            </div>                
                        </div>
                    </div>                            
                </div>
            </div>                            
        </div>
    </div>
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image"></div>
    </div>
    {% highlight html %}
<div class="row">
    <div class="col-s-2 col-m-4 col-l-4 col-xl-8">level1</div>
    <div class="col-s-2 col-m-8 col-l-8 col-xl-16">
        <div class="row">
            <div class="col-s-2 col-m-6 col-l-6 col-xl-12">level2</div>
            <div class="col-s-2 col-m-6 col-l-6 col-xl-12">
                <div class="row">
                    <div class="col-s-2 col-m-6 col-l-6 col-xl-12">level3</div>
                    <div class="col-s-2 col-m-6 col-l-6 col-xl-12">
                        <div class="row">
                            <div class="col-s-4 col-m-12 col-l-12 col-xl-24">level4</div>
                        </div>                        
                    </div>
                </div>
            </div>                            
        </div>
    </div>
</div>
</div>
    {% endhighlight %}
</div>


### Example: Complete example (website wireframe)
Below is a complete example that shows how you could wireframe a simple website. Resize the browser, and see how the example behaves. 

<div class="panel">
    <div class="panel-heading"><span class="h4"><i class="fa fa-exclamation-circle"></i> Note</span></div>
    <div class="panel-body">Note how the sidebar is pushed and the productlist is pulled. What we have done is, that we have placed the sidebar first in the DOM. So that when we are on the mobile breakpoint, the sidebar comes before the productlist. But on all the other breakpoints we reorder the columns with push and pull classes, so that the sidebar is on right side of the productlist. 
    </div>
</div>


<div class="row example">
    <div class="col-s-4 col-m-12 col-l-12 col-xl-24">
        <div class="box">Header</div>
    </div>
    <div class="col-s-4 col-m-3 col-l-3 col-xl-5">
        <div class="box">Navigation</div>
    </div>
    <div class="col-s-4 
        col-m-3 col-m-push-6
        col-l-3 col-l-push-6
        col-xl-5 col-xl-push-14">
        <div class="box">Sidebar</div>
    </div>        
    <div class="col-s-4 
        col-m-6 col-m-pull-3
        col-l-6 col-l-pull-3
        col-xl-14 col-xl-pull-5">
        <div class="row example">
             <div class="col-s-2 col-m-4 col-l-4 col-xl-8"><div class="box">Product</div></div>
             <div class="col-s-2 col-m-4 col-l-4 col-xl-8"><div class="box">Product</div></div>
             <div class="col-s-2 col-m-4 col-l-4 col-xl-8"><div class="box">Product</div></div>
             <div class="col-s-2 col-m-4 col-l-4 col-xl-8"><div class="box">Product</div></div>
             <div class="col-s-2 col-m-4 col-l-4 col-xl-8"><div class="box">Product</div></div>
             <div class="col-s-2 col-m-4 col-l-4 col-xl-8"><div class="box">Product</div></div>
             <div class="col-s-2 col-m-4 col-l-4 col-xl-8"><div class="box">Product</div></div>
             <div class="col-s-2 col-m-4 col-l-4 col-xl-8"><div class="box">Product</div></div>
             <div class="col-s-2 col-m-4 col-l-4 col-xl-8"><div class="box">Product</div></div>
             <div class="col-s-2 col-m-4 col-l-4 col-xl-8"><div class="box">Product</div></div>
             <div class="col-s-2 col-m-4 col-l-4 col-xl-8"><div class="box">Product</div></div>
             <div class="col-s-2 col-m-4 col-l-4 col-xl-8"><div class="box">Product</div></div>             
        </div>
    </div>
    <div class="col-s-4 col-m-12 col-l-12 col-xl-24">
        <div class="box">Footer</div>
    </div>    
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image"></div>
    </div>
    {% highlight html %}
<div class="row">
    <div class="col-s-4 col-m-12 col-l-12 col-xl-24">Header</div>
    <div class="col-s-4 col-m-3 col-l-3 col-xl-5">Navigation</div>
    <div class="col-s-4 
        col-m-3 col-m-push-6
        col-l-3 col-l-push-6
        col-xl-5 col-xl-push-14">Sidebar</div>
    <div class="col-s-4 
        col-m-6 col-m-pull-3
        col-l-6 col-l-pull-3
        col-xl-14 col-xl-pull-5">
        <div class="row">
             <div class="col-s-2 col-m-4 col-l-4 col-xl-8">Product</div>
             <div class="col-s-2 col-m-4 col-l-4 col-xl-8">Product</div>
             <div class="col-s-2 col-m-4 col-l-4 col-xl-8">Product</div>
             …
        </div>
    </div>
    <div class="col-s-4 col-m-12 col-l-12 col-xl-24">Footer</div>
</div>
    {% endhighlight %}
</div>
