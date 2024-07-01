import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as n,f as e,a,e as s}from"./app-ulwXG_Ck.js";const m={},i=e('<h1 id="_0-超键-候选键-主键和外键" tabindex="-1"><a class="header-anchor" href="#_0-超键-候选键-主键和外键"><span>0. 超键，候选键，主键和外键</span></a></h1><ul><li>超键：在关系中能唯一标识元组的属性集称为关系模式的超键</li><li>候选键：不含有多余属性的超键称为候选键</li><li>主键：选定的某个候选键</li><li>关系中某个属性虽然不是关系的候选键但是是其他关系的候选键</li><li>主属性：候选键的属性</li></ul><h1 id="_1-熟记关系模式设计不当可能产生的四种问题" tabindex="-1"><a class="header-anchor" href="#_1-熟记关系模式设计不当可能产生的四种问题"><span>1. 熟记关系模式设计不当可能产生的四种问题</span></a></h1><ul><li>数据冗余：重复存储相同的数据。</li><li>插入异常：因缺少其他数据而无法插入某些数据。</li><li>删除异常：删除某些数据导致其他有用数据的丢失。</li><li>更新异常：更新某些数据需要在多个地方进行更改，且容易出现不一致性。</li></ul><h1 id="_2-理解函数依赖的概念" tabindex="-1"><a class="header-anchor" href="#_2-理解函数依赖的概念"><span>2.理解函数依赖的概念</span></a></h1>',5),r=a("p",null,[s("在关系数据库中，一个属性集对另一个属性集的唯一性约束。"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"X")]),a("annotation",{encoding:"application/x-tex"},"X")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X")])])]),s("和"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"Y")]),a("annotation",{encoding:"application/x-tex"},"Y")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y")])])]),s("是"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"U")]),a("annotation",{encoding:"application/x-tex"},"U")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"U")])])]),s("的子集，"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"normal"},"∀"),a("mi",null,"r"),a("mo",null,"∈"),a("mi",null,"R"),a("mo",{stretchy:"false"},"("),a("mi",null,"U"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"\\forall r \\in R(U)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.0391em"}}),a("span",{class:"mord"},"∀"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"∈"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"U"),a("span",{class:"mclose"},")")])])]),s("，r中不可能存在两个元组X的属性值相同，而Y不同")],-1),h=a("ul",null,[a("li",null,[s("平凡和非平凡函数依赖： "),a("ul",null,[a("li",null,[s("如果"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"Y"),a("mo",null,"⊂"),a("mi",null,"X")]),a("annotation",{encoding:"application/x-tex"},"Y \\subset X")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.7224em","vertical-align":"-0.0391em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"⊂"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X")])])]),s("，则"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"X"),a("mo",null,"←"),a("mi",null,"Y")]),a("annotation",{encoding:"application/x-tex"},"X \\leftarrow Y")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"←"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y")])])]),s("是平凡函数依赖")]),a("li",null,"如果不是子集，则是非平凡函数依赖")])]),a("li",null,[s("部分和完全函数依赖 "),a("ul",null,[a("li",null,[s("如果"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"X"),a("mo",null,"←"),a("mi",null,"Y")]),a("annotation",{encoding:"application/x-tex"},"X \\leftarrow Y")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"←"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y")])])]),s("且存在"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"X")]),a("annotation",{encoding:"application/x-tex"},"X")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X")])])]),s("的真子集"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"Z")]),a("annotation",{encoding:"application/x-tex"},"Z")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z")])])]),s("使得"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"Z"),a("mo",null,"←"),a("mi",null,"Y")]),a("annotation",{encoding:"application/x-tex"},"Z \\leftarrow Y")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"←"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y")])])]),s("，则"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"Y")]),a("annotation",{encoding:"application/x-tex"},"Y")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y")])])]),s("对"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"X")]),a("annotation",{encoding:"application/x-tex"},"X")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X")])])]),s("是部分函数依赖")]),a("li",null,[s("若这样的真子集不存在，则"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"Y")]),a("annotation",{encoding:"application/x-tex"},"Y")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y")])])]),s("对"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"X")]),a("annotation",{encoding:"application/x-tex"},"X")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X")])])]),s("是完全函数依赖")])])]),a("li",null,[s("传递和非传递函数依赖 "),a("ul",null,[a("li",null,[s("如果"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"X"),a("mo",null,"←"),a("mi",null,"Y")]),a("annotation",{encoding:"application/x-tex"},"X \\leftarrow Y")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"←"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y")])])]),s("且"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"Y"),a("mo",null,"←"),a("mi",null,"Z")]),a("annotation",{encoding:"application/x-tex"},"Y \\leftarrow Z")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"←"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z")])])]),s("，则"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"Z")]),a("annotation",{encoding:"application/x-tex"},"Z")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z")])])]),s("对"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"X")]),a("annotation",{encoding:"application/x-tex"},"X")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X")])])]),s("是传递函数依赖")]),a("li",null,"如果不存在这样的关系，则为非传递函数依赖")])])],-1),c=[i,r,h];function p(o,g){return l(),n("div",null,c)}const x=t(m,[["render",p],["__file","Chapter6.html.vue"]]),w=JSON.parse('{"path":"/MD/School/DatabaseSystem/Chapter6.html","title":"0. 超键，候选键，主键和外键","lang":"zh-CN","frontmatter":{"description":"0. 超键，候选键，主键和外键 超键：在关系中能唯一标识元组的属性集称为关系模式的超键 候选键：不含有多余属性的超键称为候选键 主键：选定的某个候选键 关系中某个属性虽然不是关系的候选键但是是其他关系的候选键 主属性：候选键的属性 1. 熟记关系模式设计不当可能产生的四种问题 数据冗余：重复存储相同的数据。 插入异常：因缺少其他数据而无法插入某些数据。...","head":[["meta",{"property":"og:url","content":"https://www.wataminc.top/MD/School/DatabaseSystem/Chapter6.html"}],["meta",{"property":"og:site_name","content":"Watamin C"}],["meta",{"property":"og:title","content":"0. 超键，候选键，主键和外键"}],["meta",{"property":"og:description","content":"0. 超键，候选键，主键和外键 超键：在关系中能唯一标识元组的属性集称为关系模式的超键 候选键：不含有多余属性的超键称为候选键 主键：选定的某个候选键 关系中某个属性虽然不是关系的候选键但是是其他关系的候选键 主属性：候选键的属性 1. 熟记关系模式设计不当可能产生的四种问题 数据冗余：重复存储相同的数据。 插入异常：因缺少其他数据而无法插入某些数据。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-01T13:26:03.000Z"}],["meta",{"property":"article:author","content":"Watamin C"}],["meta",{"property":"article:modified_time","content":"2024-07-01T13:26:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"0. 超键，候选键，主键和外键\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-01T13:26:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Watamin C\\",\\"url\\":\\"www.wataminc.top\\"}]}"]]},"headers":[],"git":{"createdTime":1719840363000,"updatedTime":1719840363000,"contributors":[{"name":"WataminC","email":"1286982501@qq.com","commits":1}]},"readingTime":{"minutes":1.42,"words":426},"filePathRelative":"MD/School/DatabaseSystem/Chapter6.md","localizedDate":"2024年7月1日","excerpt":"\\n<ul>\\n<li>超键：在关系中能唯一标识元组的属性集称为关系模式的超键</li>\\n<li>候选键：不含有多余属性的超键称为候选键</li>\\n<li>主键：选定的某个候选键</li>\\n<li>关系中某个属性虽然不是关系的候选键但是是其他关系的候选键</li>\\n<li>主属性：候选键的属性</li>\\n</ul>\\n<h1>1. 熟记关系模式设计不当可能产生的四种问题</h1>\\n<ul>\\n<li>数据冗余：重复存储相同的数据。</li>\\n<li>插入异常：因缺少其他数据而无法插入某些数据。</li>\\n<li>删除异常：删除某些数据导致其他有用数据的丢失。</li>\\n<li>更新异常：更新某些数据需要在多个地方进行更改，且容易出现不一致性。</li>\\n</ul>","autoDesc":true}');export{x as comp,w as data};
