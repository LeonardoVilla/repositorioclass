import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(); // usa o banco da URI
    const collections = await db.listCollections().toArray();

    return new Response(JSON.stringify({ collections }, null, 2), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: (err as Error).message }, null, 2),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
