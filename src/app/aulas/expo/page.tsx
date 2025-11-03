// src/app/conteudos/react-native-expo/page.tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ReactNativeExpoPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 mt-1">

      {/* Título da Página */}
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Aprendendo React Native com Expo</h1>
        <p className="text-slate-600 text-center max-w-3xl">
          O React Native é um framework para desenvolvimento de aplicativos móveis utilizando JavaScript e React. Com a Expo, você pode acelerar o processo de desenvolvimento com ferramentas que tornam o desenvolvimento e a publicação mais fáceis.
        </p>
      </div>

      {/* Seção - Características principais */}
      <section id="caracteristicas" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Características principais do React Native com Expo</h2>
        <p className="text-slate-600 text-center mb-6">
          O React Native com Expo oferece uma série de funcionalidades que tornam o desenvolvimento de apps móveis mais simples e rápido. Aqui estão algumas das principais características:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Desenvolvimento Multiplataforma</h3>
            <p className="text-slate-600">
              Com React Native, você escreve uma base de código única para iOS e Android, reduzindo significativamente o tempo e esforço para criar apps para ambas as plataformas.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Expo SDK</h3>
            <p className="text-slate-600">
              O Expo fornece um conjunto de APIs e ferramentas que facilitam o desenvolvimento de apps. Desde componentes de UI até APIs para câmera, localização e muito mais.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Facilidade de Configuração</h3>
            <p className="text-slate-600">
              Com o Expo, você não precisa se preocupar com a configuração de ferramentas nativas. O Expo cuida disso para você, permitindo um desenvolvimento mais simples e rápido.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Hot Reloading</h3>
            <p className="text-slate-600">
              A funcionalidade de "Hot Reload" permite que você veja as mudanças no seu código em tempo real, sem a necessidade de recompilar o app completamente, acelerando o processo de desenvolvimento.
            </p>
          </div>
        </div>
      </section>

      {/* Seção - Benefícios do React Native com Expo */}
      <section id="beneficios" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Benefícios de usar React Native com Expo</h2>
        <p className="text-slate-600 text-center mb-6">
          O uso do Expo com React Native oferece muitos benefícios que tornam o desenvolvimento mais ágil e simples. Aqui estão alguns dos principais benefícios:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Produtividade Aumentada</h3>
            <p className="text-slate-600">
              O Expo oferece diversas ferramentas prontas para uso, como navegação, controle de estado, câmeras, notificações push, entre outros, o que acelera o desenvolvimento.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Integração com Firebase</h3>
            <p className="text-slate-600">
              Expo tem fácil integração com o Firebase, permitindo que você construa apps com autenticação, banco de dados em tempo real e notificações com facilidade.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Publicação Rápida</h3>
            <p className="text-slate-600">
              O Expo facilita a publicação do seu app para as lojas iOS e Android, sem a necessidade de configurar Xcode ou Android Studio.
            </p>
          </div>
        </div>
      </section>

      {/* Seção - Recursos Avançados do Expo */}
      <section id="recursos-avancados" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Recursos Avançados do Expo</h2>
        <p className="text-slate-600 text-center mb-6">
          Além das funcionalidades básicas, o Expo oferece recursos avançados que podem ser extremamente úteis ao desenvolver um aplicativo mais complexo:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Notificações Push</h3>
            <p className="text-slate-600">
              O Expo fornece uma API de Notificações Push que permite enviar notificações em tempo real para os usuários do seu app, sem complicações.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Câmera e Galeria</h3>
            <p className="text-slate-600">
              O Expo facilita a implementação de câmeras, galerias de fotos e até mesmo a captura de vídeos, tudo isso com uma API simples.
            </p>
          </div>

          <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">QR Code</h3>
            <p className="text-slate-600">
              A biblioteca do Expo permite gerar e ler QR Codes facilmente em seu aplicativo, uma funcionalidade bastante útil para diversos tipos de apps.
            </p>
          </div>
        </div>
      </section>

      {/* Exemplos de Código */}
      <section id="exemplos-codigo" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Exemplos de Código com React Native e Expo</h2>
        <p className="text-slate-600 text-center mb-6">
          Aqui estão alguns exemplos de como implementar funcionalidades comuns em um app React Native usando o Expo:
        </p>

        {/* Exemplo de Navegação */}
        <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Exemplo de Navegação com React Navigation</h3>
          <pre className="bg-gray-100 p-4 rounded-lg">
            <code className="text-sm text-slate-600">
              {`import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
});

export default createAppContainer(AppNavigator);`}
            </code>
          </pre>
        </div>

        {/* Exemplo de Câmera */}
        <div className="rounded-xl border p-6 bg-white shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Exemplo de Câmera</h3>
          <pre className="bg-gray-100 p-4 rounded-lg">
            <code className="text-sm text-slate-600">
              {`import { Camera } from 'expo-camera';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return <Camera style={{ flex: 1 }} />;
}`}
            </code>
          </pre>
        </div>
      </section>

      {/* Links Úteis */}
      <section id="links" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Links Úteis</h2>
        <div className="space-y-4">
          <motion.a
            href="https://reactnative.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink size={20} /> Documentação Oficial do React Native
          </motion.a>
          <motion.a
            href="https://docs.expo.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink size={20} /> Documentação Oficial do Expo
          </motion.a>
          <motion.a
            href="https://github.com/expo/expo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink size={20} /> Repositório Oficial do Expo no GitHub
          </motion.a>
        </div>
      </section>

    </main>
  );
};

export default ReactNativeExpoPage;
