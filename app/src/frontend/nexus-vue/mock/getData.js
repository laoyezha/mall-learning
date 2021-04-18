export default [
    {
      url: '/data',
      method: 'get',
      response: ({ query }) => {
        console.log('id>>>>>>>>', query.dataId);
        return {
          code: 0,
          message: 'ok',
          data: {
            dataId: query.dataId,
            roleValue: 'admin',
          },
        };
      },
    },
  ];