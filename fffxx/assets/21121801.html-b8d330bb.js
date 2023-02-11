import{_ as n,p as a,q as s,w as t,J as p}from"./framework-4a7f5a2b.js";const e={},o=p(`<h2 id="反引号可以被用作普通字符串" tabindex="-1"><a class="header-anchor" href="#反引号可以被用作普通字符串" aria-hidden="true">#</a> 反引号可以被用作普通字符串；</h2><p>和使用双引号/单引号的普通字符串的作用一样</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 普通字符串</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">In JavaScript &#39;\\n&#39; is a line-feed.</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// 多行字符串</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">In JavaScript this is
not legal.</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// 字符串中嵌入变量</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> <span class="token string">&quot;today&quot;</span><span class="token punctuation">;</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, how are you </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>time<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token template-punctuation string">\`</span></span>   <span class="token comment">// Hello Bob, how are you today?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="也可以输出多行字符串。" tabindex="-1"><a class="header-anchor" href="#也可以输出多行字符串。" aria-hidden="true">#</a> 也可以输出多行字符串。</h2><p>所有的空格、缩进和换行都会被保留在输出中</p><h2 id="还可以在字符串中嵌入变量。" tabindex="-1"><a class="header-anchor" href="#还可以在字符串中嵌入变量。" aria-hidden="true">#</a> 还可以在字符串中嵌入变量。</h2><p>模板字符串中嵌入变量，要将变量名写在\${}之中。大括号内可以放入任意的JavaScript表达式，可以进行运算，以及引入对象属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x <span class="token operator">+</span> y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">// &quot;1 + 2 = 3&quot;</span>

<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>y <span class="token operator">*</span> <span class="token number">2</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x <span class="token operator">+</span> y <span class="token operator">*</span> <span class="token number">2</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">// &quot;1 + 4 = 5&quot;</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>obj<span class="token punctuation">.</span>x <span class="token operator">+</span> obj<span class="token punctuation">.</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">// &quot;3&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板字符串之中还可以调用函数。" tabindex="-1"><a class="header-anchor" href="#模板字符串之中还可以调用函数。" aria-hidden="true">#</a> 模板字符串之中还可以调用函数。</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> World</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">// &quot;Hello World&quot;</span>

<span class="token comment">// 变量place没有声明</span>
<span class="token keyword">var</span> msg <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>place<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span><span class="token comment">//会报错</span>

<span class="token comment">// 变量place不是字符串，会按照一般规则默认转字符串</span>
<span class="token keyword">var</span> msg <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>place<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token comment">// 变量place是对象，</span>
<span class="token keyword">var</span> msg <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>place<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span><span class="token comment">//会默认调用对象的toString()方法转字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function i(l,c){return a(),s("div",null,[t(" more "),o])}const r=n(e,[["render",i],["__file","21121801.html.vue"]]);export{r as default};