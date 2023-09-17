const {getNDAPrompt} = require('../GPT/getPrompt.js');

async function nda(req, res) {

    const {creatorName, creatorEmail, creatorCompany, creatorDesignation, creatorAddress} = req.body;
    const {recipientName, recipientEmail, recipientCompany, recipientDesignation, recipientAddress} = req.body;
    var purpose = req.body.purpose;


    var Months = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];
    
    var currentDay = new Date();
    var date = currentDay.getDate();
    var month = Months[currentDay.getMonth()];
    var year = currentDay.getFullYear();

const header = `NON-DISCLOSURE AGREEMENT`
const time = {
    date: date,
    month: month,
    year: year
}
const disclosure = {
    name: creatorName,
    company: creatorCompany,
    post: creatorDesignation,
    address: creatorAddress,
    email: creatorEmail,
}
//need atleast one of the last 4 attributes
let disclosureDetail = disclosure.name;
disclosure.company ? disclosureDetail += `, working at ${disclosure.company}` : ``;
disclosure.post ? disclosureDetail += `, working as ${disclosure.post}` : ``;
disclosure.address ? disclosureDetail += `, residing at ${disclosure.address}` : ``;
disclosureDetail += `, with a mailing address of ${disclosure.email}.`;

const receiver = {
    name: recipientName,
    company: recipientCompany,
    post: recipientDesignation,
    address: recipientAddress,
    email: recipientEmail,
}
//need atleast one of the last 4 attributes
let receiverDetail = receiver.name;
disclosure.company ? receiverDetail += `, working at ${disclosure.company}` : ``;
disclosure.post ? receiverDetail += `, working as ${disclosure.post}` : ``;
disclosure.address ? receiverDetail += `, residing at ${disclosure.address}` : ``;
receiverDetail += `, with a mailing address of ${disclosure.email}.`;

//purpose refactored
//bullet points preffered
var gptPurpose = await getNDAPrompt(purpose, req, res);

gptPurpose = gptPurpose.replace('[disclosureName]', disclosure.name);
gptPurpose = gptPurpose.replace('[receiverName]', receiver.name);

const para = [
    `This Non-Disclosure and Confidentiality Agreement has entered into on the date of ${time.date} of ${time.month}, ${time.year} and is by and between:`,
    ,
    `PARTY DISCLOSING INFORMATION: ${disclosureDetail}`
    ,
    `PARTY RECEIVING INFORMATION: ${receiverDetail}`
    ,
    `For the purpose of preventing the unauthorized disclosure of Confidential Information as defined below. The parties agree to enter into a confidential relationship concerning the disclosure of certain proprietary and confidential information ("Confidential Information").`
    ,
    gptPurpose
    ,
    `DISCLOSING PARTY`
    ,
    `\n\nSignature:`
    ,
    disclosure.name
    ,
    time.date + ' of ' + time.month + ', ' + time.year
    ,
    '\n'
    ,
    `RECEIVING PARTY`
    ,
    `\n\nSignature:`
    ,
    receiver.name
    ,
    time.date + ' of ' + time.month + ', ' + time.year
]

console.log(para);
return para;

}

module.exports = {nda};