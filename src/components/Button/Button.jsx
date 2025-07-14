import "./Button.css";

export function Button(props) {
	return (
		<button type="submit" className="button">
			{props.children}
		</button>
	);
}
