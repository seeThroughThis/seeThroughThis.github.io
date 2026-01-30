---
title: Related Work
parent: Appendices
nav_order: 2
---

# Related work

Existing related or overlaping work information will be added here.

{% for row in site.data.related_work %}
| {{ row.Work }} | {{ row.Description }} | {{ row.Authors }} | {{ row.Date }} | 
{% endfor %}