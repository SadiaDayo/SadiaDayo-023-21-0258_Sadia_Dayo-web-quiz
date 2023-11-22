import Button from "react-bootstrap/Button";

function Statistics(){

    return (
    <>
    <div className="button">
        <div className="row">
            <div className="col col-lg-4 col-md-4 col-sm-4">
            <Button  variant="secondary">5000 Users</Button>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-4">
            <Button  variant="secondary">10 Trusted Clients</Button>
                </div>
                <div className="col col-lg-4 col-md-4 col-sm-4">
                <Button  variant="secondary">10k+ Downloads</Button>
                </div>
        </div>
    </div>
    </>
    );
    
    }
    export default Statistics;