const axios = require('axios');
const User = require('../../model/User');
const {checkAuth} = require('../../util/auth-validator')

const landingPrompt = `You will now behave as GPT model which has extensive knowledge on Indian Judiciary and every keyword related to the Indian Penal Code (IPC). I am providing you with a scenario, your job is to search and find IPC Articles and section that can be applied in the given scenario. Your response should be in the form of JSON with the following structure. 

{
  "artices": [
    {
      "id": 1,
      "article_number": "articleNumber",
      "description": "content"
    }
  ],
  "suggestion": "Suggest what the user can do for further legal proceedings.",
  "tag": "will or affidavit or non-disclosure" (based on situation),
  "shortPrompt": (re-write the scenario such that it can be used to search in a legal document fetching engine)
}

Scenario: "`

async function getLandingPrompt(scenario, req, res) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: "text-davinci-003",
        prompt: landingPrompt + `"${scenario} "`,
        max_tokens: 1000,
        temperature: 0.5,
        n: 1,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    const result = response.data.choices[0].text.trim();

    console.log("Logging Result: ", result);

    const summary = JSON.parse(result).shortPrompt;
    
    console.log("Log", summary);
    try{
      await savePrompt(scenario, summary, req, res);
    } catch(e) {
      console.log(e);
    }

    return result;

  } catch (error) {
    console.error('Error:', error);
  }
}

async function savePrompt(actualPrompt, promptSummary, req, res) {
  const user = await checkAuth(req, res);
	if(!user) return res.status(401).json({status: 'error', error: 'Unauthenticated'});

  console.log(user);

  const newHistory = {
    prompt: actualPrompt,
    summary: promptSummary,
    createdAt: new Date().toISOString()
  }

  const _id = user.id;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id },
      { $push: { history: newHistory } },
      { new: true }
    ).exec();

    console.log("User with updated history:", updatedUser);
    return updatedUser;
  } catch (e) {
    console.error("Couldn't save the history: ", e);
    throw e; 
  }
}

async function getWillPrompt(beneficiary, prompt, req, res, allBenefits) {
  
    // console.log("Fetching ben: ", ben.benefits);
    // const myPrompt = `I am formulating a will document. Rephrase this statement using legal jargon. Your response must be limited to 70 words. 
    //                   Sentence = "` + ben.benefits + `"`;


    const nyPrompt = `I am formulating a will document. Rephrase this statement using legal jargon. Make sure not to make any changes to "to [beneficiary.name], residing at [beneficiary.address]"
    Your response must be limited to 70 words per statement. For context use each of the following statements in the list as a single unique prompt for different beneficiaries and generate a string concating all the statements divided by a dollar sign.:
   sentences="` + allBenefits + `"`;

   try {
      // console.log("Working on current ben: ", ben.benefits);
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: "text-davinci-003",
          prompt: nyPrompt,
          max_tokens: 1000,
          temperature: 0.5,
          n: 1,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
          }
        }
      );
      // console.log(allBenefits);
      var result = response.data.choices[0].text.trim();
      
      console.log(`Logging Results: `, result);
  
    } catch (error) {
      console.error('Error:', error);
    }
    return result;
  };


  // console.log("Logging from gpt", beneficiary);
  // return beneficiary;

module.exports = {getLandingPrompt, getWillPrompt};