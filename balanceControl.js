function processTopUp() {
    var amount = document.getElementById('topUpAmount').value;
    var currency = document.getElementById('currency').value;
    var method = document.getElementById('topUpMethod').value;
    alert('You topped up ' + amount + ' ' + currency + ' via ' + method); //это заглушка
    document.getElementById('topUpForm').style.display = 'none';
}
