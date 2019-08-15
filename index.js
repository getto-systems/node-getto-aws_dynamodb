const AWS = require("aws-sdk");

exports.init = (struct) => init(struct);

/**
 * struct : {
 *   region: aws region
 * }
 *
 * returns {
 *   documentClient : AWS.DynamoDB.DocumentClient
 * }
 */
const init = ({region}) => {
  /**
   * returns {
   *   put : async (struct) => put item
   *   get : async (struct) => get item
   *   query : async (struct) => query
   * }
   */
  const documentClient = () => {
    const client = new AWS.DynamoDB.DocumentClient({
      region: region,
    });

    const call_client = (method) => {
      return (params) => {
        return new Promise((resolve, reject) => {
          client[method](params, (err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
        });
      };
    };

    const put = call_client("put");
    const get = call_client("get");
    const query = call_client("query");

    return {
      put,
      get,
      query,
    };
  };

  return {
    documentClient,
  };
};
