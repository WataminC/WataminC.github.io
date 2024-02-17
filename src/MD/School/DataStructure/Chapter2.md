---
title: 第2章 线性表
---
# $\S$ 第二章：线性表

### **线性表的逻辑结构及其基本操作**:

线性表是$n(n \geq 0)$个相同数据元素$a_0, a_1, \cdots, a_{n-1}$构成的有限序列

**形式化定义**:

$Linearlist = (D, R)$

**线性表的逻辑特征是**：
- 在非空的线性表，有且仅有一个开始结点a 1 ，它没有直接前趋，而仅有一个直接后继a 2
- 有且仅有一个终端结点a n ，它没有直接后继，而
仅有一个直接前趋a n-1
- 其余的内部结点$a_i (2 \leq i \leq n-1)$都有且仅有一个直接前趋$a_{i-1}$和一个直接后继$a_{i+1}$线性表是一种典型的线性结构。
- 数据的运算是定义在逻辑结构上的，而运算的

具体实现则是在存储结构上进行的。

**线性表的抽象类**
```cpp
template <class T >
class LinearList {
public:
LinearList();   //构造函数
～LinearList(); //析构函数
virtual int Size() const = 0;   //求表最大体积
virtual int Length() const = 0; //求表长度
virtual int Search(T x) const = 0;  //搜索
virtual int Locate(int i) const = 0;    //定位
virtual T* getData(int i) const = 0;    //取值
virtual void setData(int i, T x) = 0;//赋值
virtual bool Insert(int i, T x) = 0;    //插入
virtual bool Remove(int i, T& x) = 0;   //删除
virtual bool IsEmpty() const = 0;   //判表空
virtual bool IsFull() const = 0;    //判表满
virtual void Sort() = 0；   //排序
virtual void input() = 0；  //输入
virtual void output() = 0； //输出
virtual LinearList<T>operator=(LinearList<T>& L) = 0; //复制
};
```

**顺序表类的定义**

```cpp
const int defaultSize = 100;
template <class T>
class SeqList: public LinearList<T> {
protected:
    T *data;
    //存放数组
    int maxSize;
    //最大可容纳表项的项数
    int last;
    //数组中最后一个元素的下标
    void reSize(int newSize); //改变数组空间大小
public:
    SeqList(int sz = defaultSize);
    //构造函数
    SeqList(SeqList<T>& L);
    //复制构造函数
    ～SeqList() {delete[ ] data;}
    //析构函数
    int Size() const {return maxSize;} //求表最大容量
    int Length() const {return last+1;}
    //计算表长度
    int Search(T& x) const;
    //搜索x在表中位置，函数返回表项序号
    int Locate(int i) const;
    //定位第 i 个表项，函数返回表项序号
    bool getData(int i, T & x); //取第i个元素
    bool Insert(int i, T &x);
    //插入
    bool Remove(int i, T& x);
    //删除
    ……
};
```

**顺序表的构造函数**
```cpp
template <class T>
SeqList<T>::SeqList(int sz) {
if (sz > 0) {
    maxSize = sz; last = -1;
    data = new T[maxSize]; //创建表存储数组
    if (data == 0) {
    //动态分配失败 
        cerr << "存储分配错误！" << endl;
        exit(1); 
    }
}
};
```

**复制构造函数**

```cpp
template <class T>
SeqList<T>::SeqList(SeqList<T>& L) {
    T value;
    maxSize = L.Size(); 
    last = L.Length()-1;
    data = new T[maxSize];
    //创建存储数组
    //动态分配失败
    if (data == 0){
        cerr << "存储分配错误！" << endl; 
        exit(1);
    }
    for (int i = 1; i <= last+1; i++)   //传送各个表项
    { 
        L.getData(i,value);
        data[i-1] =value; 
    }
};
```

**顺序表按值查找算法**

```cpp
template <class T>
int SeqList<T>::search(T& x) const {
    //在表中顺序搜索与给定值 x 匹配的表项，找到则
    //函数返回该表项是第几个元素，否则函数返回0
    for (int i = 1; i <=last+1; i++)    //顺序搜索
        if ( data[i-1] == x ) return i; //表项序号和表项位置差1
            return 0;   //搜索失败
};
```

**顺序表的插入算法**
```cpp
template <class T>
bool SeqList<T>::Insert (int i, T& x) {
    //将新元素x插入到表中第i (1≤i≤n+1) 个表项位
    //置。函数返回插入成功的信息
    if (last == maxSize-1) 
        return false;   //表满
    if (i < 1 || i > Length()+1) 
        return false;   //参数i不合理
    for (int j = last+1; j >= i; j--)   //依次后移
        data[j] = data[j-1];
    data[i-1] = x;  //插入(第 i 表项在data[i-1]处)
    last++; 
    return true;    //插入成功
};
```

**顺序表的删除算法**
```cpp
template <class T>
bool SeqList<T>::Remove (int i, T& x) {
    //从表中删除第 i (1≤i≤n) 个表项，通过引用型参
    //数 x 返回被删元素。函数返回删除成功信息
    if (last == -1) return false;   //表空
    if (i < 1 || i > last+1) return false; //参数i不合理
    x = data[i-1];
    for (int j = i; j <= last; j++) //依次前移，填补
        data[j-1] = data[j];
    last--; 
    return true;
};
```

**顺序表的优点**：

- 无须为表示节点间的逻辑关系而增加额外的存储空间

$\text{存储密度} = \frac{\text{数据元素的值所需的存储量}}{\text{该数据元素所需的存储总量}}$

- 可以方便的随机存取表中的任一节点

**顺序表的缺点**

- 插入和删除运算不方便
- 由于要求占用连续的存储空间，存储分配只能预先进行

**结点类的定义**
```cpp
template <class T>
struct LinkNode {
    //链表结点类的定义
    T data;
    //数据域
    LinkNode<T> * link;
    //链指针域
    LinkNode() { link = 0; } //构造函数
    LinkNode(T item, LinkNode<T> * ptr = 0)
    { data = item; link = ptr; } //构造函数
    bool operator== (T x) { return data.key == x; }
    //重载函数，判相等
    bool operator != (T x) { return data.key != x; }
};
```

**单链表的定义**
```cpp
template <class T>
class List {
//单链表类定义, 不用继承也可实现
protected:
    LinkNode<T> * first; //表头指针
public:
    List() { first = new LinkNode<T>; } //构造函数
    List(T x) { first = new LinkNode<T>(x); }
    List( List<T>& L);//复制构造函数
    ~List(){ }//析构函数
    void makeEmpty();//将链表置为空表
    int Length() const;//计算链表的长度
    LinkNode<T> *Search(T x); //搜索含x元素
    LinkNode<T> *Locate(int i);//定位第i个元素
    T *getData(int i);//取出第i元素值
    void setData(int i, T x);//更新第i元素值
    bool Insert (int i, T x);//在第i元素后插入
    bool Remove(int i, T& x);   //删除第i个元素
    bool IsEmpty() const    //判表空否
    { return first->link == 0 ? true : false; }
    LinkNode<T> *getFirst() const { return first; }
    void setFirst(LinkNode<T> *f ) { first = f; }
    void Sort();    //排序
    void Print();   //输出整条链表的结点值
}
```

**输出所有结点值**
```cpp
template <class T>
Void List<T> :: Print ( )
{
    LinkNode<T> *p = first->link;
    //检测指针 p 指示第1个结点
    while ( p != 0 )
    {   //逐个结点检测
        cout<<p->data; p = p->link;
    }
}
```

**求长度**
```cpp
template <class T>
int List<T> :: Length ( ) const
{
    LinkNode<T> *p = first->link;
    //检测指针 p 指示第1个结点
    int count = 0;
    while (p != 0)
    {//逐个结点检测
        count++; 
        p = p->link;
    }
    return count;
}
```

**定位算法**
```cpp
template <class T>
LinkNode<T> * List<T>::Locate ( int i ) {
    //函数返回表中第 i 个元素的地址。若i < 0或 i 超
    //出表中结点个数，则返回0。
    if (i < 0) return 0;
    //i不合理
    LinkNode<T> * current = first; int k = 0;
    while ( current != 0 && k < i )
    { current = current->link; k++; }
    return current; //返回第 i 号结点地址或0
};
```

**单链表搜索算法**
```cpp
template <class T>
LinkNode<T> * List<T>::Search(T x) {
    //在表中搜索含数据x的结点, 搜索成功时函数返
    //该结点地址; 否则返回0。
    LinkNode<T> * current = first->link;
    while ( current != 0 && current->data != x )
    current = current->link;
    //沿着链找含x结点
    return current;
};
```

**单链表的插入算法**
```cpp
template <class T>
bool List<T>::Insert (int i, T x) {
    //将新元素 x 插入在链表中第 i 个结点之后。
    LinkNode<T> *current = Locate(i);
    if (current == 0) return false; //无插入位置
    LinkNode<T> *newNode=new LinkNode<T>(x);    //创建新结点
    newNode->link = current->link;  //链入
    current->link = newNode;
    return true;    //插入成功
};
```

**单链表的删除算法**
```cpp
template <class T>
bool List<T>::Remove (int i, T& x ) {
    //删除链表第i个元素, 通过引用参数x返回元素值
    LinkNode<T> *current = Locate(i-1);
    if ( current == 0 || current->link == 0)
    return false;   //删除不成功
    LinkNode<T> *del = current->link;
    current->link = del->link;
    x = del->data; delete del;
    return true;
};
```

**析构函数**
```cpp
template <class T>
List<T>::~List() {
    LinkNode<T> *q;
    while (first != 0)
    {
    q = first;  //保存被删结点
    first = first->link; //从链上摘下该结点
    delete q;   //删除
}
}；
```

---
其他形式的链表

**循环链表**
```cpp
template <class T>
struct CircLinkNode {
    //链表结点类定义
    T data;
    CircLinkNode<T> *link;
    CircLinkNode ( CircLinkNode<T> * next = 0 ) { link = next; }
    CircLinkNode ( T d, CircLinkNode<T> * next = 0 ) { data = d; link = next; }
    bool Operator==(T x) { return data.key == x.key; }
    bool Operator!=(T x) { return data.key != x.key; }
};

template <class T>
//链表类定义
class CircList {
private:
    CircLinkNode<T> *first, *last; //头指针, 尾指针
    public:
    CircList(const T x);    //构造函数
    CircList(CircList<T>& L);   //复制构造函数
    ～CircList();   //析构函数
    int Length() const; //计算链表长度
    bool IsEmpty() { return first->link == first; } //判表空否
    CircLinkNode<T> *getHead() const;   //返回表头结点地址
    void setHead ( CircLinkNode<T> *p );    //设置表头结点地址
    CircLinkNode<T> *Search ( T x ); //搜索
    CircLinkNode<T> *Locate ( int i ); //定位
    T *getData ( int i );   //提取
    void setData ( int i, T x );    //修改
    bool Insert ( int i, T x ); //插入
    bool Remove ( int i, T& x); //删除
};
```

**循环链表的搜索算法**
```cpp
template <class T>
CircLinkNode<T> * CircList<T>::Search( T x )
{
    //在链表中从头搜索其数据值为 x 的结点
    current = first->link;
    while ( current != first && current->data != x )
        current = current->link;
    return current;
}
```

**双向循环链表**
```cpp
template <class T>
struct DblNode {
    //链表结点类定义
    T data;
    //链表结点数据
    DblNode<T> *lLink, *rLink;
    //前驱、后继指针
    DblNode ( DblNode<T> * l = 0, DblNode<T> * r = 0 )
    { lLink = l; rLink = r; }
    //构造函数
    DblNode ( T value, DblNode<T> * l = 0, DblNode<T> *r = 0)
    { data = value; lLink = l; rLink = r; } //构造函数
};

template <class T>
class DblList {
//链表类定义
public:
    DblList ( T uniqueVal ) {
    //构造函数
        first = new DblNode<T> (uniqueVal);
        first->rLink = first->lLink = first;
    };
    DblNode<T> *getFirst () const { return first; }
    void setFirst ( DblNode<T> *ptr ) { first = ptr; }
    DblNode<T> *Search ( T x, int d);   //在链表中按d指示方向寻找等于给定值x的结点,
    //d=0按前驱方向,d≠0按后继方向
    DblNode<T> *Locate ( int i, int d );
    //在链表中定位序号为i(≥0)的结点, d=0按前驱方
    //向,d≠0按后继方向
    bool Insert ( int i, T x, int d );
    //在第i个结点后插入一个包含有值x的新结点,d=0
    //按前驱方向,d≠0按后继方向
    bool Remove ( int i, T& x, int d ); //删除第i个结点
    bool IsEmpty() { return first->rlink == first; }    //判双链表空否
private:
    DblNode<T> *first;  //表头指针
};
```

**双向循环链表的搜索算法**

```cpp
template <class T>
DblNode<T> *DblList<T>::Search ( T x , int d ) {
    //在双向循环链表中寻找其值等于x的结点。
    DblNode<T> *current = (d == 0) ? first->lLink : first->rLink; //按d确定搜索方向
    while ( current != first && current->data != x )
        current = (d == 0) ? current->lLink : current->rLink;
    if ( current != first ) 
        return current; //搜索成功
    else 
        return 0;   //搜索失败
};
```

**双向循环链表的插入算法**
```cpp
template <class T>
bool DblList<T>::Insert ( int i, T x, int d ) {
    //建立一个包含有值x的新结点, 并将其按 d 指定的
    //方向插入到第i个结点之后。
    DblNode<T> *current = Locate(i, d); //按d指示方向查找第i个结点
    if ( current == 0 ) 
        return false; //插入失败
    DblNode<T> *newNd = new DblNode<T>(x);
    if (d == 0) {
        //前驱方向:插在第i个结点左侧
        newNd->lLink = current->lLink; //链入lLink链
        current->lLink = newNd;
        newNd->lLink->rLink = newNd; //链入rLink链
        newNd->rLink = current;
    } 
    else {
        //后继方向:插在第i个结点后面
        newNd->rLink = current->rLink; //链入rLink链
        current->rLink = newNd;
        newNd->rLink->lLink = newNd; //链入lLink链
        newNd->lLink = current;
    }
    return true;    //插入成功
};
```