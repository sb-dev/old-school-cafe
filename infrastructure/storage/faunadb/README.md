# Setup

Login into FaunaDB shell:
```shell
fauna shell
```

Create DB:
```shell
CreateDatabase({
  name: "osc-dev"
})
```

Create server key:
```shell
CreateKey({
  name: "Server key for osc-dev",
  database: Database("osc-dev"),
  role: "server",
})
```

Create client key:
```shell
CreateKey({
  name: "Client key for osc-dev",
  database: Database("osc-dev"),
  role: "client",
})
```
