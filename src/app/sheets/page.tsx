'use client';
import { useEffect, useState } from 'react';

interface GoogleSheetsResponse {
  range: string;
  majorDimension: string;
  values: string[][];
}

const SheetPage = () => {
  const [sheetData, setSheetData] = useState<string[][] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        // Fazendo a requisição para a API
        // const res = await fetch('/api/getSheetData');
        const res = await fetch('/api/getSheetData', {
          method: 'GET',
          headers: {
            'Referer': 'https://leonardovilla.com.br/*',  // Definindo o referer explicitamente
          },
        });
        if (!res.ok) {
          throw new Error('Erro ao buscar os dados da planilha');
        }

        const data: GoogleSheetsResponse = await res.json();
        setSheetData(data.values); // Armazenando os dados da planilha no estado
      } catch (err: any) {
        setError(err.message); // Armazenando o erro, se houver
      } finally {
        setLoading(false); // A requisição terminou
      }
    };

    fetchSheetData();
  }, []); // O efeito só será executado uma vez, no momento do carregamento da página

  if (loading) {
    return <div>Carregando...</div>; // Mensagem de carregamento
  }

  if (error) {
    return <div>Erro: {error}</div>; // Exibe o erro caso ocorra
  }

  if (!sheetData || sheetData.length === 0) {
    return <div>Sem dados na planilha.</div>; // Caso não haja dados na planilha
  }

  return (
    <div>
      <h1>Dados da Planilha</h1>
      <table style={{ border: '1px solid black', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {sheetData[0]?.map((header, index) => (
              <th key={index} style={{ padding: '8px', textAlign: 'left', border: '1px solid #ddd' }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sheetData.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={{ padding: '8px', textAlign: 'left', border: '1px solid #ddd' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SheetPage;
