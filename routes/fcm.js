var express = require('express');
var router = express.Router();
var FCM = require('fcm-node');

const serverKey = 'AAAA2jwNwxY:APA91bEWzZKetD_Y7z9o25InMgcLSntUfB7gv55qw7m0dBwStCDH1QO93sLtom1I5d1tprt66QwwJQIetVgc4I53qykDiPW0vXTQRyO1t9zPjbmcpGVCjmhBt_BnM1Rjaje56RLyVzLI';
const client_token = 'eXTumsbb-lM:APA91bE2xslItKJ2kU8i2bOUN8A8oCKckxFfvS6xGEa_U8stmvCKfTg1HvDcoFa3vtNz1jFBzwVI00_uqZ4Db6XqhsFRevn2fJDM1F_SeF77M21l4grWQWuHobCKcyRNEYSKa13Jc1JN';

/* GET users listing. */
router.get('/send', function(req, res, next) {
  pushMessage();
});

var push_data = {
  // 수신대상
  to: client_token,
  // App이 실행중이지 않을 때 상태바 알림으로 등록할 내용
  notification: {
    title: 'Hello Node',
    body: 'Node로 발송하는 Push 메시지 입니다.',
    sound: 'default',
    click_action: 'FCM_PLUGIN_ACTIVITY',
    icon: ''
  },
  // 메시지 중요도
  priority: 'high',
  // App 패키지 이름
  restricted_package_name: 'com.inbm32.NotiExem',
  // App에게 전달할 데이터
  data: {
    num1: 2000,
    num2: 3000
  }
};

function pushMessage() {
  var fcm = new FCM(serverKey);
  fcm.send(push_data, function(err, res) {
    if (err) {
      console.error('-----' + err);
    }

    console.log(res);
  });
}

module.exports = router;
