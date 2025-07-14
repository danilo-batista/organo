import { useState } from "react";

import { Banner } from "./components/Banner/Banner";
import { InputForm } from "./components/InputForm/InputForm";

import "./styles/App.css";

export function App() {
	const [collaborators, setCollaborators] = useState([]);

	const onAddedNewCollaborator = (collaborator) => {
		console.log(collaborator);
		setCollaborators([...collaborators, collaborator]);
	};

	return (
		<>
			<Banner />
			<InputForm
				onRegisteredCollaborators={(collaborator) =>
					onAddedNewCollaborator(collaborator)
				}
			/>
		</>
	);
}
