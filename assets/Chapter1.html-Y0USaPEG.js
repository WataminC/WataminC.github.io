import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,f as l}from"./app-CaEQkhWY.js";const i="/assets/image-5-3Gatsqn5.png",n={},s=l('<h3 id="_1-四个概念-什么是数据-什么是数据库-什么是数据库管理系统-dbms-什么是数据库系统-dbs" tabindex="-1"><a class="header-anchor" href="#_1-四个概念-什么是数据-什么是数据库-什么是数据库管理系统-dbms-什么是数据库系统-dbs"><span>1. 四个概念：什么是数据? 什么是数据库? 什么是数据库管理系统（DBMS）？什么是数据库系统(DBS)？</span></a></h3><ul><li><p>数据是指对客观事件进行记录并可以鉴别的符号</p></li><li><p>数据库：数据库（database）是“按照数据结构来组织、存储和管理数据的仓库”。是一个长期存储在计算机内的、有组织的、可共享的、统一管理的大量数据的集合。</p></li><li><p>数据库系统：数据库系统DBS（Data Base System，简称DBS）通常由软件、数据库和数据管理员组成。其软件主要包括操作系统、各种宿主语言、实用程序以及数据库管理系统。</p></li><li><p>数据库管理系统：数据库管理系统(Database Management System)是一种操纵和管理数据库的大型软件，是用于建立、使用和维护数据库，简称DBMS。它对数据库进行统一的管理和控制，以保证数据库的安全性和完整性。</p></li><li><p>数据库由数据库管理系统统一管理，数据的插入、修改和检索均要通过数据库管理系统进行。</p></li></ul><h3 id="_2-熟记数据库系统的组成。" tabindex="-1"><a class="header-anchor" href="#_2-熟记数据库系统的组成。"><span>2. 熟记数据库系统的组成。</span></a></h3><ul><li>数据库</li><li>数据库管理系统</li><li>支持数据库运行的软、硬件环境</li><li>用户</li></ul><h3 id="_3-理解dba是对数据库进行集中控制和管理的最重要人员。" tabindex="-1"><a class="header-anchor" href="#_3-理解dba是对数据库进行集中控制和管理的最重要人员。"><span>3. 理解DBA是对数据库进行集中控制和管理的最重要人员。</span></a></h3><h3 id="_4-实例和模式的对比-内容-状态-vs-结构-变化-vs-稳定" tabindex="-1"><a class="header-anchor" href="#_4-实例和模式的对比-内容-状态-vs-结构-变化-vs-稳定"><span>4. 实例和模式的对比（内容/状态 vs 结构，变化 vs 稳定）</span></a></h3><ul><li>实例（内容/状态）：数据库在某一时刻的数据集合。实例是动态的，会随着数据的插入、删除和更新而变化。</li><li>模式（结构）：数据库的逻辑结构和特征的描述。模式是相对稳定的，定义了数据库的组织方式。</li></ul><h3 id="_5-熟记三级模式" tabindex="-1"><a class="header-anchor" href="#_5-熟记三级模式"><span>5. 熟记三级模式：</span></a></h3><p>物理模式（又称内模式、存储模式），逻辑模式（又称模式），和子模式（又称外模式）的含义是什么？</p><ul><li>概念模式: 是数据库系统中全局数据逻辑结构和特征的描述，<strong>是全体用户的公共数据视图</strong>，这种描述是一种抽象描述，不涉及具体硬件平台与软件环境。概念模式主要描述数据的概念记录类型和它们之间的关系，还包括一些数据间的语义约束。</li><li>外模式: 是用户和数据库系统的接口，<strong>反映了用户对数据的实际要求</strong>。外模式是与某一具体应用有关的数据的逻辑结构和特征描述。概念模式给出系统全局的数据描述，外模式则给出每个用户的局部描述，即外模式为用户所见到的概念模式的一个部分。</li><li>内模式: 是数据库物理结构和存储方式的描述，即数据库 的“内部视图”。内部视图是整个数据库的底层 表示，它由内部记录型中各个类型的值组成。内 模式定义了数据库中的各种存储记录、存储记录 的物理表示、存储结构与物理存取方法，如数据 存储的文件结构、索引、集簇等存取方式和存取 路径等。<strong>一个数据库只有一个内模式</strong>。</li></ul><p>一个数据库有几个物理模式，逻辑模式和子模式？ 1, 1, 多个</p><p>三级模式间的两极映射，以及是由谁完成这种映射功能的？ <strong>DMBS</strong></p><p>两级映射的作用（好处）是带来以下两种数据独立性</p><ul><li>两级映射： <ul><li>外模式/模式映射：由DBMS负责，将子模式映射到逻辑模式。</li><li>模式/内模式映射：由DBMS负责，将逻辑模式映射到物理模式。</li></ul></li><li>两级映射的作用：</li><li>逻辑数据独立性：指应用程序和数据的逻辑结构之间的独立性。用户可以在不改变逻辑模式的情况下对外模式进行修改。</li><li>物理数据独立性：指应用程序和数据的物理存储之间的独立性。用户可以在不改变逻辑模式的情况下对物理模式进行修改。</li></ul><figure><img src="'+i+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h3 id="_6-熟记两种数据独立性-什么是逻辑数据独立性-什么是物理数据独立性-用户或者应用程序面向的到底是哪一级数据库模式" tabindex="-1"><a class="header-anchor" href="#_6-熟记两种数据独立性-什么是逻辑数据独立性-什么是物理数据独立性-用户或者应用程序面向的到底是哪一级数据库模式"><span>6. 熟记两种数据独立性：什么是逻辑数据独立性？什么是物理数据独立性？用户或者应用程序面向的到底是哪一级数据库模式？</span></a></h3><ul><li>对于数据库物理结构的改变，如果概念模式保持不变，系统就提供了物理独立性.</li><li>对于数据库逻辑结构的改变(在概念或逻辑概念层的改变)如果用户和用户的应用程序能保持不变，系统就提 供了逻辑独立性.</li><li>用户或应用程序面向的是子模式（外模式）。</li></ul><h3 id="_7-概念数据模型用于数据库设计-是对客观世界的第一层抽象。常见例子是e-r模型。" tabindex="-1"><a class="header-anchor" href="#_7-概念数据模型用于数据库设计-是对客观世界的第一层抽象。常见例子是e-r模型。"><span>7. 概念数据模型用于数据库设计，是对客观世界的第一层抽象。常见例子是E-R模型。</span></a></h3>',18),r=[s];function o(p,c){return t(),a("div",null,r)}const m=e(n,[["render",o],["__file","Chapter1.html.vue"]]),_=JSON.parse('{"path":"/MD/School/DatabaseSystem/Chapter1.html","title":"期末复习第一章","lang":"zh-CN","frontmatter":{"title":"期末复习第一章","tag":"数据库","description":"1. 四个概念：什么是数据? 什么是数据库? 什么是数据库管理系统（DBMS）？什么是数据库系统(DBS)？ 数据是指对客观事件进行记录并可以鉴别的符号 数据库：数据库（database）是“按照数据结构来组织、存储和管理数据的仓库”。是一个长期存储在计算机内的、有组织的、可共享的、统一管理的大量数据的集合。 数据库系统：数据库系统DBS（Data B...","head":[["meta",{"property":"og:url","content":"https://www.wataminc.top/MD/School/DatabaseSystem/Chapter1.html"}],["meta",{"property":"og:site_name","content":"Watamin C"}],["meta",{"property":"og:title","content":"期末复习第一章"}],["meta",{"property":"og:description","content":"1. 四个概念：什么是数据? 什么是数据库? 什么是数据库管理系统（DBMS）？什么是数据库系统(DBS)？ 数据是指对客观事件进行记录并可以鉴别的符号 数据库：数据库（database）是“按照数据结构来组织、存储和管理数据的仓库”。是一个长期存储在计算机内的、有组织的、可共享的、统一管理的大量数据的集合。 数据库系统：数据库系统DBS（Data B..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-02T17:00:53.000Z"}],["meta",{"property":"article:author","content":"Watamin C"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:modified_time","content":"2024-07-02T17:00:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"期末复习第一章\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-02T17:00:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Watamin C\\",\\"url\\":\\"www.wataminc.top\\"}]}"]]},"headers":[{"level":3,"title":"1. 四个概念：什么是数据?  什么是数据库? 什么是数据库管理系统（DBMS）？什么是数据库系统(DBS)？","slug":"_1-四个概念-什么是数据-什么是数据库-什么是数据库管理系统-dbms-什么是数据库系统-dbs","link":"#_1-四个概念-什么是数据-什么是数据库-什么是数据库管理系统-dbms-什么是数据库系统-dbs","children":[]},{"level":3,"title":"2. 熟记数据库系统的组成。","slug":"_2-熟记数据库系统的组成。","link":"#_2-熟记数据库系统的组成。","children":[]},{"level":3,"title":"3. 理解DBA是对数据库进行集中控制和管理的最重要人员。","slug":"_3-理解dba是对数据库进行集中控制和管理的最重要人员。","link":"#_3-理解dba是对数据库进行集中控制和管理的最重要人员。","children":[]},{"level":3,"title":"4. 实例和模式的对比（内容/状态 vs 结构，变化 vs 稳定）","slug":"_4-实例和模式的对比-内容-状态-vs-结构-变化-vs-稳定","link":"#_4-实例和模式的对比-内容-状态-vs-结构-变化-vs-稳定","children":[]},{"level":3,"title":"5. 熟记三级模式：","slug":"_5-熟记三级模式","link":"#_5-熟记三级模式","children":[]},{"level":3,"title":"6. 熟记两种数据独立性：什么是逻辑数据独立性？什么是物理数据独立性？用户或者应用程序面向的到底是哪一级数据库模式？","slug":"_6-熟记两种数据独立性-什么是逻辑数据独立性-什么是物理数据独立性-用户或者应用程序面向的到底是哪一级数据库模式","link":"#_6-熟记两种数据独立性-什么是逻辑数据独立性-什么是物理数据独立性-用户或者应用程序面向的到底是哪一级数据库模式","children":[]},{"level":3,"title":"7. 概念数据模型用于数据库设计，是对客观世界的第一层抽象。常见例子是E-R模型。","slug":"_7-概念数据模型用于数据库设计-是对客观世界的第一层抽象。常见例子是e-r模型。","link":"#_7-概念数据模型用于数据库设计-是对客观世界的第一层抽象。常见例子是e-r模型。","children":[]}],"git":{"createdTime":1719939653000,"updatedTime":1719939653000,"contributors":[{"name":"WataminC","email":"1286982501@qq.com","commits":1}]},"readingTime":{"minutes":4.24,"words":1273},"filePathRelative":"MD/School/DatabaseSystem/Chapter1.md","localizedDate":"2024年7月2日","excerpt":"<h3>1. 四个概念：什么是数据?  什么是数据库? 什么是数据库管理系统（DBMS）？什么是数据库系统(DBS)？</h3>\\n<ul>\\n<li>\\n<p>数据是指对客观事件进行记录并可以鉴别的符号</p>\\n</li>\\n<li>\\n<p>数据库：数据库（database）是“按照数据结构来组织、存储和管理数据的仓库”。是一个长期存储在计算机内的、有组织的、可共享的、统一管理的大量数据的集合。</p>\\n</li>\\n<li>\\n<p>数据库系统：数据库系统DBS（Data Base System，简称DBS）通常由软件、数据库和数据管理员组成。其软件主要包括操作系统、各种宿主语言、实用程序以及数据库管理系统。</p>\\n</li>\\n<li>\\n<p>数据库管理系统：数据库管理系统(Database Management System)是一种操纵和管理数据库的大型软件，是用于建立、使用和维护数据库，简称DBMS。它对数据库进行统一的管理和控制，以保证数据库的安全性和完整性。</p>\\n</li>\\n<li>\\n<p>数据库由数据库管理系统统一管理，数据的插入、修改和检索均要通过数据库管理系统进行。</p>\\n</li>\\n</ul>","autoDesc":true}');export{m as comp,_ as data};