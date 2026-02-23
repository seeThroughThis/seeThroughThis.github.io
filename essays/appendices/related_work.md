---
title: {{ site.data.nav[page.name | split: "." | first].title }}
nav_order: {{ site.data.nav[page.name | split: "." | first].nav_order }}
parent: {{ site.data.nav[page.name | split: "." | first].parent }}
---

# Related work

Collation of work that is related, aligned or overlapping with this project or any subset of the project.

This does not imply dependency or endorsement.


<table>
  <thead>
    <tr>
      <th style="text-align:left">Work</th>
      <th style="text-align:left">Tip</th>
      <th style="text-align:right">Authors</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.related_work %}
    <tr>
      <td>{{ row.Work }}</td>
      <td>{{ row.Intersection }}</td>
      <td style="text-align:right">{{ row.Authors }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>