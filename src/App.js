import './App.css';
import Main from './layout/Main';
import NowPlaying from './layout/NowPlaying';
import Sidebar from './layout/Sidebar';

function App() {
	return (
		<div className="h-screen bg-black p-2 text-white">
			<div className="h-full grid grid-rows-layout grid-cols-layout gap-2">
				<Sidebar />
				<Main />
				<NowPlaying />
			</div>
		</div>
	);
}

export default App;
