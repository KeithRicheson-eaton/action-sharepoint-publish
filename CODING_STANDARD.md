# Introduction
## Purpose
A well defined and enforced coding standard helps to increase readability of source and portability to other projects.
Over time it helps reduce cost of code maintenance while also increasing reuse. An added benefit is that following the
standard helps reduce time required to understand your work by your peers (and future self).

## Principles
Any code authored while employed by Eaton is also owned by Eaton. Your personal preference on formatting and style, while
considered as an input for future iterations of this standard, should be set aside in favor of complying with the standard
in place.

It is a well known via many studies that the cost of preventing bugs is much lower than the cost of eliminating them later.
Following a coding standard and best practices for design will help to prevent bugs from being developed.

Code is read, depending on the study, eight times more often than it is written. Following a consistent standard across
the organization makes reading the code between groups easier.

These standards, when possible, shall be enforced through several means:
* Code Reviews (least preferred)
* IDE Tools (better)
* Continuous Integration Tools run on all Pull Requests (best) with a block

Above all else, the Hippocratic Oath should be considered. It can be a risk to apply a new standard to existing or legacy
code. Unless an "upgrade" is planned for an entire repository with full regression planned for execution, do not apply
new standards to an existing code base. Match the style and format of the code you are working on (automated tools should
enforce those standards).

## Language Standards
### C/C++
* [Best Practices](cpp/best-practices.md)
* [Tools](cpp/tools.md)

