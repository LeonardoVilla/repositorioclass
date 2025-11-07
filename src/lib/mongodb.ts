import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

// Função para validar a URI
if (!uri) {
  console.warn(
    "⚠️ A variável MONGODB_URI não está definida. A conexão com o MongoDB não será estabelecida."
  );
}

// Cria as variáveis de client e clientPromise
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Em desenvolvimento, usa cache global para evitar reconexões
if (process.env.NODE_ENV === "development") {
  if (!(global as any)._mongoClientPromise) {
    if (uri) {
      client = new MongoClient(uri, options);
      (global as any)._mongoClientPromise = client.connect();
    } else {
      (global as any)._mongoClientPromise = Promise.reject(
        new Error("MONGODB_URI não definida")
      );
    }
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // Em produção, cria client normal
  if (uri) {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  } else {
    clientPromise = Promise.reject(new Error("MONGODB_URI não definida"));
  }
}

export default clientPromise;