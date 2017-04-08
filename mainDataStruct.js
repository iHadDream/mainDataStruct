//栈
function Stack(){
	var items=[];
	//压栈
	this.push=function(element){
		items.push(element);
	};
	//弹出栈
	this.pop=function(){
		return items.pop();
	};
	//返回栈顶元素
	this.peek=function(){
		return items[items.length-1];
	};
	//判断栈空
	//yes return true || no return false
	this.isEmpty=function(){
		return items.length==0;
	};
	//栈的长度
	this.size=function(){
		return items.length;
	};
	//清空栈
	this.clear=function(){
		items=[];	
	};
	//输出栈
	this.print=function(){
		console.log(items.toString());
	}
}

//队列
function Queue(){
	var items=[];
	//队列尾部添加一个新元素
	this.enqueue=function(element){
		items.push(element);
	};
	//从队列移出项
	this.dequeue=function(){
		return items.shift();
	};
	//队列最前面的项
	this.front=function(){
		return items[0];
	}
	//判断队列是否为空，yes为空，no为非空
	this.isEmpty=function(){
		return items.length==0;
	}
	//队列长度
	this.size=function(){
		return items.length;
	}
	//打印队列
	this.print=function(){
		console.log(items.toString());
	};
}

//链表
function LinkedList(){
	var Node=function(element){
		this.element=element;
		this.next=null;
	};
	//Node辅助类，要加入列表的项，包含一个element属性，以及一个next指向下一个借点的指针
	var length=0;
	var head=null;
	//尾部添加一个元素
	this.append=function(element){
		var node = new Node(element);
		current;
		if(head==null){
			head=node;
		}else{
			current=head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
		length++;

	};
	this.removeAt = function(position){
		//检查越界
		if(position>-1&&position<length){
			var current=head,
				previous,
				index = 0;
			//移除第一项
			if(position===0){
				head = current.next;
			}else{
				while(index++<position){
					previous = current;
					current = current.next;
				}
				previous.next=current.next;
			}
			length--;
			return current.element;
		}else{
			return null;
		}
	};
	this.insert=function(position,element){
		if(position>=0&&position<=length){
			var node = new Node(element),
				current=head,
				previous,
				index=0;
			if(position===0){
				node.next = current;
				head = node;
			}else{
				while(index++<position){
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}
			length++;
			return true;
		}else{
			return false;
		}
	};
	this.toString=function(){
		var current = head,
			string='';
		while(current){
			string = current.element;
			current = current.next;
		}
		return string;
	};
	this.indexof=function(element){
		var current =head,
			index=-1;
		while(current){
			if(current.element===element){
				return index;
			}
			index++;
			current=current.next;
		}
		return -1;
	};
	//基于indexof的拓展remove
	this.remove=function(element){
		var index = this.indexof(element);
		return this.removeAt(index);
	};
	this.isEmpty=function(){
		return length===0;
	};
	this.size=function(){
		return length;
	};
	this.getHead=function(){
		return head;
	};
}

//双向链表
function DoubleLinkedList(){
	var Node =function(element){
		this.element = element;
		this.next = null;
		this.prev = null;
	};
	var length = 0;
	var head =null;
	var tail = null;
	this.insert = function(position,element){
		if(position>=0&&position<=length){
			var node = new Node(element),
				current=head,
				previous,
				index=0;
			if(position==0){
				if(!head){
					head=node;
					tail=node;
				}else{
					node.next=current;
					current.prev=node;
					head=node;
				}
			}else if(position==length){
				current=tail;
				current.next = node;
				node.prev = current;
				tail = node;
			}else{
				while(index++<position){
					previous=current;
					current=current.next;
				}
				node.next=current;
				previous.next=node;
				current.prev=node;
				node.prev=previous;
			}
			length++;
			return true;
		}else{
			return false;
		}
	};
	//任意位置移除元素
	this.removeAt=function(position){
		if(position>-1&&position<length){
			var current=head,
			previous,
			index=0;
			if(position===0){
				head=current.next;
				if(length==1){
					tail=null;
				}else{
					head.prev=null;
				}
			}else if(position==length-1){
				current=tail;
				tail=current.prev;
				tail.next=null;
			}else{
				while(index++<position){
					previous=current;
					current=current.next;
				}
				previous.next=current.next;
				current.next.prev=previous;
			}
			length--;
			return current.element;
		}else{
			return null;
		}
	};
}

//二叉搜索树
function BinarySearchTree(){
	var Node=function(key){
		this.key=key;
		this.left=null;
		this.right=null;
	};
	var root = null;
	//向树中插入一个新的键
	this.insert=function(key){
		var newNode = new Node(key);
		if(root==null){
			root=newNode;
		}else{
			insertNode(root,newNode);
		}
	};
	//找到新节点应该插入的正确位置
	var insertNode = function(node,newNode){
		if(newNode.key<node.key){
			if(node.left===null){
				node.left=newNode;
			}else{
				insertNode(node.left,newNode);
			}
		}else{
			if(node.right===null){
				node.right=newNode;
			}else{
				insertNode(node.right,newNode);
			}
		}
	};
	//中序遍历
	this.inOrderTraverse = function(callback){
		inOrderTraverseNode(root,callback);
	};
	//使用一个私有的辅助函数
	var inOrderTraverseNode =function(node,callback){
		if(node!==null){
			inOrderTraverseNode(node.left,callback);
			callback(node.key);
			inOrderTraverseNode(node.right,callback);
		}
	};
	//callback 回调函数
	function printNode(value){
		console.log(value);
	}
	tree.inOrderTraverse(printNode);

	//先序遍历
	this.preOrderTraverse = function(callback){
		preOrderTraverseNode(root,callback);
	};
	var preOrderTraverseNode=function(node,callback){
		if(node!==null){
			callback(node.key);
			preOrderTraverseNode(node.left,callback);
			preOrderTraverseNode(node.right,callback);
		}
	};
	//后序遍历
	this.postOrderTraverse=function(callback){
		postOrderTraverseNode(root,callback);
	};
	var postOrderTraverseNode=function(node,callback){
		if(node!==null){
			postOrderTraverseNode(node.left,callback);
			postOrderTraverseNode(node.right,callback);
			callback(node.key);
		}
	};
	//搜索BST最小值
	this.min=function(){
		return minNode(root);
	};
	var minNode=function(node){
		if(node){
			while(node&&node.left!==null){
				node=node.left;
			}
			return node.key;
		}
		return null;
	};
	//搜索BST最大值
	this.max=function(){
		return maxNode(root);
	};
	var maxNode =function(){
		if(node){
			while(node&&node.right!==null){
				node=node.right;
			}
			return node.key;
		}
		return null;
	};
	//搜索BST的某一值
	this.search=function(key){
		return searchNode(root,key);
	};
	var searchNode=function(node,key){
		if(node===null){
			return false;
		}
		if(key<node.key){
			return searchNode(node.left,key);
		}else if(key>node.key){
			return searchNode(node.right,key);
		}else{
			return true;
		}
	};

	//移除一个节点
	this.remove=function(key){
		root = removeNode(root,key);
	};
	var removeNode=function(node,key){
		if(node===null){
			return null;
		}
		if(key<node.key){
			node.left=removeNode(node.left,key);
			return node;
		}else if(key>node.key){
			node.right=removeNode(node.right,key);
			return node;
		}else{
			//key==node.key
			if(node.left===null&&node.right===null){
				node=null;
				return node;
			}
			if(node.left===null){
				node=node.right;
				return node;
			}else if(node.right===null){
				node=node.left;
				return node;
			}
			var aux = findMinNode(node.right);
			node.key=aux.key;
			node.right=removeNode(node.right,aux.key);
			return node;
		}
	};
}

//sort
function ArrayList(){
	var array=[];
	this.insert=function(item){
		array.push(item);
	};
	this.toString=function(){
		return array.join();
	};
	//bubble sort  O(n^2)
	this.bubbleSort=function(){
		var length=array.length;
		for(var i=0;i<length;i++){
			for(var j=0;j<length-1;j++){
				if(array[j]>array[j+1]){
					swap(j,j+1);
				}
			}
		}
	};
	var swap=function(index1,index2){
		var aux = array[index1];
		array[index1]=array[index2];
		array[index2]=aux;
	};
	//modified bubble sort
	this.modifiedBubbleSort=function(){
		var length =array.length;
		for(var i=0;i<length;i++){
			for(var j=0;j<length-1-i;j++){
				if(array[j]>array[j+1]){
					swap(j,j+1);
				}
			}
		}
	};

	//选择排序 O(n^2)
	this.selectionSort=function(){
		var length=array.length,
			indexMin;
		for(var i=0;i<length-1;i++){
			indexMin=i;
			for (var j = i; j< length; j++) {
				if(array[indexMin]>array[j]){
					indexMin=j;
				}
			}
			if(i!==indexMin){
				swap(i,indexMin);
			}
		}
	};

	//插入排序   适合小型数组，性能优于选择和冒泡
	this.insertSort=function(){
		var length=array.length,
			j,temp;
			for(var i=1;i<length;i++){
				temp=array[i];
				j=i;
				while(j>0&&array[j-1]>temp){
					array[j]=array[j-1];
					j--;
				}
				array[j]=temp;
			}
	};

	//归并排序  O(nlogn)
	this.mergeSort=function(){
		array = mergeSortRec(array);
	};
	var mergeSortRec=function(array){
		var length = array.length;
		if(length===1){
			return array;
		}
		var mid = Math.floor(length/2),
			left = array.slice(0,mid),
			right = array.slice(mid,length);
		return merge(mergeSortRec(left),mergeSortRec(right));
	};
	var merge = function(left,right){
		var result = [],
			il = 0,
			ir = 0;
		while(il<left.length && ir<right.length){
			if(left[il]<right[ir]){
				result.push(left[il++]);
			}else{
				result.push(right[ir++]);
			}
		}
		while(il<left.length){
			result.push(left[il++]);
		}
		while(ir<right.length){
			result.push(right[ir++]);
		}
		return result;
	};

	//快速排序 O(nlogn) 性能通常优于其他O(nlogn)的算法
	this.quickSort=function(){
		quick(array,0,array.length-1);
	};
	var quick = function(array,left,right){
		var index;
		if(array.length>1){
			index = partition(array,left,right);

			if(left<index-1){
				quick(array,left,index-1);
			}
			if(index<right){
				quick(array,index,right);
			}
		}
	};
	var partition = function(array, left, right) { 
 
	 var pivot = array[Math.floor((right + left) / 2)], //{8} 
		 i = left, //{9} 
		 j = right; //{10} 
	 
	 while (i <= j) { //{11} 
	 	while (array[i] < pivot) { //{12} 
			 i++; 
	 	} 
	 	while (array[j] > pivot) { //{13} 
	 		j--; 
	 	} 
		if (i <= j) { //{14} 
			 swapQuickStort(array, i, j); //{15} 
			 i++; 
			 j--; 
	 	} 
	 } 
	 return i; //{16} 
	}; 

	var swapQuickStort = function(array, index1, index2){ 
		 var aux = array[index1]; 
		 array[index1] = array[index2]; 
		 array[index2] = aux; 
	};

	//顺序搜索
	this.orderSearch = function(item){
		for(var i=0;i<length;i++){
			if(item===array[i]){
				return i;
			}
		}
		return -1;
	};
	//二分搜索
	this.binarySearch = function(item){
		this.quickSort();
		var low=0,
			high=array.length-1,
			mid,element;
		while(low<high){
			mid = Math.floor((low+high)/2);
			element = array[mid];
			if(element<item){
				low=mid+1;
			}else if(element>item){
				high=mid-1;
			}else{
				return mid;
			}
		}
		return -1;
	};
}

//递归--斐波那契数列
function fibonacci(num){
	if(num===1||num===2){
		return 1;
	}
	return fibonacci(num-1)+fibonacci(num-2);
}
//Dynamic Programming 分解成相互依赖的子问题---硬币找零