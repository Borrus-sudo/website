I’ll map the resume claims to the actual implementation, then turn that into interview-ready explanations and small code patterns worth studying.

Find files matching `**/*`

Search for `SQLite|sqlite|HDFC|ICICI|SBI|Axis|regex|RegExp|subscription|reward|optimizer|...`

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\README.md"
}

The repo confirms the strongest interview anchors are the pure parsing/optimization modules and the SQLite schema. I’m reading those plus the sync/state boundaries so the study material reflects what the app actually does, not generic claims.

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\lib\\smsParser.ts"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\lib\\cardOptimizer.ts"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\db\\schema.ts"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\db\\client.ts"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\lib\\smsSync.ts"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\store\\useStore.ts"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\package.json"
}

Read , lines 1 to 220
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\lib\\smsParser.ts",
  "view_range": [
    1,
    220
  ]
}

Read , lines 221 to 440
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\lib\\smsParser.ts",
  "view_range": [
    221,
    440
  ]
}

Read , lines 1 to 240
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\lib\\cardOptimizer.ts",
  "view_range": [
    1,
    240
  ]
}

Read , lines 241 to 520
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\lib\\cardOptimizer.ts",
  "view_range": [
    241,
    520
  ]
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\db\\client.ts"
}

Read , lines 1 to 240
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\app\\_layout.tsx",
  "view_range": [
    1,
    240
  ]
}

Read , lines 1 to 180
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\db\\client.ts",
  "view_range": [
    1,
    180
  ]
}

Read , lines 181 to 360
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\db\\client.ts",
  "view_range": [
    181,
    360
  ]
}

Read , lines 200 to 330
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\lib\\cardOptimizer.ts",
  "view_range": [
    200,
    330
  ]
}

Read , lines 330 to 460
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Cardexa\\lib\\cardOptimizer.ts",
  "view_range": [
    330,
    460
  ]
}

Added 4 artifacts or references
Completed with input: {
  "items": [
    {
      "type": "file",
      "label": "Cardexa README",
      "isArtifact": false,
      "uri": "file:///C:/Users/jinma/JDev/Cardexa/README.md"
    },
    {
      "type": "file",
      "label": "SMS parser implementation",
      "isArtifact": false,
      "uri": "file:///C:/Users/jinma/JDev/Cardexa/lib/smsParser.ts"
    },
    {
      "type": "file",
      "label": "Card optimizer implementation",
      "isArtifact": false,
      "uri": "file:///C:/Users/jinma/JDev/Cardexa/lib/cardOptimizer.ts"
    },
    {
      "type": "file",
      "label": "SQLite client implementation",
      "isArtifact": false,
      "uri": "file:///C:/Users/jinma/JDev/Cardexa/db/client.ts"
    }
  ]
}

## First: know exactly what your resume claims mean

Your strongest interview story is:

> “Cardexa is a local-first React Native finance app. It stores cards, subscriptions, processed SMS IDs, and sync metadata in SQLite. A pure TypeScript parsing layer converts bank SMS text into normalized transactions. A separate heuristic optimizer evaluates each user card using bank rewards, network bonuses, reward caps, annual fees, and payment recurrence.”

The relevant implementation is in:

- `SMS parser`
- `Card optimizer`
- `SQLite client`
- `Database schema`
- `SMS synchronization`
- `Zustand store`

---

# 1. How to explain the project in 60 seconds

> “I built Cardexa, a privacy-focused personal finance app using React Native and Expo. It works locally and stores data in SQLite, so the core features work offline without sending financial data to a backend.  
>
> The main pipeline starts with SMS synchronization. On Android, the app reads recent inbox messages after requesting permission, filters messages from known bank senders, removes already-processed messages, and sends the body to a pure TypeScript parser.  
>
> The parser first rejects OTPs, offers, balance alerts, and other non-transactional messages. It then tries bank-specific regular expressions for banks such as HDFC, ICICI, SBI, and Axis. If those fail, it uses a lower-confidence generic parser. The result is normalized into a common transaction model with amount, merchant, bank, card suffix, date, category, and confidence.  
>
> Separately, the card optimizer scores every card in the user’s wallet. It combines base rewards, merchant bonuses, network traits, high-value bonuses, reward caps, annual fees, and recurrence. It returns both a ranked recommendation and human-readable reasons.”

---

# 2. SMS parser: what you should be able to explain

## Pipeline

The parser follows this sequence:

```ts
export function parseSMS(
  raw: string,
  receivedAt: Date
): ParsedTransaction | null {
  // 1. Reject obvious non-transaction messages
  for (const pattern of REJECT_PATTERNS) {
    if (pattern.test(raw)) return null;
  }

  // 2. Try bank-specific parsers
  let match: BankMatch | null = null;

  for (const parser of BANK_PARSERS) {
    match = parser(raw);
    if (match) break;
  }

  // 3. Try generic fallback
  if (!match) {
    const genericAmountRx =
      /(?:debited|deducted).*?(?:INR|Rs\.?|₹)\s*([\d,]+(?:\.\d{2})?)/i;

    const amountMatch = raw.match(genericAmountRx);
    if (!amountMatch) return null;

    match = {
      bank: 'Unknown',
      amount: parseAmount(amountMatch[1]),
      type: /credited|received|refund/i.test(raw)
        ? 'credit'
        : 'debit',
      confidence: 'low',
    };
  }

  if (!match.amount || Number.isNaN(match.amount)) {
    return null;
  }

  const merchant = match.merchant ?? 'Unknown';

  return {
    merchant,
    amount: match.amount,
    type: match.type,
    cardLastFour: match.last4 ?? '0000',
    bank: match.bank,
    date: parseDate(match.date, receivedAt),
    category: categorize(merchant),
    rawSMS: raw,
    confidence: match.confidence,
  };
}
```

### Interview explanation

> “I separated parsing into a pure function so it has no React Native or database dependency. That makes it easy to unit test using representative SMS fixtures. The parser uses a staged strategy: reject noise first, try high-confidence bank-specific formats next, and only then fall back to a generic low-confidence parser.”

---

## Bank-specific parsing

Example HDFC parser:

```ts
function parseHDFC(sms: string): BankMatch | null {
  const debitRx =
    /Your HDFC Bank (?:Credit|Debit) Card XX(\d{4})\s+
     has been debited for\s+
     (?:INR|Rs\.?|₹)\s*
     ([\d,]+(?:\.\d{2})?)\s+
     at\s+([A-Z0-9 &.'/-]+?)\s+
     on\s+([\d\w-]+)/ix;

  const match = sms.match(debitRx);

  if (!match) return null;

  return {
    bank: 'HDFC Bank',
    last4: match[1],
    amount: parseAmount(match[2]),
    merchant: normalizeMerchant(match[3]),
    date: match[4],
    type: 'debit',
    confidence: 'high',
  };
}
```

You should be able to explain each capture group:

1. `(\d{4})` — last four card digits
2. `([\d,]+(?:\.\d{2})?)` — amount, including Indian comma formatting
3. `([A-Z0-9 &.'/-]+?)` — merchant
4. `([\d\w-]+)` — date

A cleaner production version would avoid multiline regex formatting unless using the `x` flag is supported by the chosen regex engine. JavaScript does **not** support the `x` flag, so the actual repository uses a single-line regex.

---

## Amount normalization

```ts
function parseAmount(raw: string): number {
  const normalized = raw.replace(/,/g, '').trim();
  return Number.parseFloat(normalized);
}

parseAmount('1,20,000.00'); // 120000
parseAmount('649.00');      // 649
```

### Likely question

**“How do you handle Indian number formatting?”**

> “I remove commas before parsing. That supports both normal formats such as `1,299.00` and Indian lakh formats such as `1,20,000.00`. I also validate the final number and reject missing or NaN amounts.”

---

## Merchant normalization

```ts
function normalizeMerchant(raw: string): string {
  return raw
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map(
      word =>
        word.charAt(0).toUpperCase() +
        word.slice(1).toLowerCase()
    )
    .join(' ');
}
```

### Potential weakness to know

This makes `NETFLIX` become `Netflix`, but it can also turn an acronym like `IRCTC` into `Irctc`. If asked how you would improve it:

> “I would maintain an alias dictionary for known merchants and apply aliases after basic normalization. For example, `IRCTC` should remain `IRCTC`, while `NETFLIX INDIA` could map to a canonical merchant ID.”

```ts
const MERCHANT_ALIASES: Record<string, string> = {
  irctc: 'IRCTC',
  netflix: 'Netflix',
  hotstar: 'Disney+ Hotstar',
  zomato: 'Zomato',
};

function canonicalizeMerchant(name: string): string {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  return MERCHANT_ALIASES[key] ?? name;
}
```

---

## Date parsing

```ts
function parseDate(dateText: string | undefined, fallback: Date): Date {
  if (!dateText) return fallback;

  const named = dateText.match(
    /(\d{1,2})[-/]([A-Za-z]+)[-/](\d{4})/
  );

  if (named) {
    const month = MONTHS[named[2].toLowerCase()];

    if (month !== undefined) {
      return new Date(
        Number(named[3]),
        month,
        Number(named[1])
      );
    }
  }

  const numeric = dateText.match(
    /(\d{1,2})[-/](\d{1,2})[-/](\d{4})/
  );

  if (numeric) {
    return new Date(
      Number(numeric[3]),
      Number(numeric[2]) - 1,
      Number(numeric[1])
    );
  }

  return fallback;
}
```

### Interview issue to mention

JavaScript months are zero-indexed:

```ts
new Date(2026, 2, 28); // March 28, not February 28
```

If asked about robustness, mention:

- timezone handling
- two-digit years
- impossible dates such as `31/02/2026`
- date formats that are ambiguous between `DD/MM` and `MM/DD`
- using a date library or strict validation for production

---

## Confidence scoring

Your parser currently assigns confidence based on parser quality:

```ts
type Confidence = 'high' | 'medium' | 'low';

const result = {
  merchant,
  amount,
  bank,
  confidence: 'high',
};
```

A good explanation:

> “Bank-specific templates are high confidence because they identify the bank, card suffix, amount, and merchant using a known structure. Alternate bank formats are medium confidence. Generic extraction is low confidence because it may not identify all fields reliably. The UI can ask the user to confirm low-confidence results.”

---

## Noise filtering

```ts
const REJECT_PATTERNS: RegExp[] = [
  /\botp\b/i,
  /one[\s-]?time[\s-]?password/i,
  /low balance/i,
  /minimum balance/i,
  /reward point/i,
  /payment due/i,
  /bill generated/i,
  /\bstatement\b/i,
  /\boffer\b/i,
  /\bdiscount\b/i,
];
```

### Likely question

**“Why filter before parsing?”**

> “It reduces false positives and avoids wasting work on messages that cannot represent purchases. It also prevents an offer or payment-due SMS from accidentally matching a generic amount pattern.”

---

# 3. SMS synchronization: important architecture

The sync layer separates platform access from parsing.

```ts
export async function syncSMSInbox(
  lastSyncTimestamp: number,
  isProcessed: (id: string) => boolean
): Promise<SyncResult> {
  const result: SyncResult = {
    fetched: 0,
    parsed: 0,
    duplicates: 0,
    newTransactions: [],
  };

  // Development and non-Android environments use mock data
  if (__DEV__ || Platform.OS !== 'android') {
    const mock = MockSMSService.getNext();
    if (!mock) return result;

    result.fetched = 1;

    if (isProcessed(mock.id)) {
      result.duplicates = 1;
      return result;
    }

    const parsed = parseSMS(mock.raw, new Date());

    if (parsed) {
      result.parsed = 1;
      result.newTransactions = [parsed];
    }

    return result;
  }

  // Android-specific SMS import happens here
}
```

### Explain idempotency

> “SMS synchronization needs to be idempotent. The same SMS can be encountered across multiple syncs, so each message has a stable ID. Before parsing, I check the `processed_sms` table. If the ID already exists, I count it as a duplicate and skip it.”

Conceptually:

```ts
for (const message of messages) {
  if (isProcessed(message.id)) {
    duplicates++;
    continue;
  }

  const transaction = parseSMS(message.body, new Date(message.date));

  if (transaction) {
    parsedTransactions.push(transaction);
  }
}
```

### Likely follow-up

**“What happens if parsing succeeds but saving fails?”**

A stronger production answer:

> “I would make persistence part of a transaction: insert the normalized transaction or subscription and mark the SMS as processed atomically. Otherwise a crash between those two operations could either duplicate the transaction or lose it.”

```ts
await db.withTransactionAsync(async () => {
  await db.runAsync(
    `INSERT INTO transactions
     (id, merchant, amount, raw_sms)
     VALUES (?, ?, ?, ?)`,
    transactionId,
    parsed.merchant,
    parsed.amount,
    parsed.rawSMS
  );

  await db.runAsync(
    `INSERT INTO processed_sms (id, processed_at)
     VALUES (?, ?)`,
    smsId,
    Date.now()
  );
});
```

---

# 4. SQLite: snippets you should study

## Schema design

The project stores cards, subscriptions, processed SMS IDs, and sync logs.

```sql
CREATE TABLE IF NOT EXISTS cards (
  id TEXT PRIMARY KEY,
  bank TEXT NOT NULL,
  variant TEXT NOT NULL,
  last4 TEXT NOT NULL,
  expiry TEXT NOT NULL,
  network TEXT NOT NULL,
  gradient TEXT NOT NULL,
  monthly_spend REAL DEFAULT 0,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS subscriptions (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  card_id TEXT NOT NULL,
  amount REAL NOT NULL,
  billing_type TEXT NOT NULL,
  cycle TEXT,
  renewal_days INTEGER NOT NULL,
  category TEXT NOT NULL,
  status TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS processed_sms (
  id TEXT PRIMARY KEY,
  processed_at INTEGER NOT NULL
);
```

### Be ready to explain

- `PRIMARY KEY` prevents duplicate IDs
- `NOT NULL` protects required fields
- `REAL` is used for amounts
- `TEXT` is used for categories and enum-like values
- `processed_sms` makes sync idempotent
- indexes would improve lookup performance for larger datasets

```sql
CREATE INDEX IF NOT EXISTS idx_subscriptions_card_id
ON subscriptions(card_id);

CREATE INDEX IF NOT EXISTS idx_processed_sms_processed_at
ON processed_sms(processed_at);
```

---

## Parameterized SQL

Your project already uses parameterized queries:

```ts
db.runSync(
  `INSERT INTO cards
   (id, bank, variant, last4, expiry, network, gradient, monthly_spend, created_at)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  card.id,
  card.bank,
  card.variant,
  card.last4,
  card.expiry,
  card.network,
  JSON.stringify(card.gradient),
  card.monthlySpend,
  Date.now()
);
```

### Interview explanation

> “I use placeholders instead of string interpolation. This avoids SQL injection and handles escaping correctly.”

Avoid saying:

```ts
// Do not do this
const sql = `SELECT * FROM users WHERE email = '${email}'`;
```

---

## Transactions

Know this pattern:

```ts
await db.withTransactionAsync(async () => {
  await db.runAsync(
    `INSERT INTO subscriptions
     (id, name, card_id, amount, billing_type, cycle, renewal_days,
      category, icon, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    subscription.id,
    subscription.name,
    subscription.cardId,
    subscription.amount,
    subscription.billingType,
    subscription.cycle,
    subscription.renewalDays,
    subscription.category,
    subscription.icon,
    subscription.status,
    Date.now()
  );

  await db.runAsync(
    `INSERT INTO processed_sms (id, processed_at)
     VALUES (?, ?)`,
    smsId,
    Date.now()
  );
});
```

### Likely question

**“Why use SQLite instead of AsyncStorage?”**

> “SQLite is better for relational finance data. I can query subscriptions by card, filter by status, enforce uniqueness, use transactions, and scale beyond a single serialized JSON object. AsyncStorage would be simpler for preferences, but less suitable for structured transaction data.”

---

# 5. Card optimizer: how to explain the algorithm

The optimizer evaluates every card independently:

```ts
const results = userCards.map(card => {
  const bankProfile =
    BANK_PROFILES[card.bank] ?? DEFAULT_BANK_PROFILE;

  const networkTraits = NETWORK_TRAITS[card.network];

  let effectiveReward = bankProfile.baseRewardPct;

  // Add bank merchant bonus
  const categoryMatch = matchMerchant(
    merchant,
    bankProfile.categoryBonuses
  );

  effectiveReward += categoryMatch.bonus;

  // Add network bonus
  const networkMatch = matchMerchant(
    merchant,
    networkTraits.bonuses
  );

  effectiveReward += networkMatch.bonus;

  // High-value transaction bonus
  if (amount >= bankProfile.highValueThreshold) {
    effectiveReward += bankProfile.highValueBonus;
  }

  return calculateResult(card, effectiveReward);
});
```

---

## Merchant matching

```ts
function matchMerchant(
  merchant: string,
  keywords: Record<string, number>
): { bonus: number; keyword: string } {
  const normalized = merchant
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  let bestBonus = 0;
  let bestKeyword = '';

  for (const [keyword, bonus] of Object.entries(keywords)) {
    if (normalized.includes(keyword) && bonus > bestBonus) {
      bestBonus = bonus;
      bestKeyword = keyword;
    }
  }

  return { bonus: bestBonus, keyword: bestKeyword };
}
```

### Important limitation to know

This is substring matching. It is simple and explainable, but can produce false matches. For example, a short keyword might accidentally match another merchant name.

A better production version would use canonical merchant IDs:

```ts
type MerchantCategory = 'travel' | 'food' | 'streaming' | 'fuel';

interface MerchantRule {
  pattern: RegExp;
  merchantId: string;
  category: MerchantCategory;
}

const MERCHANT_RULES: MerchantRule[] = [
  {
    pattern: /\bnetflix\b/i,
    merchantId: 'netflix',
    category: 'streaming',
  },
  {
    pattern: /\bspotify\b/i,
    merchantId: 'spotify',
    category: 'streaming',
  },
];
```

---

## Cashback calculation

```ts
const rawCashback = (effectiveReward / 100) * amount;

const actualCashback = Math.min(
  rawCashback,
  bankProfile.rewardCap
);
```

Example:

```ts
const effectiveReward = 5;
const amount = 1000;

const cashback = (5 / 100) * 1000;
// 50
```

With a reward cap:

```ts
const rawCashback = 500;
const rewardCap = 2500;

const actualCashback = Math.min(rawCashback, rewardCap);
// 500
```

---

## Recurring payments

```ts
function frequencyPerYear(
  recurrence: Recurrence
): number {
  switch (recurrence) {
    case 'monthly':
      return 12;
    case 'quarterly':
      return 4;
    case 'yearly':
      return 1;
    case 'one-time':
      return 0;
  }
}
```

```ts
const frequency = frequencyPerYear(recurrence);

const annualSavings = actualCashback * frequency;
const netAnnualValue = annualSavings - annualFee;
```

### Interview example

For a ₹649 monthly Netflix payment and 5% effective rewards:

```ts
const monthlyCashback = 649 * 0.05; // 32.45
const annualSavings = monthlyCashback * 12; // 389.40
const netValue = annualSavings - annualFee;
```

### Strong explanation

> “For recurring payments, I compare annual rewards with the card’s annual fee. A card with a higher reward percentage is not necessarily the best choice if its annual fee is much higher or if the reward cap limits the actual cashback.”

---

## Scoring

The optimizer uses separate scoring components:

```ts
const rewardScore = Math.min(cappedReward * 8, 40);

const categoryScore =
  totalBonus > 0
    ? Math.min(totalBonus * 4, 15)
    : 3;

const annualValueScore =
  netAnnualValue > 0
    ? Math.min(netAnnualValue / 100, 25)
    : Math.max(-10, netAnnualValue / 200);

const feeEfficiency =
  annualFee === 0
    ? 12
    : Math.max(0, 12 - annualFee / 2000);

const networkScore = acceptanceScore * 0.5;

const score = Math.min(
  99,
  Math.max(
    10,
    Math.round(
      rewardScore +
      categoryScore +
      annualValueScore +
      feeEfficiency +
      networkScore
    )
  )
);
```

Then results are sorted:

```ts
results.sort(
  (a, b) =>
    b.score - a.score ||
    b.cashbackEstimate - a.cashbackEstimate
);
```

### Likely question

**“Why use a heuristic instead of machine learning?”**

> “The available inputs are structured and the business rules are understandable. A heuristic is deterministic, easy to test, explainable to users, and works offline. Machine learning would add training-data, privacy, and explainability requirements without being necessary for this recommendation problem.”

---

# 6. Zustand and persistence

A key architecture point:

> “Zustand is only the UI cache and state-management layer. SQLite is the source of persistence. On startup, the root layout initializes SQLite, loads cards and subscriptions, and hydrates Zustand.”

Example:

```ts
const useStore = create<AppStore>((set, get) => ({
  cards: [],
  subscriptions: [],

  setCards: cards => set({ cards }),

  addSubscription: subscription =>
    set(state => ({
      subscriptions: [
        ...state.subscriptions,
        subscription,
      ],
    })),

  totalMonthly: () => {
    const { subscriptions } = get();

    return subscriptions.reduce((total, subscription) => {
      if (subscription.billingType === 'trial') {
        return total;
      }

      if (subscription.cycle === 'monthly') {
        return total + subscription.amount;
      }

      if (subscription.cycle === 'quarterly') {
        return total + subscription.amount / 3;
      }

      if (subscription.cycle === 'yearly') {
        return total + subscription.amount / 12;
      }

      return total + subscription.amount;
    }, 0);
  },
}));
```

### Important question

**“What happens after restarting the app?”**

> “Zustand resets in memory, but the root layout reloads cards and subscriptions from SQLite during bootstrap. The store is then rehydrated with the database results.”

---

# 7. React Native questions you should study

## Platform-specific behavior

```ts
if (__DEV__ || Platform.OS !== 'android') {
  return mockSMSService();
}

const permission = await PermissionsAndroid.request(
  'android.permission.READ_SMS'
);
```

Explain:

- iOS does not expose the same SMS inbox access
- development/emulator mode uses deterministic mock data
- Android permission is requested only when needed
- the parser remains platform-independent

---

## Loading and bootstrap

```ts
useEffect(() => {
  async function bootstrap() {
    try {
      await initDB();

      const [cards, subscriptions] = await Promise.all([
        fetchAllCards(),
        fetchAllSubscriptions(),
      ]);

      setCards(cards);
      setSubscriptions(subscriptions);
    } catch (error) {
      console.error('Bootstrap error:', error);
    } finally {
      setLoading(false);
    }
  }

  void bootstrap();
}, []);
```

Know how to explain:

- loading states
- error states
- `Promise.all`
- splash-screen coordination
- why initialization should happen once
- what happens if database loading fails

---

## Navigation/auth gate

```ts
useEffect(() => {
  if (isCheckingSession) return;

  const isAuthRoute = segments[0] === 'auth';

  if (!user && !isAuthRoute) {
    router.replace('/auth/login');
  } else if (user && isAuthRoute) {
    router.replace('/');
  }
}, [user, isCheckingSession, segments]);
```

Explain:

> “Navigation is guarded after session restoration. I avoid redirecting while the session is still being checked, otherwise the app could briefly redirect a valid user to the login page.”

---

# 8. Testing snippets you should study

The pure parser is especially suitable for unit tests.

```ts
describe('parseSMS', () => {
  it('parses an HDFC debit message', () => {
    const sms =
      'Your HDFC Bank Credit Card XX4521 has been debited ' +
      'for INR 649.00 at NETFLIX on 28-Mar-2026';

    const result = parseSMS(
      sms,
      new Date('2026-03-28')
    );

    expect(result).toMatchObject({
      bank: 'HDFC Bank',
      cardLastFour: '4521',
      amount: 649,
      merchant: 'Netflix',
      type: 'debit',
      confidence: 'high',
    });
  });

  it('rejects OTP messages', () => {
    const result = parseSMS(
      'Your OTP is 123456',
      new Date()
    );

    expect(result).toBeNull();
  });

  it('parses Indian lakh amounts', () => {
    const sms =
      'Your HDFC Bank Credit Card XX4521 has been debited ' +
      'for INR 1,20,000.00 at AMAZON on 28-Mar-2026';

    const result = parseSMS(sms, new Date());

    expect(result?.amount).toBe(120000);
  });
});
```

Optimizer tests:

```ts
describe('optimizeCard', () => {
  it('prefers a merchant-specific reward card', () => {
    const results = optimizeCard(
      'Netflix',
      649,
      'monthly',
      cards
    );

    expect(results.length).toBeGreaterThan(0);
    expect(results[0].score).toBeGreaterThanOrEqual(
      results[1].score
    );
  });

  it('returns no results for invalid input', () => {
    expect(
      optimizeCard('', 0, 'one-time', cards)
    ).toEqual([]);
  });
});
```

### Test cases worth memorizing

For a parser:

- exact HDFC format
- alternate ICICI format
- Axis format
- unknown bank generic fallback
- OTP rejection
- offer rejection
- refund/credit message
- missing amount
- malformed amount
- comma-formatted amount
- merchant with extra whitespace
- missing card suffix
- date fallback

For the optimizer:

- no cards
- invalid amount
- one-time purchase
- monthly recurring payment
- quarterly recurring payment
- annual fee greater than annual rewards
- reward cap reached
- network bonus
- network penalty
- unknown bank profile
- tie-breaking by cashback

---

# 9. Questions you are very likely to get

## “What was the hardest part?”

Good answer:

> “The hardest part was handling inconsistent bank SMS formats. I avoided one giant regex and instead used bank-specific parsers with a shared normalized output model. That kept each parser readable and allowed a generic fallback for unsupported formats.”

## “How did you avoid duplicate transactions?”

> “I use the SMS provider’s stable message ID and persist processed IDs in SQLite. Every sync checks the ID before parsing and saving.”

## “How do you handle new banks?”

> “I add a parser implementing the same internal `BankMatch` shape and register it in the parser list. The rest of the pipeline does not change. If there is no dedicated parser yet, the generic fallback can still extract some transactions with low confidence.”

## “Why keep raw SMS text?”

> “It helps with debugging, user confirmation, and improving parsers when a bank changes its template. In a production implementation I would consider encrypting it or minimizing retention because it can contain sensitive financial information.”

## “How do you prevent SQL injection?”

> “All dynamic values use parameterized SQL placeholders. I never concatenate user input into a query string.”

## “Is the optimizer financially accurate?”

Be honest:

> “It is a transparent heuristic model rather than an official rewards calculator. It gives an estimate based on configured reward profiles. A production version would need verified card-specific terms, redemption-value normalization, exclusions, monthly caps, minimum-spend rules, and periodic profile updates.”

## “What would you improve?”

Strong answer:

1. Add transaction persistence instead of only subscription persistence.
2. Add database migrations rather than dropping tables during development reset.
3. Replace simple substring merchant matching with canonical merchant rules.
4. Add comprehensive parser fixtures and property-based tests.
5. Encrypt sensitive local data.
6. Use a cryptographic password hash such as Argon2, scrypt, or platform secure storage.
7. Make parser configuration remotely or locally versioned.
8. Add indexes and foreign keys.
9. Validate dates and amounts more strictly.
10. Separate reward percentage from reward-point monetary value.

---

# 10. Important honesty points

There are a few things you should not overclaim in an interview.

### SQLite implementation

The README mentions `expo-sqlite` with Drizzle, but the actual client in [db/client.ts]() uses direct `expo-sqlite` calls. A precise description is:

> “I used Expo SQLite with direct parameterized SQL. The repository also contains Drizzle schema definitions.”

Do not claim that all queries currently go through Drizzle.

### Password hashing

The local auth code uses a simple custom hash. Do not describe it as secure password hashing.

Say:

> “The prototype uses local-only authentication, but the current hash is not suitable for production. I would replace it with a standard password-hashing algorithm or platform secure storage.”

### SMS access

The real inbox integration is Android-specific. On development builds and non-Android platforms, [smsSync.ts]() uses mock SMS data.

Say:

> “The production integration targets Android SMS access; the app uses a mock service for development and unsupported platforms.”

---

# 11. General app-development snippets to study

## Debounce search

```ts
function debounce<T extends (...args: never[]) => void>(
  fn: T,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
```

## Retry with exponential backoff

```ts
async function retry<T>(
  operation: () => Promise<T>,
  attempts = 3
): Promise<T> {
  let lastError: unknown;

  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;

      const delay = 2 ** attempt * 250;
      await new Promise(resolve =>
        setTimeout(resolve, delay)
      );
    }
  }

  throw lastError;
}
```

## Paginated API loading

```ts
async function fetchAllPages<T>(
  fetchPage: (page: number) => Promise<{
    items: T[];
    hasMore: boolean;
  }>
): Promise<T[]> {
  const allItems: T[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const result = await fetchPage(page);
    allItems.push(...result.items);
    hasMore = result.hasMore;
    page++;
  }

  return allItems;
}
```

## Optimistic UI update

```ts
const previous = items;

setItems(current => [...current, newItem]);

try {
  await saveItem(newItem);
} catch (error) {
  setItems(previous);
  showError('Could not save item');
}
```

## Safe async effect cleanup

```ts
useEffect(() => {
  let cancelled = false;

  async function load() {
    const result = await fetchData();

    if (!cancelled) {
      setData(result);
    }
  }

  void load();

  return () => {
    cancelled = true;
  };
}, []);
```

## Generic repository pattern

```ts
interface Repository<T> {
  getById(id: string): Promise<T | null>;
  getAll(): Promise<T[]>;
  save(value: T): Promise<void>;
  delete(id: string): Promise<void>;
}
```

## Validation with explicit errors

```ts
function validateSubscription(input: {
  name: string;
  amount: number;
}) {
  const errors: Record<string, string> = {};

  if (!input.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!Number.isFinite(input.amount) || input.amount <= 0) {
    errors.amount = 'Amount must be greater than zero';
  }

  return errors;
}
```

---

# 12. What to study first

Prioritize in this order:

1. **TypeScript**
   - interfaces and type aliases
   - discriminated unions
   - generics
   - type guards
   - `Record<string, T>`
   - async/await and error handling

2. **Regular expressions**
   - capture groups
   - optional groups
   - non-capturing groups
   - lookarounds
   - flags
   - testing edge cases

3. **SQLite**
   - schema design
   - indexes
   - joins
   - transactions
   - migrations
   - parameterized queries

4. **React Native**
   - lifecycle and hooks
   - platform-specific APIs
   - permissions
   - loading/error states
   - navigation guards

5. **State management**
   - server state versus UI state
   - persistence versus cache
   - optimistic updates
   - derived state

6. **Algorithms**
   - sorting
   - scoring functions
   - normalization
   - ranking
   - time and space complexity

7. **Security**
   - secure password hashing
   - local encryption
   - least-privilege permissions
   - sensitive-data retention
   - SQL injection prevention

The single most important thing is to be able to walk through one concrete example end-to-end:

> SMS arrives → sender is filtered → duplicate ID is checked → regex extracts fields → amount/date/merchant are normalized → category is assigned → record is persisted → subscription appears in Zustand/UI → optimizer compares available cards → ranked recommendation is displayed.