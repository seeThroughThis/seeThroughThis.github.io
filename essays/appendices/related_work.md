---
title: Related Work
parent: Appendices
nav_order: 2
---

# Related work

Collation of work that is related, aligned or overlapping with this project or any subset of the project.

This does not imply dependency or endorsement.


<table>
  <thead>
    <tr>
      <th style="text-align:left">Work</th>
      <th style="text-align:right">Authors</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.related_work %}
    <tr>
      <td>{{ row.Work }}</td>
      <td style="text-align:right">{{ row.Authors }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>