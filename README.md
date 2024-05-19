# Wordle Words

An attempt to find the best words to start with when playing Wordle.

## Criteria

Find a word or words that are most likely to help the player win the game.

- The word(s) must contain all of the pre-defined 'good' letters
- The words must not contain any of the pre-defined 'bad' letters
- The word(s) must not contain any letter more than once

## Running locally

```bash
npm install
npm start
```

## Results

<details>
  <summary>Spoiler warning</summary>
  
```
[
  [ 'ourie', 'packs' ],
  [ 'remou', 'sabin' ],
  [ 'roues', 'tabid' ],
  [ 'roues', 'tachi' ],
  [ 'rouet', 'sabin' ],
  [ 'roule', 'sabin' ],
  [ 'rudie', 'sabot' ],
  [ 'ruice', 'sabot' ],
  [ 'ruote', 'sabin' ],
  [ 'sieur', 'tacho' ],
  [ 'pause', 'robin' ],
  [ 'raise', 'ghoul' ],
  [ 'raise', 'bound' ],
  [ 'raise', 'gumbo' ],
  [ 'suite', 'broad' ],
  [ 'ratio', 'bused' ]
]
```

Execution time: ~80ms

</details>

## License

'Wordle Words' is [copyrighted](./LICENSE.md) and is not available for re-distribution or re-use.

Copyright © Toby Smith.
