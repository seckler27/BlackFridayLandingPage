const emailForm = document.getElementById('email-form');
emailForm.addEventListener('submit', (event) => {
    let name = document.getElementById('name-box').value;
    let email = document.getElementById('email-box').value;      
        const data = {
            email,
            name
        } 
        let dataArray = JSON.parse(localStorage.getItem('lead')) || [];
        dataArray.push(data);
        let convertedData = JSON.stringify(dataArray);
        localStorage.setItem('lead', convertedData);
        alert('Cadastro efetuado com sucesso!');
    }
);










