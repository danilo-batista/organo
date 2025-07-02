import './TextField.css';

let value = 'Danilo Batista';

const onType = (event) => {
    value = event.target.value;
    console.log(value);
}

export function TextField(props) {
    return (
        <article className='textField'>
            <label className='textField__label' htmlFor={props.label}>{props.label}</label>
            <input className='textField__input' onChange={onType} required={props.required} type="text" id={props.label} placeholder={props.placeholder + props.label} />
        </article>
    )
}