---
layout:     post
title:      Grid
source:     modules/_grid.scss
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

<div class="table-responsive">
    <table class="table-h-striped">
      <thead>
        <tr>
          <th></th>
          <th>
            Small devices
            <small>Phones (&lt;768px)</small>
          </th>
          <th>
            Medium devices
            <small>Tablets (≥768px)</small>
          </th>
          <th>
            Large devices
            <small>Desktops (≥960px)</small>
          </th>
          <th>
            XLarge devices
            <small>Desktops (≥1280px)</small>
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
          <td><code>.col-s-x</code></td>
          <td><code>.col-m-x</code></td>
          <td><code>.col-l-x</code></td>
          <td><code>.col-xl-x</code></td>
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
        <tr>
          <td><strong>Nestable</strong></td>
          <td colspan="4"><i class="fa fa-check"></i></td>
        </tr>
        <tr>
          <td><strong>Offsets</strong></td>
          <td colspan="4"><i class="fa fa-check"></i></td>
        </tr>
        <tr>
          <td><strong>Column ordering</strong></td>
          <td colspan="4"><i class="fa fa-check"></i></td>
        </tr>
      </tbody>
    </table>
  </div>

