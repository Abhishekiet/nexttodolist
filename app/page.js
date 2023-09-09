'use client'

import Container from "@/app/Components/Container"
import AddTask from "./Components/AddTask"
import { useSession} from "next-auth/react" 

const App=()=>{

  //const session = useSession()

  return(
    <div className="mt-32">
      <AddTask />
      <Container />
    </div>
  )
}

export default App