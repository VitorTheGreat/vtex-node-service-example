import { InstanceOptions, IOContext, ExternalClient } from "@vtex/api";

export class GetPersonalizations extends ExternalClient {
	public constructor(ctx: IOContext, options?: InstanceOptions) {
		super("http://licensemanager.vtex.com.br/api/pvt/accounts", ctx, {
			...options,
			headers: {
				...(options && options.headers),
				...(ctx.adminUserAuthToken
					? { VtexIdclientAutCookie: ctx.adminUserAuthToken }
					: null),
			},
		});
	}

	public async GetPersonalizations(
        job_id: string,
		segment: string = this.context.segmentToken || "",
		session: string = ""
	) {
		let cookie = `vtex_segment=${segment}; `;

		if (session) {
			cookie += `vtex_session=${session}; `;
		}

		const request = await this.http.get(
			`https://www.URL.com/personalizations?job_id=${job_id}`,
			{
				headers: {
					cookie,
				},
			}
		);
		
		return request;
	}
}
