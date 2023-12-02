import { Button, Divider } from "@mui/material"
// import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"


const Tabs = () => {
    const [tabValue, setTabValue] = useState('1')
    function handleChange(e) {
        setTabValue(e.target.value)
    }
    return (
        <>
            <Button variant="text">All</Button>
            <Divider></Divider>
        </>
    )
}

export default Tabs