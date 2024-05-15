# Wordle Words

An attempt to find the best words to start with when playing Wordle.

## Criteria

Find a word or words that are most likely to help the player win the game.

- The word(s) must contain all of the vowels
- The word(s) must not contain any letter more than once
- The words must not contain any of the pre-defined 'bad' letters
- The words must contain the all of the pre-defined 'good' letters

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
  [ 'pause', 'robin' ],
  [ 'raise', 'ghoul' ],
  [ 'raise', 'bound' ],
  [ 'suite', 'broad' ]
]
```

Execution time: ~100ms

</details>

## License

'Wordle Words' is [copyrighted](./LICENSE.md) and is not available for re-distribution or re-use.

Copyright © Toby Smith.
