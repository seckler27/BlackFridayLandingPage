const emailForm = document.getElementById('email-form');
emailForm.addEventListener('submit', (event) => {
    let name = document.getElementById('name-box').value;
    let email = document.getElementById('email-box').value;      
        const data = {
            email,
            name
        } 
        let convertedData = JSON.stringify(data);
        localStorage.setItem('lead', convertedData);
        alert('Cadastro efetuado com sucesso!');
    }
);









