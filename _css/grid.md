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
