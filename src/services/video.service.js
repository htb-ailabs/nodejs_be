import prisma from "../common/prisma/init.prisma.js";



const videoService = {
  videoList: async () => {
    // throw new BadRequestException(`lay danh sach video kg thanh cong`);
    // const videos = await models.videos.findAll({ raw: true });
    const videos = await prisma.videos.findMany();
    return videos;
  },
};

export default videoService;
