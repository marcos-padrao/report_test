import './style.css';

export function List(props) {
    return (
        <div className = "lists">

            <strong className='visao' id = "item1">[ {props.host} ] :</strong>

            <strong className='visao' id = "item2">[ {props.port} ]</strong>

            <strong className='visao' id = "item3">[ {props.name} ]</strong>

            <small className='visao' id = "item4">{props.time}</small>

        </div>
    )
} 