const AWS = require("aws-sdk");

exports.init = (struct) => init(struct);

/**
 * struct : {
 *   region: aws region
 * }
 *
 * returns {
 *   getJSON: async () => get secret string value as json
 * }
 */
const init = ({region}) => {
  /**
   * returns {
   *   put : async (struct) => put item
   * }
   */
  const documentClient = () => {
    const client = new AWS.DynamoDB.DocumentClient({
      region: region,
    });

    /**
     * struct : {
     *   TableName: table name
     *   Item: Item struct
     *   ConditionExpression: condition expression
     * }
     */
    const put = ({TableName, Item, ConditionExpression}) => {
      const params = {
        TableName,
        Item,
        ConditionExpression,
      };

      return new Promise((resolve, reject) => {
        client.put(params, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    };

    /**
     * struct : {
     *   TableName: table name
     *   Key: Item struct
     *   ConsistentRead: condition expression
     *   ProjectionExpression: prejection expression
     * }
     */
    const get = ({TableName, Key, ConsistentRead, ProjectionExpression}) => {
      const params = {
        TableName,
        Item,
        ConsistentRead,
        ProjectionExpression,
      };

      return new Promise((resolve, reject) => {
        client.get(params, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    };

    return {
      put,
      get,
    };
  };

  return {
    documentClient,
  };
};
