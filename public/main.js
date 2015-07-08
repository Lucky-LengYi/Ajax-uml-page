$("#submit").on('click',function (evt) {
    window.scroll(0,0);
    if (check_up_data()) {
        return;
    }
    $.ajax({
        url: "/get-score",
        type: "POST",
        data: $("form").serialize(),
        success: function(score){
            $("#score").prop("value",score);
        },
        error: function() {
            alert('process error');
        }
    });
});

function check_up_data() {
    var show_info = '* 请检查：';
    var judge = false;
    if ($(":input[name=class_id]").prop("value") === '') {
        judge = true;
        show_info += ' 班级 ';
    }
    if ($(":input[name=stu_id]").prop("value") === '') {
        judge = true;
        show_info += ' 学号 ';
    }
    if ($(":input[name=stu_name]").prop("value") === '') {
        judge = true;
        show_info += ' 姓名 ';
    }
    if (judge) {
        show_info += "的填写！";
        $("#info").prop("value",show_info);
    }else {
        $("#info").prop("value",'');
    }
    return judge;
}

$("#choose_question").on('click',function (evt) {
    if (evt.target.name === undefined) {
        return;
    }
    var str = "";
    $(":input").each(function () {
        if (this.name === evt.target.name) {
            str += this.checked ? this.value : '';
        }
    });
    $("#ques" + evt.target.name).prop('value',str);
});
