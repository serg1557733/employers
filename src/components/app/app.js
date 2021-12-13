
import { Component } from 'react';
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';


class App extends Component {
    constructor(props){
        super(props);
    this.state = { 
        data : [
                {name: 'Sergey Stepanov', salary: 800, increase: true, rise: false, id:1},
                {name:'Ivan Martinov', salary: 1500, increase: false, rise: true, id:2},
                {name:'Dima Rasolnik', salary: 2500, increase: false, rise: false, id:3},
            ],
        term: ''    
        }
    this.maxId = 4;
    }   

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data : data.filter(item => item.id !== id)
            }
            
        });
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    
    onToggleIncrease = (id) => {
        this.setState(({data})=> ({
            data: data.map(item => {
                if (item.id === id) {
                    return {
                        ...item, increase: !item.increase
                    }
                }
                return item;
            })
        }))
    
   /*      this.setState(({data})=> {
            const index = data.findIndex(el => el.id ===id);

            const old = data[index];
            const newItem = {...old, increase: !old.increase};
            const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArray
            }
        }); */

    }

    onToggleProp = (id, prop) => {
        this.setState(({data})=> ({
            data: data.map(item => {
                if (item.id === id) {
                    return {
                        ...item, [prop]: !item[prop]
                    }
                }
                return item;
            })
        }))
    }





    render() {
            return (
                        <div className="app">
                            <AppInfo  data={this.state.data}/>

                            <div className="search-panel">
                                <SearchPanel/>
                                <AppFilter/>
                            </div>

                            <EmployersList 
                                data={this.state.data}
                                onDelete={this.deleteItem}
                                
                                onToggleProp = {this.onToggleProp}
                                />
                            <EmployersAddForm 
                                onAddItem={this.addItem}/>
                        </div>
                    );
            }
    
}

export default App;