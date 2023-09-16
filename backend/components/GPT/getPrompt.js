const axios = require('axios');

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

async function getLandingPrompt(scenario) {
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

    console.log(response.data.choices[0].text.trim());
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

module.exports = {getLandingPrompt};