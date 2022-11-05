const Hapi = require('@hapi/hapi');

const init = async () => {
  const Server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  await Server.start();
  console.log(`Server running on url ${Server.info.uri}`);
};

init();
