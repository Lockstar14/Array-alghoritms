var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var persons = [
    { name: "Roman", age: 24 },
    { name: "Anton", age: 0 },
];
persons.push({ name: "Vlad", age: 22 });
//по этому я решил сделать якобы массив в который я добавляюю человека ошибку так как ему не может быть 0 лет
var fakePerson = [];
fakePerson.push(persons[1]);
var smoker = [{ name: "Oleg", check: true }];
var duration = [{ frequence: 5, length: 10 }];
var dossier = __spreadArray(__spreadArray([], smoker, true), duration, true);
for (var _i = 0, dossier_1 = dossier; _i < dossier_1.length; _i++) {
    var item = dossier_1[_i];
    var info = void 0;
    if ("name" in item) {
        // Элемент имеет тип TChecking
        var name_1 = item.name, check = item.check;
        info = "\u0418\u043C\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430: ".concat(name_1, ", \u041A\u0443\u0440\u0438\u0442?: ").concat(check);
    }
    else {
        // Элемент имеет тип TTime
        var frequence = item.frequence, length_1 = item.length;
        info = "\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437 \u0432 \u0434\u0435\u043D\u044C?: ".concat(frequence, ", \u043A\u0430\u043A \u0434\u043E\u043B\u0433\u043E?: ").concat(length_1);
    }
    console.log(info);
}
