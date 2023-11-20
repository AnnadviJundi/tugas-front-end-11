import styled from "styled-components";


function Footer  ()  {
    return (
        <FooterStyle>
            <div className="container">
            <footer className="footer">
                <h2 className="footer__title">Movie</h2>
                <p className="footer__author">Created by Annadvi Jundi</p>
            </footer>
        </div>
        </FooterStyle>
    );
}

const FooterStyle = styled.div`
        .container {
            background-color: #4361ee;
            color: #fff;
            padding: 1rem;
            text-align: center;
        }

        .footer__title {
            margin-bottom: 1rem;
        }

        .footer__author {
            margin-bottom: 1rem;
        }

        @media (min-width: 768px) {

        }

        @media (min-width: 992px) {
            
        }
`
export default Footer;
