(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{486:function(a,t,s){"use strict";s.r(t);var e=s(27),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"list总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list总结"}},[a._v("#")]),a._v(" List总结")]),a._v(" "),s("p",[s("strong",[a._v("arrayList和LinkedList区别")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\tarrayList底层是用数组实现的顺序表，是随机存取类型，可自动扩增，并且在初始化时，数组的长度是0，只有在增加元素时，长度才会增加。默认是10，不能无限扩增，有上限，在查询操作的时候性能更好\n\n\tLinkedList底层是用链表来实现的，是一个双向链表，注意这里不是双向循环链表，顺序存取类型。 在源码中，似乎没有元素个数的限制。应该能无限增加下去，直到内存满了在进行删除，增加操作时性能更好。\n")])])]),s("p",[a._v("两个都是线程不安全的，在iterator时，会发生fail-fast：快速失效。")]),a._v(" "),s("p",[s("strong",[a._v("arrayList和Vector的区别")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\tarrayList线程不安全，在用iterator，会发生fail-fast\n\n\tVector线程安全，因为在方法前加了Synchronized关键字。也会发生fail-fast\n")])])]),s("p",[s("strong",[a._v("fail-fast和fail-safe区别和什么情况下会发生")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\t简单的来说：在java.util下的集合都是发生fail-fast，而在java.util.concurrent下的发生的都是failsafe。\n\n\t1）fail-fast\n")])])]),s("p",[a._v("快速失败，例如在arrayList中使用迭代器遍历时，有另外的线程对arrayList的存储数组进行了改变，比如add、delete、等使之发生了结构上的改变，所以Iterator就会快速报一个 java.util.ConcurrentModificationException 异常（并发修改异常），这就是快速失败。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\t2）fail-safe\n")])])]),s("p",[a._v("安全失败，在java.util.concurrent下的类，都是线程安全的类，他们在迭代的过程中，如果有线程进行结构的改变，不会报异常，而是正常遍历，这就是安全失败。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\t3）为什么在java.util.concurrent包下对集合有结构的改变，却不会报异常？\n")])])]),s("p",[a._v("在concurrent下的集合类增加元素的时候使用Arrays.copyOf()来拷贝副本，在副本上增加元素，如果有其他线程在此改变了集合的结构，那也是在副本上的改变，而不是影响到原集合，迭代器还是照常遍 历，遍历完之后，改变原引用指向副本，所以总的一句话就是如果在此包下的类进行增加删除，就会出现一个副本。所以能防止fail-fast，这种机制并不会出错，所以我们叫这种现象为fail-safe。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\t4）vector也是线程安全的，为什么是fail-fast呢？\n")])])]),s("p",[a._v("这里搞清楚一个问题，并不是说线程安全的集合就不会报fail-fast，而是报fail-safe，你得搞清楚前面所说答案的原理，出现fail-safe是因为他们在实现增删的底层机制不一样，就像上面说的，会有一个副本，而像arrayList、linekdList、verctor等，他们底层就是对着真正的引用进行操作，所以才会发生异常。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\t5）既然是线程安全的，为什么在迭代的时候，还会有别的线程来改变其集合的结构呢(也就是对其删除和增加等操作)？\n")])])]),s("p",[a._v("首先，我们迭代的时候，根本就没用到集合中的删除、增加，查询的操作，就拿vector来说，我们都没有用那些加锁的方法，也就是方法锁放在那没人拿，在迭代的过程中，有人拿了那把锁，我们也没有办法，因为那把锁就放在那边。")]),a._v(" "),s("p",[a._v("【举例说明fail-fast和fail-safe的区别】")]),a._v(" "),s("ul",[s("li",[a._v("fail-fast")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/JavaSE-%E9%9B%86%E5%90%88.assets/image-20210331135807175.png",alt:"image-20210331135807175"}})]),a._v(" "),s("ul",[s("li",[a._v("fail-safe")])]),a._v(" "),s("p",[a._v("通过CopyOnWriteArrayList这个类来做实验，不用管这个类的作用，但是他确实没有报异常， 并且还通过第二次打印，来验证了上面我们说创建了副本的事情。")]),a._v(" "),s("p",[a._v("原理是在添加操作时会创建副本，在副本上进行添加操作，等迭代器遍历结束后，会将原引用 改为副本引用，所以我们在创建了一个list的迭代器，结果打印的就是123444了，")]),a._v(" "),s("p",[a._v("证明了确实改变成为了副本引用，后面为什么是三个4，原因是我们循环了3次，不就添加了3 个4吗。如果还感觉不爽的话，看下add的源码。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/JavaSE-%E9%9B%86%E5%90%88.assets/image-20210331151011751.png",alt:"image-20210331151011751"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/JavaSE-%E9%9B%86%E5%90%88.assets/image-20210331151024361.png",alt:"image-20210331151024361"}})]),a._v(" "),s("p",[a._v("【为什么现在都不提倡使用vector了】")]),a._v(" "),s("p",[a._v("1）vector实现线程安全的方法是在每个操作方法上加锁，这些锁并不是必须要的，在实际开发中， 一般都是通过锁一系列的操作来实现线程安全，也就是说将需要同步的资源放一起加锁来保证线程安全。")]),a._v(" "),s("p",[a._v("2）如果多个Thread并发执行一个已经加锁的方法，但是在该方法中，又有vector的存在，vector本身实现中已经加锁了，那么相当于锁上又加锁，会造成额外的开销。")]),a._v(" "),s("p",[a._v("3）就如上面第三个问题所说的，vector还有fail-fast的问题，也就是说它也无法保证遍历安全，在遍历时又得额外加锁，又是额外的开销，还不如直接用arrayList，然后再加锁呢。")]),a._v(" "),s("p",[a._v("总结：Vector在你不需要进行线程安全的时候，也会给你加锁，也就导致了额外开销，所以在 jdk1.5之后就被弃用了，现在如果要用到线程安全的集合，都是从java.util.concurrent包下去拿相应的类。")])])}),[],!1,null,null,null);t.default=r.exports}}]);