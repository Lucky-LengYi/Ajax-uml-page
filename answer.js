var fixtures = require('./fixtures');

function Answer(name, value) {
    this.name = name;
    this.value = value;
    this.score = get_score(name, value);
}

function exist(item, collection) {
    var result = false;
    collection.forEach(function(element) {
        if (item === element) {
            result = true;
        }
    });
    return result;
}

find_question_by_name = function(name) {
    var all_question = fixtures.load_all_question();
    var result;
    all_question.forEach(function(item, i) {
        if (item.name === name) {
            result = item;
        }
    });
    return result;
};

get_score = function(name, value) {
    var score = 0;
    var question = find_question_by_name(name);
    if (question === undefined) {
        return score;
    }
    if (Array.isArray(value)) {
        question.answer.forEach(function(element) {
            if (exist(element,value)) {
                score += question.score;
            }
        });
    }else {
        if (exist(value,question.answer)) {
            score += question.score;
        }
    }

    return score;
};

module.exports = Answer;
