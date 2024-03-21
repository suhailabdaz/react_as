import { createContext } from "react";


const userContext=createContext({
    userName:"guest",
    userId:"no id",
})

export default userContext 