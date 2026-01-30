---
title: Related Work
parent: Appendices
nav_order: 2
---

# Related work

Information about existing work that is related, alinged or overlaping with this project will be added here. (This does not imply dependency or endorsement)


| Work | Authors |
|:---- |    ----:|
{% for row in site.data.related_work %}
| {{ row.Work }} | {{ row.Authors }} | 
{% endfor %}