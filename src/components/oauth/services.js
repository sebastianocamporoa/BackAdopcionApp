const services = {};

services.register = (data) => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export default services;
