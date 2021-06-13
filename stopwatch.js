$(function() {
    //スタートボタン
    $("#countUpTimer #startButton").click(function() {
        //0:0:0:0からスタート
        $("#countUpTimer .time").html("0:0:0:0");
        timer = setInterval("countUp()", 100);
        //スタートクリック後、スタートを無効に、ストップリセットを有効に
        $(this).attr("disabled", "disabled");
        $("#countUpTimer #stopButton").removeAttr("disabled");
        $("#countUpTimer #resetButton").removeAttr("disabled");
    });

    //ストップボタン
    $("#countUpTimer #stopButton").click(function() {
        //時間を止める
        clearInterval(timer);

        //ストップクリック後、ストップを無効に、スタートリセットを有効に
        $(this).attr("disabled", "disabled");

        $("#countUpTimer #startButton").removeAttr("disabled");
        $("#countUpTimer #resetButton").removeAttr("disabled");
    });

    //リセットボタン
    $("#countUpTimer #resetButton").click(function() {
        msec = 0;
        sec = 0;
        min = 0;
        hour = 0;

        //0:0:0:0にリセット
        $("#countUpTimer .time").html("0:0:0:0");
        clearInterval(timer);

        //リセットクリック後、リセットとストップを無効に、スタートを有効に
        $(this).attr("disabled", "disabled");

        $("#countUpTimer #startButton").removeAttr("disabled");
        $("#countUpTimer #stopButton").attr("disabled", "disabled");
    });
});

msec = 0;
sec = 0;
min = 0;
hour = 0;

function countUp() {
    msec += 1;
    if (msec > 9) {
        msec = 0;
        sec += 1;
    }
    if (sec > 59) {
        sec = 0;
        min += 1;
    }
    if (min > 59) {
        min = 0;
        hour += 1;
    }

    //ミリ秒はそのまま記載　１桁
    msecNumber = msec;
    secNumber = sec;
    minNumber = min;
    hourNumber = hour;

    //出力
    $("#countUpTimer .time").html(hourNumber + ":" + minNumber + ":" + secNumber + ":" + msecNumber);
}