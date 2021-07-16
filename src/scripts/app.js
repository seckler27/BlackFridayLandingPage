const emailForm = document.getElementById('email-form');
emailForm.addEventListener('submit', (event) => {
    const name = document.getElementById('name-box').value;
    const email = document.getElementById('email-box').value;      
        const data = {
            email,
            name
        } 
        const dataArray = JSON.parse(localStorage.getItem('lead')) || [];
        dataArray.push(data);
        const convertedData = JSON.stringify(dataArray);
        localStorage.setItem('lead', convertedData);    
        alert('Cadastro efetuado com sucesso! Muito obrigado!');
    }
);











