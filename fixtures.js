var Question = require('./question');
function load_all_question() {
    return [
        new Question("question-1", ['统一建模语言'], 1),
        new Question("question-2", ['封装性', '继承性', '多态性'], 1),
        new Question("question-3", ['B'], 2),
        new Question("question-4", ['A'], 2),
        new Question("question-5", ['ABD'], 6),
        new Question("question-6", ['ABC'], 6),
        new Question("question-7", ['false'], 2),
        new Question("question-8", ['true'], 2),
    ];
}

exports.load_all_question = load_all_question;
