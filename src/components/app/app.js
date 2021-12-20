
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
            { name: 'Ivan Petrov', salary: 2500, increase: false, rise: false, id: 1},
            { name: 'Serg Ivanov', salary: 7500, increase: false, rise: false, id: 2},
            { name: 'Max Korj', salary: 500, increase: false, rise: false, id: 3},
            { name: 'Vlad Raskov', salary: 200, increase: false, rise: false, id: 4},
            { name: 'Semen Danko', salary: 1500, increase: false, rise: false, id: 5},  
            ],
        term: '',
        filter: 'all'    
        }
    this.maxId = 4;
    } 
    
   /*  getData = ({data}) => {
       this.setState(({data}) => {
       fetch('https://jsonplaceholder.typicode.com/users').then(items => items.json()).then(res => res.map((item, i) => ({data: data.push(item), maxId: i}) ))
        }) 
    } */
    
        


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
searchEmp = (items, term) => {
    if(term.length === 0){
        return items;
    } 
    return items.filter(item => {
        return  item.name.indexOf(term) > -1
    })

}


onUpdateSearch = (term) => {
    this.setState({term});
}

filterPost = (items, filter) => {
    switch(filter){
        case 'salary':
         return items.filter(item => item.salary > 1000);
        case 'rise': 
            return items.filter(item => item.increase);
        default:
            return items;
    }
}

onFilterSelect = (filter) => {
    this.setState({filter});
}


    render() {
        const {data, term, filter} = this.state;
        const visibleData =this.filterPost(this.searchEmp(data, term), filter) ;
        //this.getData({data});
            return (
                        <div className="app">
                            <AppInfo  data={this.state.data}/>

                            <div className="search-panel">
                                <SearchPanel onUpdateSearch = {this.onUpdateSearch} />
                                <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                            </div>

                            <EmployersList 
                                data={visibleData}
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