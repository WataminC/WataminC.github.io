---
title: 编译原理复习
tag: hyl
---

期末考纲复习

## 第一章

### 1. 程序语言的分类.
  - 低级语言
    - 汇编语言
    - 机器语言
  - 高级语言（C++，Java）

### 2. 程序翻译的方式有哪几种?有何不同?
  - 编译程序
    - 书面翻译
    - 需要编译器，生成目标代码，较难实现跨平台
  - 解释程序
    - 即席翻译
    - 需要解释器，容易实现跨平台
   
### 3. 编译程序包含有多少个阶段,各阶段的功能任务分别是什么?

1. 词法分析：识别不同的Token
2. 语法分析：生成AST
3. 语义分析
   1. 数据类型分析
   2. 作用域分析
4. [源代码集优化]
5. 中间代码生成
   1. 三，四元组
   2. 树型
   3. 伪代码
   4. 逆波兰
6. 目标代码生成
7. 目标代码有关
   1. 跟机器相关的优化
   2. 跟指令特点相关的优化

## 第二章

### 1. 正则表达式运算以及构建方法

略

### 2. 正则表达式$\rightarrow NFA \rightarrow DFA \rightarrow DFA$最小化

#### 1. DFA的严格定义
DFA $M$ 由字母表$\Sigma$，状态集合$S$，转换函数$T: S \times \Sigma \rightarrow S$，初始状态$S_1 \in S$及接受状态集合$A \subset S$组成

#### 2. NFA的严格定义

NFA $M$ 由字母表$\Sigma$，状态集合$S$，转换函数$T: S \times (\Sigma \cup \{\epsilon\}) \rightarrow \phi(S)$，初始状态$S_1$及接受状态集合$A$组成

#### 3. 正则表达式转NFA

```cpp
// 基础数据结构

struct NFANode
{
    map<string, int> stateTransition;
    vector<int> epsilon;
    bool isFinal = false;
};

// An empty NFANode
struct NFANode initNFANode;

class NFA
{
private:
    vector<NFANode> nfa;
    set<string> stringSet;
    stack<int> st;
    int startNode;
    int endNode;

public:
    NFA() : startNode(0), endNode(1) {}
    void acceptString(std::string str);
    void unionNFA();
    void concatenateNFA();
    void closure();
    void posClosure();
    void option();
    // set<int> epsilon_closure(set<int> state);
    // set<int> dfaEdge(set<int> embeddedState, std::string inputStr);
    // void NFA2DFA();
    // set<std::string> stateStringSet(set<int> stateSet);
} nfa;
```

```cpp
// constuct a single string NFA
void NFA::acceptString(std::string str)
{
    std::size_t tempSize = nfa.size();

    nfa.push_back(initNFANode);
    nfa.push_back(initNFANode);

    nfa[tempSize].stateTransition[str] = tempSize + 1;

    st.push(tempSize);
    st.push(tempSize + 1);

    stringSet.insert(str);
}

// a|b
void NFA::unionNFA()
{
    int lastEnd, lastStart, firstEnd, firstStart;

    lastEnd = st.top();
    st.pop();
    lastStart = st.top();
    st.pop();
    firstEnd = st.top();
    st.pop();
    firstStart = st.top();
    st.pop();

    std::size_t tempSize = nfa.size();

    nfa.push_back(initNFANode);
    nfa.push_back(initNFANode);

    // add epsilon edge from an new start node to two string start node
    nfa[tempSize].epsilon.push_back(firstStart);
    nfa[tempSize].epsilon.push_back(lastStart);

    // add epsilon edge from two string end node to an new end node
    nfa[firstEnd].epsilon.push_back(tempSize + 1);
    nfa[lastEnd].epsilon.push_back(tempSize + 1);

    st.push(tempSize);
    st.push(tempSize + 1);

    startNode = tempSize;
    endNode = tempSize + 1;
}

// ab
void NFA::concatenateNFA()
{
    int lastEnd, lastStart, firstEnd, firstStart;

    lastEnd = st.top();
    st.pop();
    lastStart = st.top();
    st.pop();
    firstEnd = st.top();
    st.pop();
    firstStart = st.top();
    st.pop();

    // add epsilon edge from firstEnd node to lastStart node
    nfa[firstEnd].epsilon.push_back(lastStart);

    startNode = firstStart;
    endNode = lastEnd;

    st.push(startNode);
    st.push(endNode);
}

// a*
void NFA::closure()
{
    int start, end;

    end = st.top();
    st.pop();
    start = st.top();
    st.pop();

    // add a epsilon edge from end to start
    nfa[end].epsilon.push_back(start);

    std::size_t tempSize = nfa.size();
    nfa.push_back(initNFANode);
    nfa.push_back(initNFANode);

    nfa[tempSize].epsilon.push_back(start);
    nfa[end].epsilon.push_back(tempSize + 1);
    nfa[tempSize].epsilon.push_back(tempSize + 1);

    startNode = tempSize;
    endNode = tempSize + 1;

    st.push(startNode);
    st.push(endNode);
}

// a+
void NFA::posClosure()
{
    int start, end;

    end = st.top();
    st.pop();
    start = st.top();
    st.pop();

    // add a epsilon edge from end to start
    nfa[end].epsilon.push_back(start);

    std::size_t tempSize = nfa.size();
    nfa.push_back(initNFANode);
    nfa.push_back(initNFANode);

    nfa[tempSize].epsilon.push_back(start);
    nfa[end].epsilon.push_back(tempSize + 1);

    startNode = tempSize;
    endNode = tempSize + 1;

    st.push(startNode);
    st.push(endNode);
}

// a?
void NFA::option()
{
    int start, end;

    end = st.top();
    st.pop();
    start = st.top();
    st.pop();

    std::size_t tempSize = nfa.size();
    nfa.push_back(initNFANode);
    nfa.push_back(initNFANode);

    // add an epsilon edge from an new start node to start node
    nfa[tempSize].epsilon.push_back(start);
    nfa[end].epsilon.push_back(tempSize + 1);
    nfa[tempSize].epsilon.push_back(tempSize + 1);

    startNode = tempSize;
    endNode = tempSize + 1;

    st.push(startNode);
    st.push(endNode);
}

void postfix2NFA(string reg)
{
    for (size_t i = 0; i < reg.size(); ++i)
    {
        // size_t keyLength = 0;
        // for (auto pair : regAlias)
        // {
        //     const string &key = pair.first;
        //     if (reg.compare(i, key.length(), key) == 0)
        //     {
        //         keyLength = key.length();
        //     }
        // }

        char c = reg[i];
        // // Process the situation like [a-zA-Z0-9] and alias
        // if (keyLength)
        // {
        //     nfa.acceptString(reg.substr(i, keyLength));
        //     i += keyLength - 1;
        // }
        // else 
        // if (c == '\\')
        // {
        //     nfa.acceptString(reg.substr(i + 1, 1));
        //     ++i;
        // }
        // else 
        if (c == '|')
        {
            nfa.unionNFA();
        }
        else if (c == '`')
        {
            nfa.concatenateNFA();
        }
        else if (c == '*')
        {
            nfa.closure();
        }
        else if (c == '+')
        {
            nfa.posClosure();
        }
        else if (c == '?')
        {
            nfa.option();
        }
        else
        {
            nfa.acceptString(reg.substr(i, 1));
        }
    }
}
```

#### 4. NFA转DFA


```cpp
struct DFANode
{
    std::map<std::string, int> stateTransition;
    std::map<std::string, std::string> stringMap;
    bool isFinal = false;
};
// An empty DFANode
struct DFANode initDFANode;

class DFA
{
public:
    std::vector<DFANode> dfa;
    std::vector<DFANode> minimalDFA;
    std::set<std::string> stringSet;
    std::vector<std::set<int>> partition;
    std::map<std::size_t, std::size_t> minimalStateMap;
    int startNode;
    int endNode;

    // DFA operator=(const DFA &copyDFA);
    std::vector<std::set<int>> Hopcroft();
    void minimizeDFA();
    // void printDFANode(struct DFANode node);
    // void printDFA(std::vector<DFANode> dfa2Print);
} dfa;

// Reference: Modern Compiler Implementation in C
std::set<int> NFA::epsilon_closure(std::set<int> stateSet)
{
    std::set<int> closure;
    for (auto state : stateSet)
    {
        if (state >= (int)nfa.size() || state < 0)
            throw std::invalid_argument("received illegal state");
        closure.insert(state);
    }

    std::set<int> temp;
    while (temp != closure)
    {
        temp = closure;
        for (auto s : closure)
        {
            for (auto epsilonState : nfa[s].epsilon)
                closure.insert(epsilonState);
        }
    }

    return closure;
}

// Reference: Modern Compiler Implementation in C
std::set<int> NFA::dfaEdge(std::set<int> embeddedState, std::string inputStr)
{
    std::set<int> edge;
    for (auto s : embeddedState)
    {
        std::map<std::string, int> tempMap = nfa[s].stateTransition;
        if (tempMap.find(inputStr) != tempMap.end())
        {
            edge.insert(tempMap[inputStr]);
        }
    }
    return epsilon_closure(edge);
}

// Find all possible input string of the given state set
std::set<std::string> NFA::stateStringSet(std::set<int> stateSet)
{
    std::set<std::string> acceptStringSet;
    for (auto state : stateSet)
    {
        for (auto transitionPair : nfa[state].stateTransition)
        {
            acceptStringSet.insert(transitionPair.first);
        }
    }
    return acceptStringSet;
}

// Reference: Modern Compiler Implementation in C
void NFA::NFA2DFA()
{
    vector<set<int>> state;
    // p is the state size, j is a index of the state
    std::size_t p = 1, j = 0;
    dfa.dfa.push_back(initDFANode);

    state.push_back(epsilon_closure(set<int>{startNode}));

    // iteration each state, if the index bigger than the size of state, break the iteration
    while (j < p)
    {
        if (state[j].find(endNode) != state[j].end())
        {
            dfa.dfa[j].isFinal = 1;
        }
        std::set<std::string> acceptString = stateStringSet(state[j]);
        for (auto c : acceptString)
        {
            std::set<int> e = dfaEdge(state[j], c);
            if (e.size() == 0)
                continue;

            bool flag = false;
            std::size_t i;
            for (i = 0; i < p; ++i)
            {
                if (e == state[i])
                {
                    flag = true;
                    break;
                }
            }
            if (flag == true)
            {
                dfa.dfa[j].stateTransition[c] = i;
            }
            else
            {
                p++;
                state.push_back(e);
                dfa.dfa.push_back(initDFANode);

                dfa.dfa[j].stateTransition[c] = p - 1;
            }
        }
        j++;
    }

    dfa.stringSet = stringSet;
    dfa.startNode = 0;
}
```

#### 5. DFA最小化
```cpp
vector<set<int>> DFA::Hopcroft()
{
    vector<set<int>> W(2), P(2);

    set<int> F, NF;

    // Partition the states into two sets: final states and non-final states
    for (size_t i = 0; i < dfa.size(); ++i)
    {
        if (dfa[i].isFinal)
            F.insert(i);
        else
            NF.insert(i);
    }

    W[0] = F, P[0] = F;
    W[1] = NF, P[1] = NF;

    while (!W.empty())
    {
        auto firstElement = W.begin();
        auto S = *firstElement;
        W.erase(firstElement);

        for (auto a : stringSet)
        {
            set<int> X;
            for (size_t state = 0; state < dfa.size(); ++state)
            {
                struct DFANode x = dfa[state];
                if (x.stateTransition.find(a) != x.stateTransition.end())
                {
                    if (S.find(x.stateTransition[a]) != S.end())
                        X.insert(state);
                }
            }

            // Because P may be changed in the iteration
            vector<set<int>> tempP = P;

            for (auto R : tempP)
            {
                set<int> rxIntersection;
                set_intersection(R.begin(), R.end(), X.begin(), X.end(), inserter(rxIntersection, rxIntersection.begin()));
                if (!rxIntersection.empty() && !std::includes(X.begin(), X.end(), R.begin(), R.end()))
                {
                    set<int> R2;
                    set_difference(R.begin(), R.end(), rxIntersection.begin(), rxIntersection.end(), inserter(R2, R2.begin()));

                    P.erase(std::remove(P.begin(), P.end(), R), P.end());
                    P.push_back(rxIntersection);
                    P.push_back(R2);

                    bool flag = false;
                    // Because P may be changed in the iteration
                    vector<std::set<int>> tempW = W;
                    for (auto w : tempW)
                    {
                        if (w == R)
                        {
                            W.erase(std::remove(W.begin(), W.end(), R), W.end());
                            W.push_back(rxIntersection);
                            W.push_back(R2);
                            flag = true;
                            break;
                        }
                    }

                    if (!flag)
                        continue;

                    if (rxIntersection.size() <= R2.size())
                        W.push_back(rxIntersection);
                    else
                        W.push_back(R2);
                }
            }
        }
    }

    vector<set<int>> notEmptyP;

    for (auto element : P)
    {
        if (element.size() != 0)
            notEmptyP.push_back(element);
    }

    partition = notEmptyP;

    return notEmptyP;
}

void DFA::minimizeDFA()
{
    minimalDFA.resize(partition.size());

    for (std::size_t i = 0; i < partition.size(); ++i)
    {
        for (auto state : partition[i])
        {
            minimalStateMap[state] = i;
            if (state == startNode)
                startNode = i;
            if (dfa[state].isFinal)
                minimalDFA[i].isFinal = true;
        }
    }

    for (std::size_t i = 0; i < partition.size(); ++i)
    {
        for (auto state : partition[i])
        {
            for (auto transitionPair : dfa[state].stateTransition)
            {
                minimalDFA[i].stateTransition[transitionPair.first] = minimalStateMap[transitionPair.second];
            }
        }
    }
}
```

### 3. 词法分析程序的生成方法

```cpp


string resultCode;
// 生成词法分析器代码并返回为字符串
void generateLexerCode() {
    ostringstream codeStream; 

    codeStream << "#include <iostream>" << endl;
    codeStream << "#include <string>" << endl;
    codeStream << endl;
    codeStream << "using namespace std;" << endl;
    codeStream << endl;
    codeStream << "int main() {" << endl;
    codeStream << "    string input;" << endl;
    codeStream << "    cin >> input;" << endl;
    codeStream << "    int currentState = 0;" << endl;
    codeStream << "    int length = input.length();" << endl;
    codeStream << "    for (int i = 0; i < length; i++) {" << endl;
    codeStream << "        char c = input[i];" << endl;
    codeStream << "        switch (currentState) {" << endl;

    for (const dfaMinNode& node : dfaMinTable) {
        codeStream << "            case " << node.id << ":" << endl;
        codeStream << "                switch (c) {" << endl;
        for (const auto& transition : node.transitions) {
            if (transition.second != -1) {
                codeStream << "                    case '" << transition.first << "':" << endl;
                codeStream << "                        currentState = " << transition.second << ";" << endl;
            }
            codeStream << "                        break;" << endl;
        }
        codeStream << "                    default:" << endl;
        codeStream << "                        cout << \"Error: Invalid input character '\" << c << \"'\" << endl;" << endl;
        codeStream << "                        return 1;" << endl;
        codeStream << "                }" << endl;
        codeStream << "                break;" << endl;
    }

    codeStream << "        }" << endl;
    codeStream << "    }" << endl;
    codeStream << "    switch (currentState) {" << endl;

    for (const dfaMinNode& node : dfaMinTable) {
        if (node.flag.find("+") != string::npos) {
            codeStream << "        case " << node.id << ":" << endl;
            codeStream << "            cout << \"Accepted\" << endl;" << endl;
            codeStream << "            break;" << endl;
        }
    }

    codeStream << "        default:" << endl;
    codeStream << "            cout << \"Not Accepted\" << endl;" << endl;
    codeStream << "    }" << endl;
    codeStream << "    return 0;" << endl;
    codeStream << "}" << endl;

    resultCode = codeStream.str();
}
```

### 4. 实验一与实验二

## 第三章

### 1. 文法、语言?

#### 1. 上下文无关文法

一个上下文无关文法CFG是一个四元组$G = (V_N, V_T, P, S)$且$V_T \cap V_N = \empty, S \in V_N$，产生式形如$A \rightarrow \alpha, A \in V_N, \alpha \in (V_N \cup V_T)^*$

- 文法：
  - 非终结符号
  - 终结符号
  - 规则集
  - 开始符号

#### 2. 语言

- 语言是一切句子的集合
- 程序设计语言是一切程序的集合
- 程序是语言的句子

### 2. 文法的分类是怎样的?它们之间有何关系?

Chomsky分类法：
1. 0型文法(图灵机)
$G = (V_N, V_T, P, S)$的产生式形如：

$$\alpha \rightarrow \beta$$

其中$\alpha, \beta \in (V_N \cup V_T)^*$，但$\alpha$中至少包含一个非终结符。（0型语言或递归可枚举语言）

2. 1型文法(线性限界自动机)
$$\alpha \rightarrow \beta, |\alpha| \leq |\beta|$$

仅$S \rightarrow \epsilon$是例外，且$S$不出现在产生式的右部

3. 2型文法(下推自动机)
$$A \rightarrow B, A \in V_N, \beta \in (V_N \cup V_T)^*$$

上下文无关文法

4. 3型文法(有穷状态自动机)
$$A \rightarrow aB, \text{ or } A \rightarrow a, A, B \in V_N, a \in V_T \cup \{\epsilon\}$$

正规，正则文法

### 3. 推导、规约、语法树、文法的二义性？

#### 1. 推导

使用产生式的左部替换产生式的右部

#### 2. 归约

使用产生式的右部替换产生式的左部

- 最左推导 = 最右归约， 最右推导 = 最左归约
- 规范推导 = 最右推导， 规范归约 = 最左归约

#### 3. 语法树

因为分析树中的内容过于复杂且耗费空间，所以将所需要的信息压缩形成语法树
- 只保留后续有用的信息
- 分析效率高

#### 4. 文法二义性

一个文法的一个句子存在多个不同的语法树则称该文法是二义性的

二义性的判定和消除无通用手段，但在特殊情况可以使用特殊方法消除二义性

- 一个程序设计语言的文法应该是无二义性的
  - 如果有二义性
    - 构造等价无二义性的文法

### 4. 如何画语法树？

- if 语句
  - 测试部分
  - then 部分
  - else 部分

### 5. 文法二义性的消除方法有多少种？

1. 在分析程序中添加一个限制程序
2. 改造文法
3. 改变语法
4. 利用LL(1)分析表中每个项目最多只能有一个规则来消除文法二义性
5. 

### 重点
### 6. 文法的构建问题
略

### 7. 自顶向下分析法的问题: 左公共因子、左递归
1. 提取左公因子
   - 手工改写
   - 用EBNF改写
2. 消除回溯性
3. 消除左递归
   1. 直接左递归
   2. 间接左递归

### 8. 文法的简化

- 无效规则
  - 有害规则
    - $U \rightarrow U$，导致文法二义性
  - 多余规则
    - 文法中任何句子的推导都不会用到
      - 不在规则右部出现的非终结符**不可到达**
      - 不能推出终结符号的非终结符**不可终止**

符号化表示

$\forall A \in V_N$在句子推导中
1. $\exists S \Rightarrow \alpha A \beta$，其中$\alpha, \beta \in V^*$
2. $\exist A \Rightarrow t$，其中$t \in V_T^*$

### 9. First 与follow集合(实验四)

- First看产生式右边
- follow看在产生式中的后一个或者产生式的左边

```cpp
void null_first_follow()
{
    bool change = true;
    while (change)
    {
        change = false;
        // for each production
        for (auto &production : inputProduction)
        {
            // Initialized First and Follow set
            if (firstSet.find(production.first) == firstSet.end())
                firstSet[production.first] = std::set<std::string>();
            if (followSet.find(production.first) == followSet.end())
                followSet[production.first] = std::set<std::string>();

            for (auto &vec : production.second)
            {
                bool allNull = true;

                for (std::size_t i = 0; i < vec.size(); ++i)
                {
                    if (firstSet.find(vec[i].content) == firstSet.end())
                        firstSet[vec[i].content] = std::set<std::string>();

                    std::size_t size = firstSet[production.first].size();

                    std::set<std::string> tempSet;

                    std::set_union(firstSet[production.first].begin(), firstSet[production.first].end(), firstSet[vec[i].content].begin(), firstSet[vec[i].content].end(), inserter(tempSet, tempSet.begin()));

                    if (tempSet.size() != size)
                    {
                        change = true;
                        firstSet[production.first] = tempSet;
                    }

                    if (!checkNullAble(vec[i]))
                    {
                        allNull = false;
                        break;
                    }
                }

                if (allNull)
                {
                    // Check nullable[x] whether is true
                    if (nullableSet.find(production.first) != nullableSet.end() && nullableSet[production.first] != true)
                        change = true;

                    nullableSet[production.first] = true;
                }

                for (std::size_t i = vec.size() - 1; i >= 0; --i)
                {
                    if (followSet.find(vec[i].content) == followSet.end())
                        followSet[vec[i].content] = std::set<std::string>();

                    std::size_t size = followSet[vec[i].content].size();
                    std::set<std::string> tempSet;

                    std::set_union(followSet[vec[i].content].begin(), followSet[vec[i].content].end(), followSet[production.first].begin(), followSet[production.first].end(), inserter(tempSet, tempSet.begin()));

                    if (tempSet.size() != size)
                    {
                        change = true;
                        followSet[vec[i].content] = tempSet;
                    }

                    if (!checkNullAble(vec[i]))
                        break;
                }

                for (std::size_t i = 0; i < vec.size(); ++i)
                {
                    if (followSet.find(vec[i].content) == followSet.end())
                        followSet[vec[i].content] = std::set<std::string>();

                    for (std::size_t j = i + 1; j < vec.size(); ++j)
                    {
                        std::size_t size = followSet[vec[i].content].size();
                        std::set<std::string> tempSet;

                        std::set_union(followSet[vec[i].content].begin(), followSet[vec[i].content].end(), firstSet[vec[j].content].begin(), firstSet[vec[j].content].end(), inserter(tempSet, tempSet.begin()));

                        if (tempSet.size() != size)
                        {
                            change = true;
                            followSet[vec[i].content] = tempSet;
                        }

                        if (!checkNullAble(vec[j]))
                            break;
                    }
                }
            }
        }
    }

    for (auto &pair : followSet)
    {
        if (pair.second.find("@") != pair.second.end())
            pair.second.erase("@");
    }
    firstSet[endChar] = std::set<std::string>{endChar};
}
```

## 第四章

### 1. 递归下降语法分析方法(或称递归子程序)
- 自顶向下分析法：
  - 从文法开始符号开始，不断利用文法规则进行推导，直到推导出所要分析的符号串

- 预测RDP:
  - 无左递归
  - 无回溯性

- 递归下降分析法
  - 每个非终结符按其规则结构产生相应语法分析子程序
    - 终结符产生匹配命令
    - 非终结符产生调用命令  

- 可能存在的问题
  - BNF -> EBNF 可能会产生困难
  - 出现$A \rightarrow \epsilon$如何写程序
  - 左边出现第一个终结符好选择，若存在左递归无法选择
  - 间接左递归将出现死递归
  - 可能存在左公因子

### 2. LL(1)分析方法
- 定理：满足以下条件的BNF文法为$LL(1)$文法 
1. $\forall A \rightarrow \alpha_1 | \cdots | \alpha_n, \forall 1 \leq i, j \leq n$
$$First(\alpha_i) \cap First(\alpha_j) = \phi$$
2. $\forall A \in V_N$, where $\epsilon \in  First(A), then First(A) \cap Follow(A) = \phi$

### 3. LL(1)判断方法
同上

### 4. LL(1)分析表
1. $\forall A \rightarrow \alpha$
    - 将$First(\alpha)中每个a, M[A, a] = \alpha$
    - 若$\epsilon \in First(\alpha), \forall b \in Follow(A), M[A, b] = \alpha$
    - 其余置空或错误

### 5. LL(1)分析过程
![alt text](image.png)
- 实验三

## 第五章

自底向上：从要分析的终结符串开始归约，找子串并用产生式的右部替换左部直至归约至开始符号

### 1. LR(0) DFA、LR(1) DFA、 LALR(1) DFA？
略

### 2. LR(0)分析表、LR(1)分析表、 SLR(1)分析表、LALR(1) 分析表？

### 3. LR(0)文法、LR(1)文法、SLR(1)文法、 LALR(1)文法？如何判断LR(0)文法、SLR(1)文法？

- 只要LR(0)的DFA图的状态中同时出现了移进与规约，就不是LR(0)
![alt text](image-1.png)

### 4. 文法如何利用LR(0) 、LR(1) 、 SLR(1)、LALR(1)进行语法分析？

![LR(0)](image-2.png)

![SLR(0)](image-3.png)

![LR(1)](image-4.png)

![LR(1)](image-5.png)