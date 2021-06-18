# Neo4j Driver for JavaScript

This is an unofficial modification of the official Neo4j driver for JavaScript;
it has been modified to work with Deno.

## Usage example

```
import neo4j, { Driver } from "https://raw.githubusercontent.com/technotes-org/neo4j-javascript-driver/4.3-deno/neo4j-driver-lite/src/index.ts";

const URI = "bolt://localhost:7687";
const driver: Driver = neo4j.driver(URI, neo4j.auth.basic("neo4j", "neo4j"));
const session = driver.session();
const results = await session.run("MATCH (n) RETURN n LIMIT 25");
console.log(results.records);
await session.close();
await driver.close();
```

You will need to run this with `deno run --allow-net`
