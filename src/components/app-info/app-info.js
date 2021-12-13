import './app-info.css';


const AppInfo = ({data}) => {
    console.log(data.filter(item => item.increase).length);
    return (
        <div className="app-info">
            <h1>Учет сотрудников компании</h1>
            <h2>Общее количество сотрудников: {data.length} </h2>
            <h2>Премию получат:  {data.filter(item => item.increase).length}</h2>
        </div>
    );
}

export default AppInfo;