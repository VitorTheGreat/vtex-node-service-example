import exampleHandler from './handlers/exampleHandler'
import {Clients} from './clients'
import { Service } from "@vtex/api"

import Query from './graphql/Queries/Resolver'

const errorResponse = (err: any) => {
	if (err.response) {
		const { error = null, description = null, message = null } = err.response.data || {}
		return { status: err.response.status, message: error || description || message }
	}
	return { status: err.status || 500, message: err.message }
}

const prepare = async (ctx: any) => {

		try {
			ctx.body = await exampleHandler(ctx)
		} catch (err) {
			const { status, message } = errorResponse(err)

			console.error('Catch error => ', status, message)

			ctx.status = status
			ctx.body = { message }
		}
}

export default new Service({
	clients: {
        implementation: Clients,
        options: {
            getInfo: {
                timeout: 10000
            },
			getPersonalizations: {
				timeout: 10000
			}
        }
    },
    graphql: {
        resolvers: {
            Query
        }
    },
	routes: {
		example: prepare
	}
})

