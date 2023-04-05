# Text-to-speech with AWS Polly
This repository contains an integration with Polly AWS, which allows for text-to-speech conversion through voice synthesis, along with code examples and detailed documentation.

Link to Polly AWS documentation: https://docs.aws.amazon.com/polly/latest/dg/what-is.html

```js
//Params with input: I love you
let params = {
  'Text': 'I love you',
  'OutputFormat': 'mp3',
  'VoiceId': 'Stephen',
  'Engine': 'neural'
};
```

```
//execute
node index.js
```

```
//Output
//file: speech.mp3
```
