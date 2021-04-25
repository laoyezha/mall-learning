import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';
// import mockjs from 'mockjs';

const nodeEnv = process.env.NODE_ENV;
if (nodeEnv === 'development') {
  console.log(nodeEnv);
}
// console.log('bbb', import.meta)

// // https://vitejs.dev/config/
// export default defineConfig({
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src')
//     }
//   },
//   plugins: [
//     vue(),
//     viteMockServe({ supportTs: false })
//   ]
// })

export default ({ command }) => {
  let prodMock = true;
  console.log(command);
  return {
    base: process.env.NODE_ENV === 'development' ? '/' : '/static/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      vue(),
      viteMockServe({
        // close support .ts file
        supportTs: false,
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
        // prodEnabled: command !== 'serve' && prodMock,
        // injectCode: `
        //   import { setupProdMockServer } from './mockProdServer';
        //   setupProdMockServer();
        // `,
      }),
    ],
  };
};
