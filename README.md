# node-getto-aws_dynamodb

aws_dynamodb : getto-psycher vendor plugin

status: production ready

```javascript
const aws_dynamodb = require("getto-aws_dynamodb").init({
  region: "REGION",
});

const put = async () => {
  const documentClient = aws_dynamodb.documentClient();
  await documentClient.put({
    TableName: "table",
    Item: {
      id: "ID",
    },
    ConditionExpression: "attribute_not_exists(id)",
  });
};
```


###### Table of Contents

- [Requirements](#Requirements)
- [Usage](#Usage)
- [License](#License)

## Requirements

- Node.js: 10.16.0


## Usage

```javascript
const aws_dynamodb = require("getto-aws_dynamodb").init({
  region: "REGION",
});

const put = async () => {
  const documentClient = aws_dynamodb.documentClient();
  await documentClient.put({
    TableName: "table",
    Item: {
      id: "ID",
    },
    ConditionExpression: "attribute_not_exists(id)",
  });
};
```

### Install

```bash
npm install --save getto-aws_dynamodb
```


## License

node-getto-aws_dynamodb is licensed under the [MIT](LICENSE) license.

Copyright &copy; since 2019 shun@getto.systems

