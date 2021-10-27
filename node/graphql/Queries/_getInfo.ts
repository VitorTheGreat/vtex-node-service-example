const getInfo = async (_obj: any, _args: any, ctx: any, _info: any) => {
    const { clients } = ctx;

    ctx.set("Cache-Control", "no-cache, no-store")

    const request = await clients.getInfo.GetInfo(_args.categoryId, _args.segment, _args.session)

    return request
};

export { getInfo };

