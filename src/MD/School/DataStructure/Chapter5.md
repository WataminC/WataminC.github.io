---
title: 第5章 树的基本概念
---
**树的基本术语**

- 1.根
- 2.孩子、双亲和兄弟 、祖先、子孙
- 3.分支结点和叶子结点
- 4.结点的度和树的度
- 5.结点的层数和树的深度
- 6.路径和路径长度
- 7.有序树和无序树
- 8.森林

```
树的操作（实际生活的抽象）
（1）求根操作 Root(x)
求出当前树中结点x的根结点；
（2）求双亲操作 Parent(x) 求出当前树中结点x的双亲结点；
（3）求孩子操作 Child(x，i) 求出当前树中结点x的第i个孩子结点；
（4）插入子树操作 Insert(x,i,s) 当前树中插入根结点为s的子树，并
作为结点x的第i棵子树；
（5）删除子树操作 Delete(x,i) 在当前树中删除结点x的第i棵子树；
（6）树的遍历操作 Travel( ) 按某种次序依次访问当前树中的各个
结点，并使每个结点只被访问一次；
（7）清除操作 Clear( ) 将当前树置为空树；
（8）求树高 Depth( ) 求出树的高度；
（9）树建立操作 Create( ) 建立一棵非空的树并成为当前树；
```

**树的抽象数据类型**

```cpp
template <class T>
class Tree {
//对象: 树是由n (≥0) 个结点组成的有限集合。在
//类界面中的 position 是树中结点的地址。在顺序
//存储方式下是下标型, 在链表存储方式下是指针
//型。T 是树结点中存放数据的类型, 要求所有结
//点的数据类型都是一致的。
public:
    Tree ();
    ~Tree ();
    BuildRoot (const T& value);
    //建立树的根结点
    position FirstChild(position p);
    //返回 p 第一个子女地址, 无子女返回 0
    position NextSibling(position p);
    //返回 p 下一兄弟地址, 若无下一兄弟返回 0
    position Parent(position p);
    //返回 p 双亲结点地址, 若 p 为根返回 0
    T getData(position p);
    //返回结点 p 中存放的值
    bool InsertChild(position p, T& value);
    //在结点 p 下插入值为 value 的新子女, 若插
    //入失败, 函数返回false, 否则返回true
    bool DeleteChild (position p, int i);
    //删除结点 p 的第 i 个子女及其全部子孙结
    //点, 若删除失败, 则返回false, 否则返回true
    void DeleteSubTree (position t);
    //删除以 t 为根结点的子树
    bool IsEmpty ();
    //判树空否, 若空则返回true, 否则返回false
    void Traversal (void (*visit)(position p));
    //遍历以 p 为根的子树
};
```

**树的存储结构**

- 链式结构
    - 不定长的多重链式结构
    - 定长的多重链式结构
- 孩子链表示方法
- 双亲表示法

**一般树转化为二叉树**

- 加线：在个兄弟结点之间加一连线。
- 抹线：对每一结点，除了其最左的一个孩子以外，
抹掉该结点原先与其余孩子之间的连线。
- 旋转：以树根为轴心，将整棵树按顺时针旋转
45 0 。

**二叉树还原为一般树**

- 加线:若某结点是双亲结点的左孩子,则将
该结点的右孩子以及当且仅当连续地沿着此右
孩子的右子树方向不断地搜索到的所有右孩子,
都分别与该结点的双亲结点用连线连接起来
- 抹线:删去原二叉树中所有双亲结点与右
孩子的连线。
- 调整:把属于同一层的结点调整到同一水
平线上。 

**森林转换为二叉树**

- 将森林中每棵树转换为二叉树。
- 将森林中每棵转换所得的二叉树的树根用线相连。即第一棵二叉树不动，从第二棵二叉树开始，依次把后一棵二叉树的根结点作为前一棵二叉树根结点的右孩子。

**森林还原为二叉树**

- 抹线：将二叉树的根结点与其右孩子i的连线以
及当且仅当连续地沿着结点i的右分支不断搜索到的
所有右孩子间的连线删去，这样就可以得到若干棵独
立的二叉树。
- 还原：分别将各棵独立的二叉树还原为树。

```
二叉树操作
（1）求根操作 Root(x)
求出当前二叉树中结点x的根结点；
（2）求双亲操作 Parent(x) 求出当前二叉树中结点x的双亲结点；
（3）求左孩子操作 leftchild(x) 求出当前二叉树中结点x的左孩子结点；
（4）求右孩子操作 rightchild(x) 求出当前二叉树中结点x的右孩子结点；
（5）插入左子树操作 Linsert(x,s) 当前二叉树中插入根结点为s的子树，并作为
无左子树的结点x的左子树；
（6）插入右子树操作 Rinsert(x,s) 当前二叉树中插入根结点为s的子树，并作为
无右子树的结点x的右子树；
（7）删除左子树操作 Ldelete(x) 在当前二叉树中删除结点x的左子树；
（8）删除右子树操作 Rdelete(x) 在当前二叉树中删除结点x的右子树；
（9）遍历操作 Travel( ) 按某种次序依次访问当前二叉树中的各个结点，并使
每个结点只被访问一次；
（10）清除操作 Clear( ) 将当前二叉树置为空二叉树；
（11）求树高 Depth( ) 求出二叉树的高度；
（12）建立二叉树操作 Create( ) 建立一棵非空的二叉树并成为当前二叉树；
```

二叉树的抽象数据类型
```cpp
template <class T>
class BinaryTree {
//对象: 结点的有限集合, 二叉树是有序树
public:
    BinaryTree ();
    //构造函数
    BinaryTree (BinTreeNode<T> *lch,BinTreeNode<T> *rch, T item);//构造函数, 以item为根, lch和rch为左、右子
    //树构造一棵二叉树
    int Height ();//求树深度或高度
    int Size ();//求树中结点个数
    bool IsEmpty ();//判二叉树空否？
    BinTreeNode<T> *Parent (BinTreeNode<T> *t);//求结点 t 的双亲
    BinTreeNode<T> *LeftChild (BinTreeNode<T> *t);//求结点 t 的左子女
    BinTreeNode<T> *RightChild (BinTreeNode<T> *t);//求结点 t 的右子女
    bool Insert (T item);//在树中插入新元素
    bool Remove (T item);//在树中删除元素
    bool Find (T& item);//判断item是否在树中
    bool getData (T& item);//取得结点数据BinTreeNode<T> *getRoot (); 
    //取根
    void Travel (void (*visit) (BinTreeNode<T> *t));//遍历, visit是访问函数
};
```

**二叉树类的定义**
```cpp
二叉树的类定义
template <class T>
struct BinTreeNode {
    //二叉树结点类定义
    T data; //数据域
    BinTreeNode<T> *leftChild, *rightChild; //左子女、右子女链域
    BinTreeNode ()  //构造函数
    { leftChild = 0 ; rightChild = 0 ; }
    BinTreeNode (T x, BinTreeNode<T> *l = 0, BinTreeNode<T> *r = 0 )
    {   
        data = x; 
        leftChild = l; 
        rightChild = r; 
    }
};

template <class T>
class BinaryTree {  //二叉树类定义
public:
    BinaryTree () : root ( 0 ) { } //构造函数
    BinaryTree (T value) : RefValue(value), root( 0 )
    { } //构造函数
    BinaryTree (BinaryTree<T>& s); //复制构造函数
    ～BinaryTree () { destroy(root); } //析构函数
    bool IsEmpty () { return root == 0 ;}   //判二叉树空否
    int Height () { return Height(root); } //求树高度
    int Size () { return Size(root); }  //求结点数
    BinTreeNode<T> *Parent(BinTreeNode <T> *t)
    { return (root == 0 || root == t) ?
    0 : Parent (root, t); } //返回双亲结点
    BinTreeNode<T> *LeftChild (BinTreeNode<T> *t)
    { return (t != 0 )？t->leftChild : 0 ; }    //返回左子女
    BinTreeNode<T> *RightChild (BinTreeNode<T> *t)
    { return (t != 0 )？t->rightChild : 0 ; }   //返回右子女
    BinTreeNode<T> *getRoot () const { return root; }   //取根
    int Insert (const T item);  //插入新元素
    BinTreeNode<T> *Find (T item) const;    //搜索
    void Travel (void (*visit) (BinTreeNode<T> *t));    //遍历, visit是访问函数
protected:
    BinTreeNode<T> *root;   //二叉树的根指针
    T RefValue; //数据输入停止标志
    void CreateBinTree (istream& in,
    BinTreeNode<T> *& subTree); //从文件读入建树
    bool Insert (BinTreeNode<T> *& subTree, T& x);  //插入
    void destroy (BinTreeNode<T> *& subTree);   //删除
    bool Find (BinTreeNode<T> *subTree, T& x);  //查找BinTreeNode<T> *Copy (BinTreeNode<T> *r);
    //复制
    int Height (BinTreeNode<T> *subTree);   //返回树高度
    int Size (BinTreeNode<T> *subTree); //返回结点数
    BinTreeNode<T> *Parent (BinTreeNode<T> *
    subTree, BinTreeNode<T> *t);    //返回父结点
    BinTreeNode<T> *Find (BinTreeNode<T> *
    subTree, T& x) const;   //搜寻xfriend istream& operator >> (istream& in,
    BinaryTree(<T>& Tree); //重载操作：输入
    friend ostream& operator << (ostream& out, BinaryTree<T>& Tree); //重载操作：输出
};
```

**非递归遍历算法**

```cpp
void BinaryTree<T>::preOrder(void (*visit)(BinTreeNode<T> *p))
//前序遍历的非递归算法
{
    stack<BinTreeNode<T>*> s;  // 定义一个以二叉结点总数为容量的顺序栈对象
    t=root;
    while(!s.IsEmpty()||t != 0) //栈或当前指针非空
    {
        while (t != 0) // 当前指针非空
        {
            visit(t); 
            s.Push(t);
            t=t->leftchild;
        }
        if(!s.IsEmpty())
        { 
            s.Pop(t); 
            t=t->rightchild; 
        }
    } // while
} // PreOrder
```

**中序遍历**

```cpp
template <class T>
void BinaryTree<T>::inOrder( BinTreeNode<T> *subTree， void (*visit)(BinTreeNode<T> *p) )
{
    if ( subTree!= 0 ) // 二叉树非空
    {
        inorder(subTree->leftchild,visit);//对左子树进行遍历
        visit(subTree); // 对根结点进行访问
        inorder(subTree->rightchild,visit);//对右子树进行遍历
    }
} // InOrder
```

```cpp
Template <class T>
void BinaryTree<T>::inOrder( void (*visit)(BinTreeNode<T> *p) )
//中序遍历的非递归算法
{
    stack< BinTreeNode<T>* > s;
    // 定义一个以二叉树的结点总数作为容量的顺序栈对象
    t=root;
    while( ! s.IsEmpty()||t!= 0 ) // 栈或当前指针非空
    {
        while ( t != 0 ) // 当前指针非空
        {
            s.Push(t); 
            t=t->leftchild;
        }
        if( ! s.IsEmpty( ))
        {
            s.Pop( t );
            visit(t);
            t=t->rightchild;
        }
    } // while
} // InOrder
```

**后序遍历**

```cpp
Template <class T>
void BinaryTree<T>::postOrder( BinTreeNode *subTree, void (*visit)(BinTreeNode<T> *p) )
{
    if ( subTree!= 0 ) // 二叉树非空
    {
        postOrder( subTree->leftchild,visit) ;//对左子树进行遍历
        postOrder( subTree->rightchild,visit );//对右子树进行遍历
        visit(subTree); // 对根结点进行访问
    }
} // PostOrder
```

```cpp
void BinaryTree<T>::PostOrder(void (*visit)(BinTreeNode<T> *p) )
//后序遍历的非递归算法
{
    stack< BinTreeNode<T>*> s1; stack<int> s2;
    // 定义一个以二叉树的结点总数作为容量的顺序栈对象,
    //栈结点结构应该能保存要返回的结点及该结点的进栈标志值。
    t=root;
    while( ( ! s1.IsEmpty( ) )||( t != 0 )) // 栈非空或当前结点非空
    { 
        while ( t!= 0 ) // 当前结点非空
        { 
            s1.Push( t ) ; 
            s2.Push( 0 ) ; //当前结点和第一进栈标志进栈s
            t=t->leftchild;//以当前结点的左孩子作为当前结点
        }
        if ( ! s.IsEmpty( ) ) // 栈s非空
        { 
            s1.Pop( t ); 
            s2.Pop( flag ) ; // s1,s2栈顶结点出栈
            if ( flag= = 1 ) //该结点是第二进栈而出来的
            { 
                visit(t); 
                t= 0 ; 
            }// 访问结点
            else
            { 
                s1.Push( t ) ; 
                s2.Push( 1 ) ; // 结点第二次进栈s
                t=t->rightchild;//以当前结点的右孩子作为当前结点
            } // else
        } // if
    } // while
} // PostOrder
```

**层次遍历**

```cpp
void BinaryTree<T>::levelOrder(void (*visit)(BinTreeNode<T> *p) )
// 对二叉树进行层次遍历
{
    queue< BinTreeNode<T>*> q;
    //定义一个以二叉树结点数为容量的顺序队列对象
    t=root;
    if ( t!= 0 )
        q.EnQueue(t ); // 二叉树的根结点入列
    while ( ！q.IsEmpty( ) ) // 队列非空
    { 
        t=q.DeQueue( ); // 队头结点出队
        visit(t); // 对结点t进行访问
        if(t->leftchild!= 0 )//左孩子非空，则入列
            q.EnQueue(t->leftchild);
        if(t->rightchild!= 0 )//右孩子非空，则入列
            q.EnQueue(t->rightchild);
    } // while
} // LevelOrder
```

---

**二叉树的建立**

**前序建立**

```cpp
BinTreeNode<T> *CreateBTree(void)
{ 
    char ch;
    BinTreeNode<T> *current;
    cin>>ch ;
    if ( ch==’.’ ) // 输入的是否为符号’.’
        return 0; // 建立空树
    else
    { 
        current=new BinTreeNode<T> ; // 分配结点空间
        current->data=ch; // 填入结点值
        current->leftchild=CreateBTree( );//建立左子树
        current->rightchild=CreateBTree( ); // 建立右子树
        return current;
    }
} // Create
```

**中序建立**

```cpp
BinTreeNode<T> * CreateBTree(void)
{ 
    char ch;
    BinTreeNode<T> *q,*current;
    cin>>ch ;
    if ( ch==’.’ ) // 输入的是否为符号’.’
        return 0; // 建立空树
    else
    { 
        q=CreateBTree( );//建立左子树
        current=new BinTreeNode<T> ; // 分配结点空间
        current->data=ch; // 填入结点值
        current->leftchild=q; //建立左子树
        current->rightchild=CreateBTree( ); // 建立右子树
        return current;
    }
} // Create
```

**后序建立**

```cpp
BinTreeNode<T> *CreateBTree(void)
//private成员函数
{ 
    char ch;
    BinTreeNode<T> *tl,*tr,*current;
    cin>>ch ;
    if ( ch==’.’ ) // 输入的是否为符号’.’
        return 0 ; // 建立空树
    else
    { 
        tl=CreateBTree( ); //建立左子树
        tr=CreateBTree( ); // 建立右子树
        current=new BinTreeNode<T> ; // 分配结点空间
        current->data=ch; // 填入结点值
        current->leftchild=tl;
        current->rightchild= tr;
        return current;
    }
} // Create
```

**层次建立**

```cpp
BinTreeNode<T> *CreateBTree(void)
//private成员函数
{ 
    char ch;
    BinTreeNode<T> *tl,*tr,*current;
    cin>>ch ;
    if ( ch==’.’ ) // 输入的是否为符号’.’
        return 0 ; // 建立空树
    else
    { 
        tl=CreateBTree( ); //建立左子树
        tr=CreateBTree( ); // 建立右子树
        current=new BinTreeNode<T> ; // 分配结点空间
        current->data=ch; // 填入结点值
        current->leftchild=tl;
        current->rightchild= tr;
        return current;
    }
} // Create
```

---

**线索二叉树**

```cpp
Typedef enum { Link, Thread } PointerTag; //=0指针;=1线索

Typedef struct BiThrNode
{ 
    TElemType data;
    PointerTag ltag;
    struct BiThrNode *lchild;
    PointerTag rtag；
    struct BiThrNode *rchild ;
}BiThrNode,*BiThrTree；
```

--- 

**堆的定义**：设有n个数据元素组成的序列{a 1 ,a 2 ,...,a n },若它满足下面的条件：

- （1）这些数据元素是一棵完全二叉树中的结点，且
a i (i=1,2,...n )是该完全二叉树中编号为i的结点；
- （2）若2i $\leq$ n ,有$a_{2i}$ $\geq$ $a_i$ ;
- （3）若2i+1 \leq n ,有$a_{2i+1}$ $\geq$ $a_i$ ;

则称该序列为一个堆。

```
任意节点小于（或大于）它的所有后裔，最小元（或最大元）在堆的根上（堆序性）。
堆总是一棵完全树。即除了最底层，其他层的节点都被元素填满，且最底层尽可能地从左到右填入。
```

**最小堆的类定义**

```cpp
#define DefaultSize = 10

template <class T>
class MinHeap
{ 
    T *heap;
    int CurrentSize;
    int MaxHeapSize;

public:
    MinHeap ( int sz=DefaultSize );
    MinHeap ( T arr[ ], int n );
    ~MinHeap ( ) { delete [ ] heap; }
    const MinHeap<T> & operator= (const MinHeap &R );
    bool Insert ( const T &x );
    bool RemoveMin ( T &x );
    bool IsEmpty ( ) const
    { return CurrentSize == 0; }
    bool IsFull ( ) const
    { return CurrentSize == MaxHeapSize; }
    void MakeEmpty ( ) { CurrentSize = 0; }
private:
    void siftDown ( int start, int m );
    void siftUp ( int start );
}
```

**初始化**

```cpp
template <class T>
MinHeap <T> ::MinHeap ( int sz )
{
    //根据给定大小maxSize,建立堆对象
    MaxHeapSize=DefaultSize<sz ?maxSize :DefaultSize ;//确定堆大小
    heap = new T[MaxHeapSize]; //创建堆空间
    CurrentSize = 0;    //初始化
}
```
**最小堆向下调整**

```cpp
template <class T>
void MinHeap<T> :: siftDown ( int start, int m )
{
    int i = start, j = 2*i+1;
    // j 是 i 的左子女
    T temp = heap[i];
    while ( j <= m )
    { 
        if ( j < m && heap[j] >heap[j+1] )
            j++; //两子女中选小者
        if ( temp <= heap[j] ) 
            break;
        else
        { 
            heap[i] = heap[j];
            i = j ; 
            j = 2*j+1; // 往下走
        }
    }
    heap[i] = temp;
}
```

**筛选法**

```cpp
template<class T>
void MinHeap<T>:: MinHeap(T arr[], int n)
{ 
    // 把最小堆初始化为数组arr .
    delete [ ] heap;
    MaxHeapSize = DefaultSize < n ? n : DefaultSize;
    heap = new Type [MaxHeapSize];
    for ( int i=0;i<n;i++) 
        heap[i] = arr[i]; //数组传送
    CurrentSize = n;    //当前堆大小
    int currentPos = (CurrentSize-2)/2; //最后非叶
    while ( currentPos >= 0 )
    { 
        //从下到上逐步扩大,形成堆
        siftDown ( currentPos, CurrentSize-1 );
        //从currentPos开始,到CurrentSize为止, 调整
        currentPos--;
    }
}
```

**最小堆向上调整**

```cpp
template <class T>
void MinHeap<T> ::siftUp ( int start )
{
    //从 start 开始,向上直到0,调整堆
    int j = start, i = (j-1)/2; // i 是 j 的双亲
    T temp = heap[j];
    while ( j > 0 )
    { 
        if ( heap[i] <= temp ) 
            break;
        else
        { 
            heap[j] = heap[i];
            j = i; 
            i = (i -1)/2; // 往上走
        }
    }
    heap[j] = temp;
}
```

**堆插入算法**

```cpp
template <class T>
bool MinHeap<T> ::Insert ( const T &x )
{ //在堆中插入新元素 x
    if ( CurrentSize == MaxHeapSize ) { 
        cout << "堆已满" << endl; return 0; 
    }
    heap[CurrentSize] = x;  //插在表尾
    siftUp (CurrentSize);   //向上调整为堆
    CurrentSize++; //堆元素增一
    return 1;
}
```

**堆删除算法**

```cpp
template <class T>
int MinHeap <T> ::RemoveMin ( T &x )
{
    if ( !CurrentSize )
    { 
        cout << "堆已空 " << endl; 
        return 0;
    }
    x = heap[0];//最小元素出队列
    heap[0] = heap[CurrentSize-1];
    CurrentSize--;
    siftDown ( 0, CurrentSize-1 );
    //从0号位置开始自顶向下调整为堆
    return 1;
}
```

**哈夫曼看实验**