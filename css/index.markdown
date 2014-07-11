---
layout: css
title: Navigation
---

<div class="row">
	<aside class="col-s-4 col-m-3 col-l-3">
		<ul class="nav nav-menu">
		    {% for page in site.pages %}
			  {% if page.layout == 'documentation' %}  
			    <li><a href="#{{ page.title }}">{{ page.title }}</a></li>
			  {% endif %}
			{% endfor %}
		  </ul>
	</aside>
	<div class="col-s-4 col-m-9 col-l-9">
		<h1>CSS</h1>
		{% for page in site.pages %}
		  {% if page.layout == 'documentation' %}  
		    <h2><a name="{{ page.title }}" id="{{ page.title }}">{{ page.title }}</a></h2>
		    <p>{{ page.content }}</p>
		  {% endif %}
		{% endfor %}
	</div>
</div>