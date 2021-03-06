"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  
  var pain =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.pain
      ? req.body.queryResult.parameters.pain
      : "null";
  
  var Paramedics =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.Paramedics
      ? req.body.queryResult.parameters.Paramedics
      : "null";
  
  var CPR =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.CPR
      ? req.body.queryResult.parameters.CPR
      : "null";
  
  var help =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.help
      ? req.body.queryResult.parameters.help
      : "null";
  
  var info =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.info
      ? req.body.queryResult.parameters.info
      : "null";

  var speech =
  req.body.queryResult &&
  req.body.queryResult.parameters &&
  req.body.queryResult.parameters.info
    ? req.body.queryResult.parameters.info
    : "error";
  
  var speechResponse = {
    google: {
      expectUserResponse: true,
      richResponse: {
        items: [
          {
            simpleResponse: {
              textToSpeech: speech
            }
          }
        ]
      }
    }
  };;


  if (info == "알려줘") {
    if (CPR == "심폐소생술") {
      speech = "환자의 가슴 중앙에 깍지낀 손으로 몸과 수직이 되도록 압박합니다. 압박은 성인기준 5cm 이상 1분에 100회 이상의 속도로 압박해줍니다."
      speechResponse = {
        "google": {
          "expectUserResponse": true,
          "richResponse": {
            "items": [
              {
                "simpleResponse": {
                  "textToSpeech": "환자의 가슴 중앙에 깍지낀 두손으로 몸과 수직이 되도록 압박합니다. 압박은 성인기준 5cm 이상 1분에 100 ~ 120회 이상의 속도로 압박합니다."
                }
              },
              {
                "basicCard": {
                    "title": "심폐소생술 하는 방법",
                    "formattedText": "환자의 가슴 중앙에 깍지낀 두손으로 몸과 수직이 되도록 압박합니다. 압박은 성인기준 5cm 이상 1분에 100 ~ 120회 이상의 속도로 압박합니다.",
                    "image": {
                        "url": "https://post-phinf.pstatic.net/MjAxODAyMjNfMjQ2/MDAxNTE5MzU4NzA3NDgy.xPYTDve9z1-1qTo84BVS_IwTL2rWWPY07kv9pmNtmLQg.cF7yMB-r2pK3WIFZd_BthbHJ6gekh8fzZDz_6CkgqUog.JPEG/%EC%8B%AC%ED%8F%90%EC%86%8C%EC%83%9D%EC%88%A0-%EB%A9%94%EC%9D%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg?type=w1200",
                        "accessibilityText": "심폐소생술관련 사진"
                    },
                    "buttons": [
                        {
                            "title": "자세히 알아보기",
                            "openUrlAction": {
                                "url": "https://www.e-gen.or.kr/egen/first_aid_basics.do"
                            }
                        }
                    ],
                  "imageDisplayOptions": "WHITE"
                }
              }
            ]
          }
        }
      };
    }
    else if (CPR == "화상") {
      speech = "화상 부위를 찬물에 20분 이상 담가 열기를 식혀줍니다. 물집은 절대 터뜨리지 말고 시계, 반지, 목걸이 등의 장신구는 피부가 부어오르기 전에 최대한 빨리 제거합니다."
      speechResponse = {
        "google": {
          "expectUserResponse": true,
          "richResponse": {
            "items": [
              {
                "simpleResponse": {
                  "textToSpeech": "화상 부위를 찬물에 20분 이상 담가 열기를 식혀줍니다. 물집은 절대 터뜨리지 말고 시계, 반지, 목걸이 등의 장신구는 피부가 부어오르기 전에 최대한 빨리 제거합니다."
                }
              },
              {
                "basicCard": {
                    "title": "심폐소생술 하는 방법",
                    "formattedText": "화상 부위를 찬물에 20분 이상 담가 열기를 식혀준다. 물집은 절대 터뜨리지 말고 시계, 반지, 목걸이 등의 장신구는 피부가 부어오르기 전에 최대한 빨리 제거한다. 그리고, 화상 부위에 바세린이나 화상 거즈(깨끗한 거즈)로 덮어주고 붕대로 감아준다.",
                    "image": {
                        "url": "https://www.e-gen.or.kr/images/egen/heat_iced_damage_3_4.gif",
                        "accessibilityText": "화상 응급 처치 관련 사진"
                    },
                    "buttons": [
                        {
                            "title": "자세히 알아보기",
                            "openUrlAction": {
                                "url": "https://www.e-gen.or.kr/egen/heat_iced_damage.do?contentsno=37"
                            }
                        }
                    ],
                  "imageDisplayOptions": "WHITE"
                }
              }
            ]
          }
        }
      };
    }
  }
  else if (help == "도와줘") {
    if (CPR == "심폐소생술") {
      speechResponse = {
        "google": {
          "expectUserResponse": true,
          "richResponse": {
            "items": [
              {
                "simpleResponse": {
                  "textToSpeech": '<speak><audio src="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"></audio></speak>'
                }
              },
              {
                "basicCard": {
                    "title": "심폐소생술 하는 방법",
                    "formattedText": "화상 부위를 찬물에 20분 이상 담가 열기를 식혀준다. 물집은 절대 터뜨리지 말고 시계, 반지, 목걸이 등의 장신구는 피부가 부어오르기 전에 최대한 빨리 제거한다. 그리고, 화상 부위에 바세린이나 화상 거즈(깨끗한 거즈)로 덮어주고 붕대로 감아준다.",
                    "image": {
                        "url": "https://www.e-gen.or.kr/images/egen/heat_iced_damage_3_4.gif",
                        "accessibilityText": "화상 응급 처치 관련 사진"
                    },
                    "buttons": [
                        {
                            "title": "자세히 알아보기",
                            "openUrlAction": {
                                "url": "https://www.e-gen.or.kr/egen/heat_iced_damage.do?contentsno=37"
                            }
                        }
                    ],
                  "imageDisplayOptions": "WHITE"
                }
              }
            ]
          }
        }
      };
    }
  }
  
  
  return res.json({
    payload: speechResponse,
    //data: speechResponse,
    fulfillmentText: speech,
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});

restService.post("/audio", function(req, res) {
  var speech = "";
  switch (req.body.result.parameters.AudioSample.toLowerCase()) {
    //Speech Synthesis Markup Language 
    case "music one":
      speech =
        '<speak><audio src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio></speak>';
      break;
    case "music two":
      speech =
        '<speak><audio clipBegin="1s" clipEnd="3s" src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio></speak>';
      break;
    case "music three":
      speech =
        '<speak><audio repeatCount="2" soundLevel="-15db" src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio></speak>';
      break;
    case "music four":
      speech =
        '<speak><audio speed="200%" src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio></speak>';
      break;
    case "music five":
      speech =
        '<audio src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio>';
      break;
    case "delay":
      speech =
        '<speak>Let me take a break for 3 seconds. <break time="3s"/> I am back again.</speak>';
      break;
    //https://www.w3.org/TR/speech-synthesis/#S3.2.3
    case "cardinal":
      speech = '<speak><say-as interpret-as="cardinal">12345</say-as></speak>';
      break;
    case "ordinal":
      speech =
        '<speak>I stood <say-as interpret-as="ordinal">10</say-as> in the class exams.</speak>';
      break;
    case "characters":
      speech =
        '<speak>Hello is spelled as <say-as interpret-as="characters">Hello</say-as></speak>';
      break;
    case "fraction":
      speech =
        '<speak>Rather than saying 24+3/4, I should say <say-as interpret-as="fraction">24+3/4</say-as></speak>';
      break;
    case "bleep":
      speech =
        '<speak>I do not want to say <say-as interpret-as="bleep">F&%$#</say-as> word</speak>';
      break;
    case "unit":
      speech =
        '<speak>This road is <say-as interpret-as="unit">50 foot</say-as> wide</speak>';
      break;
    case "verbatim":
      speech =
        '<speak>You spell HELLO as <say-as interpret-as="verbatim">hello</say-as></speak>';
      break;
    case "date one":
      speech =
        '<speak>Today is <say-as interpret-as="date" format="yyyymmdd" detail="1">2017-12-16</say-as></speak>';
      break;
    case "date two":
      speech =
        '<speak>Today is <say-as interpret-as="date" format="dm" detail="1">16-12</say-as></speak>';
      break;
    case "date three":
      speech =
        '<speak>Today is <say-as interpret-as="date" format="dmy" detail="1">16-12-2017</say-as></speak>';
      break;
    case "time":
      speech =
        '<speak>It is <say-as interpret-as="time" format="hms12">2:30pm</say-as> now</speak>';
      break;
    case "telephone one":
      speech =
        '<speak><say-as interpret-as="telephone" format="91">09012345678</say-as> </speak>';
      break;
    case "telephone two":
      speech =
        '<speak><say-as interpret-as="telephone" format="1">(781) 771-7777</say-as> </speak>';
      break;
    // https://www.w3.org/TR/2005/NOTE-ssml-sayas-20050526/#S3.3
    case "alternate":
      speech =
        '<speak>IPL stands for <sub alias="indian premier league">IPL</sub></speak>';
      break;
  }
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});

restService.post("/video", function(req, res) {
  return res.json({
    speech:
      '<speak>  <audio src="https://www.youtube.com/watch?v=VX7SSnvpj-8">did not get your MP3 audio file</audio></speak>',
    displayText:
      '<speak>  <audio src="https://www.youtube.com/watch?v=VX7SSnvpj-8">did not get your MP3 audio file</audio></speak>',
    source: "webhook-echo-sample"
  });
});

restService.post("/slack-test", function(req, res) {
  var slack_message = {
    text: "Details of JIRA board for Browse and Commerce",
    attachments: [
      {
        title: "JIRA Board",
        title_link: "http://www.google.com",
        color: "#36a64f",

        fields: [
          {
            title: "Epic Count",
            value: "50",
            short: "false"
          },
          {
            title: "Story Count",
            value: "40",
            short: "false"
          }
        ],

        thumb_url:
          "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
      },
      {
        title: "Story status count",
        title_link: "http://www.google.com",
        color: "#f49e42",

        fields: [
          {
            title: "Not started",
            value: "50",
            short: "false"
          },
          {
            title: "Development",
            value: "40",
            short: "false"
          },
          {
            title: "Development",
            value: "40",
            short: "false"
          },
          {
            title: "Development",
            value: "40",
            short: "false"
          }
        ]
      }
    ]
  };
  return res.json({
    speech: "speech",
    displayText: "speech",
    source: "webhook-echo-sample",
    data: {
      slack: slack_message
    }
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
