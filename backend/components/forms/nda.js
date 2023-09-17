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