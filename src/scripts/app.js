const emailForm = document.getElementById('email-form');
emailForm.addEventListener('submit', (event) => {
    const name = document.getElementById('name-box').value;
    const email = document.getElementById('email-box').value;
    const data = {
        email,
        name
    }
       const convertedData = JSON.stringify(data);
    localStorage.setItem('lead', convertedData);
    alert('Cadastro efetuado com sucesso! Muito obrigado!');
}
);