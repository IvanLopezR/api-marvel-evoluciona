import moment from 'moment';
import CryptoJS from 'crypto-js';
import { marvelApiKeys as api } from '../config/config'

let timeStamp = moment().unix()
let hash = CryptoJS.MD5(timeStamp + api.privateKey + api.publicKey)
    .toString(CryptoJS.enc.Hex)

export const marvelQuery = {
    UrlBase: 'https://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=',
    auth: `&apikey=`+api.publicKey+`&ts=`+timeStamp+`&hash=`+hash,
}