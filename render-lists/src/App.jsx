import List from "./List.jsx";

function App() {
    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "mango", calories: 47}, 
                    {id: 3, name: "banana", calories: 142}, 
                    {id: 4, name: "orange", calories: 59}, 
                    {id: 5, name: "grapes", calories: 130}, 
                    {id: 6, name: "coconut", calories: 89}];

    const vegetables = [{id: 1, name: "carrot", calories: 95},
                    {id: 2, name: "spinach", calories: 37}, 
                    {id: 3, name: "terere", calories: 12}, 
                    {id: 4, name: "cabbage", calories: 69}, 
                    {id: 5, name: "kunde", calories: 13}, 
                    {id: 6, name: "saga", calories: 87}];
    
    return (
        <>  
            {/* use of short-circuiting */}
            {fruits.length > 0 && <List item={fruits} category="Fruits"/>}
            {vegetables.length > 0 && <List item={vegetables} category="Vegetables"/>}    
        </>
    );
}

export default App