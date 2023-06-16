/* eslint-disable react/no-multi-comp */
import React from 'react'



function ChidrenComponent(){
    return <div> In this chapter, let's learn about react props ! </div>
}

class PropsComponent extends React.Component{
    componentDidMount(){
        console.log(this,'_this')
    }

    render(){
        setTimeout(()=>{
            console.log(this,'_this')
        },100)
        const {  children , mes , renderName , say ,Component } = this.props
        return <div>
            {children[0]()}
            {mes}
            {renderName()}
            {children[1]}
            <Component />
            <button onClick={() => say()} > change content </button>
        </div>
    }
}

export default class Index extends React.Component{
    state={
        mes: 'hello,React'
    }
    node = null
    say= () =>  this.setState({ mes:'let us learn React!' })
    render(){
        return <div>
            <PropsComponent
                Component={ChidrenComponent}
                mes={this.state.mes}
                renderName={()=><div> my name is alien </div>}
                say={this.say}
            >
                {()=> <div>hello,world</div>}
                <ChidrenComponent />
            </PropsComponent>
        </div>
    }
}

