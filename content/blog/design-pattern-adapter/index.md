---
title: 设计模式-适配器模式
date: 2018-06-01 23:25:28
tags: 设计模式
---

### 适配器模式

我对适配器模式的理解，适配器模式是指因为接口不兼容而不能一起工作的类可以一起工作，而不修改他们的源代码。
接口可能是不兼容的，但是在函数内部是可以解决这个问题的，适配器模式就是通过将一个类的接口转换为客户端期望的接口来协同工作。

#### WHY

在软件开发的过程中，最典型的情况就是，当遇到现有的一个接口需要用到另一个接口的情况时，就可以考虑使用适配器模式来解决这个问题。如果我们修改本身这个接口的话，可能会影响到很多地方，导致项目出现严重的问题，而现在又正好需要这么一个接口。所以问题就变成了如何在不影响现有接口的情况解决这个问题。

#### WHAT

在这个模式中，通常来说有三个角色 [目标对象 Target]、[适配器 Adapter]、[被适配者 Adaptee]。接下来我就说一下我对这三个角色以及他们在适配器的作用的理解。Target 这就是需要使用的别的接口的类或者接口。因为通常在开发的过程中，这个角色可能已经是设计好已经不能修改或者最好不要修改的状态。但是接口里面的方法又需要去实现，所以这个时候就需要构建一个 Adapter 角色，他就是为使 Target 和 Adaptee一起工作而创建的类，适配器给目标角色提供了一个访问 Adaptee 的权限，但是目标角色并不知道 Adaptee 内部的情况。Adaptee 既就是为目标角色提供了有效的操作的接口。

<br />
在适配器模式的实现中，有以下几种情况，类的适配器模式、对象的适配器模式、双向适配的模式。根据不同的需求选择不同的模式。

代码表示类似于下面这样

```
c#
// 目标接口
interface ITarget
{
	void request();
}

// 被适配的对象
public class Adaptee
{
	public void specificRequest();
}

// 适配器对象
public class Adapter: Adaptee, ITarget
{
	// 接口转换
	public void request()
	{
		this.specificRequest();
	}
}
```

#### HOW

在什么样的情况下比较适合使用适配器模式
1 如何重用一个客户端类没有而又需求的类
2 两个不兼容的类如何在一起工作
3 如何为一个类提供代替的接口

<br />
参考链接：
[Adapter pattern-wikipedia](https://www.ibm.com/developerworks/cn/java/j-lo-adapter-pattern/index.html)
[适配器模式原理及实例介绍-developerWorks](https://www.ibm.com/developerworks/cn/java/j-lo-adapter-pattern/index.html)
<br />