import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useHistory } from "react-router-dom";
import { updateLocalStorageAuth } from "../../utils/helper";
import './_header.scss';

const Header: React.FC<{}> = () => {
    const history = useHistory();
    const handleLogout = () => {
        updateLocalStorageAuth("false", {});
        history.push("/login");
    }
    
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Hack Idea App
                </Typography>

                <Button color="inherit" onClick={() => handleLogout()}>Logout</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;