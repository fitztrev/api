import { example, localClient, prodClient } from "./config";

example(
  "broadcasts",
  "getOfficialBroadcasts",
  await prodClient.GET("/api/broadcast", {
    params: {
      query: {
        nb: 1,
      },
    },
  }),
);

example("broadcasts", "getPaginatedToBroadcastPreviews", await prodClient.GET("/api/broadcast/top"));
