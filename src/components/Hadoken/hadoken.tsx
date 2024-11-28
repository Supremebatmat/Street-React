import { useState } from "react";
import "./hadoken.css";

const CompteurAvecImage = () => {
	// Déclarer l'état pour le compteur
	const [count, setCount] = useState(0);

	// Gérer le clic sur le bouton
	const handleClick = () => {
		setCount(count + 1); // Incrémenter le compteur
		alert("Hadoken !");
	};

	return (
		<div style={{ textAlign: "center", marginTop: "20px" }}>
			<p>Nombre de Hadoken : {count}</p>
			<button type="button" onClick={handleClick} className="button">
				<img
					src="src\image\Hadoken.jpg"
					alt="Hadoken button"
					className="image"
				/>
			</button>
		</div>
	);
};

export default CompteurAvecImage;
