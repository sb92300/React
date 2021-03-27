function Hello({color, name, isSpecial}) { 
    // props로 받는 값을 중괄호를 이용해 감싸주면 porps.name 이라고 쓸 필요 없이 편하게 사용 가능.
    return(
        <div style={{color}}>
            { isSpecial && <b>*</b> }
            안녕하세요. {name} 님
        </div>
    )
}

Hello.defaultProps = {
    name : '이름을 모르게쒀'
}
export default Hello;