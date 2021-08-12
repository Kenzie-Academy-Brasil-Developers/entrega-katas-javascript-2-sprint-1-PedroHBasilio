//função de soma
function add(a, b){
    return a + b
}

console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(c, d){
    let mult = 0
    for(let i = 1; i <= d; i++){
        mult = add (mult, c)
    }
    return mult
}

console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(a, b){
    let potencia = 1
    for(let i = 1; i <= b; i++){
        potencia = multiply(potencia, a)
    }
    return potencia
}

console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(a){
    let fact = 1
    for(let i = 1; i <= a; i++){
        fact = multiply(fact, i)
    }
    return fact
}

console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


// crie a função fibonacci

//função subtração
function sub(a, b){
    return a - b
}


//função fibonacci
function fibonacci(n){
    let arr = [0, 1]
    let fibo = 0
    for(let i = 2; i <= n; i++){
        fibo = add(arr[sub(i, 1)], arr[sub(i, 2)])
        arr.push(fibo)
    }
    return arr[n]
}

console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');