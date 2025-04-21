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

example(
  "broadcasts",
  "getPaginatedToBroadcastPreviews",
  await prodClient.GET("/api/broadcast/top"),
);

example(
  "broadcasts",
  "getBroadcastsCreatedByUser",
  await prodClient.GET("/api/broadcast/by/{username}", {
    params: {
      path: {
        username: "broadcaster",
      },
    },
  }),
);

example(
  "broadcasts",
  "createBroadcastTournament",
  await localClient.POST("/broadcast/new", {
    body: {
      name: "My Tournament",
    },
  }),
);
