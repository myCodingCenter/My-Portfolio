function List(){
    const fruits = [{name:"apple",calories:25},
        {name:"banana",calories:22},
        {name:"coconut",calories:33},
        {name:"orange",calories:35},
        {name:"Guava",calories:330}]
    // fruits.sort((a,b) => a.name.localeCompare(b.name)) // Alphabetically
    // fruits.sort((a,b) => b.name.localeCompare(a.name)) // Reverse Alphabetically
    // fruits.sort((a,b)=> a.calories - b.calories) // numeric
    fruits.sort((a,b)=> b.calories - a.calories) // numeric
    // const lowCal = fruits.filter(fruit => fruit.calories < 100)
    const lowCal = fruits.filter(fruit => fruit.calories > 100)

    // const listItems = fruits.map(fruit => <li kye={fruit.name
    const listItems = lowCal.map(fruit => <li kye={fruit.name

        
    }>{fruit.name} == {fruit.calories}</li>)
    return(
        <ol>
            {listItems}
        </ol>
    );
}

export default List;