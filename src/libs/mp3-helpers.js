import axios from 'axios';
import {
  MP3_SEARCH
} from 'libs/constants';

export default {
  async search ({keyword}) {
    let response = await axios(`${MP3_SEARCH}?q=${keyword}`,  {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).catch(err => ({data: {}}));
    console.log(response.data);
    return response.data;
  }
}
