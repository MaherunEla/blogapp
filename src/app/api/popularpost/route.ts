import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const post = await prisma.post.findMany({
      where: {
        views: {
          gt: 2,
        },
      },

      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "SomeThing went wrong!" }, { status: 500 })
    );
  }
};
