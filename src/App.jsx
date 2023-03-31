import {Route, Switch} from "react-router-dom"
import {StudentCardPage} from "./pages/StudentCardPage"
import {EditStudentPage} from "./pages/EditStudentPage"

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={StudentCardPage}/>
        <Route path="/edit" exact render={() => <EditStudentPage mode="edit"/>}/>
        <Route path="/create" exact render={() => <EditStudentPage mode="create"/>}/>
      </Switch>
    </>
  )
}

export default App
