import CodeBlock from "@/app/components/ui/CopyBlock";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Exemplo de código</h1>
      <CodeBlock code={`src/`} />
    </div>
  );
}
