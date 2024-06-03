// объект с переводами
const translations = {
    'en': {
        'welcomeMsg': 'Welcome to VPN SKY! Choose your perfect VPN plan.',
        'balance': 'Your Balance:',
        'topUp': 'Top Up'
    },
    'ru': {
        'welcomeMsg': 'Добро пожаловать в VPN SKY! Выберите идеальный план VPN.',
        'balance': 'Ваш баланс:',
        'topUp': 'Пополнить'
    }
};

// функция смены языка
function changeLanguage() {
    const selectedLanguage = document.getElementById('language-select').value;
    document.getElementById('welcomeMsg').innerText = translations[selectedLanguage]['welcomeMsg'];
    document.getElementById('balanceLabel').innerText = translations[selectedLanguage]['balance'];
    document.getElementById('topUpButton').innerText = translations[selectedLanguage]['topUp'];
}

// функция отображения формы пополнения
function topUp() {
    document.getElementById('topUpForm').style.display = 'block';
}

// функция обработки пополнения баланса
function processTopUp() {
    var amount = document.getElementById('topUpAmount').value;
    var currency = document.getElementById('currency').value;
    alert('You topped up ' + amount + ' ' + currency); // Заглушка
    document.getElementById('topUpForm').style.display = 'none';
}

// добавление обработчиков событий при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('language-select').addEventListener('change', changeLanguage);
});
