import PropTypes from 'prop-types';

function List({category="Category", item = []}){


    const listItems = item.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>)
    
    return(
        <>
            <h3 className='list-category'>{category}</h3>
            <ol className='list-items'>{listItems}</ol>
        </>
    );
};

List.propTypes = {
    category: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name: PropTypes.string,
                                            calories: PropTypes.number})),
    
};
export default List;