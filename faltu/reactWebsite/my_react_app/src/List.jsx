function List(){
    const fruits = [{name:"apple",calories:25},
        {name:"banana",calories:22},
        {name:"coconut",calories:33},
        {name:"orange",calories:35},
        {name:"Guava",calories:330}]
    const listItems = fruits.map(fruit => <li kye={fruit.name
        
    }>{fruit.name} == {fruit.calories}</li>)
    return(
        <ol>
            {listItems}
        </ol>
    );
}

export default List;