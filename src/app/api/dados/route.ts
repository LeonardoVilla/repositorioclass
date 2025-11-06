// app/api/dados/route.ts
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("class");

    // Buscando cada coleção
    const servicos = await db.collection("servicos").find({}).toArray();
    const softwares = await db.collection("softwares").find({}).toArray();
    const tutoriaisBD = await db.collection("tutoriaisbd").find({}).toArray();
    const tutoriaisDev = await db.collection("tutoriaisdev").find({}).toArray();

    // Retornando tudo junto
    return NextResponse.json({
      servicos,
      softwares,
      tutoriaisBD,
      tutoriaisDev
    });
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return NextResponse.json({ error: "Erro ao buscar dados" }, { status: 500 });
  }
}