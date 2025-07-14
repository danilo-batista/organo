import { useState } from "react";

import { Button } from "../Button/Button";
import { DropdownField } from "../DropdownField/DropdownField";
import { TextField } from "../TextField/TextField";

import "./InputForm.css";

export function InputForm(props) {
	const [name, setName] = useState("");
	const [role, setRole] = useState("");
	const [image, setImage] = useState("");
	const [team, setTeam] = useState("");

	const teams = [
		"Programação",
		"Front-end",
		"Data Science",
		"DevOps",
		"UX e Design",
		"Mobile",
		"Inovação e Gestão",
	];

	const onSave = (event) => {
		event.preventDefault();
		props.onRegisteredCollaborators({
			name: name,
			role: role,
			image: image,
			team: team,
		});
	};

	return (
		<section className="inputForm">
			<form className="inputForm__form" onSubmit={onSave}>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<TextField
					required={true}
					label="Nome"
					placeholder="Digite o seu "
					value={name}
					onModified={(value) => setName(value)}
				/>
				<TextField
					required={true}
					label="Cargo"
					placeholder="Digite o seu "
					value={role}
					onModified={(value) => setRole(value)}
				/>
				<TextField
					label="Imagem"
					placeholder="Informe o endereço da "
					value={image}
					onModified={(value) => setImage(value)}
				/>
				<DropdownField
					required={true}
					label="Time"
					items={teams}
					value={team}
					onModified={(value) => setTeam(value)}
				/>
				<Button>Criar Card</Button>
			</form>
		</section>
	);
}
