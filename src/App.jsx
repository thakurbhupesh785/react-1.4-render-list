// condition rendering - allows you to control what get rendered in your application based on certain conditions
// eg- show,hide or change components

import List from "./List.jsx"


function App() {

  const fruits = [{id:1 ,name:'apple', calories: 50},
                 {id:2 ,name:'orange', calories: 45},
                 {id:3 ,name:'banana', calories:100},
                 {id:4 ,name:'coconut', calories: 150},
                 {id:5 ,name:'kiwi' , calories: 80}];

 const vegetables = [{id:6 ,name:'potatoes', calories: 110},
                 {id:7 ,name:'celery', calories: 15},
                 {id:8 ,name:'carrots', calories:25},
                 {id:9 ,name:'corn', calories: 63},
                 {id:10 ,name:'brocolli' , calories: 50}];               
  
  return(
    <>
    {fruits.length > 0 && <List  items={fruits} category="fruits"/> }
    {fruits.length > 0 && <List  items={vegetables} category="vegetables"/> }
    

    </>
  )
 
}

export default App
