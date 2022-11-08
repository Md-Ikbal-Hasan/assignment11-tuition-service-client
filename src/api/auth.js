export const setAuthToken = (user) => {
    const currentUser = { email: user.email };

    fetch('https://genius-car-server-ten-xi.vercel.app/jwt', {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('tuition-service-token', data.token);
        })
}