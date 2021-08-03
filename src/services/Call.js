import Api from '../utilities/axiosInstance';

const makeRequest = async (request) => {
  const response = await request();
  return await response.data;
};

export default class Call {
    static async postText(text, language) {
        return makeRequest(() => Api.post(`language/translate/v2`, {}, {
        params: {
            q: text,
            target: language.value,
            // key: `${process.env.GOOGLE_TRANSLATE_KEY}`
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
        },
        }));
    }
}
