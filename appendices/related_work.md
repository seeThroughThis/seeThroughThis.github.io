---
title: Related Work
parent: Appendices
nav_order: 2
---

# Related work

Information about existing work that is related, alinged or overlaping with this project will be added here. (This does not imply dependency or endorsement)


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