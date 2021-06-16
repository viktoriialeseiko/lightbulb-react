
// import './List.css'
import ListItem from "./ListItem";

function List(props) {
    return(
        <ul>
            {props.data.map(item => {
                return <ListItem task={item.name} />
            })}
        </ul>
    )
}

export default List;