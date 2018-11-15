module.exports.requestHooks = [
  context => {
    context.request.setHeader('x-random','hellooooo world');
    context.request.setBodyText("this is the body");
  }
];

module.exports.responseHooks = [
  context => {
    console.log('returned: ' + context.response.getStatusCode());
  }
];

