---
title: 第3章 栈与队列
category: CS
tag: DataStructure
---
# $\S$ 第三章 栈和队列

### 栈(Stack)$-$逻辑结构

**定义**:

只允许在一端插入和删除的线性表,后进先出(LIFO)

**栈的抽象定义**
```cpp
template <class T>
class Stack {
//栈的类定义
public:
    Stack(){ }; //构造函数
    virtual void Push(T x) = 0; //进栈
    virtual bool Pop(T& x) = 0; //出栈
    virtual bool getTop(T& x) = 0; //取栈顶
    virtual bool IsEmpty() = 0; //判栈空
    virtual bool IsFull() = 0;  //判栈满
}；
```

---
**顺序栈**:指的就是利用一组地址连续的存储单元依次存放自栈底到栈顶的数据元素。

**顺序栈类的定义**
```cpp
class SeqStack : public Stack<T> { //顺序栈类定义
private:
    T *elements;    //栈元素存放数组
    int top;    //栈顶指针
    int maxSize;    //栈最大容量
    void overflowProcess(); //栈的溢出处理
public:
    SeqStack(int sz =50);   //构造函数
    ～SeqStack();   //析构函数
    void Push(T x); //进栈
    bool Pop(T & x);    //出栈
    bool getTop(T & x); //取栈顶内容
    bool IsEmpty() const { return top == -1; }
    bool IsFull() const { return top == maxSize-1; }
};
```

**构造函数与析构函数**
```cpp
template <class T>
SeqStack<T>::SeqStack(int sz): maxSize(sz)
{ 
    top=-1;
    elements=new T[maxSize];
    assert(elements!=NULL); //判断是否分配成功
}

template <class T>
SeqStack<T>::~SeqStack( )
{ delete[ ] elements; }
```

**顺序栈溢出操作**
```cpp
template <class T>
void SeqStack<T>::overflowProcess() {
    //私有函数：当栈满则执行扩充栈存储空间处理
    T *newArray = new T[2*maxSize]; //创建更大的存储数组
    for (int i = 0; i <= top; i++)
        newArray[i] = elements[i];
    maxSize += maxSize;
    delete [ ]elements;
    elements = newArray; //改变elements指针
};
```

**顺序栈进栈操作**
```cpp
template <class T>
void SeqStack<T>::Push(T x) {
    //若栈不满, 则将元素x插入该栈栈顶, 否则溢出处理
    if (IsFull() == true) overflowProcess();    //栈满
    elements[++top] = x;    //栈顶指针先加1, 再进栈
};
```

**顺序栈出栈操作**
```cpp
template <class T>
bool SeqStack<T>::Pop(T& x) {
    //函数退出栈顶元素并返回栈顶元素的值
    if (IsEmpty() == true) return false;
    x = elements[top--];    //栈顶指针退1
    return true;    //退栈成功
};
```

**顺序栈取栈顶操作**
```cpp
template <class T>
bool Seqstack<T>::getTop(T& x) {
    //若栈不空则函数返回该栈栈顶元素的地址
    if (IsEmpty() == true) 
        return false;
    x = elements[top];
    return true;
};
```

--- 

**链式栈**:用链表实现的栈

**链式栈类的定义**
```cpp
template <class T>
struct StackNode {
    //栈结点类定义
private:
    T data; //栈结点数据
    StackNode<T> *link; //结点链指针
public:
    StackNode(T d = 0, StackNode<T> *next = NULL)
    : data(d), link(next) { }
};

template <class T>
class LinkedStack : public Stack<T> { 
//链式栈类定义
private:
    StackNode<T> *top;  //栈顶指针
    void output(ostream& os,
    StackNode <T> *ptr, int i); //递归输出栈的所有元素
public:
    LinkedStack() : top(NULL) {}    //构造函数
    ～LinkedStack() { makeEmpty(); } //析构函数
    void Push(T x); //进栈
    bool Pop(T & x);    //退栈
    bool getTop(T & x) const;   //取栈顶
    bool IsEmpty() const { return top == NULL; }
    void makeEmpty();   //清空栈的内容
    friend ostream& operator << (ostream& os,
    LinkedStack<T>& s) { output(os, s.top, 1); }    //输出栈元素的重载操作 <<
};
```

**清空操作**
```cpp
template <class T>
LinkedStack<T>::makeEmpty() {
    //逐次删去链式栈中的元素直至栈顶指针为空。
    StackNode<T> *p;
    while (top != NULL)
    //逐个结点释放
    { 
        p = top; top = top->link; delete p; }
    };
```

**进栈操作**
```cpp
template <class T>
void LinkedStack<T>::Push(T x) {
    //将元素值x插入到链式栈的栈顶,即链头。
    top = new StackNode<T> (x, top);    //创建新结点
    assert (top != NULL);   //创建失败退出
};
```

**出栈操作**
```cpp
template <class T>
bool LinkedStack<T>::Pop(T & x) {
    //删除栈顶结点, 返回被删栈顶元素的值。
    if (IsEmpty() == true) 
        return false; //栈空返回
    StackNode<T> *p = top;  //暂存栈顶元素
    top = top->link;    //退栈顶指针
    x = p->data;
    delete p;  //释放结点
    return true;
};
```

**取栈顶元素**
```cpp
template <class T>
bool LinkedStack<T>::getTop(T& x) const {
    if (IsEmpty() == true) 
        return false; //栈空返回
    x = top->data;
    //返回栈顶元素的值
    return true;
};
```

**双栈共享同一空间**
```cpp
bool push(DualStack& DS, Type x, int i)
{ 
    if (DS.top0+1 == DS.top1) 
        return false;
    if (i == 0) { 
        DS.top0++; 
        DS.V[DStop0] = x;
    }
    else { 
        DS.top1--; 
        DS.V[DS.top1] = x; 
    }
    return true;
}

bool Pop(DualStack& DS, Type& x, int i)
{ 
    if(i==0) {
        if (DS.top0 == -1) 
            return false;
        x = DS.V[DS.top0]; 
        DS.top0--; 
    }
    else {
        if (DS.top1 == maxsize)     
            return false;
        x = DS.V[DS.top1]; 
        DS.top1++; 
    }
    return true;
}

bool push(DualStack& DS, Type x, int i) {
    if (DS.t[0]+1 == DS.t[1])   
        return false;
    if (i == 0) 
        DS.t[0]++; 
    else 
        DS.t[1]--;
    DS.V[DS.t[i]] = x;
    return true;
}

bool Pop(DualStack& DS, Type& x, int i) {
    if (DS.t[i] == DS.b[i])     
        return false;
    x = DS.V[DS.t[i]];
    if (i == 0) 
        DS.t[0]--; 
    else 
        DS.t[1]++;
    return true;
}
```

**十进制转n进制**
```cpp
void conversion(n)
{
    seqstack s;
    cin>>num;
    while(num)
    { 
        s.push(num%n);
        num=num/n;
    }
    while(! S.IsEmpty())
    { 
        s.pop(e);
        cout<<e;
    }
}
```

- **括号匹配问题** 
- **表达式计算**

---

# 队列(Queue)$-$逻辑结构

**定义**
- 队列是只允许在一端删除，在另一端插入的线性表
- 队头( front ):允许删除的一端
- 队尾( rear ):允许插入的一端
- 
**特性**
- 先进先出( FIFO , First In First Out )

**队列的抽象数据类型**
```cpp
template <class T>
class Queue {
public:
    Queue() { };
    //构造函数
    ～Queue() { };
    //析构函数
    virtual bool EnQueue(T x) = 0;  //进队列
    virtual bool DeQueue(T& x) = 0;     //出队列
    virtual bool getFront(T& x) = 0;    //取队首元素
    virtual bool IsEmpty() const = 0;
    virtual bool IsFull() const = 0;
};
```

---

**顺序队列**
```cpp
template <class T>
class SeqQueue : public Queue<T> { //队列类定义
protected:
    int rear, front;    //队尾与队头指针
    T *elements;    //队列存放数组
    int maxSize;    //队列最大容量
public:
    SeqQueue(int sz = 10); //构造函数
    ～SeqQueue() { delete[ ] elements; } //析构函数
    bool EnQueue(const T &x);   //新元素进队列
    bool DeQueue(T& x); //退出队头元素
    bool getFront(T& x);    //取队头元素值
    void makeEmpty() { front = rear = -1 ; }
    bool IsEmpty() const { return front == rear; }
    bool IsFull() const
    { return (rear == maxSize-1); }
    int getSize() const
    { return rear-front; }
};
```

**入队列**
```cpp
bool SeqQueue<T> ::EnQueue(const T &x ) //新元素进队列
{
    if ( rear== maxSize-1 ) // 队列已满的处理
    { 
        cout<<”overflow”; 
        return false; 
    }
    else {
        rear++; // 队尾位置指示器后移一个位置
        elements[rear]=x; // 填入新元素
        return true;
    }
} // EnQueue
```

**出队列**
```cpp
bool SeqQueue<T>:: DeQueue(T & x); //退出队头元素
{
    if ( front==rear ) // 队列为空的处理
    {
        cout<< “underflow”; 
        return false; // 不成功信息
    }
    else {
        front++; //队头位置指示器后移一个位置
        x=elements[front]; // 暂存队头元素
        return true; // 返回出列成功信息
    }
} // DelQueue
```

**顺序队列问题分析**

- “假溢出”的最坏情况:
- rear=maxSize-1, front=maxSize-1(空列)
- 顺序队列的空间利用率非常低，浪费存储空间 。

**解决方法**:

- 整体移动
- 循环队列

--- 

**循环队列** (Circular Queue)
- 队列存放数组被当作首尾相接的表处理。
- 队头、队尾指针加1时从maxSize-1直接进到0，可用语言的取模(余数)运算实现。
- 队头指针进1: front = (front+1) % maxSize;
- 队尾指针进1: rear = (rear+1) % maxSize;
- 队列初始化：front = rear = 0;
- 队空条件：front == rear;
- 队满条件：(rear+1) % maxSize == front

**入队操作**
```cpp
template <class T>
bool SeqQueue <T>::EnQueue (const T & x)
{ 
    if ((rear+1)% maxSize == front) 
        return false;
    else {
        rear= (rear+1)% maxSize;
        elements[rear]=x;
        return true;
    }
}
```

**出队操作**
```cpp
template <class T>
T SeqQueue <T>::DeQueue(T &x)
{ 
    if (rear == front) 
        return false;
    else {
        front= (front+1)% maxSize;
        x=elements[front];
        return true;
    }
}
```

**判满和计算元素个数**
```cpp
bool SeqQueue::IsFull( ) const
{ return ((rear+1)% maxSize == front); }

int SeqQueue::getSize() const
{ return (rear-front+maxSize) % maxSize; }
```

---
**链式队列类的定义**
```cpp
template <class T>
struct QueueNode {
//队列结点类定义
private:
    T data; //队列结点数据
    QueueNode<T> *link; //结点链指针
public:
    QueueNode(E d = 0, QueueNode<T> *next = NULL) : data(d), link(next) { }
};

template <class T>
class LinkedQueue {
private:
    QueueNode<T> *front, *rear; //队头、队尾指针
public:
    LinkedQueue() : rear(NULL), front(NULL) { }
    ~LinkedQueue();
    bool EnQueue(const T &x);
    P118
    bool DeQueue(T& x);
    bool GetFront(T& x);
    void MakeEmpty();
    //实现与~Queue()同
    bool IsEmpty() const { return front == NULL; }
};
```

**入列操作**
```cpp
template <class T>
bool LinkedQueue<T>::EnQueue(const T &x)
{ 
    //将新元素x插入到队列的队尾
    if (front == NULL) {
        //创建第一个结点
        front = rear = new QueueNode<T> (x);
    if (front == NULL) 
        return false; 
    } //分配失败
    else {
        //队列不空, 插入
        rear->link = new QueueNode<T> (x);
        if (rear->link == NULL) 
            return false;
        rear = rear->link;
    }
    return true;
};
```

**出列操作**
```cpp
template <class T>
//如果队列不空，将队头结点从链式队列中删去
bool LinkedQueue<T>::DeQueue(T& x)
{
    if (IsEmpty() == true) 
        return false;
    //判队空
    QueueNode<T> *p = front;
    x = front->data; 
    front = front->link;
    delete p; 
    return true;
};
```

**取首元素**
```cpp
template <class E>
bool LinkedQueue<E>::GetFront(E& x) {
    //若队列不空，则函数返回队头元素的值
    if (IsEmpty() == true)  
        return false;
    x = front->data; 
    return true;
};
```

**析构函数**
```cpp
template <class T>
LinkedQueue<T>::~LinkedQueue() { //析构函数
    QueueNode<T> *p;
    while (front != NULL)
    {
        //逐个结点释放
        p = front; 
        front = front->link; delete p;
    }
};
```