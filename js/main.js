import transactionData from './data.js';

let continueBtn = document.getElementById('continue-transaction');
let popupClose = document.getElementById('popup-dialog-close');
let popupBg = document.getElementById('blur-popup-bg');
let popup = document.getElementById('popup-dialog');
let data = transactionData[0];

const processTransaction = () => {
    popupBg.style.display = "flex";

    // data
    document.getElementById('transaction-amount').innerText = `₹${data.transactionamount}`;
    document.getElementById('transaction-date').innerText = `₹${data.transactiondate}`;

    // sender details
    document.getElementById('sender-name').innerText = data.senderDetails.sender;
    document.getElementById('sender-bank-details').innerText = `${data.senderDetails.bank}, ${data.senderDetails.IFSC}`;
    document.getElementById('sender-acc_no').innerText = `A/C No. ${data.senderDetails.accountno}`;
    document.getElementById('sender-transaction-date').innerText = data.senderDetails.transactiondate;
    document.getElementById('sender-icon').innerText = `${data.senderDetails.sender.charAt(0)}${data.senderDetails.sender.charAt(data.senderDetails.sender.search({ }) + 3)}`;

    // receiver details
    document.getElementById('receiver-name').innerText = data.receiverDetails.receiver;
    document.getElementById('receiver-wallet').innerText = data.receiverDetails.wallet;
    document.getElementById('receiver-ref').innerText = `Ref No. ${data.receiverDetails.referenceno}`;
    document.getElementById('receiver-transaction-date').innerText = data.receiverDetails.transactiondate;

    // transaction method and id
    document.getElementById('transaction-method').innerText = data.paymentmethod
    document.getElementById('transaction-id').innerText = data.transactionID


    popup.style.visibility = 'visible';
    popup.style.transform = 'translate(0px, -50px) scale(1)';
}

const closePopup = () => {
    popup.style.transform = 'translate(0px, -500px) scale(0.1)';
    setTimeout(() => {
        popup.style.visibility = 'hidden';
        popupBg.style.display = "none";
    }, 150);
}


continueBtn.addEventListener("click", processTransaction);
popupClose.addEventListener("click", closePopup);