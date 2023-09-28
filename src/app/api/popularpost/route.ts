import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  // const query = {
  //   orderBy: { views: "desc" },
  //   take: 5,
  //   skip: 0,
  // };
  try {
    //const posts = await prisma.post.findMany(query);
    const posts = await prisma.post.findMany({
      orderBy: { views: "desc" },
      take: 5,

      include: { user: true },
    });
    // const popularpost = await prisma.post.findMany({
    //   orderBy: { posts: { skip: 0, take: 5 } },
    // });

    return new NextResponse(JSON.stringify({ posts, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "SomeThing went wrong!", status: 500 })
    );
  }
};
