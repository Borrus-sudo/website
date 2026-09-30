I’ll map the repository first—backend, real-time flow, frontend, deployment, and tests—then connect each part to the resume claims and give you interview-ready code patterns.

Find files matching `*`

Find files matching `**/*.{js,jsx,ts,tsx,json,yml,yaml,md}`

Search for `WebSocket|websocket|socket|Redis|redis|Cloud Run|cloud run|express|react|mark...`

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\README.md"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\app.js"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\webSocket.js"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\trader.js"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\routes.js"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\package.json"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\client\\src\\components\\App.jsx"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\client\\src\\components\\neo\\VSM.jsx"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\client\\src\\reducers\\socket.js"
}

The repository confirms a three-part system: React client, Node/Express trading server, and developer/admin controls. I’m now tracing one complete trade—from UI action through Redis-backed order matching to a Socket.IO update—because that is the clearest way to understand both the architecture and likely interview questions.

Read , lines 1 to 260
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\routes.js",
  "view_range": [
    1,
    260
  ]
}

Read , lines 1 to 280
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\trader.js",
  "view_range": [
    1,
    280
  ]
}

Read , lines 1 to 260
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\fastStorage\\orders.js",
  "view_range": [
    1,
    260
  ]
}

Read , lines 1 to 220
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\fastStorage\\stocks.js",
  "view_range": [
    1,
    220
  ]
}

Read , lines 1 to 160
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\fastStorage\\sockets.js",
  "view_range": [
    1,
    160
  ]
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\constants.js"
}

Read , lines 1 to 280
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\client\\src\\components\\neo\\Stock.jsx",
  "view_range": [
    1,
    280
  ]
}

Read , lines 1 to 240
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\client\\src\\components\\neo\\BuyModal.jsx",
  "view_range": [
    1,
    240
  ]
}

Read , lines 1 to 240
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\client\\src\\components\\neo\\SellModal.jsx",
  "view_range": [
    1,
    240
  ]
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\client\\src\\constants.js"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\Dockerfile"
}

Read 
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\client\\package.json"
}

Read , lines 200 to 480
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\trader.js",
  "view_range": [
    200,
    480
  ]
}

Read , lines 220 to 520
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\routes.js",
  "view_range": [
    220,
    520
  ]
}

Read , lines 1 to 220
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\auth.js",
  "view_range": [
    1,
    220
  ]
}

Read , lines 1 to 220
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\models\\users.js",
  "view_range": [
    1,
    220
  ]
}

Read , lines 1 to 300
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\client\\src\\reducers\\orders.js",
  "view_range": [
    1,
    300
  ]
}

Read , lines 1 to 220
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\client\\src\\reducers\\stocks.js",
  "view_range": [
    1,
    220
  ]
}

Read , lines 1 to 180
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\client\\src\\reducers\\index.js",
  "view_range": [
    1,
    180
  ]
}

Read , lines 1 to 240
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\server\\developer.js",
  "view_range": [
    1,
    240
  ]
}

Read , lines 1 to 220
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\developer\\trading.py",
  "view_range": [
    1,
    220
  ]
}

Read , lines 1 to 180
Completed with input: {
  "path": "C:\\Users\\jinma\\JDev\\Wallstreet\\developer\\init.py",
  "view_range": [
    1,
    180
  ]
}

"Read" failed
Completed with input: {
  "command": "$p='C:\\Users\\jinma\\JDev\\Wallstreet\\server\\trader.js'; $lines=Get-Content $p; for($i=360;$i -le $lines.Length;$i++){ '{0}: {1}' -f $i,$lines[$i-1] }",
  "description": "Read order matcher tail"
}

Ran terminal command: $p='C:\Users\jinma\JDev\Wallstreet\server\trader.js'; $lines=Get-Content $p; for($i=360;$i -le $lines.Length;$i++){ '{0}: {1}' -f $i,$lines[$i-1] }

Added 5 artifacts or references
Completed with input: {
  "items": [
    {
      "type": "file",
      "label": "Project README",
      "isArtifact": false,
      "uri": "file:///C:/Users/jinma/JDev/Wallstreet/README.md"
    },
    {
      "type": "file",
      "label": "Backend entry point",
      "isArtifact": false,
      "uri": "file:///C:/Users/jinma/JDev/Wallstreet/server/app.js"
    },
    {
      "type": "file",
      "label": "Order matching engine",
      "isArtifact": false,
      "uri": "file:///C:/Users/jinma/JDev/Wallstreet/server/trader.js"
    },
    {
      "type": "file",
      "label": "WebSocket bridge",
      "isArtifact": false,
      "uri": "file:///C:/Users/jinma/JDev/Wallstreet/server/webSocket.js"
    },
    {
      "type": "file",
      "label": "React socket state",
      "isArtifact": false,
      "uri": "file:///C:/Users/jinma/JDev/Wallstreet/client/src/reducers/socket.js"
    }
  ]
}

# 1. One-line project explanation

This is a **multiplayer virtual stock exchange**.

Multiple users receive virtual money, buy and sell virtual stocks, place orders at specific prices, and see stock-price and trade updates in real time through WebSockets.

The system has three main parts:

- **React frontend**: trading dashboard and portfolio UI
- **Node.js backend**: authentication, orders, matching, game rules, APIs, WebSockets
- **Redis + MongoDB**:
  - Redis stores fast-changing game state and pending orders
  - MongoDB stores users and completed trades

The project structure is documented in the `README`.

---

# 2. High-level architecture

```text
React Dashboard
      |
      | HTTP REST APIs
      |------------------------------+
      |                              |
      | WebSocket / Socket.IO        |
      v                              v
Node.js + Express              Socket.IO Server
      |
      +--> JWT authentication
      |
      +--> Trading engine
      |
      +--> Redis
      |      - current stock prices
      |      - stock quantities
      |      - pending orders
      |      - socket mappings
      |      - game state
      |
      +--> MongoDB
             - users
             - virtual funds
             - completed orders
```

The main backend startup code is in `server/app.js`.

The frontend uses Redux to hold:

- Authentication token
- Current funds
- Stock prices
- Pending orders
- Executed orders
- WebSocket connection status

The Redux setup is in `client/src/reducers/index.js`.

---

# 3. Game lifecycle

The game has two important phases.

## Phase 1: Buying phase

The organizer initializes the game using the developer API.

During this phase:

- Every player starts with `INITIAL_FUNDS`
- Players can buy stocks directly from the market
- Players cannot sell
- The stock price must match the current market price
- Stock inventory is reduced after a successful purchase

This is initialized through the developer route in `server/developer.js`.

Conceptually:

```text
Game initialized
    |
    +--> Users receive virtual funds
    +--> Stocks loaded into Redis
    +--> Pending orders cleared
    +--> Buying phase enabled
    +--> Game marked as active
```

## Phase 2: Trading phase

The organizer switches the game to normal trading.

During this phase:

- Players can buy or sell
- Orders go into a pending-order book
- A buy order matches a sell order when:
  - Same stock
  - Same price
  - Opposite order directions
  - Different users
  - Buyer has sufficient funds
  - Seller has enough holdings
- After matching, both orders are executed

The transition is implemented by the developer `startTrading` route.

---

# 4. Backend responsibilities

The backend uses:

- **Express** for REST APIs
- **Socket.IO** for real-time events
- **Mongoose** for MongoDB
- **Redis/RedisJSON** for fast shared state
- **JWT** for authentication
- **redislock** to avoid concurrent order-matching conflicts

The backend dependencies are listed in `server/package.json`.

## Important backend files

| File | Purpose |
|---|---|
| `app.js` | Starts Express, MongoDB, Redis, HTTP server, and Socket.IO |
| `routes.js` | Login, registration, stocks, funds, orders, trading APIs |
| `trader.js` | Order validation, matching, execution |
| `webSocket.js` | Socket connection and real-time notifications |
| `auth.js` | Password hashing and JWT authentication |
| `models/users.js` | MongoDB user schema |
| `fastStorage/stocks.js` | Redis stock storage |
| `fastStorage/orders.js` | Redis pending-order storage |
| `fastStorage/sockets.js` | User-to-socket mapping |

---

# 5. Why both Redis and MongoDB?

This is one of the most important interview topics.

## MongoDB

MongoDB is used for relatively durable data:

```text
User
├── name
├── username
├── password hash
├── funds
└── executedOrders[]
```

The schema is in `server/models/users.js`.

MongoDB is suitable for:

- User accounts
- Final balances
- Completed trades
- Historical data

## Redis

Redis is used for frequently changing temporary state:

```text
vsm_stocks
vsm_pending_orders
vsm_sockets
vsm_globals
vsm_exchanges
```

Redis is useful because it provides:

- Low-latency reads and writes
- Shared state between requests
- Atomic locking support
- Fast access during active trading
- RedisJSON-style nested object storage

For example, the current stock state resembles:

```js
{
  rate: 910,
  quantity: 500,
  ratesObject: {
    "1720000000000": 910,
    "1720000060000": 912
  }
}
```

The implementation is in `server/fastStorage/stocks.js`.

A good interview explanation is:

> MongoDB is the durable system of record for users and completed trades. Redis is the low-latency state layer for active game state, pending orders, stock prices, and WebSocket routing.

---

# 6. Complete trade flow

Suppose a user wants to buy 10 shares of a stock at ₹900.

## Step 1: User submits order

The buy UI is implemented in `BuyModal.jsx`.

The frontend creates an order:

```js
const order = {
  orderId: String(Math.round(Math.random() * 1000000000)),
  quantity: -10,       // Negative means buy
  rate: 900,
  stockIndex: 3
};
```

This project uses a sign convention:

```text
quantity < 0  => buy
quantity > 0  => sell
```

Then it sends:

```js
axios.post(`${constants.DOMAIN}/placeOrder`, {
  userToken,
  ...order
});
```

The API URL is defined in `client/src/constants.js`.

## Step 2: Backend authenticates the request

The route is:

```js
router.post(
  '/placeOrder',
  auth.checkIfAuthenticatedAndGetUserId,
  async (req, res) => {
    // ...
  }
);
```

The middleware extracts and verifies the JWT:

```js
function checkIfAuthenticatedAndGetUserId(req, res, next) {
  const { userToken } = req.body;

  verifyToken(userToken, (err, decoded) => {
    if (err) {
      return res.json({
        ok: false,
        message: 'Please login to access this feature'
      });
    }

    req.body.userId = decoded.userId;
    next();
  });
}
```

The real implementation is in `server/auth.js`.

## Step 3: Backend validates the price

The backend checks that the requested price is within a circuit range around the current price:

```js
const currentRate = await stocksStorage.getStockRate(stockIndex);
const capValue = currentRate * Number(process.env.CAP_FRACTION);

if (
  rate >= currentRate - capValue &&
  rate <= currentRate + capValue
) {
  // continue with order processing
} else {
  return res.json({
    ok: false,
    message: 'Price should be within the circuit range'
  });
}
```

This prevents a player from submitting an unrealistic order price.

## Step 4: Order is added to Redis

During normal trading, the order is stored in Redis:

```js
await pendingOrdersStorage.addPendingOrder(
  orderId,
  quantity,
  rate,
  stockIndex,
  userId
);
```

The relevant code is in `server/trader.js` and `server/fastStorage/orders.js`.

A pending order looks like:

```js
{
  orderId: "123456",
  quantity: -10,
  rate: 900,
  stockIndex: 3,
  userId: "abc123"
}
```

## Step 5: Matching starts

The matcher loads pending orders and searches for a compatible opposite order.

The core condition is:

```js
if (
  order2.rate === order1.rate &&
  order2.stockIndex === order1.stockIndex &&
  order1.userId !== order2.userId &&
  order1.quantity * order2.quantity < 0
) {
  // compatible buy and sell orders
}
```

The condition works because:

```text
buy  = negative quantity
sell = positive quantity

negative * positive = negative
```

The matcher is in `server/trader.js`.

## Step 6: Redis lock prevents race conditions

If two users submit orders at nearly the same time, multiple matcher calls could try to modify the same order book simultaneously.

The code uses a Redis distributed lock:

```js
async function orderMatcher(stockIndex, userId) {
  const lock = await pendingOrdersStorage.lock();

  try {
    // Read pending orders
    // Find a compatible pair
    // Execute both orders
  } finally {
    await pendingOrdersStorage.unlock(lock);
  }
}
```

The underlying lock implementation is in `server/fastStorage/orders.js`.

Interview explanation:

> The lock ensures that only one matching operation modifies the pending-order book at a time. Without it, two requests could match the same order or deduct the same funds twice.

## Step 7: Both sides are executed

For a matched trade:

```js
await executeOrder(
  order1.orderId,
  quantity1,
  order1.rate,
  order1.stockIndex,
  order1.userId,
  tradeTime
);

await executeOrder(
  order2.orderId,
  quantity2,
  order2.rate,
  order2.stockIndex,
  order2.userId,
  tradeTime
);
```

Execution:

1. Loads user from MongoDB
2. Updates funds
3. Appends the completed order
4. Saves the user
5. Updates the stock price if required
6. Sends a WebSocket event to the user

The fund calculation is conceptually:

```js
const brokerage = getBrokerageFees(rate, quantity);

const newFunds = Number(
  (user.funds + quantity * rate - brokerage).toFixed(2)
);
```

For a buyer:

```text
quantity is negative
quantity * rate is negative
funds decrease
```

For a seller:

```text
quantity is positive
quantity * rate is positive
funds increase
```

## Step 8: WebSocket event updates the client

The backend sends:

```js
webSocketHandler.messageToUser(
  userId,
  constants.eventOrderPlaced,
  {
    ok: true,
    orderId,
    quantity,
    funds
  }
);
```

The frontend receives the event:

```js
socket.on(constants.eventOrderPlaced, data => {
  if (data.ok) {
    dispatch(
      orderIsExecuted({
        orderId: data.orderId,
        quantity: Number(data.quantity)
      })
    );

    dispatch(setFunds(data.funds));
  }
});
```

The frontend implementation is in `client/src/reducers/socket.js`.

---

# 7. Real-time stock-price synchronization

The backend uses Socket.IO to broadcast stock-price changes.

The server sends:

```js
webSocketHandler.messageToEveryone(
  constants.eventStockRateUpdate,
  {
    stockIndex,
    rate: newRate,
    time: tradeTime - initialTime
  }
);
```

The WebSocket bridge is in `server/webSocket.js`.

The frontend listens:

```js
socket.on(constants.eventStockRateUpdate, data => {
  dispatch(
    updateStockRate({
      stockIndex: Number(data.stockIndex),
      newRate: Number(data.rate),
      time: data.time
    })
  );
});
```

The Redux reducer updates both the current price and historical price data:

```js
updateStockRate: (state, action) => {
  const { stockIndex, newRate, time } = action.payload;
  const stock = {
    ...state[stockIndex],
    prevRate: state[stockIndex].rate,
    rate: newRate,
    ratesObject: {
      ...state[stockIndex].ratesObject,
      [time]: newRate
    }
  };

  return [
    ...state.slice(0, stockIndex),
    stock,
    ...state.slice(stockIndex + 1)
  ];
}
```

This allows all connected players to see the same market state without repeatedly polling the API.

---

# 8. How WebSocket user routing works

When a client connects, it sends its JWT:

```js
socket.emit(constants.eventNewClient, { userToken });
```

The backend verifies the token and maps:

```text
userId -> socketId
```

The mapping is stored in Redis.

```js
socket.on(constants.eventNewClient, data => {
  auth.getUserIdFromToken(data.userToken, (err, userId) => {
    if (err) {
      socket.disconnect();
      return;
    }

    socketStorage.setUserSocketId(userId, socket.id);
  });
});
```

Later, the server can send a message to only that user:

```js
function messageToUser(userId, eventName, data) {
  socketStorage.getUserSocketId(userId)
    .then(userSocketId => {
      if (userSocketId) {
        rejson_instance.client.publish(
          constants.internalEventNotifyUser,
          JSON.stringify({
            userSocketId,
            eventName,
            data
          })
        );
      }
    });
}
```

This is useful for events such as:

- “Your order executed”
- “Your order failed”
- “Your balance changed”

For market-wide updates, it broadcasts to everyone:

```js
function messageToEveryone(eventName, data) {
  rejson_instance.client.publish(
    constants.internalEventNotifyEveryone,
    JSON.stringify({
      eventName,
      data
    })
  );
}
```

---

# 9. Frontend architecture

The main React routes are defined in `client/src/components/App.jsx`.

Important screens:

| Screen | Purpose |
|---|---|
| `Main` | Landing page |
| `Login` | User login |
| `Register` | Account registration |
| `VSM` | Stock listing and current funds |
| `Stock` | Individual stock details and graph |
| `Portfolio` | Holdings, executed orders, pending orders |

The main market screen is `client/src/components/neo/VSM.jsx`.

The UI displays:

- Remaining funds
- Stock name
- Current rate
- Percentage change
- Flash animation when prices change
- Navigation to individual stock details

The stock page uses Chart.js to render historical rates. See `client/src/components/neo/Stock.jsx`.

---

# 10. Why WebSockets instead of polling?

A polling implementation might do this:

```js
setInterval(async () => {
  const response = await axios.post('/getStocks');
  setStocks(response.data.stocks);
}, 1000);
```

This has drawbacks:

- Every client sends requests repeatedly
- Updates are delayed until the next polling interval
- Many clients create unnecessary API traffic
- The server performs repeated work even when nothing changed

WebSockets are better for this use case:

```text
One stock-price change
    |
    +--> Server broadcasts one event
          |
          +--> All connected clients update immediately
```

Interview answer:

> The application is event-driven for market updates. Instead of every client polling for prices, the backend emits a stock update once and all connected clients update their Redux state. This reduces redundant requests and improves perceived latency.

---

# 11. How the resume claims map to the code

## “Developed the backend for a real-time stock market simulation”

Supported by:

- Express APIs in `routes.js`
- Trading engine in `trader.js`
- Socket.IO server in `webSocket.js`
- Redis-backed active state
- MongoDB-backed users and completed trades

## “Supporting 80+ concurrent players”

The architecture supports concurrent players through:

- Stateless HTTP request handling
- Redis shared state
- WebSocket connections
- Redis locks around order matching
- MongoDB persistence

However, the repository does not contain a load-test script proving the exact “80+” number. In an interview, explain the architecture confidently, but only claim the exact number if you have benchmark or event evidence.

## “Reduced API response time by 40%”

The likely architectural reason is the use of Redis for hot data:

```text
Before:
API request -> database query -> response

After:
API request -> Redis -> response
```

Again, the repository does not include a benchmark report. Be prepared to explain how you measured it:

```text
Before:
p95 API latency = 250 ms

After:
p95 API latency = 150 ms

Improvement:
(250 - 150) / 250 = 40%
```

A strong interview answer:

> I measured latency using p95 response time rather than average latency, because p95 better represents the experience of slower requests under concurrency.

## “Built a React.js trading dashboard”

Supported by:

- React routes
- Redux state
- Stock dashboard
- Portfolio
- Buy/sell dialogs
- Chart.js stock history
- WebSocket event handling

## “Continuous market synchronization”

Supported by:

```js
socket.on('stockRateUpdate', data => {
  dispatch(updateStockRate(data));
});
```

## “100% uptime and zero client-side crashes”

These are operational claims and are not directly provable from the source code alone. If asked, explain how you monitored them:

- Cloud Run service health
- Browser console monitoring
- Error tracking
- WebSocket reconnect monitoring
- Error-rate dashboards
- Live-event observation

Do not say that the source code itself guarantees 100% uptime.

---

# 12. Cloud Run deployment

The backend is packaged in `server/Dockerfile`.

The container:

1. Starts from Ubuntu
2. Installs Redis Stack
3. Installs Node.js and npm
4. Installs production dependencies
5. Copies the backend
6. Starts Redis and Node.js

```dockerfile
FROM ubuntu:22.04

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["sh", "-c", "redis-stack-server --appendonly yes & npm start"]
```

The deployment flow is:

```text
Developer code
    |
    v
docker build
    |
    v
Artifact Registry
    |
    v
Cloud Run
    |
    v
Public backend URL
```

Example commands:

```bash
docker build -t vsm-backend .
docker tag vsm-backend:latest \
  asia-south1-docker.pkg.dev/PROJECT/REPOSITORY/vsm-backend:latest
docker push \
  asia-south1-docker.pkg.dev/PROJECT/REPOSITORY/vsm-backend:latest
```

A good Cloud Run interview answer:

> I containerized the Node.js backend and deployed it to Cloud Run. Environment variables such as MongoDB credentials, Redis configuration, JWT secrets, and frontend URLs were injected through the deployment configuration. Socket.IO required correct CORS and WebSocket transport configuration.

Important nuance: this Dockerfile runs Redis inside the same container as the Node server. That is simple for a controlled event, but a production architecture would usually use a managed Redis service such as Memorystore rather than running Redis inside the application container.

---

# 13. Interview code snippets to learn

## A. Express route with authentication

```js
const express = require('express');
const router = express.Router();

router.post(
  '/getFunds',
  auth.checkIfAuthenticatedAndGetUserId,
  async (req, res) => {
    try {
      const funds = await assets.getUserFunds(req.body.userId);

      res.json({
        ok: true,
        funds
      });
    } catch (error) {
      console.error('getFunds failed', error);

      res.status(500).json({
        ok: false,
        message: 'Unable to fetch funds'
      });
    }
  }
);
```

What to explain:

- Middleware authenticates the user
- `req.body.userId` comes from the verified JWT
- Business logic is separated from route handling
- Errors return an explicit failure response

---

## B. JWT authentication middleware

```js
const jwt = require('jsonwebtoken');

function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({
      ok: false,
      message: 'Authentication required'
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, payload) => {
    if (error) {
      return res.status(401).json({
        ok: false,
        message: 'Invalid or expired token'
      });
    }

    req.userId = payload.userId;
    next();
  });
}
```

Potential interview follow-up:

> Why should the server derive the user ID from the token instead of trusting a request body field?

Because a client can modify:

```json
{
  "userId": "some-other-user"
}
```

The server should use the identity in the verified token.

---

## C. Order validation

```js
function validateOrder(order) {
  const { quantity, rate, stockIndex } = order;

  if (!Number.isInteger(quantity) || quantity === 0) {
    throw new Error('Quantity must be a non-zero integer');
  }

  if (!Number.isFinite(rate) || rate <= 0) {
    throw new Error('Rate must be positive');
  }

  if (!Number.isInteger(stockIndex) || stockIndex < 0) {
    throw new Error('Invalid stock index');
  }

  return {
    quantity,
    rate,
    stockIndex
  };
}
```

The important idea is validating all input on the server, even if the frontend already validates it.

---

## D. Circuit-price validation

```js
function isWithinCircuitRange(currentRate, requestedRate, fraction) {
  const limit = currentRate * fraction;

  return (
    requestedRate >= currentRate - limit &&
    requestedRate <= currentRate + limit
  );
}
```

Usage:

```js
if (!isWithinCircuitRange(currentRate, rate, 0.11)) {
  return res.status(400).json({
    ok: false,
    message: 'Price is outside the allowed range'
  });
}
```

---

## E. Simple order matching

```js
function canMatch(buyOrder, sellOrder) {
  return (
    buyOrder.stockIndex === sellOrder.stockIndex &&
    buyOrder.rate === sellOrder.rate &&
    buyOrder.userId !== sellOrder.userId &&
    buyOrder.quantity < 0 &&
    sellOrder.quantity > 0
  );
}

function getMatchedQuantity(buyOrder, sellOrder) {
  return Math.min(
    Math.abs(buyOrder.quantity),
    sellOrder.quantity
  );
}
```

Example:

```js
const buyOrder = {
  quantity: -10,
  rate: 900,
  stockIndex: 2
};

const sellOrder = {
  quantity: 6,
  rate: 900,
  stockIndex: 2
};

const matchedQuantity = getMatchedQuantity(buyOrder, sellOrder);
// 6
```

Remaining orders:

```js
buyOrder.quantity += matchedQuantity;
// -10 + 6 = -4

sellOrder.quantity -= matchedQuantity;
// 6 - 6 = 0
```

---

## F. Redis lock around matching

```js
async function matchOrders(stockIndex) {
  const lock = await orderStorage.lock();

  try {
    const orders = await orderStorage.getPendingOrdersList();

    for (const buyOrder of orders.filter(o => o.quantity < 0)) {
      for (const sellOrder of orders.filter(o => o.quantity > 0)) {
        if (!canMatch(buyOrder, sellOrder)) {
          continue;
        }

        const quantity = getMatchedQuantity(buyOrder, sellOrder);

        await executeTrade(buyOrder, sellOrder, quantity);
        return;
      }
    }
  } finally {
    await orderStorage.unlock(lock);
  }
}
```

Interview explanation:

> The lock protects the critical section containing order-book reads, matching, and updates. The `finally` block ensures the lock is released even if the trade fails.

---

## G. Socket.IO server

```js
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true
  }
});

io.on('connection', socket => {
  socket.on('authenticate', ({ userId }) => {
    socket.join(`user:${userId}`);
  });
});

function notifyUser(userId, event, payload) {
  io.to(`user:${userId}`).emit(event, payload);
}

function broadcastMarketUpdate(payload) {
  io.emit('stockRateUpdate', payload);
}
```

This room-based approach is simpler than storing a single `userId -> socketId` mapping when users can have multiple browser tabs.

---

## H. React WebSocket hook

```jsx
import { useEffect } from 'react';
import { io } from 'socket.io-client';

function useMarketSocket(dispatch, token) {
  useEffect(() => {
    if (!token) return;

    const socket = io(import.meta.env.VITE_API_URL, {
      transports: ['websocket'],
      auth: { token }
    });

    socket.on('connect', () => {
      console.log('Connected:', socket.id);
    });

    socket.on('stockRateUpdate', update => {
      dispatch({
        type: 'stocks/updateRate',
        payload: update
      });
    });

    socket.on('orderPlaced', result => {
      dispatch({
        type: 'orders/orderCompleted',
        payload: result
      });
    });

    socket.on('connect_error', error => {
      console.error('Socket connection failed', error);
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch, token]);
}
```

Important concepts:

- Connect only when authenticated
- Register listeners once
- Clean up when the component unmounts
- Do not create a new socket on every render

---

## I. React reducer for stock updates

```js
const initialState = {};

function stocksReducer(state = initialState, action) {
  if (action.type === 'stocks/updateRate') {
    const { stockIndex, rate, time } = action.payload;
    const oldStock = state[stockIndex];

    return {
      ...state,
      [stockIndex]: {
        ...oldStock,
        prevRate: oldStock.rate,
        rate,
        ratesObject: {
          ...oldStock.ratesObject,
          [time]: rate
        }
      }
    };
  }

  return state;
}
```

This provides immutable state updates, which lets React efficiently detect changes.

---

## J. API request with optimistic UI

```js
function submitOrder(order) {
  dispatch(placeOrder(order));

  axios.post('/placeOrder', order)
    .then(response => {
      if (!response.data.ok) {
        dispatch(deletePendingOrder(order.orderId));
        showError(response.data.message);
      }
    })
    .catch(error => {
      dispatch(deletePendingOrder(order.orderId));
      showError('Network error');
    });
}
```

The project uses this pattern in the buy and sell dialogs:

1. Add order immediately to the pending list
2. Send the API request
3. Remove it if the request fails
4. Wait for WebSocket confirmation when it executes

---

# 14. Common interview questions and answers

## Why did you use Redis?

> Redis provided low-latency access to frequently changing data such as stock prices, pending orders, game status, and socket mappings. MongoDB remained the durable store for users and completed trades.

## Why use WebSockets?

> Market data changes are event-driven. WebSockets allow the server to broadcast a price or order event immediately instead of making every client poll repeatedly.

## How did you prevent two orders from being matched simultaneously?

> I used a Redis distributed lock around the order-matching critical section. This prevents concurrent matcher calls from reading and modifying the same pending-order book at the same time.

## How did you handle partial fills?

> The matched quantity is the minimum of the buyer’s requested quantity and the seller’s requested quantity. The executed quantity is removed from both orders, and any remainder stays pending.

```js
const quantity = Math.min(
  Math.abs(buyOrder.quantity),
  sellOrder.quantity
);
```

## How did you calculate the price update?

The project adjusts the price based on the trade price, current price, traded quantity, and remaining quantity:

```js
const rateDiff = tradeRate - currentRate;

const newRate = Number(
  (
    currentRate +
    (rateDiff * quantity) / currentQuantity
  ).toFixed(2)
);
```

Interview explanation:

> The trade price influences the next visible market price proportionally to the traded quantity.

## How did you handle authentication?

> Login creates a signed JWT containing the user ID. Protected routes verify the JWT before accessing funds, orders, or portfolio data. The same token is also used when registering the WebSocket connection.

## What happens if a client disconnects?

> Socket.IO detects the disconnect. On reconnection, the client should reload the latest authoritative state through REST APIs and then resume receiving WebSocket updates. WebSockets should be treated as an update channel, not the only source of truth.

## What would you improve?

Good answers include:

1. Use password hashing such as bcrypt or Argon2 instead of plain SHA-256
2. Use HTTP headers or secure cookies instead of sending JWTs in request bodies
3. Use a managed Redis service instead of starting Redis inside the application container
4. Add automated tests for matching, partial fills, and race conditions
5. Add rate limiting and request validation
6. Add reconnection and state-resynchronization logic
7. Add load testing with k6 or Artillery
8. Add structured logging and metrics
9. Use database transactions or an event/outbox pattern for stronger consistency
10. Support multiple sockets per user instead of one socket mapping

---

# 15. Important technical limitations to understand

You should understand these before discussing the project in an interview.

## 1. Exact performance claims need evidence

The repository demonstrates the architecture, but it does not contain:

- Load-testing scripts
- API latency benchmark results
- p95/p99 reports
- Uptime dashboards
- Client crash monitoring

Therefore, explain the measurement methodology if asked.

## 2. Password hashing should be improved

The current code uses:

```js
crypto.createHash('sha256')
```

For passwords, a salted adaptive hash such as bcrypt or Argon2 is preferred:

```js
const bcrypt = require('bcrypt');

const passwordHash = await bcrypt.hash(password, 12);

const valid = await bcrypt.compare(
  submittedPassword,
  passwordHash
);
```

## 3. The client sends tokens in request bodies

A more conventional approach is:

```http
Authorization: Bearer <jwt>
```

rather than:

```json
{
  "userToken": "..."
}
```

## 4. The current socket mapping supports one socket per user

The Redis structure maps:

```text
userId -> socketId
```

If the same user opens two tabs, the newest socket can overwrite the previous one. A better design is:

```text
userId -> Set<socketId>
```

or Socket.IO rooms:

```js
socket.join(`user:${userId}`);
```

## 5. Cloud Run and local Redis are a trade-off

Running Redis in the same container is convenient for a controlled event, but in a horizontally scaled deployment each container could have a different Redis instance. A managed shared Redis service is safer for multiple instances.

---

# 16. A strong 60-second interview explanation

You can say:

> I worked on a multiplayer virtual stock-market platform. The React frontend provided the trading dashboard, portfolio, stock charts, and buy/sell flows. The Node.js backend exposed REST APIs for authentication, market data, and orders, while Socket.IO pushed stock-price and order-execution events to connected players in real time.  
>
> For state management, I used MongoDB for durable user and completed-trade data, and Redis for low-latency active state such as stock prices, pending orders, game status, and user-to-socket mappings. During the trading phase, orders were matched when they had the same stock and price but opposite directions. I protected the matcher with a Redis distributed lock to avoid race conditions during concurrent trades.  
>
> The backend was containerized with Docker and deployed to Google Cloud Run, while the React frontend was built and hosted separately. The main performance improvement came from keeping hot trading state in Redis and using event-driven WebSocket updates instead of polling.

That is the core story of this project.