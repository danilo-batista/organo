import "./DropdownField.css";

export function DropdownField(props) {
	return (
		<article className="dropdownField">
			<label className="dropdownField__label" htmlFor={props.label}>
				{props.label}
			</label>
			<select
				className="dropdownField__select"
				required={props.required}
				id={props.label}
				value={props.value}
				onChange={(event) => props.onModified(event.target.value)}
			>
				{props.items.map((item) => {
					return <option key={item}>{item}</option>;
				})}
			</select>
		</article>
	);
}
