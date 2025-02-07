import headerImg from '../assets/investment-calculator-logo.png'
export default function Header(){
    return(
        <header id='header'>
            <img src={headerImg} alt="investment app image" id='' />
            <h1>Investment calculator</h1>
        </header>
    )
}