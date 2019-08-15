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
     * params : see AWS.DynamoDB.DocumentClient#put
     */
    const put = (params) => {
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
     * params : see AWS.DynamoDB.DocumentClient#get
     */
    const get = (params) => {
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
