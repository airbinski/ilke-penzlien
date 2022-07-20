---
layout: default
---

<header class="header header-fixed">
  {% include logo.html %}
</header>
{% include navigation.html %}
<ul class="navigation navigation-top">
  {% for category in site.categories %}
    <li class="navigation-item">
      <a href="#" class="filter-item-link" data-category="{{ category | first | downcase }}">
        {{ category | first }}
      </a>
    </li>
  {% endfor %}
</ul>
<p class="introduction">
  {{ site.description }}
</p>
{% include projects.html posts=site.posts %}
