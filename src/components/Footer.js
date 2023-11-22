import im from "../assets/images/image 2.png";
function Footer(){

    return (
    <>
    <div>
    <img src={im} alt="im"></img>
    <div className={"bg-dark p-4 text-white d-flex text-align-center justify-content-center"}>
    All copy rights are reserved by Sukkur IBA University
    </div>
    </div>
    </>
    );
    
    }
    export default Footer;