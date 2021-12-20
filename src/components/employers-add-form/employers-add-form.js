import { Component } from 'react';
import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    onValueChange = (e) => {
        this.setState({
         [e.target.name] : e.target.value   
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAddItem(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render () {
        const {name, salary} = this.state;
        const {onAddEmployes} = this.props;
        return (
            <div className="app-add-form">
                <h3>Добавить нового сотрудника</h3>
                <form
                    className="add-form d-flex" onSubmit = {this.onSubmit}>
                        
                    <input 
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Фамилия Имя"
                        onChange={this.onValueChange} 
                        name ='name'
                        value={name}/>
                    <input 
                    type="number"
                        className="form-control new-post-label"
                        placeholder="З/П $?" 
                        onChange={this.onValueChange}
                        name ='salary'
                        value={salary}/>

                    <button 
                        type="submit"
                        className="btn btn-outline-light">
                        
                    Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployersAddForm;