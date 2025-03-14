// src/aws/s3Client.js
import { S3Client } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { REGION, IDENTITY_POOL_ID } from "./config"; // Importamos desde la configuración

const s3 = new S3Client({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    identityPoolId: IDENTITY_POOL_ID, // Usamos la configuración de IdentityPoolId
  }),
});

export default s3;
