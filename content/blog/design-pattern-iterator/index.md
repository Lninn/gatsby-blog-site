---
title: 设计模式-迭代器模式
date: 2018-05-31 18:22:16
tags: 设计模式
---

### 设计模式

在接下来的时间里面，我将会接触到设计模式。作为一个想从事相关行业的人员，我觉得有必要去了解和学习这门课程。我主要的参考资料是《图解设计模式》和 CSDN 上的 BLOG。设计模式的内容主要是与面向对象编程相关的知识，所以对于这一部分的学习和掌握是必需的。

#### 简单的看法

设计模式是前辈们在工作和学习中的经验总结，他们在遇到问题的时候是怎么解决的，解决的思路和方法。最后得出的这一套知识体系。而我自己的实践可以说是几乎没有，因为我写的代码基本上不会遇到要用到设计模式，当然这也是我现在必需思考的问题，总是去写一些无关紧要的代码，却没有实质上的提升，这是一个很严重的问题。因此，我在学习经典的设计模式的过程中，主要是通过从理解设计模式和通过尝试写出 demo 去实现。并通过文字的描述把自己的理解的东西写出来，当作一个学习的记录。

#### 如何理解和学习

在尝试不同的方法之后，我觉得用 WHY-WHAT-HOW 这样的方式去理解设计模式比较容易接受。首先，为什么会有这个设计模式（指当前学习的某个模式），也就是因为什么样的问题前辈把解决这种问题总结成了设计模式；然后是这个模式的定义是什么，既然了解了这个模式存在的必要性，那么就应该分析一下这个模式的本质，既这个模式到底是什么；最后就是怎么用代码的方式把这个模式表示出来，最重要的是要把它运用到实际的项目中去。

### 迭代器模式

在一些项目中，经常遇到这样一些需求，需要遍历一些聚合类（我的理解就是类的集合，相当于数组）里面的成员，本身这个需求很简单，代码实现的话我觉得难度也不大。但是，使用这种简单的方式没有结合整个项目考虑最后肯定会出现一些很严重的问题。

#### WHY

那么迭代器模式到底在什么情况下产生的呢，我的理解是这样的，对于一个聚合类，它本身的职责当然是管理自身的元素，但是它也负责了所有元素的遍历。而且在一个项目里面会有很多这样的聚合类，这样就会产生很多的问题，正确的说法应该是违背了设计模式的XX原则，比如，聚合类本身的职责太重了（单一职责），也不便于修改和扩展（对修改关闭，对扩展开发）。

首先想到的就是减轻这个类的职责，既聚合类本身就只负责管理元素的增加和删除，把遍历放到专门的类去处理。这样就简化了聚合类的职责，同时也为聚合类的遍历提供了很多的方式。

#### WHAT
那么到底什么迭代器模式呢，根据迭代器模式的定义：提供一种方法来访问聚合对象，而不同暴露这个对象的内部表示，其别名为游标。也就是提供专门的类来为聚合类提供遍历的功能。

在迭代器模式中的几种角色：

Iterator（抽象迭代器）：定义了访问和遍历元素的接口，声明了所有对元素操作的方法

ConcreteIterator（具体迭代器）：实现了抽象迭代器的接口，完成对聚合对象的遍历。需要依赖具体聚合类。

Aggregate（抽象聚合类）：聚合类主要用来储存和管理元素，可以设计为抽象类也可以设计为接口。重点是要声明一个返回抽象迭代器实例的方法。

ConcreteAggregate（具体聚合类）：聚合类方法的实现。还有一个返回抽象迭代器实例的方法。因为迭代器本身并没有数据，迭代是依赖于某个具体的聚合类的。

#### HOW
在什么样的场景下使用我还不好说。觉得要理解它是因为什么情况产生的，并且要理解解决这个问题的方法。