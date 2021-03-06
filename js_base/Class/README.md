# 类
+ ### 类定义
    + ```js
      class Person {}
      const Animal = class {};  
      ```
    + 类声明可以提升 但是类定义不行
+ ### 类构造函数
    + 类构造函数 constructor 创建新的对象会 默认调用构造函数
        + 实例化步骤
            + 内存中新建对象
            + 对象内部的\[\[Prototype\]\](即__proto__)指针赋值为构造函数的prototype的属性
            + this指向当前的对象
            + 执行构造函数内部代码
            + 如果构造函数返回非空对象，则返回该对象。
        + 如构造函数最终返回的不是this对象，而是其他对象，那产生的对象与类无关
        + 类是特殊函数
+ ### 实例 原型 类成员
   + 实例成员 所有成员都不会共享 区分哪些方法需要共享
   + 原型方法与访问器
   + 原型方法： 类块中定义。类似对象
   + getter setter
   + 静态成员 类方法
   + static做为前缀 this指向自己（类 非对象）
   + 非函数原型和类成员
   + ```js
     Person.greeting = "hi";
     ```
   + 迭代器和生成器方法
+ ### 继承
    继承 新语法 但依旧使用的是原型链
    + 继承基础
        + 单继承
        + 不仅可以继承类 还可以继承普通构造函数
        + 关键字 extends
    + 构造函数。HomeObject super()
        + super只能在派生类中使用，只限于类构造函数、实例方法和静态方法内部
            ```js
            class Person{}
            class Stu extends Person {
              constructor() {
                  super();
              }   
            }
            ```
        + 不能在super之前调用this
        + 派生类显示定义构造函数，要么调用super 要么return对象
    + 抽象基类(其派生类实例化，自己不被实例化)
        + 由于js没有相关的抽象类，所以只能用一些条件来阻止实例化。
    + 继承内置对象
    + 类混入 由于js没有多类继承(mixin)
        + 多次继承 较为复杂 并且逻辑性不强
        + 组合胜过继承
