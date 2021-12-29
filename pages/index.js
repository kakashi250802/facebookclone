/* eslint-disable @next/next/no-typos */
import { getSession } from "next-auth/react";
import {db} from "../firebase"
import Head from "next/head";
import Header from "../components/Header/Header";
import Login from "./../components/Login/Login";
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "./../components/Feed/Feed";
import Widgets from "./../components/Widgets/Widgets";
export default function Home({ session,posts }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title> Facebook </title>{" "}
      </Head>{" "}
      {/* header */} <Header />
      <main className="flex">
        {" "}
        {/* sidebar */} <Sidebar /> {/* Feed */} <Feed posts={posts} /> {/* Widgets */}{" "}
        <Widgets />
      </main>{" "}
    </div>
  );
}

export async function getServerSideProps(context) {
  // get the user
  const session = await getSession(context);
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return {
    props: {
      session,
    }, // will be passed to the page component as props
  };
}
