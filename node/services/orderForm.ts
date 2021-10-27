import axios from 'axios'

const API_ENDPOINT = 'http://ACOUNT.myvtex.com/api/checkout/pub/orderforms/simulation'

const headers = {
	'X-VTEX-API-AppKey' : '',
	'X-VTEX-API-AppToken' : '',
	"X-Vtex-Use-Https": true
};

export default {
	simulateOrderForm: (body: any) => axios.post(API_ENDPOINT, body, {
		headers
	})
}
