import React from 'react';

export const JCBLSCORE = 'https://jcbl-score.com'

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
            score:'24-0',
            detail: JCBLSCORE+'/game/detail/394'
        },
        'vs奈良大':{
            result:'○',
            score: '13-1',
            detail: JCBLSCORE+'/game/detail/392'
        },
        'vs世田谷':{
            result:'○',
            score: '3-1',
            detail:JCBLSCORE+'/game/detail/393'
        },
        win:3,
        lose:0,
        draw:0
    },
    {
        team_name:'奈良大',
        'vs千葉工大':{
            result:'○',
            score: '4-2',
            detail:JCBLSCORE+'/game/detail/396'
        },
        'vs世田谷':{
            result:'○',
            score:'13-3',
            detail:JCBLSCORE+'/game/detail/395'
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
            score:'19-9',
            detail:JCBLSCORE+'/game/detail/397'
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
            score: '3-2',
            detail:JCBLSCORE+'/game/detail/398'
        },
        'vs横国A':{
            result:'○',
            score: '6-0',
            detail:JCBLSCORE+'/game/detail/400'
        },
        'vs理科大':{
            result:'○',
            score: '5-4',
            detail:JCBLSCORE+'/game/detail/399'
        },
        win:3,
        lose:0,
        draw:0
    },
    {
        team_name:'蓋世',
        'vs横国A':{
            result:'○',
            score: '5-2',
            detail:JCBLSCORE+'/game/detail/402'
        },
        'vs明治':{
            result:'×',
            score: '2-3'
        },
        'vs理科大':{
            result:'○',
            score: '18-3',
            detail:'/qualifying/b/4',
            detail:JCBLSCORE+'/game/detail/401'
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
            score: '8-6',
            detail:JCBLSCORE+'/game/detail/403'
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
            score: '15-0',
            detail:JCBLSCORE+'/game/detail/405'
        },
        'vs神奈総':{
            result:'×',
            score: '5-9',
            detail:JCBLSCORE+'/game/detail/406'
        },
        'vs北大':{
            result:'○',
            score:'8-1',
            detail:JCBLSCORE+'/game/detail/404'
        },
        win:2,
        lose:1,
        draw:0
    },
    {
        team_name:'北大',
        'vs蓋鯱':{
            result:'○',
            score: '7-6',
            detail:JCBLSCORE+'/game/detail/407'
        },
        'vs神奈総':{
            result:'○',
            score: '14-0',
            detail:JCBLSCORE+'/game/detail/408'
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
            score: '6-1',
            detail:JCBLSCORE+'/game/detail/409'
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
            score: '8-2',
            detail:JCBLSCORE+'/game/detail/411'
        },
        'vs一橋B':{
            result:'○',
            score: '15-0',
            detail:JCBLSCORE+'/game/detail/412'
        },
        'vs横国B':{
            result:'○',
            score: '7-3',
            detail:JCBLSCORE+'/game/detail/410'
        },
        win:3,
        lose:0,
        draw:0
    },
    
    
    {
        team_name:'横国B',
        'vs学習院':{
            result:'○',
            score: '15-0',
            detail:JCBLSCORE+'/game/detail/413'
        },
        'vs京大':{
            result:'×',
            score: '3-7'
        },
        'vs一橋B':{
            result:'○',
            score: '15-0',
            detail:JCBLSCORE+'/game/detail/414'
        },
        win:2,
        lose:1,
        draw:0
    },
    {
        team_name:'学習院',
        'vs一橋B':{
            result:'○',
            score: '6-5',
            detail:JCBLSCORE+'/game/detail/415'
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
        },
        2:{
            topScore:3,
            topTeam:'一橋A',
            bottomScore:1,
            bottomTeam:'世田谷',
            twVideos:[
                '1166564452986163201',
                '1167051831962300416',
                '1167055194024071175',
                '1167056890053812225',
                '1167060920003989505',
                '1167064762166865922',
                '1167066965132767236',
                '1167067547310551040',
                '1167070415417536512',
                '1167070592647872512',
                '1167072217466724352',
                '1167073374515806208',
                '1167073821616001026',
                '1167076640322572288',
                '1167076822040756224',
                '1167077051645353990'
            ]
        }
    },
    'b':{
        name:'予選Bリーグ',
        1:{
            topScore:3,
            topTeam:'明治',
            bottomScore:2,
            bottomTeam:'蓋世',
            twVideos:[
                '1166498976968798208'
            ] 
        },
        2:{
            topScore:5,
            topTeam:'明治',
            bottomScore:4,
            bottomTeam:'理科大',
            twVideos:[
                '1163112585513844737'
            ] 
        },
        4:{
            topScore:18,
            topTeam:'蓋世',
            bottomScore:3,
            bottomTeam:'理科大',
            twVideos:[
                '1164356370419736576'
            ] 
        },
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
                '1164130375460782080'
            ]
        },
        2:{
            topScore:15,
            topTeam:'関西連合',
            bottomScore:0,
            bottomTeam:'蓋鯱',
            twVideos:[
                '1165534581887393792',
                '1165239407802081280'
            ]
        },
        5:{
            topScore:14,
            topTeam:'北大',
            bottomScore:0,
            bottomTeam:'神奈総',
            twVideos:[
                '1163108884300480514'
            ]
        }
    },
    'd':{
        name:'予選Cリーグ',
        5:{
            topScore:15,
            topTeam:'横国B',
            bottomScore:0,
            bottomTeam:'一橋B',
            twVideos:[
                '1170359955930505216'
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
        },
        3:{
            topScore:10,
            topTeam:'蓋世',
            bottomScore:2,
            bottomTeam:'蓋鯱',
            twVideos:[
                '1164802118676439040',
                '1164598486345498624',
                '1164386798639833088'
            ]
        },
        6:{
            topScore:0,
            topTeam:'横国A',
            bottomScore:5,
            bottomTeam:'関西連合',
            twVideos:[
                '1164790289896095744',
                '1163760987830308864'
            ]
        }
    },
    'quaterfinals':{
        name:'準々決勝',
        2:{
            topScore:5,
            topTeam:'蓋世',
            bottomScore:8,
            bottomTeam:'京大',
            twVideos:[
                '1164365427079692288'
            ]
        }
        
    },
    'semifinals':{
        name:'準決勝',
        1:{
            topScore:7,
            topTeam:'明治',
            bottomScore:3,
            bottomTeam:'京大',
            twVideos:[
                //'1166711994746982402',
                '1166771175516540928'
            ]
        }
        
    }
}