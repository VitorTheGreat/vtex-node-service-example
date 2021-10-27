const getPersonalizations = async (_obj: any, _args: any, ctx: any, _info: any) => {
    const { clients } = ctx;

    ctx.set("Cache-Control", "no-cache, no-store")

    const request = await clients.getPersonalizations.GetPersonalizations(_args.job_id, _args.segment, _args.session)

    return request
};

export { getPersonalizations };

