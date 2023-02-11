import{_ as t,p,q as c,w as o,s as n,G as s,t as i,J as a,n as l}from"./framework-4a7f5a2b.js";const u={},r=a(`<h2 id="防抖函数-debounce" tabindex="-1"><a class="header-anchor" href="#防抖函数-debounce" aria-hidden="true">#</a> 防抖函数（Debounce）</h2><h3 id="概念理解" tabindex="-1"><a class="header-anchor" href="#概念理解" aria-hidden="true">#</a> 概念理解：</h3><blockquote><p><strong>防抖的解释</strong>：在一定时间内，多次触发，只执行一次。总结两种场景应用：</p></blockquote><p><strong>最后执行</strong>：多次触发时，则会把前面执行的函数去掉，重新开始计时，直到没有触发后，执行最后一次。</p><p>适用场景：</p><p>1、输入框远程搜索，在输入完成后，才会进行搜索。 2、快速点击点赞或者取消点赞。</p><p><strong>立即执行</strong>：多次触发时，函数立即执行，在规定时间节奏内，多次点击不再生效，直到这个时间节奏结束。</p><p>适用场景：禁止连续点击</p><h3 id="前提知识点" tabindex="-1"><a class="header-anchor" href="#前提知识点" aria-hidden="true">#</a> 前提知识点：</h3><p>需要在理解以下三个知识点，再去理解防抖节流。</p><ul><li>闭包</li><li>定时器应用</li><li>this 指针</li></ul><h3 id="函数代码" tabindex="-1"><a class="header-anchor" href="#函数代码" aria-hidden="true">#</a> 函数代码：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
* @description: 防抖 - 触发后执行
* @param: {
	fn:回调函数；
	delay:number类型，setTimeout的时间参数；
	}
*/</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    <span class="token comment">// 形成闭包 </span>
     <span class="token keyword">let</span> timer<span class="token punctuation">;</span>
     <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>           <span class="token comment">// args 为函数调用时传的参数。</span>
          <span class="token keyword">let</span> _that <span class="token operator">=</span> <span class="token keyword">this</span>
          timer <span class="token operator">&amp;&amp;</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
          timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
               <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>_that<span class="token punctuation">,</span> args<span class="token punctuation">)</span>    <span class="token comment">// 利用apply更改this绑定和传参</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
* @description: 防抖 - 触发立即执行
* @param: {
	fn:回调函数；
	delay:number类型，setTimeout的时间参数；
	}
*/</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timer<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         <span class="token keyword">let</span> _that <span class="token operator">=</span> <span class="token keyword">this</span>
         <span class="token keyword">let</span> callNow <span class="token operator">=</span> <span class="token operator">!</span>timer<span class="token punctuation">;</span>
         timer <span class="token operator">&amp;&amp;</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
         timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              timer <span class="token operator">=</span> <span class="token keyword">null</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>_that<span class="token punctuation">,</span> args<span class="token punctuation">)</span>  
         <span class="token punctuation">}</span>
         <span class="token comment">// else { 可自定义连续点击触发的提示 }</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用方法" tabindex="-1"><a class="header-anchor" href="#调用方法" aria-hidden="true">#</a> 调用方法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">debounce</span><span class="token punctuation">(</span>函数名<span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="节流函数-throttle" tabindex="-1"><a class="header-anchor" href="#节流函数-throttle" aria-hidden="true">#</a> 节流函数（Throttle）</h2><h3 id="概念理解-1" tabindex="-1"><a class="header-anchor" href="#概念理解-1" aria-hidden="true">#</a> 概念理解：</h3><blockquote><p>截流：一段时间内减少触发频率。</p></blockquote><p>适用场景：</p><p>1、页面上的滚动监听 2、页面的视窗变化</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
* @description: 节流 - 定时器型
* @param: {
	fn:回调函数；
	delay:number类型，setTimeout的时间参数；
	}
*/</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timer<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         <span class="token keyword">let</span> _that <span class="token operator">=</span> <span class="token keyword">this</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>						<span class="token comment">// 如果timer存在，说明函数还未该执行</span>
              timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
                   timer <span class="token operator">=</span> <span class="token keyword">null</span>				<span class="token comment">// 当函数执行时，让timer为null。</span>
                   <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>_that<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
         <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
* @description: 节流 - 时间计数型
* @param: {
	fn:回调函数；
	delay:number类型，setTimeout的时间参数；
	}
*/</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> lastTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         <span class="token keyword">let</span> _that <span class="token operator">=</span> <span class="token keyword">this</span>
         <span class="token keyword">let</span> nowTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>nowTime <span class="token operator">-</span> lastTime <span class="token operator">&gt;</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>_that<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
              lastTime <span class="token operator">=</span> nowTime
         <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用方法-1" tabindex="-1"><a class="header-anchor" href="#调用方法-1" aria-hidden="true">#</a> 调用方法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">throttle</span><span class="token punctuation">(</span>函数名<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="关于几个问题的解释" tabindex="-1"><a class="header-anchor" href="#关于几个问题的解释" aria-hidden="true">#</a> 关于几个问题的解释：</h2><h3 id="指针问题" tabindex="-1"><a class="header-anchor" href="#指针问题" aria-hidden="true">#</a> 指针问题：</h3><p>因为程序中很多地方都需要使用 this 指针，如果对于this指向的理解不深入的话，很容易出现以下情况：</p><p><code>1:this==undefined</code><code>2:Error:data is not defined</code></p><p>apply、call、bind 是为了改变 this 指针而应用。</p><p>具体理解需学习相关专题。</p><h3 id="闭包问题" tabindex="-1"><a class="header-anchor" href="#闭包问题" aria-hidden="true">#</a> 闭包问题：</h3><p>代码中 return {} 用到了闭包的概念，作用是将定义的自由变量（如：timer）在本次作用域内不被销毁的调用。</p><p>vue 中结合实例 data 特性，可以不使用闭包，需将 timer 自由变量定义在 data 内。（本身可以理解为一个大闭包）</p><p>具体理解需学习相关专题。</p><h3 id="事件执行问题" tabindex="-1"><a class="header-anchor" href="#事件执行问题" aria-hidden="true">#</a> 事件执行问题：</h3><p>在 html 的 onclick 行内添加一个方法（或者在 vue @click事件），每次触发点击事件都会执行该方法，看似没什么问题，但如果这个方法返回的是一个方法呢，如果我们想让返回出来的方法得到执行，就要在行内的末尾加上一对括号，结果就是每次执行返回出来的内部方法都是新的，<a href="">闭包</a>？我们想要使用的闭包失效了。</p><p>解决方案 2 种：</p><ol><li><p>在 script 标签中给 dom 元素的 onclick 赋值这个方法的执行，返回出来的内部方法就可以应用闭包</p><p>（原生 js）<code>Dom.onclick = debounce(fn,delay)</code></p><p>（vue 的 method）： <code>handle: debounce(fn,delay)</code></p></li><li><p>使用 addEventListener 给 dom 元素添加 click 事件，赋值依然为外层方法的执行</p><p><code>Dom.addEventListener(&#39;click&#39;, debounce(submit), false)</code></p></li></ol><p><strong>具体理解为什么闭包会失效？</strong></p>`,40),d={href:"https://www.runoob.com/jsref/event-onclick.html",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>onclick<span class="token operator">=</span><span class="token string">&quot; SomeJavaScriptCode &quot;</span> 
<span class="token comment">// 等价于</span>
object<span class="token punctuation">.</span><span class="token function-variable function">onclick</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> SomeJavaScriptCode <span class="token punctuation">}</span>
<span class="token comment">/*
点击执行 function 调用 debounce，debounce 直接 return ，相当于 function 运行指针到了 一段代码明文
这段代码字符串后面如果跟括号，可以正常运行，但是脱离了原本的闭包函数，相当于一个新的函数，闭包内的 自由变量 就会失去原来的空间栈，所以每次运行都会重新定义
*/</span>

object<span class="token punctuation">.</span>onclick <span class="token operator">=</span> SomeJavaScriptCode 
<span class="token comment">// 注意和上边的区别</span>
<span class="token comment">/*
点击就直接执行 debounce，onclick 就是 debounce，给予 debounce onclick的事件属性
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(m,b){const e=l("ExternalLinkIcon");return p(),c("div",null,[o(" more "),r,n("p",null,[s("先了解 "),n("a",d,[s("onclick"),i(e)])]),k])}const f=t(u,[["render",v],["__file","22032801.html.vue"]]);export{f as default};
