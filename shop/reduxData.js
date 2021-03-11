let reduData = [
    {id : 0, name : '신발',quantity : 2 }, 
    {id: 1, name : '장화', quantity : 10}, 
    {id : 2, name : '단화', quantity : 4 }
    ]
    
let alert = true;

export { reduData, alert };
//export default로 추출할 땐 함수 명 1가지만 써서 보낼 수 있다.
// 여러 개를 내보낼 땐 export {...}로 보낼 수 있으나 import하는 곳에서도 import {...} from ... 이런 식으로 {}를 붙여야 한다. 