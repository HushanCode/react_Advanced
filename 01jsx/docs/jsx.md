# JSX

![image-20230523215512410](https://cdn.jsdelivr.net/gh/HushanCode/DrawingBed/img/image-20230523215512410.png)

# 一、可能遇到的问题

- JSX是如何转化为DOM的？图解
- 什么是JSX，他和js之间的关系是什么？概念
- JSX的本质是什么？createElement
- 解释下`React.createElement`做了什么？createElement源码
- 为什么要用JSX，不用会有什么后果？开发体验不好
- JSX中的属性有哪些类型？`type,config,children`
- 为什么JSX最外层需要一个标签包裹？
- 什么是React元素？js对象，结构是什么样的，小册中
- 如何在JSX中渲染组件，为什么大写字母开头的标签就会被认为是组件？如何自定义
- 如何在JSX中渲染数组和列表？map
- 如何在JSX中渲染条件性内容？if，?: ，&&
- 如何在JSX中进行样式的设置？对象，为什么？
- 什么是`React.Fragment`？空标签
- 什么是JSX的转义规则？dangerouslySetInnerHTML
- 如何在JSX中进行事件处理？事件合成的概念
- JSX背后的功能模块是什么，这个功能模块做了哪些东西？babel
- 什么是key属性？它的作用是什么？diff算法
- 如何在react中通过控制操纵 children、控制 React 渲染，使用 React 插槽组件？渲染控制



# 二、JSX

## 1.JSX是什么?

JSX 是 JavaScript 语言的一种语法扩展，它是由 Facebook 在开发 React 框架时所创建的。JSX 可以让开发者使用类 HTML 的语法来描述用户界面，它允许在 JavaScript 代码中嵌入 HTML 片段和组件，从而提高了开发者在编写复杂用户界面时的效率和可读性。

尽管 JSX 代码看起来很像 HTML，但它实际上是一种 JavaScript 代码，在编译时会被转换成 JavaScript 对象。这些对象称为虚拟 DOM（Virtual DOM），它们会在 React 中用于渲染用户界面。因此，可以说 JSX 是一种语法扩展，因为它允许在 JavaScript 代码中使用类 HTML 的语法，但在最终运行时，它仍然是 JavaScript 代码的一部分。

需要注意的是，JSX 并不是 JavaScript 标准的一部分，它是由 React 框架自己定义的语法。因此，在使用 JSX 时，需要使用 Babel 或者其他编译工具将其转换为标准的 JavaScript 代码，才能在浏览器中运行。

## 2.`React.createElement`

### (1) 定义语法

`React.createElement（type,config,children)`

JSX会被babel编译成`React.createElement`

- 第一个参数：如果是组件类型，会传入组件对应的类或函数；如果是 dom 元素类型，传入 div 或者 span 之类的字符串。
- 第二个参数：一个对象，在 dom 类型中为标签属性，在组件类型中为 props 。以键值对形式
- 其他参数：对象形式传入，依次为 children，根据顺序排列。

### (2) 例子

```react
<div>
   <TextComponent />
   <div>hello,world</div>
   let us learn React!
</div>

```

```js
React.createElement("div", null,
    React.createElement(TextComponent, null),
    React.createElement("div", null, "hello,world"),
    "let us learn React!"
)
```

### (3) 函数逻辑

该参数其实本质上是一个参数中介，将参数整理为`ReactElement`的参数结构，然后调用`ReactElement`

![image-20230523215704806](https://cdn.jsdelivr.net/gh/HushanCode/DrawingBed/img/image-20230523215704806.png)

![image-20230523215428904](https://cdn.jsdelivr.net/gh/HushanCode/DrawingBed/img/image-20230523215428904.png)

## 3.`ReactElement`

### (1) 语法定义

`ReactElement(type, key, ref, self, source, owner, props)`

+ `type`：表示元素的类型。可以是一个字符串，表示DOM元素的标签名（例如："div"、"span"等），也可以是一个自定义组件的函数或类。

+ `key`（可选）：用于标识React元素的唯一性。在列表渲染中，`key`通常用于优化元素的更新性能。同级别的元素应该具有不同的`key`值。在构建动态列表时，为每个列表项指定一个稳定的`key`值是很重要的。

+ `ref`（可选）：用于引用React组件或DOM元素。通过`ref`，您可以在React组件中访问和操作子组件或DOM元素。`ref`可以是一个回调函数或一个`createRef()`创建的引用对象。

+ `self`（已弃用）：React在内部使用，无需手动提供。

+ `source`（已弃用）：React在内部使用，无需手动提供。

+ `owner`（已弃用）：React在内部使用，无需手动提供。

+ `props`：表示元素的属性。它是一个包含所有属性的对象。属性以键值对的形式存在，键是属性名，值是属性值。这些属性将传递给组件或DOM元素，以影响它们的行为和样式。

请注意，除了`type`和`props`之外，其他参数（`key`、`ref`、`self`、`source`、`owner`）已被标记为已弃用，并且在新版本的React中不再使用。

### (2) 例子





### (3) 函数逻辑

`ReactElement` 其实就是组装，将`createElemect` 整理后传入的参数组装为`ReactElement` 的结构



## 4.`React.render`

### (1) 语法定义

```react
ReactDOM.render(
  // 需要渲染的元素（ReactElement）
  element,
  // 元素挂载的目标容器（一个真实DOM）
  container,
  // 回调函数，可选参数，可以用来处理渲染结束后的逻辑
  [callback]
);
```

### (2) 例子



### (3) 函数逻辑



# 三、JSX规则

以便后续能更流畅地使用 jsx 语法。

| `jsx`元素类型     | `react.createElement` 转换后                      | `type` 属性                   |
| ----------------- | ------------------------------------------------- | ----------------------------- |
| `element`元素类型 | `react element`类型                               | 标签字符串，例如 `div`        |
| `fragment`类型    | `react element`类型                               | `symbol` `react.fragment`类型 |
| 文本类型          | 直接字符串                                        | 无                            |
| 数组类型          | 返回数组结构，里面元素被`react.createElement`转换 | 无                            |
| 组件类型          | `react element`类型                               | 组件类或者组件函数本身        |
| 三元运算 / 表达式 | 先执行三元运算，然后按照上述规则处理              | 看三元运算返回结果            |
| 函数执行          | 先执行函数，然后按照上述规则处理                  | 看函数执行返回结果            |

# 四、JSX-> fiber

最终，在调和阶段，上述 React element 对象的每一个子节点都会形成一个与之对应的 fiber 对象，然后通过 sibling、return、child 将每一个 fiber 对象联系起来。

## 1.不同种类的 fiber Tag

React 针对不同 React element 对象会产生不同 tag (种类) 的fiber 对象。首先，来看一下 tag 与 element 的对应关系：

```js
export const FunctionComponent = 0;       // 函数组件
export const ClassComponent = 1;          // 类组件
export const IndeterminateComponent = 2;  // 初始化的时候不知道是函数组件还是类组件 
export const HostRoot = 3;                // Root Fiber 可以理解为根元素 ， 通过reactDom.render()产生的根元素
export const HostPortal = 4;              // 对应  ReactDOM.createPortal 产生的 Portal 
export const HostComponent = 5;           // dom 元素 比如 <div>
export const HostText = 6;                // 文本节点
export const Fragment = 7;                // 对应 <React.Fragment> 
export const Mode = 8;                    // 对应 <React.StrictMode>   
export const ContextConsumer = 9;         // 对应 <Context.Consumer>
export const ContextProvider = 10;        // 对应 <Context.Provider>
export const ForwardRef = 11;             // 对应 React.ForwardRef
export const Profiler = 12;               // 对应 <Profiler/ >
export const SuspenseComponent = 13;      // 对应 <Suspense>
export const MemoComponent = 14;          // 对应 React.memo 返回的组件
```

## 2.jsx 最终形成的 fiber 结构图

最终写的 jsx 会变成如下格式：

![jsx7.jpg](https://cdn.jsdelivr.net/gh/HushanCode/DrawingBed/img/873f00b1255d4f5f8dac4954cf37dc9f~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0-20230523215356723.awebp)

fiber 对应关系

- child： 一个由父级 fiber 指向子级 fiber 的指针。
- return：一个子级 fiber 指向父级 fiber 的指针。
- sibling: 一个 fiber 指向下一个兄弟 fiber 的指针。

# 五、JSX源码

仓库  `react_Advanced/01jsx/Reactcode` 下有对应的简化版本代码

# 六、JSX实现

## 1.编译时：Babel 解析 JSX 流程

`react_Advanced/01jsx/demo/Realize/babelRealize/jsx.js`

## 2.运行时：`jsx`、`React.createElement`

[react课程](https://appjiz2zqrn2142.pc.xiaoe-tech.com/)



