import arcjet,{tokenBucket,shield,detectBot} from "@arcjet/node"
import "dotenv/config";

export const aj = arcjet({
    key:process.env.ARCJET_KEY,
    characteristics:["ip.src"],
    rules:[
        shield({mode:'LIVE'}),
        detectBot({mode:'LIVE', allow:["CATEGORY:SEARCH_ENGINE"]}),
        tokenBucket({mode:'LIVE',interval:10,refillRate:5,capacity:10})
    ],
    secret:process.env.ARCJET_SECRET,
    app:"ecommerce-backend",
    version:"1.0.0"
})
