const newTransactionDummyData = [
    {
        AccountName: "Current Account",
        BankBalance: 'XXXXX',
        transactionamount : 15000,
        transactiondate: "12 Aug 2022, 03:55pm",
        PaymentType: {
            Id: 1,
            Name: "Bank to Wallet Transfer",
        },
        senderDetails: {
            sender: "Saurabh Sharma",
            bank : "SBI",
            IFSC: "SBIN016095",
            accountno: "xxxxxxxxx5736",
            transactiondate: "12 Aug 2022, 03:55pm",
        },
        receiverDetails: {
            receiver: "Saureeeeeabh Sharma",
            wallet : "Growpital Wallet",
            referenceno: "DBTR / 222201998174",
            transactiondate : "12 Aug 2022, 03:55pm",
        },
        paymentmethod: "UPI",
        transactionID: "DBTR / 222201998174",
    }
];

export default newTransactionDummyData;