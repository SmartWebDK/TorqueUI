---
layout:		post
title:		Form
source:		modules/_form.scss
order:      1
component:  css
---

<p class="lead">
  A display of various forms and inputs in the framework.
</p>

### Input type text

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <input type="text">
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <input type="text">
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <input type="text" class="form-input">
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <input type="text" class="form-input">
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-input input-group-main">
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <input type="text" class="form-input input-group-main">
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-input input-group-main">
                        <span class="input-group-addon">.com</span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <input type="text" class="form-input input-group-main">
        <span class="input-group-addon">.com</span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                        <input type="text" class="form-input input-group-main">
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
        <input type="text" class="form-input input-group-main">
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">www.</span>
                        <input type="text" class="form-input input-group-main">
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon">www.</span>
        <input type="text" class="form-input input-group-main">
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                        <input type="text" class="form-input input-group-main">
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
        <input type="text" class="form-input input-group-main">
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">www.</span>
                        <input type="text" class="form-input input-group-main">
                        <span class="input-group-addon">.com</span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon">www.</span>
        <input type="text" class="form-input input-group-main">
        <span class="input-group-addon">.com</span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                        <span class="input-group-addon">www.</span>
                        <input type="text" class="form-input input-group-main">
                        <span class="input-group-addon">.com</span>
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
        <span class="input-group-addon">www.</span>
        <input type="text" class="form-input input-group-main">
        <span class="input-group-addon">.com</span>
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

### Input type number

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <input type="number" pattern="[0-9]*">
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <input type="number" pattern="[0-9]*">
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <input type="number" pattern="[0-9]*" class="form-input">
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <input type="number" pattern="[0-9]*" class="form-input">
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
                        <span class="input-group-addon">.com</span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
        <span class="input-group-addon">.com</span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">www.</span>
                        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon">www.</span>
        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">www.</span>
                        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
                        <span class="input-group-addon">.com</span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon">www.</span>
        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
        <span class="input-group-addon">.com</span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                        <span class="input-group-addon">www.</span>
                        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
                        <span class="input-group-addon">.com</span>
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
        <span class="input-group-addon">www.</span>
        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
        <span class="input-group-addon">.com</span>
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
                        <span class="input-group-addon" style="background-color: #bada55; border-color: #bada55;"><i style="color:white;" class="fa fa-plus"></i></span>
                        <span class="input-group-addon" style="background-color: #f35656; border-color: #f35656;"><i style="color:white;" class="fa fa-minus"></i></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <input type="number" pattern="[0-9]*" class="form-input input-group-main">
        <span class="input-group-addon" style="background-color: #bada55; border-color: #bada55;"><i style="color:white;" class="fa fa-plus"></i></span>
        <span class="input-group-addon" style="background-color: #f35656; border-color: #f35656;"><i style="color:white;" class="fa fa-minus"></i></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

### Input type radio button

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <input type="radio">
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <input type="radio">
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><input id="radio-test1" type="radio" name="notifications"></span>
                        <label for="radio-test1" class="form-label input-group-main">Checkbox test 1</label>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><input id="radio-test1" type="radio" name="notifications"></span>
        <label for="radio-test1" class="form-label input-group-main">Checkbox test 1</label>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <label for="radio-test2" class="form-label input-group-main">Checkbox test 2</label>
                        <span class="input-group-addon"><input id="radio-test2" type="radio" name="notifications"></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <label for="radio-test2" class="form-label input-group-main">Checkbox test 2</label>
        <span class="input-group-addon"><input id="radio-test2" type="radio" name="notifications"></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><input id="radio-test3" type="radio" name="notifications"></span>
                        <label for="radio-test3" class="form-label input-group-main">Checkbox test 3</label>
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><input id="radio-test3" type="radio" name="notifications"></span>
        <label for="radio-test3" class="form-label input-group-main">Checkbox test 3</label>
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><input id="radio-test4" type="radio" name="notifications"></span>
                        <label for="radio-test4" class="form-label input-group-main">Checkbox test 4</label>
                        <span class="input-group-addon">.com</span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><input id="radio-test4" type="radio" name="notifications"></span>
        <label for="radio-test4" class="form-label input-group-main">Checkbox test 4</label>
        <span class="input-group-addon">.com</span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                        <label for="radio-test5" class="form-label input-group-main">Checkbox test 5</label>
                        <span class="input-group-addon"><input id="radio-test5" type="radio" name="notifications"></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
        <label for="radio-test5" class="form-label input-group-main">Checkbox test 5</label>
        <span class="input-group-addon"><input id="radio-test5" type="radio" name="notifications"></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">www.</span>
                        <label for="radio-test6" class="form-label input-group-main">Checkbox test 6</label>
                        <span class="input-group-addon"><input id="radio-test6" type="radio" name="notifications"></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon">www.</span>
        <label for="radio-test6" class="form-label input-group-main">Checkbox test 6</label>
        <span class="input-group-addon"><input id="radio-test6" type="radio" name="notifications"></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

### Input type checkbox

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <input type="checkbox">
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <input type="checkbox">
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><input id="check-test1" type="checkbox" name="notifications"></span>
                        <label for="check-test1" class="form-label input-group-main">Checkbox test 1</label>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><input id="check-test1" type="checkbox" name="notifications"></span>
        <label for="check-test1" class="form-label input-group-main">Checkbox test 1</label>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <label for="check-test2" class="form-label input-group-main">Checkbox test 2</label>
                        <span class="input-group-addon"><input id="check-test2" type="checkbox" name="notifications"></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <label for="check-test2" class="form-label input-group-main">Checkbox test 2</label>
        <span class="input-group-addon"><input id="check-test2" type="checkbox" name="notifications"></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><input id="check-test3" type="checkbox" name="notifications"></span>
                        <label for="check-test3" class="form-label input-group-main">Checkbox test 3</label>
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><input id="check-test3" type="checkbox" name="notifications"></span>
        <label for="check-test3" class="form-label input-group-main">Checkbox test 3</label>
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><input id="check-test4" type="checkbox" name="notifications"></span>
                        <label for="check-test4" class="form-label input-group-main">Checkbox test 4</label>
                        <span class="input-group-addon">.com</span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><input id="check-test4" type="checkbox" name="notifications"></span>
        <label for="check-test4" class="form-label input-group-main">Checkbox test 4</label>
        <span class="input-group-addon">.com</span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                        <label for="check-test5" class="form-label input-group-main">Checkbox test 5</label>
                        <span class="input-group-addon"><input id="check-test5" type="checkbox" name="notifications"></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
        <label for="check-test5" class="form-label input-group-main">Checkbox test 5</label>
        <span class="input-group-addon"><input id="check-test5" type="checkbox" name="notifications"></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">www.</span>
                        <label for="check-test6" class="form-label input-group-main">Checkbox test 6</label>
                        <span class="input-group-addon"><input id="check-test6" type="checkbox" name="notifications"></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon">www.</span>
        <label for="check-test6" class="form-label input-group-main">Checkbox test 6</label>
        <span class="input-group-addon"><input id="check-test6" type="checkbox" name="notifications"></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

### Select

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <select>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Cylon</option>
                    </select>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <select>
        <option>Male</option>
        <option>Female</option>
        <option>Cylon</option>
    </select>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <select class="form-input form-select">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Cylon</option>
                    </select>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <select class="form-input form-select">
        <option>Male</option>
        <option>Female</option>
        <option>Cylon</option>
    </select>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <select class="form-input input-group-main form-select">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Cylon</option>
                        </select>
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <select class="form-input input-group-main form-select">
            <option>Male</option>
            <option>Female</option>
            <option>Cylon</option>
        </select>
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <select class="form-input input-group-main form-select">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Cylon</option>
                        </select>
                        <span class="input-group-addon">.com</span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <select class="form-input input-group-main form-select">
            <option>Male</option>
            <option>Female</option>
            <option>Cylon</option>
        </select>
        <span class="input-group-addon">.com</span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                        <select class="form-input input-group-main form-select">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Cylon</option>
                        </select>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
        <select class="form-input input-group-main form-select">
            <option>Male</option>
            <option>Female</option>
            <option>Cylon</option>
        </select>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">www.</span>
                        <select class="form-input input-group-main form-select">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Cylon</option>
                        </select>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon">www.</span>
        <select class="form-input input-group-main form-select">
            <option>Male</option>
            <option>Female</option>
            <option>Cylon</option>
        </select>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                        <select class="form-input input-group-main form-select">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Cylon</option>
                        </select>
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
        <select class="form-input input-group-main form-select">
            <option>Male</option>
            <option>Female</option>
            <option>Cylon</option>
        </select>
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">www.</span>
                        <select class="form-input input-group-main form-select">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Cylon</option>
                        </select>
                        <span class="input-group-addon">.com</span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon">www.</span>
        <select class="form-input input-group-main form-select">
            <option>Male</option>
            <option>Female</option>
            <option>Cylon</option>
        </select>
        <span class="input-group-addon">.com</span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                        <span class="input-group-addon">www.</span>
                        <select class="form-input input-group-main form-select">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Cylon</option>
                        </select>
                        <span class="input-group-addon">.com</span>
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
        <span class="input-group-addon">www.</span>
        <select class="form-input input-group-main form-select">
            <option>Male</option>
            <option>Female</option>
            <option>Cylon</option>
        </select>
        <span class="input-group-addon">.com</span>
        <span class="input-group-addon"><i class="fa fa-check"></i></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

### Disabled styles

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <input type="text" class="form-input" disabled="disabled">
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <input type="text" class="form-input" disabled="disabled">
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <input type="number" class="form-input" disabled="disabled">
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <input type="number" class="form-input" disabled="disabled">
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <textarea class="form-input" disabled="disabled"></textarea>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <textarea class="form-input" disabled="disabled"></textarea>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <select class="form-input form-select" disabled="disabled">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Cylon</option>
                    </select>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <select class="form-input form-select" disabled="disabled">
        <option>Male</option>
        <option>Female</option>
        <option>Cylon</option>
    </select>
</fieldset>
{% endhighlight %}
</div>

### Input groups

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><input id="lorem-short" type="checkbox"></span>
                        <label for="lorem" class="form-label input-group-main">Lorem ipsum dolor sit amet.</label>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><input id="lorem-short" type="checkbox"></span>
        <label for="lorem" class="form-label input-group-main">Lorem ipsum dolor sit amet.</label>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><input id="lorem" type="checkbox"></span>
                        <label for="lorem" class="form-label input-group-main">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, quasi, quam, dolores, enim quaerat fuga recusandae reiciendis optio cumque officiis ullam mollitia commodi dicta at nemo animi maxime nulla placeat.</label>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><input id="lorem" type="checkbox"></span>
        <label for="lorem" class="form-label input-group-main">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, quasi, quam, dolores, enim quaerat fuga recusandae reiciendis optio cumque officiis ullam mollitia commodi dicta at nemo animi maxime nulla placeat.</label>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><input id="lorem-long" type="checkbox"></span>
                        <label for="lorem-long" class="form-label input-group-main"><p class="h5">Lorem ipsum</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, quasi, quam, dolores, enim quaerat fuga recusandae reiciendis optio cumque officiis ullam mollitia commodi dicta at nemo animi maxime nulla placeat.</p></label>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><input id="lorem-long" type="checkbox"></span>
        <label for="lorem-long" class="form-label input-group-main"><p class="h5">Lorem ipsum</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, quasi, quam, dolores, enim quaerat fuga recusandae reiciendis optio cumque officiis ullam mollitia commodi dicta at nemo animi maxime nulla placeat.</p></label>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><input id="lorem-longer" type="radio"></span>
                        <label for="lorem-longer" class="form-label input-group-main"><p class="h5">Lorem ipsum</p><p><img src="http://placekitten.com/g/50/30" alt=""> <img src="http://placekitten.com/50/30" alt=""><br>Pue officiis ullam mollitia commodi dicta at nemo animi maxime nulla placeat.</p></label>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-addon"><input id="lorem-longer" type="radio"></span>
        <label for="lorem-longer" class="form-label input-group-main"><p class="h5">Lorem ipsum</p><p><img src="http://placekitten.com/g/50/30" alt=""> <img src="http://placekitten.com/50/30" alt=""><br>Pue officiis ullam mollitia commodi dicta at nemo animi maxime nulla placeat.</p></label>
    </div>
</fieldset>
{% endhighlight %}
</div>

### Stacked form

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <form class="form" action="/">
                    <fieldset class="form-group">
                        <label class="form-label" for="name">Name</label>
                        <input type="text" id="name" class="form-input">
                        <p class="form-help">This is help text under the form field.</p>
                    </fieldset>

                    <fieldset class="form-group">
                        <label class="form-label" for="email">Email</label>
                        <div class="input-group">
                            <input type="email" id="email" class="form-input input-group-main">
                            <span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
                        </div>
                    </fieldset>

                    <fieldset class="form-group">
                        <label class="form-label" for="gender">Gender</label>
                        <select id="gender" class="form-input form-select">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Cylon</option>
                        </select>
                    </fieldset>

                    <fieldset class="form-group">
                        <label class="form-label" for="notifications">Notifications</label>
                        <div class="input-group">
                            <span class="input-group-addon"><input id="send-email" type="radio" name="notifications"></span>
                            <label for="send-email" class="form-label input-group-main">Send me email</label>
                            <span class="input-group-addon"><i class="fa fa-fw fa-thumbs-o-up"></i></span>
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon"><input id="dont-email" type="radio" name="notifications"></span>
                            <label for="dont-email" class="form-label input-group-main">Don't send me email</label>
                            <span class="input-group-addon"><i class="fa fa-fw fa-thumbs-o-down"></i></span>
                        </div>

                        <div class="input-group">
                            <span class="input-group-addon"><input id="flowers" type="radio" name="notifications"></span>
                            <label for="flowers" class="form-label input-group-main">Send me flowers</label>
                            <span class="input-group-addon"><i class="fa fa-fw fa-leaf"></i></span>
                        </div>
                    </fieldset>


                    <fieldset class="form-group">
                        <label class="form-label" for="notifications">Normal notifications</label>
                        <label class="form-label"><input id="send-email" type="radio" name="notifications"> Send me email</label>
                        <label class="form-label"><input id="dont-email" type="radio" name="notifications"> Don't send me email</label>
                        <label class="form-label"><input id="flowers" type="radio" name="notifications"> Send me flowers</label>
                    </fieldset>

                    <fieldset class="form-group">
                        <label class="form-label" for="url">URL</label>
                            <div class="input-group">
                                <span class="input-group-addon">http://</span>
                                <input type="url" id="url" class="form-input input-group-main" placeholder="yourdomain.com">
                            </div>
                    </fieldset>

                    <fieldset class="form-group">
                        <label class="form-label" for="email">Twitter</label>
                        <div class="input-group">
                            <span class="input-group-addon">@</span>
                            <input type="text" id="twitter" class="form-input input-group-main">
                        </div>
                    </fieldset>

                    <fieldset class="form-group">
                        <label class="form-label" for="bio">Bio</label>
                        <textarea class="form-input" id="bio"></textarea>
                    </fieldset>

                    <fieldset class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><input id="service" type="checkbox"></span>
                            <label for="service" class="form-label input-group-main">I accept the terms of service and lorem ipsum.</label>
                        </div>
                    </fieldset>


                    <fieldset class="form-group form-action">
                        <input class="form-submit button" type="submit" value="Submit">
                    </fieldset>
                </form>                
            </div>
        </div>
    </div>
{% highlight html %}
<form class="form" action="/">
    <fieldset class="form-group">
        <label class="form-label" for="name">Name</label>
        <input type="text" id="name" class="form-input">
        <p class="form-help">This is help text under the form field.</p>
    </fieldset>

    <fieldset class="form-group">
        <label class="form-label" for="email">Email</label>
        <div class="input-group">
            <input type="email" id="email" class="form-input input-group-main">
            <span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
        </div>
    </fieldset>

    <fieldset class="form-group">
        <label class="form-label" for="gender">Gender</label>
        <select id="gender" class="form-input form-select">
            <option>Male</option>
            <option>Female</option>
            <option>Cylon</option>
        </select>
    </fieldset>

    <fieldset class="form-group">
        <label class="form-label" for="notifications">Notifications</label>
        <div class="input-group">
            <span class="input-group-addon"><input id="send-email" type="radio" name="notifications"></span>
            <label for="send-email" class="form-label input-group-main">Send me email</label>
            <span class="input-group-addon"><i class="fa fa-fw fa-thumbs-o-up"></i></span>
        </div>
        <div class="input-group">
            <span class="input-group-addon"><input id="dont-email" type="radio" name="notifications"></span>
            <label for="dont-email" class="form-label input-group-main">Don't send me email</label>
            <span class="input-group-addon"><i class="fa fa-fw fa-thumbs-o-down"></i></span>
        </div>

        <div class="input-group">
            <span class="input-group-addon"><input id="flowers" type="radio" name="notifications"></span>
            <label for="flowers" class="form-label input-group-main">Send me flowers</label>
            <span class="input-group-addon"><i class="fa fa-fw fa-leaf"></i></span>
        </div>
    </fieldset>


    <fieldset class="form-group">
        <label class="form-label" for="notifications">Normal notifications</label>
        <label class="form-label"><input id="send-email" type="radio" name="notifications"> Send me email</label>
        <label class="form-label"><input id="dont-email" type="radio" name="notifications"> Don't send me email</label>
        <label class="form-label"><input id="flowers" type="radio" name="notifications"> Send me flowers</label>
    </fieldset>

    <fieldset class="form-group">
        <label class="form-label" for="url">URL</label>
            <div class="input-group">
                <span class="input-group-addon">http://</span>
                <input type="url" id="url" class="form-input input-group-main" placeholder="yourdomain.com">
            </div>
    </fieldset>

    <fieldset class="form-group">
        <label class="form-label" for="email">Twitter</label>
        <div class="input-group">
            <span class="input-group-addon">@</span>
            <input type="text" id="twitter" class="form-input input-group-main">
        </div>
    </fieldset>

    <fieldset class="form-group">
        <label class="form-label" for="bio">Bio</label>
        <textarea class="form-input" id="bio"></textarea>
    </fieldset>

    <fieldset class="form-group">
        <div class="input-group">
            <span class="input-group-addon"><input id="service" type="checkbox"></span>
            <label for="service" class="form-label input-group-main">I accept the terms of service and lorem ipsum.</label>
        </div>
    </fieldset>


    <fieldset class="form-group form-action">
        <input class="form-submit button" type="submit" value="Submit">
    </fieldset>
</form>
{% endhighlight %}
</div>

### Inline form

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <form class="form" action="/">
                    <fieldset class="form-group">
                        <label class="form-label" for="name">Name</label>

                        <div style="width: 48%; float: right;">
                            <input type="text" id="name" class="form-input">
                            <p class="form-help">This is help text under the form field.</p>
                        </div>
                    </fieldset>

                    <fieldset class="form-group">
                        <label class="form-label" for="email">Email</label>

                        <div style="width: 48%; float: right;">
                            <div class="input-group">
                                <input type="email" id="email" class="form-input input-group-main">
                                <span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group">
                        <label class="form-label" for="gender">Gender</label>

                        <div style="width: 48%; float: right;">
                            <select id="gender" class="form-input form-select">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Cylon</option>
                            </select>
                        </div>
                    </fieldset>

                    <fieldset class="form-group">
                        <label class="form-label" for="notifications">Notifications</label>

                        <div style="width: 48%; float: right;">
                            <div class="input-group">
                                <span class="input-group-addon"><input id="send-email" type="radio" name="notifications"></span>
                                <label for="send-email" class="form-label input-group-main">Send me email</label>
                                <span class="input-group-addon"><i class="fa fa-fw fa-thumbs-o-up"></i></span>
                            </div>
                            <div class="input-group">
                                <span class="input-group-addon"><input id="dont-email" type="radio" name="notifications"></span>
                                <label for="dont-email" class="form-label input-group-main">Don't send me email</label>
                                <span class="input-group-addon"><i class="fa fa-fw fa-thumbs-o-down"></i></span>
                            </div>

                            <div class="input-group">
                                <span class="input-group-addon"><input id="flowers" type="radio" name="notifications"></span>
                                <label for="flowers" class="form-label input-group-main">Send me flowers</label>
                                <span class="input-group-addon"><i class="fa fa-fw fa-leaf"></i></span>
                            </div>
                        </div>
                    </fieldset>


                    <fieldset class="form-group">
                        <label class="form-label" for="notifications">Normal notifications</label>

                        <div style="width: 48%; float: right;">
                            <label class="form-label"><input id="send-email" type="radio" name="notifications"> Send me email</label>
                            <label class="form-label"><input id="dont-email" type="radio" name="notifications"> Don't send me email</label>
                            <label class="form-label"><input id="flowers" type="radio" name="notifications"> Send me flowers</label>
                        </div>
                    </fieldset>

                    <fieldset class="form-group">
                        <label class="form-label" for="url">URL</label>

                        <div style="width: 48%; float: right;">
                            <div class="input-group">
                                <span class="input-group-addon">http://</span>
                                <input type="url" id="url" class="form-input input-group-main" placeholder="yourdomain.com">
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group">
                        <label class="form-label" for="email">Twitter</label>
                        <div style="width: 48%; float: right;">
                            <div class="input-group">
                                <span class="input-group-addon">@</span>
                                <input type="text" id="twitter" class="form-input input-group-main">
                            </div>
                    </div></fieldset>

                    <fieldset class="form-group">
                        <label class="form-label" for="bio">Bio</label>

                        <div style="width: 48%; float: right;">
                            <textarea class="form-input" id="bio"></textarea>
                        </div>
                    </fieldset>

                    <hr>

                    <fieldset class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><input id="service" type="checkbox"></span>
                            <label for="service" class="form-label input-group-main">I accept the terms of service and lorem ipsum.</label>
                        </div>
                    </fieldset>

                    <fieldset class="form-group form-action">
                        <input class="form-submit button" type="submit" value="Submit">
                    </fieldset>

                </form>
            </div>
        </div>
    </div>
{% highlight html %}
<form class="form" action="/">
    <fieldset class="form-group">
        <label class="form-label" for="name">Name</label>

        <div style="width: 48%; float: right;">
            <input type="text" id="name" class="form-input">
            <p class="form-help">This is help text under the form field.</p>
        </div>
    </fieldset>

    <fieldset class="form-group">
        <label class="form-label" for="email">Email</label>

        <div style="width: 48%; float: right;">
            <div class="input-group">
                <input type="email" id="email" class="form-input input-group-main">
                <span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
            </div>
        </div>
    </fieldset>

    <fieldset class="form-group">
        <label class="form-label" for="gender">Gender</label>

        <div style="width: 48%; float: right;">
            <select id="gender" class="form-input form-select">
                <option>Male</option>
                <option>Female</option>
                <option>Cylon</option>
            </select>
        </div>
    </fieldset>

    <fieldset class="form-group">
        <label class="form-label" for="notifications">Notifications</label>

        <div style="width: 48%; float: right;">
            <div class="input-group">
                <span class="input-group-addon"><input id="send-email" type="radio" name="notifications"></span>
                <label for="send-email" class="form-label input-group-main">Send me email</label>
                <span class="input-group-addon"><i class="fa fa-fw fa-thumbs-o-up"></i></span>
            </div>
            <div class="input-group">
                <span class="input-group-addon"><input id="dont-email" type="radio" name="notifications"></span>
                <label for="dont-email" class="form-label input-group-main">Don't send me email</label>
                <span class="input-group-addon"><i class="fa fa-fw fa-thumbs-o-down"></i></span>
            </div>

            <div class="input-group">
                <span class="input-group-addon"><input id="flowers" type="radio" name="notifications"></span>
                <label for="flowers" class="form-label input-group-main">Send me flowers</label>
                <span class="input-group-addon"><i class="fa fa-fw fa-leaf"></i></span>
            </div>
        </div>
    </fieldset>


    <fieldset class="form-group">
        <label class="form-label" for="notifications">Normal notifications</label>

        <div style="width: 48%; float: right;">
            <label class="form-label"><input id="send-email" type="radio" name="notifications"> Send me email</label>
            <label class="form-label"><input id="dont-email" type="radio" name="notifications"> Don't send me email</label>
            <label class="form-label"><input id="flowers" type="radio" name="notifications"> Send me flowers</label>
        </div>
    </fieldset>

    <fieldset class="form-group">
        <label class="form-label" for="url">URL</label>

        <div style="width: 48%; float: right;">
            <div class="input-group">
                <span class="input-group-addon">http://</span>
                <input type="url" id="url" class="form-input input-group-main" placeholder="yourdomain.com">
            </div>
        </div>
    </fieldset>

    <fieldset class="form-group">
        <label class="form-label" for="email">Twitter</label>
        <div style="width: 48%; float: right;">
            <div class="input-group">
                <span class="input-group-addon">@</span>
                <input type="text" id="twitter" class="form-input input-group-main">
            </div>
    </div></fieldset>

    <fieldset class="form-group">
        <label class="form-label" for="bio">Bio</label>

        <div style="width: 48%; float: right;">
            <textarea class="form-input" id="bio"></textarea>
        </div>
    </fieldset>

    <hr>

    <fieldset class="form-group">
        <div class="input-group">
            <span class="input-group-addon"><input id="service" type="checkbox"></span>
            <label for="service" class="form-label input-group-main">I accept the terms of service and lorem ipsum.</label>
        </div>
    </fieldset>

    <fieldset class="form-group form-action">
        <input class="form-submit button" type="submit" value="Submit">
    </fieldset>

</form>
{% endhighlight %}
</div>

### Various sizes of input

Use theese extra class on the input type

large

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <input type="text" class="form-input large">
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <input type="text" class="form-input large">
</fieldset>
{% endhighlight %}
</div>

small

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <input type="text" class="form-input small">
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <input type="text" class="form-input small">
</fieldset>
{% endhighlight %}
</div>

xsmall

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <input type="text" class="form-input xsmall">
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <input type="text" class="form-input xsmall">
</fieldset>
{% endhighlight %}
</div>

### Input group addon in form of a button

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-input input-group-main">
                        <span class="input-group-button"><button class="button" type="button">Søg</button></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <input type="text" class="form-input input-group-main">
        <span class="input-group-button"><button class="button" type="button">Søg</button></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-button"><button class="button" type="button">Søg</button></span>
                        <input type="text" class="form-input input-group-main">
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-button"><button class="button" type="button">Søg</button></span>
        <input type="text" class="form-input input-group-main">
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-button"><button class="button" type="button">Søg</button></span>
                        <input type="text" class="form-input input-group-main">
                        <span class="input-group-button"><button class="button" type="button">Søg</button></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-button"><button class="button" type="button">Søg</button></span>
        <input type="text" class="form-input input-group-main">
        <span class="input-group-button"><button class="button" type="button">Søg</button></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-input input-group-main">
                        <span class="input-group-button"><button class="button" type="button">Søg</button></span>
                        <span class="input-group-button"><button class="button" type="button">Reset</button></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <input type="text" class="form-input input-group-main">
        <span class="input-group-button"><button class="button" type="button">Søg</button></span>
        <span class="input-group-button"><button class="button" type="button">Reset</button></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-input input-group-main">
                        <span class="input-group-button"><button class="button" type="button"><i class="fa fa-plus"></i></button></span>
                        <span class="input-group-button"><button class="button" type="button"><span class="fa fa-minus"></span></button></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <input type="text" class="form-input input-group-main">
        <span class="input-group-button"><button class="button" type="button"><i class="fa fa-plus"></i></button></span>
        <span class="input-group-button"><button class="button" type="button"><span class="fa fa-minus"></span></button></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

### Input group image

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-input input-group-main">
                        <span class="input-group-image"><img src="http://placekitten.com/300/150" alt=""></span>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <input type="text" class="form-input input-group-main">
        <span class="input-group-image"><img src="http://placekitten.com/300/150" alt=""></span>
    </div>
</fieldset>
{% endhighlight %}
</div>

<div class="m-browser">
    <div class="browser">
        <div class="image">
            <div class="content clearfix">
                <fieldset class="form-group">
                    <div class="input-group">
                        <span class="input-group-image"><img src="http://placekitten.com/300/150" alt=""></span>
                        <input type="text" class="form-input input-group-main">
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
{% highlight html %}
<fieldset class="form-group">
    <div class="input-group">
        <span class="input-group-image"><img src="http://placekitten.com/300/150" alt=""></span>
        <input type="text" class="form-input input-group-main">
    </div>
</fieldset>
{% endhighlight %}
</div>
