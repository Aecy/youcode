import {Layout, LayoutContent, LayoutHeader, LayoutTitle} from "@/components/layout/layout";
import Link from "next/link";

export default function Page() {
  return <Layout>
    <LayoutHeader>
      <LayoutTitle>
        Welcome a board, admin
      </LayoutTitle>
    </LayoutHeader>
    <LayoutContent>
      <Link href={`/admin/courses`}>See courses</Link>
    </LayoutContent>
  </Layout>
}