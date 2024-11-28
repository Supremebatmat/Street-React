import "./ryu.css";
import CompteurAvecImage from '../Hadoken/hadoken';
function Ryu() {
	return (
		<article>
			<div className="container">
				<img className="ryu" src="src\image\Ryugif.gif" alt="Ryu" />
			</div>
			<div className="hadoken">
				<CompteurAvecImage/>
			</div>
		</article>
	);
}

export default Ryu;
