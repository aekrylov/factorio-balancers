# factorio-balancers

Collection of factorio blueprints for balancers. Each balancer is an instance of `factorio-blueprint` Blueprint class.

Currently supported: 1x1 to 8x8

Balancers source: https://factorioprints.com/view/-KjZ17-ZfirKJBYRQT9X

factorio-blueprint is submoduled until changes are integrated into npm.

## Usage 

```javascript 1.8
const balancers = require('factorio-balancers');
const balancer = balancers[4][4] //returns 4 to 4 balancer
```