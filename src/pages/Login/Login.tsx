import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchAPI } from "../../utils/helper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './_login.scss';
import Alert from "@mui/material/Alert";
import {Employee} from '../../fakeData/dummyEmplyeeData';
import Typography from "@mui/material/Typography";

// dummy data for client side
const EMPLOYEES = Employee;

const Login: React.FC<{}> = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [error, setError] = useState(false);
    const history = useHistory();

    const callbackHandler = (response: any) => {
        if (response && response.status == 'Success') {
            localStorage.setItem("isAuthenticated", "true");
            // Storing userdetails in localstorage
            localStorage.setItem('user', JSON.stringify(response.data));
            history.push("/home");

        } else {
            setError(true);
        }
    }

    const submitHandler = (event: any) => {
        event.preventDefault();
        try {
            // Backend integration
            // fetchAPI('login', "POST", {employeeId: employeeId}, callbackHandler);
            const index = EMPLOYEES.findIndex((EMPLOYEES) => employeeId === EMPLOYEES.employeeId);
            if (index > -1) {
                const response = { status: 'Success', data:  EMPLOYEES[index]}
                callbackHandler(response);
            } else {
                const response = { status: 'Failed'}
                callbackHandler(response);
            }
        } catch (error) {
            throw error;
        }
    }

    const updateEmployeeId = (value: any) => {
        setError(false);
        setEmployeeId(value);
    }

    return (
        <div className="hc__login__container">
            <div className="hc__login__content">
                <div className="hc__login__header">
                    <Typography variant="h5" component="h2">
                        Hack Idea
                    </Typography>
                    
                </div>
                <Typography variant="h6" component="h3">
                    Login with Employee Id
                </Typography>
                {error && <Alert severity="error">Please ener valid Employee Id</Alert>}
                <form className="hc__login__formcontrol">
                    <TextField
                        label="Employee Id" 
                        variant="outlined" 
                        value={employeeId} 
                        onChange={(e:any) => updateEmployeeId(e.target.value)}
                    />
                    <Button 
                        disabled={!employeeId}
                        variant="contained"
                        onClick={(e) => submitHandler(e)}>
                        Login
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login;