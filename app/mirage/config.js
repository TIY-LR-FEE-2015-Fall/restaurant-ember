export default function() {
  this.get('/menuItems');
  this.post('/menuItems');

  this.get('/menuItems/:id');
  this.put('/menuItems/:id');
  this.delete('/menuItems/:id');
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
