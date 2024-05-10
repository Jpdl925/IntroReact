import { useState } from "react";

const Footer = () => {

    const [text, setText] = useState("Hello World");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        console.log(e.target.value);
    }

    const handleClick = () => {
        setText("Hello World");
    }

    return (
        <>
        <footer>
            <input type="text" value={text} onChange={handleChange} />
            <p>
                CodeStak @2024 You typed: {text}
            </p>
            <button onClick={handleClick}>Reset</button>
        </footer>
        </>
    )
}

export default Footer;