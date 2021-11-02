import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import './_header.scss';

const menuItems = [
    {label: 'All Challenges'},
    {label: 'Submitted By Me'}
]

interface IHeaderProps {
    user: { name: string, employeeId: string }
}

const Header: React.FC<IHeaderProps> = ({user}) => {
    return (
        // <header className="hackidea__header">
        //     <Navigation menuItems={menuItems} />
        // </header>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Hack Idea App
                </Typography>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {user.name}
                </Typography>

            </Toolbar>
        </AppBar>
    )
}

export default Header;