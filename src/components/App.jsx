import useBodyHidden from "@/hooks/useBodyHidden";
import AppRouter from "./AppRouter"



function App() {
	
	useBodyHidden();

	return <AppRouter/>
}

export default App
