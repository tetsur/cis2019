let a1 = 1, b1 = 1, a2 = 1,  b2 = 1;
let D = [1, -1, 2];

let LOOP = 10000;
let ALPHA = 0.01;

// 教師
function t(x){
    return 9*x - 22;
}

//活性化関数
function f(x){
    return x;
}
//fの微分値
function df(x){
    return 1;
}
//重み
function u1(x){
    return a1 * x + b1;
}
function u2(x) {
    return a2 * x + b2;
}
//出力
function y(u){
    return f(u);
}


for(let l = 0; l < LOOP; l++){
    let da1 = 0, db1 = 0, da2 = 0, db2 = 0;
    for(let d of D){
        let uu1 = u1(d);　//重みかける
        let yy1 = y(uu1); //活性化関数かけて出力する
        let uu2 = u2(yy1);
        let yy2 = y(uu2);
        

        let pa2 = (yy2 - t(d)) * df(uu2) * yy1; 
        let pb2 = (yy2 - t(d)) * df(uu2);
        da2 += pa2; //daはLの勾配
        db2 += pb2;

        let pa1 = (yy2 - t(d)) * df(uu2) * a2 * df(uu1) * d;
        let pb1 = (yy2 - t(d)) * df(uu2) * a2 * df(uu1);

        da1 += pa1; //daはLの勾配
        db1 += pb1;
        
    }
    a1 -= ALPHA * da1;
    b1 -= ALPHA * db1;
    a2 -= ALPHA * da2;
    b2 -= ALPHA * db2;
    
}
console.log(a1*a2, a2*b1+b2);

