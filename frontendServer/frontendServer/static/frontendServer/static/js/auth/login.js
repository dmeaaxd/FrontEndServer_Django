document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    axios.post(serverURL + '/users/graphql', {
        query: `
            mutation {
                tokenAuth(username: "${username}", password: "${password}") {
                    success
                    token
                }
            }
        `
    })
        .then(function (response) {
            const data = response.data.data.tokenAuth;
            if (data.success) {
                const token = data.token;
                sessionStorage.setItem('token', token);

                window.location.replace('main');


            } else {
                document.getElementById('error').textContent = 'Ошибка авторизации';
                document.getElementById('error').style.display = 'block';
            }
        })
        .catch(function (error) {
            console.error(error);
        });
});