import arcjet, {shield, detectBot, tokenBucket, slidingWindow} from "@arcjet/node";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        "CATEGORY:PREVIEW",
      ],
    }),
    slidingWindow({
      mode: "LIVE",
      interval: 2, // Refill every 10 seconds
      max: 5, // Bucket capacity of 10 tokens
    }),
  ],
});

export default aj;