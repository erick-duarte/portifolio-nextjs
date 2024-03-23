export default function Subdivisao(props: any) {

    const divs = 8;
    let divisoes = []
    const startIndex = props.numero === 0 ? 1 : 0

    for (let i = startIndex; i < startIndex + divs; i++) {
        const cordiv = i % 2 === 0 ? "#000" : "#FFF"
        divisoes.push(<div className="w-24 h-24" style={{backgroundColor: cordiv}}> </div>)
    }

    return divisoes
}