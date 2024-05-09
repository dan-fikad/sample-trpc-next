"use client";
import React from "react";
import { trpc } from "@/utils/trpc";

function Home() {
  const hello = trpc.hello.useQuery({ text: "world" });
  const ohMyGod = trpc.ohMyGod.useQuery();
  const createGeneratedShortsVideo =
    trpc.generatedShortsVideo.create.useMutation();

  const onClick = async () => {
    const result = await fetch("/api/webhook", {
      method: "POST",
      body: JSON.stringify({
        // generatedVideoSharedIds: ["1", "2", "3"],
        generatedVideoSharedIds: "1",
      }),
    }).then((res) => res.json());
    console.log("result :", result);
  };

  const onCreate = () => {
    createGeneratedShortsVideo.mutate({
      videoUrl: "https://www.youtube.com/watch?v=1",
      fikaGenVersion: "1",
    });
  };

  React.useEffect(() => {
    if (!createGeneratedShortsVideo.isSuccess) return;
    console.log("data :", createGeneratedShortsVideo.data);
  }, [createGeneratedShortsVideo.data, createGeneratedShortsVideo.isSuccess]);

  return (
    <main>
      <div>{hello.data?.greeting}hehe</div>
      <div>{ohMyGod.data?.message}</div>
      <div>
        <button onClick={onClick}>click to send webhook</button>
      </div>

      <div className="flex bg-slate-300">
        <button onClick={onCreate}>create blablabla</button>
      </div>
    </main>
  );
}

export default trpc.withTRPC(Home);
