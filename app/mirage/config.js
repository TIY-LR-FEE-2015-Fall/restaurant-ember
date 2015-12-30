export default function() {
  this.get('/menuItems');
  this.post('/menuItems');

  this.get('/menuItems/:id');
  this.put('/menuItems/:id');
  this.delete('/menuItems/:id');

  this.get('/orders');
  this.post('/orders');

  this.get('/orders/:id');
  this.put('/orders/:id');
  this.delete('/orders/:id');

  this.get('/orderItems');
  this.post('/orderItems');

  this.get('/orderItems/:id');
  this.put('/orderItems/:id');
  this.delete('/orderItems/:id');
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
