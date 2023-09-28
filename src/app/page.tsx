import Image from "next/image";

import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
type Props = {
  searchParams: any;
};
export default function Home({ searchParams }: Props) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <main>
      <Featured />
      <CategoryList />
      <div className="flex justify-between gap-10 pt-10">
        <CardList page={page} cat={searchParams.cat} />
        <Menu />
      </div>
    </main>
  );
}
