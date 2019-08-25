import React from 'react'
import { qualifying_game_data } from './Data'
import { TwitterTweetEmbed } from 'react-twitter-embed'

export default class Game extends React.Component{
    render(){
        console.log(this.props)
        let group = this.props.match.params.group;
        let game_number = this.props.match.params.game_number;
        if(this.props.data[group] !== undefined
            && this.props.data[group][game_number] !== undefined
            ){
            let result = this.props.data[group][game_number]
            let group_name = this.props.data[group]['name'];
            let videos = [];
            for(let i = 0 ; i < result.twVideos.length; i++){
                videos.push(
                    <TwitterTweetEmbed tweetId={result.twVideos[i]} />
                )
            }
            return(
                <div>
                    <div className='brown'>
                        試合結果詳細
                    </div>
                    <div className='purple'>
                        {group_name} 試合{game_number}
                    </div>
                    <div 
                        style={{
                            fontSize:20,
                            //textAlign:'center',
                            position:'relative',
                            left:'25vw',
                            padding:10
                        }}
                    >
                        {result.topTeam}
                        &nbsp;{result.topScore}&nbsp;
                        -
                        &nbsp;{result.bottomScore}&nbsp;
                        {result.bottomTeam}
                    </div>
                    <div
                        style={{
                            //display:'flex',
                            padding:10,
                            //alignContent:'center'
                            justifyContent:'center'
                        }}
                    >
                        {videos}
                    </div>
                </div>
            )
        }else{
            return(
                <div>Not Found.</div>
            )
        }
    }
}