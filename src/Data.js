import React from 'react';

export const twFormatter=(cell, row)=>{
    if(row.twitter === null || row.twitter === undefined){
        return(cell)
    }else{
        return(
            <a href={row.twitter}>
                {cell}
            </a>
        )
    }
}

export const resultFormatter=(cell, row)=>{
    if(cell === null || cell === undefined){
        return(cell)
    }else{
        let score = []
        if(cell.detail !== undefined){
            score =  <a href={cell.detail}>{cell.score}</a>
        }else{
            score =  <span>{cell.score}</span>
        }
        return(
            <span>
                {cell.result}
                <br/>
                {score}
            </span>
        )
    }
}

export const league_a_data = [
    {
        team_name:'一橋A',
        'vs千葉工大':{
            result:'○',
            score:'24-0'
        },
        'vs奈良大':{
            result:'○',
            score: '13-1'
        },
        'vs世田谷':{
            result:'○',
            score: '3-1'
        },
        win:3,
        lose:0,
        draw:0
    },
    {
        team_name:'奈良大',
        'vs千葉工大':{
            result:'○',
            score: '4-2'
        },
        'vs世田谷':{
            result:'○',
            score:'13-3'
        },
        'vs一橋A':{
            result:'×',
            score: '1-13'
        },
        win:2,
        lose:1,
        draw:0
    },
    {
        team_name:'世田谷',
        'vs千葉工大':{
            result:'○',
            score:'19-9'
        },
        'vs奈良大':{
            result:'×',
            score: '3-13'
        },
        'vs一橋A':{
            result:'×',
            score:'1-3'
        },
        win:1,
        lose:2,
        draw:0
    },
    
    {
        team_name:'千葉工大',
        'vs世田谷':{
            result:'×',
            score: '9-19'
        },
        'vs奈良大':{
            result:'×',
            score: '2-4'
        },
        'vs一橋A':{
            result:'×',
            score:'0-24'
        },
        win:0,
        lose:3,
        draw:0
    }
]

export const league_b_data = [
    {
        team_name:'明治',
        'vs蓋世':{
            result:'○',
            score: '3-2'
        },
        'vs横国A':{
            result:'○',
            score: '6-0'
        },
        'vs理科大':{
            result:'○',
            score: '5-4'
        },
        win:3,
        lose:0,
        draw:0
    },
    {
        team_name:'蓋世',
        'vs横国A':{
            result:'○',
            score: '5-2'
        },
        'vs明治':{
            result:'×',
            score: '2-3'
        },
        'vs理科大':{
            result:'○',
            score: '18-3'
        },
        win:2,
        lose:1,
        draw:0
    },
    {
        team_name:'理科大',
        'vs蓋世':{
            result:'×',
            score: '3-18'
        },
        'vs明治':{
            result:'×',
            score: '4-5'
        },
        'vs横国A':{
            result:'○',
            score: '8-6'
        },
        win:1,
        lose:2,
        draw:0
    },
    {
        team_name:'横国A',
        'vs蓋世':{
            result:'×',
            score: '2-5'
        },
        'vs明治':{
            result:'×',
            score: '0-6'
        },
        'vs理科大':{
            result:'×',
            score: '6-8'
        },
        win:0,
        lose:3,
        draw:0
    },
]

export const league_c_data = [
    {
        team_name:'関西連合',
        'vs蓋鯱':{
            result:'○',
            score: '15-0'
        },
        'vs神奈総':{
            result:'×',
            score: '5-9'
        },
        'vs北大':{
            result:'○',
            score:'8-1',
            detail:'/qualifying/c/1'
        },
        win:2,
        lose:1,
        draw:0
    },
    {
        team_name:'北大',
        'vs蓋鯱':{
            result:'○',
            score: '7-6'
        },
        'vs神奈総':{
            result:'○',
            score: '14-0'
        },
        'vs関西連合':{
            result:'×',
            score: '1-8'
        },
        win:2,
        lose:1,
        draw:0
    },
    {
        team_name:'蓋鯱',
        'vs北大':{
            result:'×',
            score: '6-7'
        },
        'vs神奈総':{
            result:'○',
            score: '6-1'
        },
        'vs関西連合':{
            result:'×',
            score: '0-15'
        },
        win:1,
        lose:2,
        draw:0
    },
    {
        team_name:'神奈総',
        'vs蓋鯱':{
            result:'×',
            score: '1-6'
        },
        'vs北大':{
            result:'×',
            score: '0-14'
        },
        'vs関西連合':{
            result:'○',
            score: '9-5'
        },
        win:1,
        lose:2,
        draw:0
    },
    
]

export const league_d_data = [
    {
        team_name:'京大',
        'vs学習院':{
            result:'○',
            score: '8-2'
        },
        'vs一橋B':{
            result:'○',
            score: '15-0'
        },
        'vs横国B':{
            result:'○',
            score: '7-3'
        },
        win:3,
        lose:0,
        draw:0
    },
    
    
    {
        team_name:'横国B',
        'vs学習院':{
            result:'○',
            score: '15-0'
        },
        'vs京大':{
            result:'×',
            score: '3-7'
        },
        'vs一橋B':{
            result:'○',
            score: '15-0'
        },
        win:2,
        lose:1,
        draw:0
    },
    {
        team_name:'学習院',
        'vs一橋B':{
            result:'○',
            score: '6-5'
        },
        'vs京大':{
            result:'×',
            score: '2-8'
        },
        'vs横国B':{
            result:'×',
            score: '0-15'
        },
        win:1,
        lose:2,
        draw:0
    },

    {
        team_name:'一橋B',
        'vs学習院':{
            result:'x',
            score: '5-6'
        },
        'vs京大':{
            result:'×',
            score: '0-15'
        },
        'vs横国B':{
            result:'×',
            score: '0-15'
        },
        win:0,
        lose:3,
        draw:0
    },
    
]

export const league_a_columns = [
    {
        text:'チーム名',
        dataField:'team_name',
        classes:'center'
    },
    {
        text:'勝',
        dataField:'win',
        classes:'number'
    },
    {
        text:'敗',
        dataField:'lose',
        classes:'number'
    },
    {
        text:'vs一橋A',
        dataField:'vs一橋A',
        formatter:resultFormatter,
        //classes:'center'
    },
    {
        text:'vs奈良大',
        dataField:'vs奈良大',
        formatter:resultFormatter,
        //classes:'center'
    },
    {
        text:'vs世田谷',
        dataField:'vs世田谷',
        formatter:resultFormatter,
        //classes:'center'
    },
    {
        text:'vs千葉工大',
        dataField:'vs千葉工大',
        formatter:resultFormatter,
        //classes:'center'
    }
]

export const league_b_columns = [
    {
        text:'チーム名',
        dataField:'team_name'
    },
    {
        text:'勝',
        dataField:'win',
        classes:'number'
    },
    {
        text:'敗',
        dataField:'lose',
        classes:'number'
    },
    {
        text:'vs明治',
        dataField:'vs明治',
        formatter:resultFormatter,
        //classes:'center'
    },
    {
        text:'vs蓋世',
        dataField:'vs蓋世',
        formatter:resultFormatter,
        //classes:'center'
    },
    {
        text:'vs理科大',
        dataField:'vs理科大',
        formatter:resultFormatter,
        //classes:'center'
    },
    {
        text:'vs横国A',
        dataField:'vs横国A',
        formatter:resultFormatter,
        //classes:'center'
    },
]

export const league_c_columns = [
    {
        text:'チーム名',
        dataField:'team_name'
    },
    {
        text:'勝',
        dataField:'win',
        classes:'number'
    },
    {
        text:'敗',
        dataField:'lose',
        classes:'number'
    },
    {
        text:'vs関西連合',
        dataField:'vs関西連合',
        formatter:resultFormatter,
    },
    {
        text:'vs北大',
        dataField:'vs北大',
        formatter:resultFormatter,
    },
    {
        text:'vs蓋鯱',
        dataField:'vs蓋鯱',
        formatter:resultFormatter,
    },
    {
        text:'vs神奈総',
        dataField:'vs神奈総',
        formatter:resultFormatter,
    }
]

export const league_d_columns = [
    {
        text:'チーム名',
        dataField:'team_name'
    },
    {
        text:'勝',
        dataField:'win',
        classes:'number'
    },
    {
        text:'敗',
        dataField:'lose',
        classes:'number'
    },
    {
        text:'vs京大',
        dataField:'vs京大',
        formatter:resultFormatter,
    },
    
    {
        text:'vs横国B',
        dataField:'vs横国B',
        formatter:resultFormatter,
    },
    {
        text:'vs学習院',
        dataField:'vs学習院',
        formatter:resultFormatter,
    },
    {
        text:'vs一橋B',
        dataField:'vs一橋B',
        formatter:resultFormatter,
    },
]

export const team_data = [
    {
        name:'明治大学キャップ投げ倶楽部',
        twitter:'https://twitter.com/ohmeijicap',
        qualifying_group:'B(1位)',
        result:'優勝'
    },
    {
        name:'北大キャップ投げサークル',
        twitter:'https://twitter.com/HU_cappers',
        qualifying_group:'C(2位)',
        result:'準優勝'
    },
    {
        name:'奈良大',
        twitter:undefined,
        qualifying_group:'A(2位)',
        result:'3位'
    },
    {
        name:'京都大学キャップ投げ倶楽部',
        twitter:'https://twitter.com/kuctc_official',
        qualifying_group:'D(1位)',
        result:'4位'
    },
    {
        name:'一橋大学キャップ投げ倶楽部',
        twitter:'https://twitter.com/CAPHitotsubashi',
        qualifying_group:'A(1位)/D(4位)',
        result:'ベスト8/1回戦敗退'

    },
    {
        name:'蓋世',
        twitter:undefined,
        qualifying_group:'B(2位)',
        result:'ベスト8'
    },
    {
        name:'横国キャップ野球クラブ',
        twitter:'https://twitter.com/beach_sounds',
        qualifying_group:'B(4位)/D(2位)',
        result:'1回戦敗退/ベスト8'
    },
    {
        name:'関西連合',
        twitter:undefined,
        qualifying_group:'C(1位)',
        result:'ベスト8'
    },
    {
        name:'東京世田谷キャッパーズ',
        twitter:'https://twitter.com/TSCappers',
        qualifying_group:'A(3位)',
        result:'1回戦敗退'
    },
    {
        name:'千葉工大 非公認キャップ投げサークル',
        twitter:'https://twitter.com/cit_capthrow',
        qualifying_group:'A(4位)',
        result:'1回戦敗退'
    },
    {
        name:'蓋鯱',
        twitter:undefined,
        qualifying_group:'C(3位)',
        result:'1回戦敗退'
    },
    {
        name:'神奈川総合高校キャップ投げ同好会',
        twitter:'https://twitter.com/Kns_ctc',
        qualifying_group:'C(4位)',
        result:'1回戦敗退'
    },
    
    
    {
        name:'目白蓋式野球倶楽部(学習院)',
        twitter:'https://twitter.com/GCTC2019',
        qualifying_group:'D(3位)',
        result:'1回戦敗退'
    },
    {
        name:'東京理科大学キャップ野球サークル',
        twitter:'https://twitter.com/RikadaiCap',
        qualifying_group:'B(3位)',
        result:''
    },
    
    
]

export const team_columns = [
    {
        text:'チーム名',
        dataField:'name',
        formatter:twFormatter
    },
    {
        text:'1日目予選成績',
        dataField:'qualifying_group',
        classes:'nowrap'
    },
    {
        text:'2日目決勝T成績',
        dataField:'result'
    },
    
]

export const qualifying_game_data = 
{
    'a':{
        name:'予選Aリーグ',
        1:{
            topScore:13,
            topTeam:'一橋A',
            bottomScore:1,
            bottomTeam:'奈良大',
            twVideos:[

            ]
        }
    },
    'b':{
        name:'予選Bリーグ',
        5:{
            topScore:5,
            topTeam:'蓋世',
            bottomScore:2,
            bottomTeam:'横国A',
            twVideos:[
                '1164790289896095744'
            ] 
        }
    },
    'c':{
        name:'予選Cリーグ',
        1:{
            topScore:8,
            topTeam:'関西連合',
            bottomScore:1,
            bottomTeam:'北大',
            twVideos:[
                '1165204324739207169',
                '1165534581887393792'
            ]
        }
    }
}

export const tournament_game_data = 
{
    'first':{
        name:'1回戦',
        2:{
            topScore:1,
            topTeam:'世田谷',
            bottomScore:2,
            bottomTeam:'横国B',
            twVideos:[
                '1164193493259976704'
            ]
        }
    },
}