// 定义一个动物类
function Animal(name) {
    // 公有属性
    this.name = name ;
    // 公有方法
    this.sleep = function () {
        console.log(this.name + '正在睡觉')
    }
}
// 原型方法
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃' + food);
};
// 111111111111111111111111111111111111111111111111111111111111111111111111111111111111
// 1、原型链继承
// 核心：将父类的实例作为子类的原型
// function Cat() {
//
// }
// Cat.prototype = new Animal();
// Cat.prototype.name = 'cat';
// 测试代码
// var cat = new Cat();
// console.log(cat.name);//cat
// cat.eat('fish');
// cat.sleep();
// console.log(cat instanceof Animal); //true
// console.log(cat instanceof Cat); //true
// 缺点
// 可以在Cat构造函数中，为Cat实例增加实例属性。如果要新增原型属性和方法，则必须放在new Animal()这样的语句之后执行。
// 无法实现多继承
// 来自原型对象的引用属性是所有实例共享的（详细请看附录代码： 示例1）
// 创建子类实例时，无法向父类构造函数传参
// 111111111111111111111111111111111111111111111111111111111111111111111111111111111111

// 222222222222222222222222222222222222222222222222222222222222222222222222222222222222
// 2、构造继承
//核心： 使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）
// function Cat(name) {
//     Animal.call(this);
//     this.name = name || 'Tom';
// }
// 测试代码
// var cat = new Cat();
// console.log(cat.name);
// cat.sleep();
// console.log(cat instanceof Animal); // false
// console.log(cat instanceof Cat); // true
// 缺点
// 实例并不是父类的实例，只是子类的实例
// 只能继承父类的实例属性和方法，不能继承原型属性/方法
// 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
// 222222222222222222222222222222222222222222222222222222222222222222222222222222222222

// 555555555555555555555555555555555555555555555555555555555555555555555555555555555555
// 5、组合继承
// 核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
// function Cat(name) {
//     Animal.call(this);
//     this.name = name || 'Tom';
// }
// Cat.prototype = new Animal();
// Cat.prototype.constructor = Cat;
// Test Code
// var cat = new Cat();
// console.log(cat.name);
// cat.sleep();
// console.log(cat instanceof Animal); // true
// console.log(cat instanceof Cat); // true
// 555555555555555555555555555555555555555555555555555555555555555555555555555555555555
