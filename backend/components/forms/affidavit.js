
async function affidavit(req, res) {
	const authorName = req.body.author_name;
	const authorAge= req.body.author_Age;
	const matter = req.body.matter;
	const date= req.body.date;
	const month = req.body.month;
	const year = req.body.year;
    const officialIdNo= req.body.officialId;
}

module.exports = {affidavit};

const header = `AFFIDAVIT`;
const court = ``;
const user = {
    name: ``,
    age: 0,
    gender: '',
    address: ``,
    post: ``,
    district: ``,
    state: ``,
    country: ``
}
//purpose refactored
const purpose = ``;
const timePlace = {
    date: ``,
    month: ``,
    year: ``,
}
const magistrateName = ``;
const legalID = {
    //atleast one
    aadhar: ``,
    pan: ``,
    voter: ``,
}
const legalStatement = '';
let j = 1;
if (legalID.aadhar) {
    legalStatement += `${j}. Aadhar Card No. : ${legalID.aadhar}\n`;
    j++;
}
if (legalID.pan) {
    legalStatement += `${j}. PAN Card No. : ${legalID.pan}\n`;
    j++;
}
if (legalID.voter) {
    legalStatement += `${j}. Voter ID Card No. : ${legalID.voter}\n`;
    j++;
}
const para = [
    court
    ,
    `\n\n`
    ,
    `I, ${user.name}, aged ${user.age} years, ` + user.gender == 'male' ? 'son' : 'daughter' + ` of ${user.father}, residing at ${user.address}, ${user.post}, ${user.district}, ${user.state}, ${user.country}, do hereby solemnly affirm and declare as follows:\n`
    ,
    `1. I am a citizen of India and am fully competent to make this affidavit.
    2. I have personal knowledge of the facts stated herein, and the information provided is based on my own experiences, observations, and records.
    3. ${purpose}
    4. I solemnly affirm that the statements made in this affidavit are true and correct to the best of my knowledge and belief, and I understand that any false statement made herein may subject me to legal consequences under the law.
    5. I am making this affidavit voluntarily and without any coercion, pressure, or undue influence from any person or entity.`
    ,
    `Solemnly affirmed and signed by me on this ${timePlace.date} of ${timePlace.month}, ${timePlace.year} at ${user.district}.`
    ,
    `\n\n\n${user.name}`
    ,
    `BEFORE ME`
    ,
    `\n\n\n${magistrateName}`
    ,
    `IDENTIFICATION DETAILS OF DEPONENT:\n`
    ,
    legalStatement
]