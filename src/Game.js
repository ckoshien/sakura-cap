import React from 'react'
import { qualifying_game_data } from './Data'
import { TwitterTweetEmbed } from 'react-twitter-embed'

export default class Game extends React.Component{
    render(){
        if(qualifying_game_data[this.props.match.params.group] !== undefined
            && qualifying_game_data[this.props.match.params.group][this.props.match.params.game_number] !== undefined
            ){
            let data = qualifying_game_data[this.props.match.params.group][this.props.match.params.game_number]
            let videos = [];
            for(let i = 0 ; i < data.twVideos.length; i++){
                videos.push(
                    <TwitterTweetEmbed tweetId={data.twVideos[i]} />
                )
            }
            return(
                <div>
                    <div className='brown'>
                        試合結果詳細
                    </div>
                    <div className='purple'>
                        予選{ this.props.match.params.group.toUpperCase()}リーグ 試合{this.props.match.params.game_number}
                    </div>
                    <div 
                        style={{
                            fontSize:20,
                            textAlign:'center',
                            padding:10
                        }}
                    >
                        {data.topTeam}
                        &nbsp;{data.topScore}&nbsp;
                        -
                        &nbsp;{data.bottomScore}&nbsp;
                        {data.bottomTeam}
                    </div>
                    <div 
                        style={{
                            padding:10
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