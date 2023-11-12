document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const regUsername = document.getElementById('regUsername').value;
    const regPassword1 = document.getElementById('regPassword1').value;
    const regPassword2 = document.getElementById('regPassword2').value;

    axios.post('http://127.0.0.1:8000/users/graphql', {
        query: `
                mutation {
                    register(username: "${regUsername}", password1: "${regPassword1}", password2: "${regPassword2}") {
                        success
                        errors
                        token
                    }
                }
            `
    })
        .then(function (response) {
            const data = response.data.data.register;
            if (data.success) {
                const token = data.token;
                sessionStorage.setItem('token', token);

                window.location.replace('main');

            } else {
                document.getElementById('error').textContent = 'Ошибка регистрации';
                document.getElementById('error').style.display = 'block';
            }
        })
        .catch(function (error) {
            console.error(error);
        });
});