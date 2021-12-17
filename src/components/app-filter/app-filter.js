import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    constructor(props){
        super(props);
    }
setFilter = (e) => {
    this.props.onSelectFilter(e.target.getAttribute('data-filter'))

}

   render(){
        return (
                <div className="btn-group">
                    <button 
                    className="btn btn-light"
                    type='button'
                    onClick={this.setFilter}
                    data-filter='all'>
                        Все сотрудники
                    </button>
                    <button 
                    className="btn btn-outline-light"
                    type='button' 
                    data-filter='increase'
                    onClick={this.setFilter}>
                        Сотрудники на повышение 
                    </button>
                    <button 
                    className="btn btn-outline-light"
                    data-filter='salary'
                    type='button'
                    onClick={this.setFilter}>
                        Зарплата больше 1000$
                    </button>
                </div>
            );
   } 
}

export default AppFilter;