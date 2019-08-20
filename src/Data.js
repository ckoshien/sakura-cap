export const league_a_data = [
    {
        team_name:'一橋A',
        'vs千葉工大':'○ 24-0',
        'vs奈良大':'○ 13-1',
        'vs世田谷':'○ 3-1',
        win:3,
        lose:0,
        draw:0
    },
    {
        team_name:'奈良大',
        'vs千葉工大':'○ 4-2',
        'vs世田谷':'○ 13-3',
        'vs一橋A':'× 1-13',
        win:2,
        lose:1,
        draw:0
    },
    {
        team_name:'世田谷',
        'vs千葉工大':'○ 19-9',
        'vs奈良大':'× 3-13',
        'vs一橋A':'× 1-3',
        win:1,
        lose:2,
        draw:0
    },
    
    {
        team_name:'千葉工大',
        'vs世田谷':'× 9-19',
        'vs奈良大':'× 2-4',
        'vs一橋A':'× 0-24',
        win:0,
        lose:3,
        draw:0
    }
]

export const league_b_data = [
    {
        team_name:'明治',
        'vs蓋世':'○ 3-2',
        'vs横国A':'○ 6-0',
        'vs理科大':'○ 5-4',
        win:3,
        lose:0,
        draw:0
    },
    {
        team_name:'蓋世',
        'vs横国A':'○ 5-2',
        'vs明治':'× 2-3',
        'vs理科大':'○ 18-3',
        win:2,
        lose:1,
        draw:0
    },
    {
        team_name:'理科大',
        'vs蓋世':'× 3-18',
        'vs明治':'× 4-5',
        'vs横国A':'○ 8-6',
        win:1,
        lose:2,
        draw:0
    },
    {
        team_name:'横国A',
        'vs蓋世':'× 2-5',
        'vs明治':'× 0-6',
        'vs理科大':'× 6-8',
        win:0,
        lose:3,
        draw:0
    },
]

export const league_c_data = [
    {
        team_name:'関西連合',
        'vs蓋鯱':'○ 15-0',
        'vs神奈総':'× 5-9',
        'vs北大':'○ 8-1',
        win:2,
        lose:1,
        draw:0
    },
    {
        team_name:'北大',
        'vs蓋鯱':'○ 7-6',
        'vs神奈総':'○ 14-0',
        'vs関西連合':'× 1-8',
        win:2,
        lose:1,
        draw:0
    },
    {
        team_name:'蓋鯱',
        'vs北大':'× 6-7',
        'vs神奈総':'○ 6-1',
        'vs関西連合':'× 0-15',
        win:1,
        lose:2,
        draw:0
    },
    {
        team_name:'神奈総',
        'vs蓋鯱':'× 1-6',
        'vs北大':'× 0-14',
        'vs関西連合':'○ 9-5',
        win:1,
        lose:2,
        draw:0
    },
    
]

export const league_d_data = [
    {
        team_name:'京大',
        'vs学習院':'○ 8-2',
        'vs一橋B':'○ 15-0',
        'vs横国B':'○ 7-3',
        win:3,
        lose:0,
        draw:0
    },
    
    
    {
        team_name:'横国B',
        'vs学習院':'○ 15-0',
        'vs京大':'× 3-7',
        'vs一橋B':'○ 15-0',
        win:2,
        lose:1,
        draw:0
    },
    {
        team_name:'学習院',
        'vs一橋B':'○ 6-5',
        'vs京大':'× 2-8',
        'vs横国B':'× 0-15',
        win:1,
        lose:2,
        draw:0
    },

    {
        team_name:'一橋B',
        'vs学習院':'x 5-6',
        'vs京大':'× 0-15',
        'vs横国B':'× 0-15',
        win:0,
        lose:3,
        draw:0
    },
    
]

export const league_a_columns = [
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
        text:'vs一橋A',
        dataField:'vs一橋A',
        //formatter:vsFormatter
    },
    {
        text:'vs奈良大',
        dataField:'vs奈良大'
    },
    {
        text:'vs世田谷',
        dataField:'vs世田谷'
    },
    {
        text:'vs千葉工大',
        dataField:'vs千葉工大'
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
        dataField:'vs明治'
    },
    {
        text:'vs蓋世',
        dataField:'vs蓋世'
    },
    {
        text:'vs理科大',
        dataField:'vs理科大',
    },
    {
        text:'vs横国A',
        dataField:'vs横国A'
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
        dataField:'vs関西連合'
    },
    {
        text:'vs北大',
        dataField:'vs北大'
    },
    {
        text:'vs蓋鯱',
        dataField:'vs蓋鯱'
    },
    {
        text:'vs神奈総',
        dataField:'vs神奈総'
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
        dataField:'vs京大'
    },
    
    {
        text:'vs横国B',
        dataField:'vs横国B'
    },
    {
        text:'vs学習院',
        dataField:'vs学習院'
    },
    {
        text:'vs一橋B',
        dataField:'vs一橋B'
    },
]