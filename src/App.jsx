import styles from "./styles";
import {Todo} from "./Components";
function App() {

    return (
        <div className={`${styles.padding} flex-col bg-bgLight h-[100vh]`}>
            <Todo/>
        </div>
)
}

export default App
