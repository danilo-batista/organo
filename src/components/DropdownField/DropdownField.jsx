import './DropdownField.css';

export function DropdownField(props) {

    console.log(props.items);
    return (
        <article className='dropdownField'>
            <label className='dropdownField__label' htmlFor={props.label}>{props.label}</label>
            <select className='dropdownField__select' required={props.required} id={props.label}>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </article>
    )
}