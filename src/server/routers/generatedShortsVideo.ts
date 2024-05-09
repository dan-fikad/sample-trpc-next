import { z } from "zod";
import { procedure, router } from "../trpc";

const createGeneratedShortsVideo = procedure
  .input(
    z.object({
      videoUrl: z.string(),
      fikaGenVersion: z.string(),
    })
  )
  .mutation((opts) => {
    const url = opts.input.videoUrl;
    const genVersion = opts.input.fikaGenVersion;

    return {
      id: "1234",
      url,
      genVersion,
    };
  });

const getGeneratedShortsVideo = procedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query((opts) => {
    return {
      id: opts.input.id,
      url: "you got mail",
      genVersion: "1234",
    };
  });

export const generatedShortsVideoRouter = router({
  create: createGeneratedShortsVideo,
  get: getGeneratedShortsVideo,
});
