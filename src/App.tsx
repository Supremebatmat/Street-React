import "./App.css";
import Ryu from "./components/Ryu/ryu";


function App() {
	return (
		<div className="pageEntiere"><header>
			<h1>Street Fighter</h1>
			<h2>Choose your character</h2>	
		</header>

			<body>
				
				<Ryu />
				
			</body>
		</div>
	);
}

export default App;
