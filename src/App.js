import './App.css';
import Card from './components/UI/Card/Card';

function App() {
	return (
		<div className="h-screen bg-black p-2 text-white">
			<div className="h-full grid grid-rows-layout grid-cols-layout gap-2">
				<Card>
					Sidebar
				</Card>
				<Card>
					Main
				</Card>
				<div className="col-span-2">
					Now Playing
				</div>
			</div>
		</div>
	);
}

export default App;
