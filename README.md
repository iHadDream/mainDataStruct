***快速构建你的主要数据结构***ps:新手写的新手教程,大神们请忽略我，欢迎补充
1. Stack
2. Queue
3. LinkedList
4. DoubleLinkedList
5. BinarySearchTree
6. ArrayList

# Stack #
   var stack = new Stack();
 
>stack.push(element);  

>stack.pop();  

>stack.peek(); 返回栈顶元素  

>stack.isEmpty();判断栈空?true:false  

>stack.size();  

>stack.clear();  

>stack.print();


# Queue#
var queue = new Queue();

>queue.enqueue(element);  

>queue.dequeue();  

>queue.front(); 返回队列最前面的项  

>queue.isEmpty();判断栈空?true:false  

>queue.size();  

>queue.clear();  

>queue.print();


# LinkedList#
var nodes =new LinkedList();

>nodes.append(element); 尾部添加一个元素  

>nodes.removeAt(position); 删除指定位置元素  

>nodes.insert(position,element);指定位置添加一个元素  

>nodes.toString();把链表转化成字符串输出  

>nodes.indexof(element);找出元素的位置  

>nodes.remove(element);删除某个元素  

>nodes.isEmpty();是否为空链表  

>nodes.size();链表长度  

>nodes.getHead();返回链表表头

# DoubleLinkedList# 
var nodes = new DoubleLinkedList();
>nodes.removeAt(position); 删除指定位置元素  

>nodes.insert(position,element);指定位置添加一个元素

# BinarySearchTree# 
var tree = new BinarySearchTree();  

>tree.insert(key); 向树中插入一个新的键  

>tree.inOrderTraverse(printNode(callback));  

> 中序遍历，可执行自定义回调函数  

>tree.preOrderTraverse(printNode(callback));  

>先序遍历  

>tree.postOrderTraverse(printNode(callback));  
 
>后序遍历  

>tree.min(); 搜索BST最小值  
 
>tree.max(); 搜索BST最大值  

>tree.search(key); 搜索BST的某一值  

>tree.remove(key); 移除一个树节点

#Sort，Search#
var array =new ArrayList();
>array.insert(item)  

>array.toString();  

>array.bubbleSort();冒泡  

>array.modifiedBubbleSort();改进冒泡  

>array.selectionSort();选择排序  

>array.insertSort();插入排序  

>array.mergeSort();归并排序  

>array.quickSort();快速排序  

>array.orderSearch(item);顺序搜索  

>array.binarySearch(item);二分搜索 
