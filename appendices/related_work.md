---
title: Related Work
parent: Appendices
nav_order: 2
---

# Related work

Existing related or overlaping work information will be added here.

| Date | Work | Description | Authors |
|:---- |:----- |:------ |:------ |
{% for row in site.data.related_work %}
| {{ row.Date }} | {{ row.Work }} | {{ row.Description }} | {{ row.Authors }} |
{% endfor %}