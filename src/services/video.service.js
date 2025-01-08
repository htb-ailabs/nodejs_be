// import prisma from "@prisma/client";

import prisma from "../common/prisma/init.prisma.js";

const videoService = {
  videoList: async (req) => {
    let { page, pageSize, type_id, search } = req.query;

    // throw new BadRequestException(`lay danh sach video kg thanh cong`);
    // const videos = await models.videos.findAll({ raw: true });
    console.log({ userDayne: req.user });
    // LIMIT 5 OFFSSET 5
    type_id = +type_id > 0 ? +type_id : 0;
    search = search || ``;
    page = +page > 0 ? +page : 1;
    pageSize = +pageSize > 0 ? +pageSize : 5;

    const whereTypeId = type_id === 0 ? {} : { type_id: type_id };
    const whereSearch =
      search.trim() === `` ? {} : { video_name: { contains: search } };
    const where = { ...whereTypeId, ...whereSearch };

    const totalItem = await prisma.videos.count({ where: where });
    const totalPage = Math.ceil(totalItem / pageSize);

    console.log({ page, pageSize, type_id, search });
    const skip = (page - 1) * pageSize;
    const videos = await prisma.videos.findMany({
      take: pageSize,
      skip: skip,
      orderBy: {
        created_at: `desc`, // sap xet giam dan
      },
      where: where,
    });
    // console.log({ userDayne: req.user });
    return {
      page,
      pageSize,
      totalPage,
      totalItem,
      items: videos || [],
    };
  },
};

export default videoService;
