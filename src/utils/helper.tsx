export const fetchAPI = (endpoint:string, method:string, payload:object, callback:Function) => {
    const headers =  { 'Content-Type': 'application/json' };
    const body = JSON.stringify(payload);

    let options:any = {
        method: method,
        headers: headers
    }

    if (method == 'POST') {
        options.body = body;
    }

    fetch(`http://localhost:4000/${endpoint}`, options)
    .then((res) => res.json())
    .then((data) => {
        callback(data)
    })
    .catch(error => {
        throw error;
    });
}

export const updateLocalStorageAuth = (authValue: string, userDetails: any) => {
    localStorage.setItem("isAuthenticated", authValue);
    localStorage.setItem('user', JSON.stringify(userDetails));
}

export const getUserDetails = () => {
    return JSON.parse(localStorage.getItem('user') || '{}');
}