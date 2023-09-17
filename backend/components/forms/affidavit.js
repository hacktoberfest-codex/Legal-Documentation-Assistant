const { getAffidavitPrompt } = require("../GPT/getPrompt");

async function affidavit(req, res) {
	const authorName = req.body.author_name;
	const authorAge= req.body.author_age;
	const matter = req.body.matter;
    const officialIdNo= req.body.officialId;
    const gender = req.body.gender;
    const address = req.body.address;
    const post = req.body.post;
    const district = req.body.district;
    const state = req.body.state;
    const country = req.body.country;


    var Months = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];
    
    var currentDay = new Date();
    var date = currentDay.getDate();
    var month = Months[currentDay.getMonth()];
    var year = currentDay.getFullYear();

const header = `AFFIDAVIT`;
const court = ``;
const user = {
    name: authorName,
    age: authorAge,
    gender: gender,
    address: address,
    post: post,
    district: district,
    state: state,
    country: country
}


//purpose refactored
var purpose = await getAffidavitPrompt(matter, req, res);
const timePlace = {
    date: date,
    month: month,
    year: year,
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

purpose = purpose.replace('[user.name]', user.name);

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

console.log(para);
return para;

}

module.exports = {affidavit};