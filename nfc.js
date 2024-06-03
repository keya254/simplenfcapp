const { NFC } = require('nfc-pcsc');

const nfc = new NFC(); // Create an instance of NFC

nfc.on('reader', reader => {
    console.log(`${reader.reader.name} device attached`);

    reader.on('card', card => {
        console.log(`Card detected: ${card.uid}`);
    });

    reader.on('error', err => {
        console.error(`An error occurred: ${err.message}`);
    });

    reader.on('end', () => {
        console.log(`${reader.reader.name} device removed`);
    });
});

nfc.on('error', err => {
    console.error(`An error occurred: ${err.message}`);
});
