import Players from './Players';
import SectionSup from './SectionSup';
function ScoreSheet() {
    return (
        <div>
            <h1 className='text-center m-5'>Yamzee!</h1>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <SectionSup/>
                    </div>
                    <div className="col-2">
                        <Players/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ScoreSheet;