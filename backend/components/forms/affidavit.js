
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