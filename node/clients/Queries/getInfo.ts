import { InstanceOptions, IOContext, ExternalClient } from "@vtex/api";

export class GetInfo extends ExternalClient {
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

	public async GetInfo(
		// productClusterIds: String,
		categoryId: String,
		segment: string = this.context.segmentToken || "",
		session: string = ""
	) {
		let cookie = `vtex_segment=${segment}; `;

		if (session) {
			cookie += `vtex_session=${session}; `;
		}

		const request = await this.http.get(
			`https://${this.context.account}.vtexcommercestable.com.br/api/catalog_system/pub/products/search/?fq=C:${categoryId}&_from=0&_to=49&O=OrderByBestDiscountDESC`,
			{
				headers: {
					cookie,
				},
			}
		);
		
		return request;
	}
}
