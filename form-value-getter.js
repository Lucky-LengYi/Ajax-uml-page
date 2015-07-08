var Answer = require('./answer');

function FormValueGetter(form) {
    this.form_value = get_value(form);
}

get_value = function(form) {
    var box = [];
    for (var key in form) {
        if (key.indexOf("question") != -1) {
            box.push({name:key,value:form[key]});
        }
    }

    var form_value = [];
    box.forEach(function (item) {
        var answer = new Answer(item.name, item.value);
        form_value.push(answer);
    });

    return form_value;
};

module.exports = FormValueGetter;
