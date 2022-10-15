# phonedrawer

<img src="https://img.shields.io/badge/node-%3E%3D%2016.8.0-green" />

<img src="https://img.shields.io/badge/typescript-%5E4.8.4-blue" />

The most minimalistic way to format phone numbers by a string pattern

## Motivation

What if we don't need no input mask and the only goal is to format phone numbers in specific way? There is a extreamely lightweight and simple solution right for that case!

### Usage with example

yarn
`yarn add phonedrawer`

npm
`npm i -s phonedrawer`

Then in your code

```
import { Config, AsceticPhone } from 'phonedrawer'

const config: Config = {
  '+7XXXXXXXXXX': '+7 XXX XXX XX XX',
  '+44XXXXXXXXXX': '+44 XXXX XXXXXX'
}

const asceticPhone = new AsceticPhone(config)

asceticPhone.format('+79998887766') -> '+7 999 888 77 66'
asceticPhone.format('+448888666666') -> '+44 8888 6666666'
asceticPhone.format('+44888866666693469_and_something_longer_than_pattern') -> '+44 8888 6666666' // still
asceticPhone.format('+3369346824') -> '+3369346824' // no pattern -> no formatting
```
