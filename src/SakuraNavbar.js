import React from 'react'

export default class SakuraNavbar extends React.Component{
    render(){
        return(
            <nav>
                <img src="./img/title.jpg" height={80} />
                <div
                    style={{
                        fontSize:14,
                        position:'absolute',
                        left:170,
                        top:60
                    }}
                >
                    非公式特設サイト
                </div>
            </nav>
        )
    }
}