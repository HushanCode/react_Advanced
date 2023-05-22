import React from "react"

const toLearn = [ 'react' , 'vue' , 'webpack' , 'nodejs'  ]

const TextComponent = ()=> <div> hello , i am function component </div> 

class Index extends React.Component{
    status = false /* 状态 */
    renderFoot=()=> <div> i am foot</div>
    render(){
        /* 以下都是常用的jsx元素节 */
        return <div style={{ marginTop:'100px', marginLeft:"500px" }}   >

            { /* 1.element 元素类型 */ }
            <div>hello,world</div>

            { /* 2.fragment 类型 */ }
            <React.Fragment>
                <div> 👽👽 </div>
            </React.Fragment>

            { /* 3.text 文本类型 */ }
            my name is alien 

            { /* 4.数组节点类型 */ }
            { toLearn.map(item=> <div key={item} >let us learn { item } </div> ) }

            { /* 5.组件类型 */ }
            <TextComponent/>

            { /* 6.三元运算 */  }
            { this.status ? <TextComponent /> : <div>三元运算</div> }

            { /* 7.函数执行 */ } 
            { this.renderFoot() }

            {/* 8. */}
            <button onClick={ ()=> console.log( this.render() ) } >打印render后的内容</button>
        </div>
    }
}

export default Index;
