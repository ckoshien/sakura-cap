import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';

class Table extends React.Component{
    render(){
        //if (store.getState().isloadData) {
            let columns=[]
            for(let i = 0 ; i < this.props.columns.length; i++){
                let element = Object.assign({},this.props.columns[i])
                columns.push(element)
            }
            //let columns = Object.assign([], this.props.columns);
            //let columns = [].concat(this.props.columns)
            
            for(let j = 0 ; j < columns.length;j++){
                if(this.props.important !== undefined
                    && columns[j].dataField === this.props.important){
                    columns[j].classes = 'important'
                    //console.log(j,this.props.important)
                    break;
                }
            }
            return (
            <div 
                style={{
                    margin:10
                }}>
                <div className='col s12 scroll'
                    id={this.props.id}
                >
                    <BootstrapTable keyField={this.props.keyField}
                        data={this.props.data}
                        columns={columns}
                        ref="table"
                        />
                </div>
            </div>
            )
        }
    
}
export default Table;

