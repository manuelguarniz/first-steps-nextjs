import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from "@aws-sdk/client-secrets-manager";
import { AWSSecretManager } from "../type";

export const getSecretValue = async (secretName: string): Promise<AWSSecretManager> => {
  try {
    const client = new SecretsManagerClient();
    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: secretName,
      })
    );
    console.log(response);
    return JSON.parse(response.SecretString ?? '{}');
  } catch (error) {
    console.log(error)
    throw error;
  }
};
