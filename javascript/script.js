function getChartTypes() {
    const uppercase = document.querySelector('#include_uppercase').checked;
    const lowercase = document.querySelector('#include_lowercase').checked;
    const number = document.querySelector('#include_number').checked;
    const specialcharacter = document.querySelector('#include_special_character').checked;

    let chartTypes = '';

    if (uppercase) chartTypes += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) chartTypes += 'abcdefghijklmnopqrstuvwxyz';
    if (number) chartTypes += '0123456789';
    if (specialcharacter) chartTypes += '!@$%&*()=+{}[]/?;:.';

    return chartTypes;
}

function generatePassword() {
    const passwordLength = parseInt(document.querySelector('#size').value) || 12;
    const chartTypes = getChartTypes();

    if (!chartTypes) {
        alert('Selecione ao menos um tipo de caractere!');
        return '';
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chartTypes.length);
        password += chartTypes[randomIndex];
    }

    return password;
}

document.querySelector('#generate').addEventListener('click', () => {
    const password = generatePassword();
    document.querySelector('#password').textContent = password;
});

document.querySelector('#copy').addEventListener('click', () => {
    const passwordText = document.querySelector('#password').textContent;
    if (!passwordText) return;
    navigator.clipboard.writeText(passwordText).then(() => {
        alert('Senha copiada!');
    });
});
