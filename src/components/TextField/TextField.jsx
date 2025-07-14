import "./TextField.css";

export function TextField(props) {
	const onType = (event) => {
		props.onModified(event.target.value);
	};

	return (
		<article className="textField">
			<label className="textField__label" htmlFor={props.label}>
				{props.label}
			</label>
			<input
				className="textField__input"
				onChange={onType}
				value={props.value}
				required={props.required}
				type="text"
				id={props.label}
				placeholder={props.placeholder + props.label}
			/>
		</article>
	);
}
