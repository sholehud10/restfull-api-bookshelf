const Hapi = require('@hapi/hapi');

const init = async () => {
  const Server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await Server.start();
  console.log(`Server running on url ${Server.info.uri}`);
};

init();
