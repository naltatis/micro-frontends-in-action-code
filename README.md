# Sample Code - Micro Frontends in Action

This is the example code that goes along with the Manning book [Micro Frontends in Action](https://www.manning.com/books/micro-frontends-in-action?a_aid=mfia&a_bid=5f09fdeb).

Try the running examples at [https://the-tractor.store](https://the-tractor.store) 🚜

## Running the code locally

All examples involve starting up multiple applications which are owned by different teams. There are two ways of running these:

1. In **one terminal window** using `npm run [x_name]`
2. In **separate terminal windows** using the individual `npx ...` commands

Ether way, you need to install the npm dependencies in the root folder before running the commands.

```
npm install
```

In the examples different port numbers are used to indicate ownership. The following table shows which teams owns which application:

| Port   | Team          | Responsibility                         |
| ------ | ------------- | -------------------------------------- |
| `3000` | - shared -    | infrastructure (web-server, app shell) |
| `3001` | Team Decide   | product page                           |
| `3002` | Team Inspire  | homepage, search, recommendations      |
| `3003` | Team Checkout | cart, checkout process                 |

### 1. Pages & Links

**in one terminal**

```
npm run 01_pages_links
```

**using separate terminals**

```
npx mfserve --listen 3001 01_pages_links/team-decide
npx mfserve --listen 3002 01_pages_links/team-inspire
```

Go to http://localhost:3001/product/porsche in your browser.

### 2. Iframe

**in one terminal**

```
npm run 02_iframe
```

**using separate terminals**

```
npx mfserve --listen 3001 02_iframe/team-decide
npx mfserve --listen 3002 02_iframe/team-inspire
```

Go to http://localhost:3001/product/porsche in your browser.

### 3. AJAX

**in one terminal**

```
npm run 03_ajax
```

**using separate terminals**

```
npx mfserve --listen 3001 03_ajax/team-decide
npx mfserve --listen 3002 --cors 03_ajax/team-inspire
```

Go to http://localhost:3001/product/porsche in your browser.

### 3. Namespaced

**in one terminal**

```
npm run 04_namespaced
```

**using separate terminals**

```
npx mfserve --listen 3001 04_namespaced/team-decide
npx mfserve --listen 3002 --cors 04_namespaced/team-inspire
```

Go to http://localhost:3001/product/porsche in your browser.

### 5. Routing

**in one terminal (doesn't work on Windows, use the commands below)**

```
npm run 04_routing
```

**using separate terminals**

```
# on unix
nginx -c "`pwd`/04_routing/webserver/nginx.conf"
# on windows
cd nginx-1.15.12; .\nginx.exe -c ..\04_routing\webserver\nginx.conf

npx mfserve --listen 3001 04_routing/team-decide

npx mfserve --listen 3002 04_routing/team-inspire
```

Go to http://localhost:3000/product/porsche in your browser.

### 6. SSI

**in one terminal (doesn't work on Windows, use the commands below)**

```
npm run 05_ssi
```

**using separate terminals**

```
# on unix
nginx -c "`pwd`/05_ssi/webserver/nginx.conf"
# on windows
cd nginx-1.15.12; .\nginx.exe -c ..\05_ssi\webserver\nginx.conf

npx mfserve --listen 3001 05_ssi/team-decide

npx mfserve --listen 3002 05_ssi/team-inspire
```

Go to http://localhost:3000/product/porsche in your browser.

### 7. Timeouts

**in one terminal (doesn't work on Windows, use the commands below)**

```
npm run 06_timeouts
npm run 06_timeouts_with_delay
```

**using separate terminals**

```
# on unix
nginx -c "`pwd`/06_timeouts/webserver/nginx.conf"
# on windows
cd nginx-1.15.12; .\nginx.exe -c ..\06_timeouts\webserver\nginx.conf

npx mfserve --listen 3001 06_timeouts/team-decide

# without delay
npx mfserve --listen 3002 06_timeouts/team-inspire
# with delay
npx mfserve --listen 3002 --delay 1000 06_timeouts/team-inspire
```

Go to http://localhost:3000/product/eicher in your browser.

### 8. Podium

**in one terminal**

```
npm run 07_podium
```

**using separate terminals**

```
cd 07_podium/team-decide;  npm install; npm start
cd 07_podium/team-inspire; npm install; npm start
```

Go to http://localhost:3001/product in your browser.
