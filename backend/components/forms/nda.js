async function nda(req, res) {
	const dateOfCreation= req.body.dateOfCreation;
	const creatorName= req.body.creatorName;
	const creatorAddress = req.body.creatorAddress;
	const recipientName = req.body.recipientName;
	const purposeOfDisclosure = req.body.purposeOfDisclosure;
	const startDate = req.body.startDate;
	const endDate = req.body.endDate;
	const name = req.body.name;
	const jobTitle = req.body.jobTitle;
	const signature = req.body.signature;
}

module.exports = {nda};

const header = `NON-DISCLOSURE AGREEMENT`
const time = {
    date: ``,
    month: ``,
    year: ``
}
const disclosure = {
    name: ``,
    company: ``,
    post: ``,
    address: ``,
    email: ``,
}
//need atleast one of the last 4 attributes
const disclosureDetail = disclosure.name;
disclosure.company ? disclosureDetail += `, working at ${disclosure.company}` : ``;
disclosure.post ? disclosureDetail += `, working as ${disclosure.post}` : ``;
disclosure.address ? disclosureDetail += `, residing at ${disclosure.address}` : ``;
disclosure.email ? disclosureDetail += `, with a mailing address of ${disclosure.email}` : ``;

const receiver = {
    name: ``,
    company: ``,
    post: ``,
    address: ``,
    email: ``,
}
//need atleast one of the last 4 attributes
const receiverDetail = receiver.name;
disclosure.company ? receiverDetail += `, working at ${disclosure.company}` : ``;
disclosure.post ? receiverDetail += `, working as ${disclosure.post}` : ``;
disclosure.address ? receiverDetail += `, residing at ${disclosure.address}` : ``;
disclosure.email ? receiverDetail += `, with a mailing address of ${disclosure.email}` : ``;

//purpose refactored
//bullet points preffered
var purpose = ``;
const para = [
    `This Non-Disclosure and Confidentiality Agreement has entered into on the date of ${time.date} of ${time.month}, ${time.year} and is by and between:`,
    ,
    `PARTY DISCLOSING INFORMATION: ${disclosureDetail}`
    ,
    `PARTY RECEIVING INFORMATION: ${receiverDetail}`
    ,
    `For the purpose of preventing the unauthorized disclosure of Confidential Information as defined below. The parties agree to enter into a confidential relationship concerning the disclosure of certain proprietary and confidential information ("Confidential Information").`
    ,
    purpose
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