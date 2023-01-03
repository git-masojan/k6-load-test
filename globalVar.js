const token = JSON.parse(open('./tokenCollection.json'));
export const PART_COUNTER = token.find(user => user.username === 'IKAARI123456').token;