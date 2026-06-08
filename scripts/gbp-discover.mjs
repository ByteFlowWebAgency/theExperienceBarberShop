// gbp-discover.mjs
// Run: node gbp-discover.mjs

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN!;

// ─── Step 1: Get a fresh access token ───────────────────────────────────────

async function getAccessToken() {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("❌ Failed to get access token:", data);
    process.exit(1);
  }

  console.log("✅ Access token retrieved\n");
  return data.access_token;
}

// ─── Step 2: Fetch accounts ──────────────────────────────────────────────────

async function getAccounts(token) {
  const res = await fetch(
    "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  const data = await res.json();

  if (!res.ok) {
    console.error("❌ Failed to fetch accounts:", data);
    process.exit(1);
  }

  if (!data.accounts || data.accounts.length === 0) {
    console.error(
      "❌ No accounts returned. Check that your GBP API access has been approved.",
    );
    process.exit(1);
  }

  console.log("─── ACCOUNTS ───────────────────────────────────────────────");
  data.accounts.forEach((acc, i) => {
    console.log(`\n[${i + 1}] Account Name : ${acc.accountName}`);
    console.log(`    Name (ID)   : ${acc.name}`);
    console.log(`    Type        : ${acc.type}`);
  });

  console.log(
    "\n👉 Copy the 'Name (ID)' value above — that's your GBP_ACCOUNT_ID\n",
  );
  return data.accounts;
}

// ─── Step 3: Fetch locations for each account ────────────────────────────────

async function getLocations(token, accountName) {
  const res = await fetch(
    `https://mybusinessbusinessinformation.googleapis.com/v1/${accountName}/locations?readMask=name,title,storefrontAddress`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  const data = await res.json();

  if (!res.ok) {
    console.error(`❌ Failed to fetch locations for ${accountName}:`, data);
    return;
  }

  if (!data.locations || data.locations.length === 0) {
    console.log(`   No locations found under ${accountName}`);
    return;
  }

  console.log(`─── LOCATIONS under ${accountName} ${"─".repeat(20)}`);
  data.locations.forEach((loc, i) => {
    console.log(`\n[${i + 1}] Title       : ${loc.title}`);
    console.log(`    Name (ID)  : ${loc.name}`);
    if (loc.storefrontAddress) {
      const addr = loc.storefrontAddress;
      console.log(
        `    Address    : ${addr.addressLines?.join(", ")}, ${addr.locality}, ${addr.administrativeArea}`,
      );
    }
  });

  console.log(
    "\n👉 Copy the 'Name (ID)' value above — that's your GBP_LOCATION_ID\n",
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log("\n🔍 GBP Account & Location Discovery\n");

  const token = await getAccessToken();
  const accounts = await getAccounts(token);

  for (const account of accounts) {
    await getLocations(token, account.name);
  }

  console.log("─────────────────────────────────────────────────────────────");
  console.log("✅ Done. Add these to your .env.local:");
  console.log("   GBP_ACCOUNT_ID=accounts/XXXXXXXXXXXXXXXXX");
  console.log("   GBP_LOCATION_ID=locations/XXXXXXXXXXXXXXXXX");
  console.log(
    "─────────────────────────────────────────────────────────────\n",
  );
}

main();
