import React from 'react'
import { team_data, team_columns } from './Data';
import Table from './Table'

export default class Summary extends React.Component{
    render(){
        return(
            <div
                style={{
                    padding:10
                }}
            >
                <h3>
                    第1回キャップ野球全国大会
                </h3>
                <h4>～桜咲く佐倉蓋ざんまい～</h4>
                <div
                    style={{
                        padding:10
                    }}
                >
                    <dl>
                        <dt>主催</dt>
                            <dd>
                                一橋大学キャップ投げ倶楽部
                            </dd>
                        <dt>開催日時</dt>
                        <dd>2019年08月17日(土)、18日(日)</dd>
                        <dt>場所</dt>
                        <dd>
                            <a href="http://shimintaiikukan.shiteikanri-sakura.jp/top.html">
                                佐倉市民体育館
                            </a>
                        </dd>
                        <dt>
                            参加チーム一覧
                        </dt>
                        <div>
                            <Table columns={team_columns} 
                                keyField={'name'}
                                data={team_data}/>
                        </div>
                    </dl>
                </div>
                
            </div>
        )
    }
}