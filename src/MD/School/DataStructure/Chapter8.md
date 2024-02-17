---
title: 第8章 图论
---
# $\S$ 第8章 图

### $\S$ 8.1 图的基本概念

**图定义:** 图是由顶点集合(vertex)及顶点间的关系集合组成的一种数据结构

- 有向图和无向图
- 完全图
- 邻接顶点
- 子图
- 带权图也叫做网络
- 稠密图和稀疏图 $m = n\log n$
- 顶点的度
- 入度
- 出度
- 路径
- 路径长度
- 简单路径
- 回路
- 连通图和连通分量
- 强连通图与强连通分量
- 生成树

---

**图的抽象数据类型**

```cpp
class Graph {
//对象: 由一个顶点的非空集合和一个边集合构成
//每条边由一个顶点对来表示。
public:
    Graph();
    //建立一个空的图
    void insertVertex (const T& vertex);
    //插入一个顶点vertex, 该顶点暂时没有入边
    void insertEdge (int v1, int v2, int weight);
    //在图中插入一条边(v1, v2, w)
    void removeVertex (int v);
    //在图中删除顶点v和所有关联到它的边void removeEdge (int v1, int v2);
    //在图中删去边(v1,v2)
    bool IsEmpty();
    //若图中没有顶点, 则返回true, 否则返回false
    T getWeight (int v1, int v2);
    //函数返回边 (v1,v2) 的权值
    int getFirstNeighbor (int v);
    //给出顶点 v 第一个邻接顶点的位置
    int getNextNeighbor (int v, int w);
    //给出顶点 v 的某邻接顶点 w 的下一个邻接顶点
};
```

**图的模版基类**

```cpp
const int maxWeight = ……;
//无穷大的值
(=)
const int DefaultVertices = 30;
//最大顶点数
(=n)

template <class T, class E>
class Graph {   //图的类定义
protected:
    int maxVertices;    //图中最大顶点数
    int numEdges;   //当前边数
    int numVertices;    //当前顶点数
    int getVertexPos (T vertex);    //给出顶点vertex在图中位置
public:
    Graph (int sz = DefaultVertices);   //构造函数
    ～Graph();  //析构函数
    bool GraphEmpty () const    //判图空否
    { return numEdges == 0; }
    int NumberOfVertices () { return numVertices; } //返回当前顶点数
    int NumberOfEdges () { return numEdges; }   //返回当前边数
    virtual T getValue (int i); //取顶点 i 的值
    virtual E getWeight (int v1, int v2); //取边上权值
    virtual int getFirstNeighbor (int v);   //取顶点 v 的第一个邻接顶点
    virtual int getNextNeighbor (int v, int w); //取邻接顶点 w 的下一邻接顶点
    virtual bool insertVertex (const T vertex); //插入一个顶点vertex
    virtual bool insertEdge (int v1, int v2, E cost);   //插入边(v1,v2), 权为cost
    virtual bool removeVertex (int v);  //删去顶点 v 和所有与相关联边
    virtual bool removeEdge (int v1, int v2);   //在图中删去边(v1,v2)
};
```

---

### $\S$ 8.2 图的存储表示

**邻接矩阵存储图的类定义**

```cpp
template <class T, class E>
class Graphmtx : public Graph<T, E> {
    friend istream& operator >> ( istream& in,Graphmtx<T, E>& G);   //输入
    friend ostream& operator << (ostream&out, Graphmtx<T, E>& G);   //输出
private:
    T *VerticesList;    //顶点表
    E **Edge;   //邻接矩阵
    int getVertexPos (T vertex) {
        //给出顶点vertex在图中的位置
        for (int i = 0; i < numVertices; i++)
            if (VerticesList[i] == Vertex) 
                return i;
        return -1;
    };
public:
    Graphmtx (int sz = DefaultVertices); //构造函数
    ～Graphmtx ()   //析构函数
    { delete [ ]VerticesList; delete [ ]Edge; }
    T getValue (int i) {    //取顶点 i 的值, i 不合理返回0
        return i >= 0 && i <= numVertices ? VerticesList[i] : NULL;
    }
    E getWeight (int v1, int v2) {  //取边(v1,v2)上权值
        return v1 != -1 && v2 != -1 ? Edge[v1][v2] : 0;
    }
    int getFirstNeighbor (int v);   //取顶点 v 的第一个邻接顶点
    int getNextNeighbor (int v, int w); //取 v 的邻接顶点 w 的下一邻接顶点
    bool insertVertex (const T vertex); //插入顶点vertex
    bool insertEdge (int v1, int v2, E cost);   //插入边(v1, v2),权值为cost
    bool removeVertex (int v);  //删去顶点 v 和所有与它相关联的边
    bool removeEdge (int v1, int v2);   //在图中删去边(v1,v2)
};
```

**构造函数**

```cpp
template <class T, class E>
Graphmtx<T, E>::Graphmtx (int sz) {
    //构造函数
    maxVertices = sz;
    numVertices = 0; 
    numEdges = 0;
    int i, j;
    VerticesList = new T[maxVertices];  //创建顶点表
    Edge = (E **) new E *[maxVertices];
    for (i = 0; i < maxVertices; i++)
        Edge[i] = new int[maxVertices]; //邻接矩阵
    for (i = 0; i < maxVertices; i++)
        //矩阵初始化
        for (j = 0; j < maxVertices; j++)
            Edge[i][j] = (i == j) ？ 0 : maxWeight;
};
```

---

**邻接表存储图的类定义**

```cpp
template <class T, class E>
struct Edge {   //边结点的定义
    int dest;   //边的另一顶点位置
    E cost; //边上的权值
    Edge<T, E> *link;   //下一条边链指针
    Edge () {}  //构造函数
    Edge (int num, E weight)    //构造函数
    : dest (num), cost(weight), link (NULL) { }
    bool operator != (Edge<T, E>& R) const
    { return dest != R.dest; } //判边等否
};
```

**顺序表结点结构类**
```cpp
template <class T, class E>
struct Vertex { //顶点的定义
    T data; //顶点的名字
    Edge<T, E> *adj;    //边链表的头指针
};
```

**邻接表类**

```cpp
邻接表类
template <class T, class E>
class Graphlnk : public Graph<T, E> { //图的类定义
    friend istream& operator >> (istream& in, Graphlnk<T, E>& G); //输入
    friend ostream& operator << (ostream& out, Graphlnk<T, E>& G);  //输出private:
    Vertex<T, E> *NodeTable;    //顶点表 (各边链表的头结点)
    int getVertexPos (const T vertx) {
        //给出顶点vertex在图中的位置
        for (int i = 0; i < numVertices; i++)
            if (NodeTable[i].data == vertx) 
                return i;
        return -1;
    }
public:
    Graphlnk (int sz = DefaultVertices); //构造函数
    ~Graphlnk();    //析构函数
    T getValue (int i) {
        //取顶点 i 的值
        return (i >= 0 && i < NumVertices) ? NodeTable[i].data : 0;
    }
    E getWeight (int v1, int v2);   //取边(v1,v2)权值
    bool insertVertex (const T& vertex); // 插入顶点
    bool removeVertex (int v); // 删除顶点
    bool insertEdge (int v1, int v2, E cost); //插入边
    bool removeEdge (int v1, int v2); // 删除边
    int getFirstNeighbor (int v); // 获取v的第一个邻接点
    int getNextNeighbor (int v, int w); // 获取w后的邻接点
    void CreateNodeTable(void); // 建立邻接表结构
};
```

**构造函数**

```cpp
template <class T, class E>
Graphlnk<T, E>::Graphlnk (int sz) { //构造函数：建立一个空的邻接表
    maxVertices = sz;
    numVertices = 0; 
    numEdges = 0;
    NodeTable=new Vertex<T,E>[maxVertices]; //创建顶点表数组
    if (NodeTable == NULL)
    { cerr << "存储分配错！" << endl; exit(1); }
    for (int i = 0; i < maxVertices; i++)
        NodeTable[i].adj = NULL;
};
```

**析构函数**

```cpp
template <class T, class E>
Graphlnk<T, E>::～Graphlnk() {  //析构函数：删除一个邻接表
    for (int i = 0; i < numVertices; i++ ) {
        Edge<T, E> *p = NodeTable[i].adj;
        while (p != NULL)
        { 
            NodeTable[i].adj = p->link;
            delete p; 
            p = NodeTable[i].adj;
        }
    }
    delete []NodeTable;
    //删除顶点表数组
};
```

**邻接表的建立算法**
```cpp
template <class T, class E>
void Graphlnk<T, E>::CreateNodeTable(void) // 建立邻接表结构
{ 
    int n,i,j,m;
    Edge<T, E> *p;
    cin>>n; //结点个数
    for(i=1;i<=n;i++)
    {
        NodeTable[i].adj=0; // 预设为空链
        cin>>NodeTable[i].data; //输入结点值
        cin>>m; //每个结点的邻接点个数
        for(j=0;j<m;j++)
        { 
            p = new Edge<T, E> ; // 生成一个新结点
            cin>>p->dest;   //建立边结点, 输入结点值到dest域
            cin>>p->cost;  //带权图则多加一个权值的输入 
            p->link = NodeTable[i].adj;
            NodeTable[i].adj = p;   //头插入建链
        }
    }
}
```

---

### $\S$ 8.3 图的遍历

- DFS
- BFS
- 层次遍历

**DFS**
```cpp
void DFS( int v)
{
    cout<<NodeTable[v].data;//访问v结点
    p=NodeTable[v].adj;
    while(p!=NULL) // 找出孩子逐个进行递归调用
    {
        DFS( p->dest);
        p=p->link;//下一个孩子
    }
} // DFS
```

**层次遍历算法**
```cpp
void BFS( )
{ 
    int v;
    queue<int> qu; //定义一个队列qu
    v=0; // 根结点的下标为0
    qu.push(v); // v入列
    while (!qu.empty( ))
    { 
        v=qu.front( ); 
        qu.pop( ); //出列
        cout<<NodeTable[v].data; //访问v结点
        p=NodeTable[v].adj; //p指向v结点对应邻接单链表的链头
        while (p!=NULL)
        { //依次将v结点的孩子入列,以依次实施层次遍历
            qu.push(p->dest);
            p=p->link;//下一个孩子
        } //while
    } //while
} // BFS
```

**在邻接表存储结构下的实现算法**:
```cpp
void Graphlnk<T, E>:: DFS( int v) // 私有函数
{ 
    // 从顶点v出发，深度优先遍历遍历连通图 G
    visited[v] = true;
    cout<<NodeTable[v].data;    //访问v结点
    p=NodeTable[v].adj;
    while(p!=NULL) // 找出邻接点逐个进行递归调用
    { 
        // 对v的尚未访问的邻接顶点递归调用DFS
        if (!visited[p->dest]) 
            DFS( p->dest);
        p=p->link; // 下一个邻接点
    }
} // DFS
```

**在邻接表存储结构下的实现算法**: // STL queue
```cpp
void Graphlnk<T, E>:: BFS( ) // 从顶点v出发，广度优先遍历遍历连通图 G
{ 
    int v;
    queue<int> qu; //定义一个队列qu
    for (int i=0;i<n;i++ ) 
        visited[i]=false; //设臵未入列标志
    cin>>v; //输入广度优先遍历的出发点
    qu.push(v); // v入列
    visited[v] = true; // 设臵入列标志
    while (!qu.empty( ))
    { 
        v=qu.front( ); 
        qu.pop( ); //出列
        cout << NodeTable[v].data; //访问v结点
        p=NodeTable[v].adj; //p指向v结点对应邻接单链表的链头
        while (p!=NULL)
        { //依次将v结点的邻接点入列,以依次实施层次遍历
            if (!visited[p->dest]) 
                qu.push(p->dest); // 没有进过队列的
            p=p->link;//下一个邻接点
        } //while
    } //while
} // BFS
```

---
 
### $\S$ 8.4 最小生成树

**克鲁斯卡尔(Kruskal)算法**

1. 先构造一个只含 n 个顶点的子图 SG;
2. 然后从权值最小的边开始，若它的添加不使SG中产生回路，则在 SG 上加上这条边
3. 反复执行第2步，直至加上 n-1 条边为止。

```cpp
template <class T, class E>
struct MSTEdgeNode //树边结点的类定义
{
    int tail, head; //两顶点位臵
    E cost; // 关系比较<的重载
};
MinHeap <MSTEdgeNode<T, E>> H(m); //最小堆

for (u = 0; u < n; u++) // 图采用邻接矩阵
    for (v = u+1; v < n; v++)
        if ( Edge[u][v]<maxWeight)
        { 
            ed.tail = u; 
            ed.head = v;
            ed.cost = Edge[u][v];
            //插入堆
            H.Insert(ed);
        }

count = 1;  //最小生成树边数计数
while (count < n) {
    //反复执行, 取n-1条边
    H.Remove(ed);
    //从堆中取权值最小的边
    //检查该边的两个顶点是否在同一集合中
    //查找出该两顶点所在集合的根u与v—并查集
    u = F.Find(ed.tail); 
    v = F.Find(ed.head);
    if (u != v)
    {
        //不是同一集合,不连通
        F.Union(u, v); //集合合并,连通它们—并查集
        MST.Insert(ed); //将该边放入生成树MST中
        cout <<ed.tail<<ed.head<<ed.cost // 输出边
        count++;
    }
}；
```

**普里姆(prim)算法**

1. 设定其中一个结点为出发点；
2. 分组:出发点为第一组，其余结点为第二组。
3. 在一端属于第一组和另一端属于第二组的边中选择一条权值最小的一条。
4. 把原属于第二组的结点放入第一组中。
5. 反复2，3两步，直到第二组为空为止。

```cpp
template <class T, class E>
struct MSTEdgeNode //树边结点的类定义
{
    int head; //未加入生成树的结点编号
    int tail; //已加入生成树的结点编号
    E cost; // 关系比较<的重载
};

MinHeap <MSTEdgeNode<T, E>> H(m); //最小堆

Edge[u][u] = true;  //u 加入生成树
count = 1; // 记录已加入生成树的边数
while (count<n)
{ 
    for (v=0;v<n;i++) // 逐个查看v是否在生成树中
    { 
        if ((Edge[v][v]==0) &&Edge[u][v]<maxWeight)
        { 
            ed.tail=u; 
            ed.head =v ;
            ed.cost = Edge[u][v];   //(u,v,w)加入堆
            H.Insert(ed);
        }
    }

    while (!H.IsEmpty() && count < n) {
        H.Remove(ed);   //从堆中删除最小权的边
        if (Edge[ed.head][ed.head]==0)//是否符合选择要求
        {
            MST.Insert(ed); //将该边加入最小生成树
            cout <<ed.tail<<ed.head<<ed.cost // 输出边
            u = ed.head;
            Edge[u][u] = true; //u加入生成树集合中
            count++;
            break;
        }
    }
}
```

**Dijkstra算法**
```cpp
for (i=0;i<n;i++) // n 表示结点个数
    dist[i]=G[v0][i]; //初始化dist数组
G[v0][v0]=1; // 加入v0，臵出发点访问标志
for (i=0;i<n-1;i++) //共完成n-1次
{ // 找最小值
    min=32767;
    for (k=0;k<n;k++) //找到最小的邻接点
    { 
        if ((G[k][k]==0) &&(dist[k]<min))
        { 
            pos=k; 
            min=dist[k]; 
        }
    }
    G[pos][pos]=1;
    for (j=0;j<n;j++)
    { 
        if ((G[j][j]==0) && (G[pos][j]+min < dist[j]))
            dist[j]=G[pos][j]+min;
    }
}
```

**拓扑排序**

1. 输入AOV网络。令 n 为顶点个数。
2. 在AOV网络中选一个入度为0的结点, 并输出之;
3. 从图中删去该顶点, 同时删去所有它发出的有向边;
4. 重复以上 ②、③步, 直到下面的情况之一出现:
    1. 全部顶点均已输出，拓扑有序序列形成，拓
扑排序完成；
    2. 图中还有未输出的顶点, 但已没有入度为0的
结点(说明网络中必存在有向环)。

1.在count数组中找出入度为零的顶点，并分别入栈;
2.
```cpp
while (栈非空)
{ 
//出栈到v；
    cout<<NodeTable[v].data;
    ++m;
    p=NodeTable [v].adj;
    while (P!=NULL)
    {
        count[p->dest]--;
        if(count[p->dest]==0)
            则结点p->dest入栈
        p=p->link;
    }
}
```
3.if(m<n) cout<<“图中有回路”;

```cpp
#include <iostream>
#include <vector>
#include <queue>
using namespace std;
 
bool TopSort(vector<vector<int>> &G, int n, vector<int> &inDegree) {
	/*
	*	param
	*	G：	邻接表
	*	n：	顶点数
	*	InDegree：	记录顶点的入度	
	*/
	int num = 0;				//记录加入拓扑排序的顶点数
	queue<int> q;
	for (int i = 0; i < n; i++)
		if (inDegree[i] == 0)
			q.push(i);		//将所有入度为0的顶点入队
	while (!q.empty()) {
		int u = q.front();		//取队首顶点u
		cout << u << " ";		
		q.pop();
		for (int i = 0; i < G[u].size(); i++) {
			int v = G[u][i];		//u的后继节点
			inDegree[v]--;			//v的入度减1
			if (inDegree[v] == 0)		//顶点v的入度减为0则入队
				q.push(v);
		}
		G[u].clear();			//清空顶点u的所有出边
		num++;
	}
	if (num == n)				//加入拓扑序列的顶点数为n，说明拓扑排序成功，否则，失败
		return true;
	else
		return false;
}
 
int main() {
	int n, m;
	cout << "请输入顶点数和边数:";
	cin >> n >> m;
	vector<vector<int>> G(n);
	for (int i = 0; i < m; i++) {
		int x, y;
		cout << "请输入第" << i+1 << "条边的顶点:";
		cin >> x >> y;
		G[x].push_back(y);
	}
	cout << "拓扑排序为:";
	vector<int> inDegree(n);
	for (auto x : G) {
		for (auto y : x)
			inDegree[y]++;
	}
	bool res = TopSort(G, n, inDegree);
 
	return 0;
	
}
```
