if(response.status === 201){
    setState(prevState => ({
        ...prevState,
        'successMessage' : 'Registration successful. Redirecting to home page..'
    }))
    localStorage.setItem(login,true)
    
    ;
    redirectToHome();
    props.showError(null)
}