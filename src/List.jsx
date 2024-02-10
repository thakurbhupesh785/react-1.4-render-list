import PropTypes from 'prop-types'

function List (props) {
  
// sorted acc to name 
 // fruits.sort((a,b) =>a.name.localeCompare(b.name));

 // reverse order
 //fruits.sort((a,b) =>b.name.localeCompare(a.name));

 //fruits.sort((a,b) =>a.calories - b.calories); //ascending

 //fruits.sort((a,b) =>b.calories - a.calories); //descending

// const lowCal = fruits.filter((fruit) => fruit.calories< 100);

// const highCal = fruits.filter((fruit) => fruit.calories>= 100);

const category = props.category;
const itemList = props.items;

  const listItems =itemList.map(item => <li key = {item.name}>
                                          {item.name}:&nbsp;
                                         <b>{item.calories}</b></li>)

  return(
  <>
  <h3 className="list-category">{category}</h3>
  <ol className="list-items">{listItems}</ol>
  </>)
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf[PropTypes.shape({id:PropTypes.number,
                                            name: PropTypes.string,
                                            category: PropTypes.string})]
}

List.defaultProps = {
  category: 'category',
  items : [],
}

export default List