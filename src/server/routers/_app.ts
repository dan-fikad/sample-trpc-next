import { z } from "zod";
import { procedure, router } from "../trpc";
import { generatedShortsVideoRouter } from "./generatedShortsVideo";

// NOTE
// 말 그대로 여기서 router를 만든다.
// routers 안에서 파일을 분리해도 나쁘지 않다.
// nested route 가능할까?
export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `Hello, ${opts.input.text}`,
      };
    }),
  ohMyGod: procedure.query(() => {
    return { message: "Oh my god" };
  }),
  generatedShortsVideo: generatedShortsVideoRouter,
});

export type AppRouter = typeof appRouter;
