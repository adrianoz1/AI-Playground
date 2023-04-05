import AWS from 'aws-sdk'
import fs from 'fs'

import { randomUUID } from 'node:crypto'

const Polly = new AWS.Polly({
  signatureVersion: 'v4',
  region: 'us-east-1'
});

let params = {
  'Text': 'I love you',
  'OutputFormat': 'mp3',
  'VoiceId': 'Stephen',
  'Engine': 'neural'
};

//save S3
function saveS3(AudioStream) {
  try {
    const s3 = new AWS.S3();

    const uuid = randomUUID()
    const s3Params = {
      Bucket: 'james-voices',
      Key: `${uuid}.mp3`,
      Body: AudioStream,
      ContentType: 'audio/mpeg',
      ACL: 'public-read'
    }

    s3.upload(s3Params).promise().then((data) => {
      console.log(data)
    });

  } catch (e) {
    console.log({ error: e.message })
  }
}

//write Audio stream to file relative to this program
function saveLocal(AudioStream) {
  fs.writeFile("./speech.mp3", AudioStream, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log("The file was saved!")
  });
}

Polly.synthesizeSpeech(params, (err, data) => {
  if (err) {
    console.log(err)
  } else if (data) {
    if (data.AudioStream instanceof Buffer) {
      saveS3(data.AudioStream);
      saveLocal(data.AudioStream);
    }
  }
});
