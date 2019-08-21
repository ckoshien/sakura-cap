import React from 'react'

export default class SakuraNavbar extends React.Component{
    render(){
        return(
            <nav>
                <div
                    style={{
                        fontSize:14,
                        padding:2
                    }}
                >第1回キャップ野球全国大会</div>
                <span
                style={{
                    //backgroundColor:'#f8bbd0',
                    background:'linear-gradient(to right bottom, #f8bbd0 70%, #fff)',
                    color:'aliceblue',
                    padding:3,
                    width:10
                    }}>桜</span>咲く
                <span
                style={{
                    //backgroundColor:'#ba68c8',
                    background:'linear-gradient(to right bottom, #ba68c8 70%, #fff)',
                    color:'aliceblue',
                    padding:3,
                    width:10
                }}
                >佐</span>倉
                <span
                style={{
                    //backgroundColor:'#5d4037',
                    background:'linear-gradient(to right bottom, #5d4037 70%, #fff)',
                    color:'aliceblue',
                    padding:3,
                    width:10
                }}
                >蓋</span>ざんまい
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