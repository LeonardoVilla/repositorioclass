// src/app/api/getSheetData/route.ts

import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = 'AIzaSyDjVj7wVXKFxKNjKQyYImcbsiZYZ8_orYY';
  const spreadsheetId = '1XJ7ndFsCzgFg3rOrfULGlAjHpcUw_7PCc8SHxt6878g';
  const range = 'Página1!A1:B2'; // Intervalo correto da planilha

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return NextResponse.json(response.data); // Envia a resposta com os dados da planilha
  } catch (error) {
    console.error('Erro ao acessar o Google Sheets:', error);
    return NextResponse.json({ error: 'Erro ao acessar a planilha'+url }, { status: 500 });
  }
}
