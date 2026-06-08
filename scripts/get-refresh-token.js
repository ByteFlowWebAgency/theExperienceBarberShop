import { google } from "googleapis";
import readline from "readline";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const REDIRECT_URI = "http://localhost:3000/auth/callback";

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);

const SCOPES = ["https://www.googleapis.com/auth/business.manage"];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: SCOPES,
  prompt: "consent",
});

console.log("\n👉 Paste this URL into your browser:\n");
console.log(authUrl);
console.log("\n");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "After approving, paste the authorization code here: ",
  async (code) => {
    rl.close();

    try {
      const { tokens } = await oauth2Client.getToken(code);
      console.log("\n✅ Success! Here are your tokens:\n");
      console.log("ACCESS TOKEN:", tokens.access_token);
      console.log("\nREFRESH TOKEN:", tokens.refresh_token);
      console.log("\n📋 Add this to your .env.local:");
      console.log(`\nGOOGLE_CLIENT_ID=${CLIENT_ID}`);
      console.log(`GOOGLE_CLIENT_SECRET=${CLIENT_SECRET}`);
      console.log(`GOOGLE_REDIRECT_URI=${REDIRECT_URI}`);
      console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`);
    } catch (error) {
      console.error("Error retrieving tokens:", error.message);
    }
  },
);
