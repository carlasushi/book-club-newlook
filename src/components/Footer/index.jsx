import React from "react";
import { FooterContainer } from "./styles";

const Footer = () => (
    <FooterContainer>
        <div>
        <h1>FAQs ٩꒰ʘʚʘ๑꒱۶</h1>
        <ul>
            <li>
            When will the next meeting take place? You have about 4 to 5 weeks to
            read the book.
            </li>
            <li>
            {" "}
            Oh no! I have not finished the book, can I still join the hangout?
            YEs
            </li>
            <li>
            I have previously read the book of the month; what should I do?
            If inspired, join the gathering. 
            </li>
            <li>
            How do you choose the books?
            We take turns to make a short selection list. Then we vote for one book (poll).
            </li>
            <li>Can I invite my friends to join? Yes!</li>
            <li>The book is not in Genesis lib? Check the local library.</li>
        </ul>
        </div>
        <div>
        <h1>Members °˖✧◝(⁰▿⁰)◜✧˖°</h1>
        </div>
        <div>
        You can download almost everything from{" "}
        <a target="_blank" rel="noreferrer" href="https://libgen.rs/">
            Genesis Library
        </a>
        . Maybe, use{" "}
        <a href="https://calibre-ebook.com/" rel="noreferrer" target="_blank">
            Calibre
        </a>{" "}
        to transfer books to your e-reader.
        </div>
    </FooterContainer>
);

export default Footer;
