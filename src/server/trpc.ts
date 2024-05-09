import { initTRPC } from "@trpc/server";
import superjson from "superjson";

//import { uneval } from "devalue";
// const transformer = {
//   input: superjson,
//   output: {
//     serialize: (object) => uneval(object),
//     deserialize: (object) => eval(`(${object})`),
//   },
// };

// const t = initTRPC.create({
//   transformer: superjson,
// });

// NOTE
// trpc 객체를 처음 생성하는 곳. init 하는 곳.
const t = initTRPC.create({
  transformer: superjson,
});

export const router = t.router;
export const procedure = t.procedure;
