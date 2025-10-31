// src/app/api/getSheetData/route.ts
//npm install googleapis google-auth-library

// import axios from 'axios';
// import { NextResponse } from 'next/server';

// export async function GET() {
//   const apiKey = 'AIzaSyDjVj7wVXKFxKNjKQyYImcbsiZYZ8_orYY';
//   const spreadsheetId = '1XJ7ndFsCzgFg3rOrfULGlAjHpcUw_7PCc8SHxt6878g';
//   const range = 'Página1!A1:B2'; // Intervalo correto da planilha

//   const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

//   try {
//     const response = await axios.get(url);
//     return NextResponse.json(response.data); // Envia a resposta com os dados da planilha
//   } catch (error) {
//     console.error('Erro ao acessar o Google Sheets:', error);
//     return NextResponse.json({ error: 'Erro ao acessar a planilha'+url }, { status: 500 });
//   }
// }

import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import * as path from 'path';
import * as fs from 'fs';

// Defina o caminho para o arquivo JSON da sua Service Account
// const SERVICE_ACCOUNT_KEY_PATH = path.join(__dirname, 'path-to-your-service-account-file.json');
// const SERVICE_ACCOUNT_KEY_PATH = 'inner-line-476718-d6-e76a8de3a5bf.json';
const SERVICE_ACCOUNT_KEY_PATH = path.join(__dirname, 'inner-line-476718-d6-e76a8de3a5bf.json');


// Função para autenticar e acessar a planilha
export async function GET() {
  const spreadsheetId = '1XJ7ndFsCzgFg3rOrfULGlAjHpcUw_7PCc8SHxt6878g';
  const range = 'Página1!A1:B2'; // Intervalo da planilha

  try {
    // Crie um cliente de autenticação com a conta de serviço
    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_KEY_PATH,  // Caminho para o seu arquivo JSON
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],  // Scopes para leitura
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Chame a API para obter os dados
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    // Retorne os dados da planilha
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Erro ao acessar o Google Sheets:', error);
    return NextResponse.json({ error: 'Erro ao acessar a planilha' }, { status: 500 });
  }
}
