// import prisma from "@prisma/client";

import prisma from "../common/prisma/init.prisma.js";

const videoService = {
  videoList: async (req) => {
    // throw new BadRequestException(`lay danh sach video kg thanh cong`);
    // const videos = await models.videos.findAll({ raw: true });
    console.log({ userDayne: req.user });
    const videos = await prisma.videos.findMany();
    // console.log({ userDayne: req.user });
    return {
      items: videos
    }
  },
};

export default videoService;
