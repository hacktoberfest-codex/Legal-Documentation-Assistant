const {User} = require('../../model/User');
const {checkAuth} = require('../../util/auth-validator.js')
const {getWillPrompt} = require('../GPT/getPrompt.js');

async function will(personData, req, res) {
	const authorName = req.body.author_name;
    const authorAddress = req.body.author_address;
    const authorAge = req.body.author_age;
    const district = req.body.district;
    const state = req.body.state;
    const country = req.body.country;
	const witness= req.body.witness; // array of objects
	const executor = req.body.executor; // array of objects
	var beneficiary = req.body.beneficiary; //
	const propertyDetails= req.body.propertyDetails;
	const nominationOfLegalChild = req.body.legalChildName;
	const desire = req.body.desire;
    const prompt = req.body.prompt;

const header = 'WILL'
// Handling form data

const user = {
    name: authorName,
    age: authorAge,
    address: authorAddress,
    district: district,
    state: state,
    country: country
}

//     beneficiary = [
//     {
//         name: 'ben1',
//         address: 'ben1 address',
//         benefits: `i give my 80% of my property`,
//     },
//     {
//         name: 'ben2',
//         address: 'ben2 address',
//         benefits: `i give my 20% of my property`,
//     }
// ]







const allBenefits=[];
for(let i=0;i<beneficiary.length; i++){
    allBenefits.push(`I give my ${beneficiary[i].benefits} to [beneficiary${i}.name], residing at [beneficiary${i}.address]`);
}

let temp = await getWillPrompt(beneficiary, prompt, req, res, allBenefits);
beneficiary=temp.split("$")
console.log("Logging from will", beneficiary);

let benefitStatement = '';
if (beneficiary.length == 1) {
    // allBenefits.push(beneficiary[0].benefits);
    benefitStatement = beneficiary[0].replace(`[beneficiary0.name]`, beneficiary[0].name);
    benefitStatement = beneficiary[0].replace(`[beneficiary0.address]`, beneficiary[0].address);
}
else {
    for (let i = 0; i < beneficiary.length; i++) {
        let temp=beneficiary[i]
        temp= temp.replace(`[beneficiary${i}.name]`, beneficiary[i].name);
        temp=temp.replace(`[beneficiary${i}.address]`, beneficiary[i].address);
        benefitStatement += `${i + 1}. ${temp} \n`
    }
}


// const witness = [
//     //atleast one witness
//     {
//         name: 'soumya',
//         address: 'bhubaneswar, India'
//     },
//     {
//         name: 'tushar',
//         address: 'haryana, India'
//     }
// ]
let witnessStatement = '';
if (witness.length == 1) {
    witnessStatement = `\n\n${witness[0].name}\n${witness[0].address}.\n`
} else {
    for (let i = 0; i < witness.length; i++) {
        witnessStatement += `\n\n${i + 1}. ${witness[i].name}\n${witness[i].address}.\n`
    }
}
// const executor = [
//     //1-2 executor
//     {
//         name: 'ex1',
//         address: 'ex1 address'
//     },
//     {
//         name: 'ex2',
//         address: 'ex2 address'
//     }
// ]
// const beneficiary = [
//     //atleast 1 beneficiary
//     //benefits refactored
//     {
//         name: 'ben1',
//         address: 'ben1 address',
//         benefits: `i give my 80% of my property`,
//     },
//     {
//         name: 'ben2',
//         address: 'ben2 address',
//         benefits: `i give my 20% of my property`,
//     }
// ]


// benefitStatement = benefitStatement.replace("${benefeiciary.name}", beneficiary[0].name);

const timePlace = {
    date: '12',
    month: 'September',
    year: '2021',
}

const para = [
    `I, ${user.name}, aged ${user.age}, residing at ${user.address}, ${user.district}, ${user.state}, ${user.country}, being of sound mind and in full control of my faculties, do hereby make, publish, and declare this to be my Last Will and Testament, revoking all previous wills and codicils made by me.`
    ,
    `I maintain good health, and possess a sound mind. This Will is made by me of my own independent decision and free volition. Have not be influenced, cajoled or coerced in any manner whatsoever.`
    ,
    executor.length == 1 ? `I hereby appoint my ${executor[0].name}, residing at ${executor[0].address} as the sole Executor of this WILL.` : `I appoint ${executor[0].name}, residing at ${executor[1].address}, as the Executor of this will. If the appointed executor is unable or unwilling to act, I appoint ${executor[1].name}, residing at ${executor[1].address}, as the alternative executor.`
    ,
    `I direct my executor to pay all my just debts, funeral expenses, and any expenses related to the administration of my estate as soon as reasonably possible after my death.`
    ,
    benefitStatement
    ,
    `All the assets owned by me are self-acquired properties. No one else has any right, title, interest, claim or demand whatsoever on these assets or properties. I have full right, absolute power and complete authority on these assets, or in any other property which may be substituted in their place or places which may be Acquired or received by me hereafter.`
    ,
    `This shall be governed by and construed in accordance with the constitution of India.\nIN WITNESS WHEREOF, I have hereunto set my hand and seal this ${timePlace.date} of ${timePlace.month}, ${timePlace.month}, at ${user.district}.`
    ,
    `\n\nSignature\n`
    ,
    `Signed, sealed, published, and declared by the above-named Testator, ${user.name}, as and for their Last Will and Testament, in the presence of us, who, at their request, in their presence, and in the presence of each other, have subscribed our names as witnesses:`
    ,
    witnessStatement
]

    // console.log(beneficiary);
    return para;

}



module.exports = {will};
