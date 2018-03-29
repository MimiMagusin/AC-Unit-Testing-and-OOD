# Advanced Class: Unit Testing and OO Design

<br/>

>This is a summary of the Advanced Session taught on March 29, as part of the accelaration program at [Codaisseur](https://codaisseur.com/). The **learning goals** of the day are: 
>
>* Understand basic concepts OO Design
>* Understand basic concepts of good Unit Testing
>* Get some experience with Unit Testing
>* Practice  Pair Programming

<br/>

## Unit Testing


<br/><br/>

## SOLID Principles

![Solid Explanation](https://devscopeninjas.azurewebsites.net/wp-content/uploads/2017/04/Solid-1024x283-1024x283.jpg)

### Single Responsibility Principle
* Anything (function, model, class, etc.) should only have **one reason to change**.

### Dependency Inversion Principle
* **Dependency injection** is an implementation of this principle
* **Low level modules should depend on high level modules**, not the other way round.
* **Abstractions should not depend upon details**, details should depend upon abstractions.
* Definition of bad design: **Rigidity** (hard to change), **Fragility** (other stuff breaks if change something), **Immobility** (Can it be reused or is it hard to disentangle from another application)
* You are looking for **one way dependencies**:

  _A service namespace might depend on a model and parsers, the parsers on a model, but the model shouldn't also depend on the service or parsers!_

<br/><br/>

## Separation of concerns

Theres two structures: 

  * Presentation Layer
  * Logic layer
  * Data Access layer

  and:

  * Service Interface Layer
  * Logic Layer
  * Data Access Layer

Are both **connected vertically**.

Imagine the first would be a 'mail' module and the second an 'auth' module, you could also **connect them horizontally** - the Micro Services SetUp.

<br/><br/>

## Dynamically vs Statically Typed

* **Dynamically typed** - types are checked _in run time_.
  * Duck typing: if it quacks like a duck and it looks like duck it probably is duck, but we are not going to check.
* **Statically typed** - types are checked _in compiler time_.

<br/><br/>

## Interesting Sources


* [The Clean Code Talks: Unit Testing](https://www.youtube.com/watch?v=wEhu57pih5w)
* [Solid Cheat Sheets](https://www.monterail.com/blog/solid-principles-cheatsheet-printable)