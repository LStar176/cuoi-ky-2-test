import { createContext, useState } from "react";

export const Context = createContext()

function TabContext({ children }) {
    const [todos, setTodos] = useState([
        {
            id: 1,
            task: 'quetnha',
            status: 'active',
            isRemove: false,
        },
        {
            id: 2,
            task: 'ruachen',
            status: 'active',
            isRemove: false,
        },
        {
            id: 3,
            task: 'giatdo',
            status: 'active',
            isRemove: false,
        },
    ])

    return (
        <Context.Provider value={{ todos, setTodos }}>
            {children}
        </Context.Provider>
    )
}
export default TabContext